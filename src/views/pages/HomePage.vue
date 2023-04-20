<script setup>
import { reactive, ref } from "vue";
import { useFirestore, useCollection } from 'vuefire';
import { collection, query, orderBy, doc, addDoc, deleteDoc, setDoc } from 'firebase/firestore';
import ShoeCard from '@/components/ShoeCard.vue';

const db = useFirestore();

const shoesData = collection(db, 'shoes');
const sorted = query(shoesData, orderBy('name'));

const shoes = useCollection(sorted);

// const shoes = useCollection( query( collection(db, 'shoes'), orderBy('name') ) );

const form = reactive({
	name: '',
	price: '',
	sizes: [],
});

const editing = ref(false);

const shoeSizes = ref([ 9, 9.5, 10, 10.5 ]);

function addShoe() {
	addDoc( collection(db, 'shoes'), {
		name: form.name,
		price: form.price,
		sizes: form.sizes,
		image: form.image,
	});
	form.name = ""; // clear form
	form.price = '';
	form.image = '';
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
			<ShoeCard :shoe="shoe" />

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
		
		<ul>
			<li v-for="size in shoeSizes">
				<input type="checkbox" :value="size" v-model="form.sizes">
				<label class="normal-voice">{{size}}</label>
			</li>
		</ul>
		<button @click="addShoe()">Submit</button>
		{{form.sizes}}
	</form>
</template>

<style scoped>
	form {
		display: grid;
		grid-gap: 6px;
	}

</style>

<style>

</style>






















