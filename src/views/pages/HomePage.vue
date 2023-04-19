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
	name: '',
	price: '',
});

const editing = ref(false);

function addShoe() {
	addDoc( collection(db, 'shoes'), {
		name: form.name,
		price: form.price,
		size: form.size,
	});
	form.name = ""; // clear form
	form.price = '';
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
	<h1 class='loud-voice'>Add Shoe</h1>

	<ul>
		<li v-for="shoe in shoes" :key="shoe.id">
			<p class="normal-voice">{{shoe.name}}</p>
			<p class="normal-voice">Price: ${{shoe.price}}</p>
			<p class="normal-voice">Size: {{shoe.size}}</p>
			<button @click="removeShoe(shoe.id)" type="button">x</button>

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

		<label for="shoe-price">Price</label>
		<input id="shoe-price" type="text" v-model="form.price" />

		<label for="shoe-size">Size</label>
		<select name="shoe-size" id="shoe-size">
			<option value="7">7</option>
			<option value="7.5">7.5</option>
			<option value="8">8</option>
			<option value="8.5">8.5</option>
			<option value="9">9</option>
			<option value="9.5">9.5</option>
			<option value="10">10</option>
		</select>

		<button type="submit">Add</button>
	</form>
</template>

<style>
	form {
		display: grid;
		grid-gap: 6px;
	}
</style>























