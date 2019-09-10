import inquirer from 'inquirer'

export const askRepoDetails = () => {
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
