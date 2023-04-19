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
          <RouterLink to="/sign-in">Shoe List</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="outlet">
    <RouterView />
  </main>
</template>

