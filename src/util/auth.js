import { getToken, setCredentials, registerToken } from '../util/github.js'

export const auth = async () => {
	let token = getToken()
	if (!token) {
		await setCredentials()
		token = await registerToken()
	}
}
