<script setup>
import axios from "axios";
import { ref } from "vue";

let user = ref({
	id: "",
	name: "",
})

const fetchData = async () => {
	await axios.get("https://randomuser.me/api/", {
		responseType: 'json'
	}).then((res) => {
		const r = res.data.results[0];
		console.log(r.login.username);

		user.value.id = r.login.username;
		user.value.name = r.name.first + " " + r.name.last;
	})
		.catch((error) =>
			console.log(error)
		);
}
fetchData();



</script>

<template>
	<div>
		<p>{{ user.name }}</p>
		<p>{{ user.id }}</p>
		<p>內文</p>
	</div>
</template>