import { defineStore } from 'pinia';

import { 
	getAuth, 
	createUserWithEmailAndPassword, 
	signOut as  fbSignOut, 
	signInWithEmailAndPassword, 
} from 'firebase/auth';

import { useCurrentUser } from 'vuefire';

export const useUserService = defineStore('user', function() {
	const auth = getAuth();

	const current = useCurrentUser();
	
	console.log('current', current.email);

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

	function signIn(email, password) {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log('user.signIn');
			})
			.catch((error) => {
		   	console.log(error.code, error.message);
		  	});
	}

	function signOut() {
		fbSignOut(auth)
			.then(() => {
				
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return {
		signUp,
		signIn,
		signOut,
		current,
	};
});
