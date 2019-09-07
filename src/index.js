import * as program from 'commander'
import { version } from '../package.json'
import path from 'path'
import clear from 'clear'
import chalk from 'chalk'
import figlet from 'figlet'
import { pwd, fileExists } from './util/files'
import { getToken, setCredentials, registerToken } from './util/github.js'

clear()
console.log(
	chalk.cyan(
		figlet.textSync('Furnish', {
			horizontalLayout: 'full'
		})
	)
)

const auth = async () => {
	let token = getToken()
	if (!token) {
		await setCredentials()
		token = await registerToken()
	}
}

program.version(version)

program
	.command('save [env]')
	.description('Save all relevant files in this dir to your config repo')
	.option('-f <file>', '--file <file>', 'Save a specific file to your config repo')
	.action((env, options) => {
		auth().then(() => {
			console.log('Uploading your furnishings...')
			env = env || pwd
			const file = options.file ? path.resolve(env, options.file) : path.resolve(env)
			if (fileExists(file)) {
				// upload file
			} else {
				console.error('File does not exist')
			}
		})
	})

program
	.command('showroom [collection]')
	.description('Download you conf from our catalogue')
	.option('-f <file>', '--file <file>', 'Save just one file from the collection')
	.action((env, options) => {})

program
	.command('* [env]')
	.description('Download your config in this dir')
	.action(env => {
		auth().then(() => {
			console.log('Furnishing your dir...')
			env = env || './'
			const file = options.file ? path.resolve(env, options.file) : path.resolve(env)
		})
	})

program.parse(process.argv)
