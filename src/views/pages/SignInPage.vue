<script setup>
	import { useUserService } from '@/services/UserService';
	import { useFirebaseAuth, useCurrentUser } from 'vuefire';
	import { reactive, ref } from "vue";

	const user = useUserService();

	const auth = useFirebaseAuth();

	const form = reactive({
		username: '',
		password: '',
	});
</script>

<template>
	<h1>Sign In Page</h1>
	<button type="button" @click="user.signOut()">Sign Out</button>

	{{ user.current }}

	<form @submit.prevent="user.signUp(form.username, form.password)">
		<h2>Sign Up</h2>
		<div class="form-field">
			<label for="email1">Email</label>
			<input id="email1" type="text" v-model="form.username"/>

			<label for="password1">Password</label>
			<input id="password1" type="password" v-model="form.password"/>
			<p class="quiet-voice">Min 6 characters</p>
		</div>

		<button type="submit">Sign Up</button>
	</form>

	<form @submit.prevent="user.signIn(form.username, form.password)">
		<h2>Sign In</h2>
		<div class="form-field">
			<label for="email2">Email</label>
			<input id="email2" type="text" v-model="form.username"/>

			<label for="password2">Password</label>
			<input id="password2" type="password" v-model="form.password"/>
		</div>

		<button type="submit">Sign In</button>
	</form>

</template>

<style scoped>
	form {
		border: 2px solid white;
		padding: 10px 15px;
		margin: 10px 0;
	}
</style>