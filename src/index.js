// https://example.com/demo/example2.jpg
// --> https://adrenalinmedia-website.s3.amazonaws.com/demo/example2.jpg

const bucket = 'adrenalinmedia-website'
const hostname = '.s3.amazonaws.com'

export default {
	async fetch(request, env, context) {
		const { method, body } = request
		const url = new URL(request.url)
		url.hostname = bucket + hostname
		return await fetch(url, { method, body })
	},
};