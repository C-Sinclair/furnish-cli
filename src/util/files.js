import fs from 'fs'

export const pwd = process.cwd()

export const fileExists = file => {
	try {
		return fs.statSync(file).isFile()
	} catch (err) {
		return false
	}
}
