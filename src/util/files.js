import fs from 'fs'
import os from 'os'
import touch from 'touch'
import parse from 'parse-gitignore'

export const pwd = process.cwd()

export const fileExists = file => {
	try {
		return fs.statSync(file).isFile()
	} catch (err) {
		return false
	}
}

const gitignore = () => {
	if (fileExists('.gitignore')) {
		return parse(fs.readFileSync('.gitignore'))
	} else {
		touch('.gitignore')
		return []
	}
}

export const constructionRepoPath = () => `${os.homedir()}/.furnish/construction-site`
