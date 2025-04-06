<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'WorkExperienceComponent',
  setup() {
    const workExperience = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch('/workExperience.json');
        workExperience.value = await response.json();
      } catch (error) {
        console.error("Error loading work experiences data", error);
      }
    });

    return { workExperience };
  }
});
</script>

<template>
  <div class="workExperience-list">

    <h3 class = "title">Work experience</h3>

      <div v-for="(work, index) in workExperience" :key="index">
        <strong>{{ work.position }}</strong>
        <p>{{ work.year }}</p>
        <ul>
          <li v-for="(desc, i) in work.description" :key="i" v-html="desc"></li>
        </ul>
      </div>

  </div>
</template>

<style scoped>
.workExperience-list {
  padding: 20px;
  border-radius: 8px;
}
</style>