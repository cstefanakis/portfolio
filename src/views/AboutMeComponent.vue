<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'AboutMeComponent',
  setup() {
    const aboutMe = ref<Record<string, any>>({});

    onMounted(async () => {
      try {
        const response = await fetch('/aboutMe.json');
        aboutMe.value = await response.json();
      } catch (error) {
        console.error("Error loading about me data", error);
      }
    });

    return { aboutMe };
  }
});
</script>

<template>
  <div class="aboutMe-list">
    
    <div class ="title">About Me</div>
    
        <h2> Hi i am {{ aboutMe.name }}</h2>
        <p>{{ aboutMe.profession }}</p>
        <p v-html ="aboutMe.description"></p>
  </div>
</template>

<style scoped>
.aboutMe-list {
  padding: 20px;
  border-radius: 8px;
}
</style>