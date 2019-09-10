import inquirer from 'inquirer'
import git from 'simple-git'
import fs from 'fs'
import {} from 'lodash'
import { octokit as github } from './github'

const askRepoDetails = () => {
	const questions = [
		{
			name: 'name',
			type: 'input',
			message: 'Enter a name for your repo where your dotfiles will be stored ',
			default: '.attic',
			validate: value => {
				return value.length ? true : 'Please enter a name for the storage repo'
			}
		},
		{
			name: 'visibility',
			type: 'list',
			message: 'Should the repo be private?',
			choices: ['public', 'private'],
			default: 'public'
		}
	]
	return inquirer.prompt(questions)
}

export const createRepo = async () => {
	const { name, description, visibility } = await askRepoDetails()
	const data = {
		name,
		description,
		private: visibility === 'private'
	}
	console.log('Creating remote repository...')
	try {
		const response = await github.repos.create(data)
		return response.data.ssh_url
	} catch (error) {
		throw error
	} finally {
		console.log(`${name} created`)
	}
}
