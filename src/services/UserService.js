import { defineStore } from 'pinia';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useUserService = defineStore('user', function() {
	const auth = getAuth();

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
		   	const user = userCredential.user;
		   	console.log(user);
			})
			.catch((error) => {
		  		console.log(error.code, error.message);
			});
	}

	function signIn() {}

	function signOut() {}

	return {
		signUp,
		signIn,
		signOut,
	};
});
