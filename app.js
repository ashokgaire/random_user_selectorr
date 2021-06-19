const app = Vue.createApp({
	data() {
		return {
		firstname: "Ashok",
		lastname: "Gaire",
		email: "ashokgaire1@gmail.com",
		gender: "male",
		pic: 'https://randomuser.me/api/portraits/men/10.jpg'


	}},
	methods:
	{
		async getUser() {
			const res = await fetch('https://randomuser.me/api')

			const {results} = await res.json()
			this.firstname = results[0].name.first
			this.lastname = results[0].name.last
			this.email = results[0].email
			this.gender = results[0].gender
			this.pic = results[0].picture.large
		
		}
	}
})

app.mount("#app")