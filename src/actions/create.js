import git from 'simple-git'
import fs from 'fs'
import { constructionRepoPath } from './files'

export const createLocalRepo = async () => {
	console.log(`Construction site in use`)
	const repoPath = constructionRepoPath()
	const remoteUrl = octokit.remoteUrl
	const exists = await fs.exists(repoPath)
	if (!exists) {
		await fs.mkdir(repoPath, error => console.error(error))
	}
	try {
		await git(repoPath)
			.init()
			.add('./*')
			.commit('Initial commit')
			.addRemote('origin', remoteUrl)
			.push('origin', 'master')
		return true
	} catch (err) {
		console.error(err)
	} finally {
		console.log(`Construction site complete`)
	}
}
