export const loadPost = () => {
	return {
		type: 'LOAD_POSTS',
		posts: [
			{ 
				id: 1,
				urlAvatar: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg",
				name: "Tran Thanh Trung",
				statusPost: "publicly",
				timePost: 10,
				content: "I am the best",
				urlPhoto: "https://i.ytimg.com/vi/eXcWnvxK7Z8/hqdefault.jpg",
				react: 100,
				comment: 200,
				share: 10,
			},
			{
				id: 2,
				urlAvatar: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg",
				name: "Cristinal Ronaldo",
				statusPost: "privately",
				timePost: 20,
				content: "Messi! I am not so good",
				urlPhoto: "../../img/twitter.png",
				react: 200,
				comment: 100,
				share: 10,
			},
			{ 
				id: 3,
				urlAvatar: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg",
				name: "Chi Pu",
				statusPost: "publicly",
				timePost: 20,
				content: "Anh xin lỗi em đi",
				urlPhoto: "https://i.ytimg.com/vi/eXcWnvxK7Z8/hqdefault.jpg",
				react: 100,
				comment: 100,
				share: 100,
			},
		]
	}
}

export const loadRecommand = () => {
	return {
		type: 'LOAD_RECOMMAND',
		recommands: [
			{ 
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4dgEBvMj80Lr0CytLDVkeISTT-Za95gBOH92rhboiD843yjm",
				name: "Chi Pu",
			},
			{
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4dgEBvMj80Lr0CytLDVkeISTT-Za95gBOH92rhboiD843yjm",
				name: "Tăng Thanh Hà",
			},
			{ 
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4dgEBvMj80Lr0CytLDVkeISTT-Za95gBOH92rhboiD843yjm",
				name: "Cậu vàng",
			},
			{
				urlAvatar: "https://pbs.twimg.com/profile_images/973388045717155840/tk88NJtI_bigger.jpg",
				name: "Lão Hạc",
			}
		]
	}
}

export const loadOwner = () => {
	return {
		type: 'LOAD_OWNER',
		owner:
			{
				urlAvatar: "https://tophinhanhdep.com/wp-content/uploads/2017/07/avatar-de-thuong-ve-tinh-yeu-kute-300x300.jpg",
				urlCover: "http://www.likecovers.com/covers/original/don-t-count-the-days.jpg?i",
				name: "Trần Thành Trung",
				email: "@Luffy_123",
				description: "Death is like the wind, away by my side",
				post: "1K",
				following: "2M",
				followers: 2000,
				like: 1000,
				timeJoin: 12,
				born: 12,
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