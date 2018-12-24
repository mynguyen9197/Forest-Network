import axios from 'axios'

export const loadPost = () => {
	return {
		type: 'LOAD_POSTS',
		posts: [
			{ 
				id: 1,
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDPuGVRffI_epg_UeyVwlcXFPP-tHECEZbVvKXeEG4OAlmEmI",
				name: "NaNa",
				statusPost: "publicly",
				timePost: 20,
				content: "Tôi đói quá ^^ huhuhu:((",
				urlPhoto: "https://image2.tin247.com/pictures/2014/05/01/hbc1398918340.png",
				react: 100,
				comment: 100,
				share: 100,
			},
			{ 
				id: 2,
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDPuGVRffI_epg_UeyVwlcXFPP-tHECEZbVvKXeEG4OAlmEmI",
				name: "NaNa",
				statusPost: "publicly",
				timePost: 20,
				content: "Cà rem thật tuyệt ^^ hí hí hí:))",
				urlPhoto: "https://vmode.vn/uploads/2014/06/be-yeu.jpg",
				react: 100,
				comment: 100,
				share: 100,
			},
			{
				id: 3,
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
				id: 4,
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
			{ 
				id: 5,
				urlAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDPuGVRffI_epg_UeyVwlcXFPP-tHECEZbVvKXeEG4OAlmEmI",
				name: "NaNa",
				statusPost: "publicly",
				timePost: 20,
				content: "Cà rem thật tuyệt ^^ hí hí hí:))",
				urlPhoto: "https://vmode.vn/uploads/2014/06/be-yeu.jpg",
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
				urlAvatar: "https://media.giadinhmoi.vn/files/danggiang/2018/04/01/hinh-anh-be-gai-ngo-nghinh-de-thuong-nhat-7-0920.jpg",
				name: "Xuxu",
			},
			{
				urlAvatar: "https://3cshop.vn/wp-content/uploads/2016/07/ngay-ngat-voi-nhung-hinh-anh-de-thuong-cua-be-gai-xinh-nhu-thien-than-16.jpg",
				name: "Dâu Tây",
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
		type: 'LOAD_OWNER', owner:[]
	}
}