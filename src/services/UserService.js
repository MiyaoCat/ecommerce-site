import { defineStore } from 'pinia';
import { reactive, ref } from "vue";
import { 
	getAuth, 
	createUserWithEmailAndPassword, 
	signOut as  fbSignOut, 
	signInWithEmailAndPassword, 
	// TwitterAuthProvider,
	// signInWithPopup,
} from 'firebase/auth';

import { useCurrentUser } from 'vuefire';



export const useUserService = defineStore('user', function() {
	const auth = getAuth();

	// const provider = new TwitterAuthProvider();

	const current = useCurrentUser();
	
	const form = reactive({
		username: '',
		password: '',
	});

	function clearForm() {
		form.username = '';
		form.password = '';
	}

	console.log('current', current.email);

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
		   	console.log(user);
		   	clearForm();
			})
			.catch((error) => {
		  		console.log(error.code, error.message);
			});
	}

	function signIn(email, password) {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log('user.signIn');
				clearForm();
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

	// function twitterLogin() {
	// 	signInWithPopup(auth, provider)
	// 	  	.then((result) => {
	// 	    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
	// 	    // You can use these server side with your app's credentials to access the Twitter API.
	// 	    const credential = TwitterAuthProvider.credentialFromResult(result);
	// 	    const token = credential.accessToken;
	// 	    const secret = credential.secret;

	// 	    // The signed-in user info.
	// 	    const user = result.user;
	// 	    // IdP data available using getAdditionalUserInfo(result)
	// 	    // ...
	// 	  }).catch((error) => {
	// 	    // Handle Errors here.
	// 	    const errorCode = error.code;
	// 	    const errorMessage = error.message;
	// 	    // The email of the user's account used.
	// 	    const email = error.customData.email;
	// 	    // The AuthCredential type that was used.
	// 	    const credential = TwitterAuthProvider.credentialFromError(error);
	// 	    // ...
	// 	});		
	// }


	return {
		signUp,
		signIn,
		signOut,
		current,
		form,
		// signInWithPopup,
	};
});
