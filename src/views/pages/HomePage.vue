<script setup>
import { reactive } from "vue";
import { useFirestore, useCollection } from 'vuefire';
import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore';

const db = useFirestore();
const shoes = useCollection(collection(db, 'shoes'));

const form = reactive({
	name: "",
});

function addShoe() {
	addDoc( collection(db, 'shoes'), {
		name: form.name,
	});
	form.name = ""; // clear form
}

async function removeShoe(docId) {
	const record = doc(db, 'shoes', docId);
	await deleteDoc(record);
}

</script>

<template>
	<h1>Home Town Road </h1>

	<ul>
		<li v-for="shoes in shoes" :key="shoes.id">
			{{shoes.name}} <button @click="removeShoe(shoes.id)" type="button">x</button>
		</li>
	</ul>

	<form @submit.prevent="addShoe()">
		<label for="shoe-name">Shoe Name</label>
		<input id="shoe-name" type="text" v-model="form.name" />
		<button type="submit">Add</button>
	</form>
</template>

<style>
	form {
		display: grid;
		grid-gap: 6px;
	}
</style>