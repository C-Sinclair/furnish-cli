import inquirer from 'inquirer'

export const askLoginCreds = () => {
	const questions = [
		{
			name: 'username',
			type: 'input',
			message: 'Enter your Github username or email',
			validate: value => {
				return value.length ? true : 'Please enter your username or email'
			}
		},
		{
			name: 'password',
			type: 'password',
			message: 'Enter your password:',
			validate: value => {
				return value.length ? true : 'Please enter your password.'
			}
		}
	]
	return inquirer.prompt(questions)
}
