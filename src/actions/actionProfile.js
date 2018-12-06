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

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

export const updateProfile = (profile) => {
	return {
		type: 'LOAD_PROFILE',
		profile: {
			username:profile.username, 
			displayName:profile.displayName, 
			location:profile.location, 
			website:profile.website, 
			bio:profile.bio, 
			datejoin:profile.datejoin,
			dob: profile.dob?typeof profile.dob !== 'string'? formatDate(profile.dob) : profile.dob : '',
		}
	}
}

export const loadOwner = () => {
	return {
		type: 'LOAD_OWNER',
		owner:
			{
				urlAvatar: "https://tophinhanhdep.com/wp-content/uploads/2017/07/avatar-de-thuong-ve-tinh-yeu-kute-300x300.jpg",
				urlCover: "http://www.likecovers.com/covers/original/don-t-count-the-days.jpg?i",
				displayName: "Trần Thành Trung",
				username: "Luffy_123",
				bio: "Death is like the wind, away by my side",
				post: "1K",
				following: "2M",
				followers: 2000,
				like: 1000,
				dateJoin: 'December 2015',
				dob: 'January 9, 1997',
				location: '',
				website: '',
				photo:
				[
					"https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
					"https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
					"https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
					"https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
				]
			}
	}	
}