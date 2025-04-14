<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'ProjectDetailComponent',
    setup() {
      const route = useRoute();
      const project = ref<any>(null);
  
      onMounted(async () => {
        try {
          const response = await fetch('/projects.json');
          const projects = await response.json();
          project.value = projects.find((p: any) => p.id === parseInt(route.params.id as string));
        } catch (error) {
          console.error('Error loading project:', error);
        }
      });
  
      const goToGithub = (url: string) => {
        window.open(url, '_blank');
      };
  
      return { project, goToGithub };
    }
  });
</script>


<template>
<div class="article-content">
    <div v-if="project">
      <h2>{{ project.title }}</h2>
      <img :src="project.img" :alt="project.title" class="detail-image" />
      <p v-html="project.description"></p>
      <button @click="goToGithub(project.github)">GitHub</button>
    </div>
    <div v-else>
      <p>Loading project...</p>
    </div>
</div>
</template>
  
<style scoped>
  .detail-image {
    width: 100%;
    max-width: 400px;
    margin-bottom: 15px;
    border-radius: 10px;
  }
  </style>
  