export const loadProfile = () => {
	return {
		type: 'LOAD_PROFILE',
		profile: {
			username: 'Na_Yuvely',
			displayName: 'Nana',
			dob: 'January 9, 1997',
			location: '',
			website: '',
			bio: `Don't follow me!!!`,
			datejoin: 'December 2015'
		}
	}
}

export const updateProfile = (username, displayName, dob, location, website, bio, datejoin) => {
	return {
		type: 'LOAD_PROFILE',
		profile: {
			username, displayName, dob, location, website, bio, datejoin
		}
	}
}