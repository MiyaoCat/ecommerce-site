<script setup>
	defineProps(['shoe']);
</script>

<template>
	<p class="attention-voice">{{shoe.name}}</p>
	<p class="normal-voice">Price: ${{shoe.price}}</p>
	<ol>
		<li class="parallelogram" v-for="size in shoe.sizes">
			<p class="normal-voice">{{size}}</p>
		</li>
	</ol>
	<p class="normal-voice" v-if="shoe.image">Shoe Image</p>
	<!-- : = v-bind -->
	<picture v-if="shoe.image"><img :src="`images/${shoe.image}`" alt=""></picture>
</template>

<style>
	picture {
		max-width: 250px;
	}

	ol {
		display: flex;
	}

	.parallelogram {
		transform: skew(-20deg);

		border: 2px solid red;
		margin: 0 5px;
	}	
	.parallelogram p {
  		transform: skew(20deg);
  		padding: 0 8px;
	}
</style>

<!-- 	<p class="normal-voice">
		Sizes: <span class="parallelogram" v-for="size in shoe.sizes"><p class="normal-voice">{{size}}</p></span>
	</p> -->