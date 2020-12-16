<<<<<<< HEAD
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'


/*
* Given an image return th Url
* Works for local and deployed strapis
* @parms{any} image
*/
export const fromImageToUrl = (image) => {
	if(!image) {
		return "/vercel2.svg"
	}

	if(image.url.indexOf("/") === 0) {
		return `${API_URL}${image.url}`
	}

	return image.url
=======
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'


/*
* Given an image return th Url
* Works for local and deployed strapis
* @parms{any} image
*/
export const fromImageToUrl = (image) => {
	if(!image) {
		return "/vercel.svg"
	}

	if(image.url.indexOf("/") === 0) {
		return `${API_URL}${image.url}`
	}

	return image.url
>>>>>>> 64f826a7b243ceff2fd1e3dba4b20d5313e57234
}