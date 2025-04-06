<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNavbar'
});
</script>

<template>
  <nav class="navbar">
    <h1>My Portfolio</h1>
    
    <router-link class ="link" to="/">Home</router-link>
    <router-link class ="link" to="/education">Education</router-link>
    <router-link class ="link" to="/work-experience">Work experience</router-link>
    <router-link class ="link" to="/Skills">Skills</router-link>
    <router-link class ="link" to="/Contact">Contact</router-link>
  </nav>
</template>

<style scoped>


.link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  float:right;
}

.link:hover {
  border-bottom: 2px solid white;
}
</style>