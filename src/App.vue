<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="site-menu">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>

        <li>
          <RouterLink to="/sign-in">Sign In</RouterLink>
        </li>

        <li>
          <RouterLink to="/product-page">Shoes</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="outlet">
    <RouterView />
  </main>
</template>

<style>
  nav ul {
    display: flex;
    gap: 10px;
  }
</style>