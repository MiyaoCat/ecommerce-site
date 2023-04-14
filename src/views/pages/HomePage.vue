<script setup>
import { reactive, ref } from "vue";
import { useFirestore, useCollection } from 'vuefire';
import { collection, query, orderBy, doc, addDoc, deleteDoc, setDoc } from 'firebase/firestore';

const db = useFirestore();

const shoesData = collection(db, 'shoes');
const sorted = query(shoesData, orderBy('name'));

const shoes = useCollection(sorted);

// const shoes = useCollection( query( collection(db, 'shoes'), orderBy('name') ) );

const form = reactive({
	name: "",
});

const editing = ref(false);

function addShoe() {
	addDoc( collection(db, 'shoes'), {
		name: form.name,
	});
	form.name = ""; // clear form
}

async function removeShoe(docId) {
	const record = doc(db, 'shoes', docId);
	
	if (confirm("Are you shore?")) {
		await deleteDoc(record);
	}
}

function editShoes(id) {
	editing.value = id;
}

function updateShoe(id, r) {
   setDoc(doc(db, 'shoes', id), {
   	name: r,
   });
   clearEdit();	
}

function clearEdit() {
	editing.value = false;	
}
</script>

<template>
	<h1>Home Town Road </h1>

	<ul>
		<li v-for="shoe in shoes" :key="shoe.id">
			{{shoe.name}} <button @click="removeShoe(shoe.id)" type="button">x</button>

			<button @click="editShoes(shoe.id)" v-if="editing != shoe.id">Edit</button>

			<template v-if="editing == shoe.id">
				<input type="text" v-model="shoe.name"/>
				<button @click="updateShoe(shoe.id, shoe.name)">Update</button>

				<button @click="clearEdit()">Cancel</button>
			</template>
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























