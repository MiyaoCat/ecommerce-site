<script setup>
	defineProps(['shoe']);
</script>

<template>
	<p class="attention-voice">{{shoe.name}}</p>
	<p class="normal-voice">Price: ${{shoe.price}}</p>
	<p class="normal-voice" v-for="size in shoe.sizes">
		Size: {{size}}
	</p>
	<p class="normal-voice">Shoe Image</p>
	<!-- : = v-bind -->
	<picture><img :src="`images/${shoe.image}`" alt=""></picture>
</template>