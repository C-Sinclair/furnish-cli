import * as program from 'commander'
import { version } from '../package.json'
import path from 'path'
import clear from 'clear'
import chalk from 'chalk'
import figlet from 'figlet'
import { pwd, fileExists } from './util/files'
import { addFileToFurnish } from './actions/add'
import { auth } from './util/auth'
import { pullFromFurnish } from './actions/pull'

clear()
console.log(
	chalk.cyan(
		figlet.textSync('Furnish', {
			horizontalLayout: 'full'
		})
	)
)

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
			if (!fileExists(file)) {
				console.error('File does not exist')
				return
			}
			addFileToFurnish(file)
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
			pullFromFurnish()
		})
	})

program.parse(process.argv)
