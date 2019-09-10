import fs from 'fs'
import { gitignore } from '../util/files'

export const addToGitignore = file => {
	if (!gitignore().includes(file)) {
		fs.appendFile('.gitignore', file, error => console.error(error))
	}
}
