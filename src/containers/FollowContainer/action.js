export const loadFollowers = () => {
	return {
		type: 'LOAD_FOLLOWERS',
		followers: [
			{ 
				profileBio: "điên bẩm sinh!",
				username: "ThuHngNguyn13",
				displayName: "Thu Hương Nguyễn",
				profilePhoto: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
			},
			{
				profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
				username: "ttclandpkd",
				displayName: "Phòng Kinh Doanh TTC Land",
				profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg"
			},
			{ 
				profileBio: "điên bẩm sinh!",
				username: "ThuHngNguyn13",
				displayName: "Thu Hương Nguyễn",
				profilePhoto: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
			},
			{
				profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
				username: "ttclandpkd",
				displayName: "Phòng Kinh Doanh TTC Land",
				profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg"
			}
		]
	}
}

export const loadFollowing = () => ({
	type: 'LOAD_FOLLOWING',
	following: [
		{ 
			profileBio: "Nguyễn Thị Bo!",
			username: "ThuHngNguyn13",
			displayName: "Thu Hương Nguyễn",
			profilePhoto: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
			followed: false
		},
		{
			profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
			username: "ttclandpkd",
			displayName: "Phòng Kinh Doanh TTC Land",
			profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
			followed: true
		},
		{ 
			profileBio: "16/01/1997!",
			username: "ThuHngNguyn13",
			displayName: "Thu Hương Nguyễn",
			profilePhoto: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
			followed: false
		},
		{
			profileBio: "cập nhật tin tức TTC Land chính xác và nhanh nhất!",
			username: "ttclandpkd",
			displayName: "Phòng Kinh Doanh TTC Land",
			profilePhoto: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
			followed: true
		}
	]
})