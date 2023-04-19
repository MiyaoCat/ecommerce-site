<script setup>
	import { useUserService } from '@/services/UserService';
	import { getAuth, updateProfile, TwitterAuthProvider } from "firebase/auth";

	const user = useUserService();

</script>

<template>
	<h1 class="loud-voice">Sign In Page</h1>
	<button type="button" @click="user.signOut()" v-if="user.current">Sign Out</button>

	<div v-if="user.current">
		{{ user.current.email }}
	</div>

	<form @submit.prevent="user.signUp(user.form.username, user.form.password)" v-if="!user.current">
		<h2>Sign Up</h2>
		<div class="form-field">
			<label for="email1">Email</label>
			<input id="email1" type="text" v-model="user.form.username"/>

			<label for="password1">Password</label>
			<input id="password1" type="password" v-model="user.form.password"/>
			<p class="quiet-voice">Min 6 characters</p>
		</div>

		<button type="submit">Sign Up</button>
	</form>

	<form @submit.prevent="user.signIn(user.form.username, user.form.password)" v-if="!user.current">
		<h2>Sign In</h2>
		<div class="form-field">
			<label for="email2">Email</label>
			<input id="email2" type="text" v-model="user.form.username"/>

			<label for="password2">Password</label>
			<input id="password2" type="password" v-model="user.form.password"/>
		</div>

		<button type="submit">Sign In</button>
	</form>

<!-- 	<form @submit.prevent="user.twitterLogin(user.auth, user.provider)" v-if="!user.current">
		<h2>Twitter Login</h2>
		<form action=""></form>
	</form> -->
</template>

<style>
	form {
		border: 2px solid white;
		padding: 10px 15px;
		margin: 10px 0;
	}
</style>