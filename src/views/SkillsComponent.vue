<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'SkillsComponent',
  setup() {
    const skills = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch('/technologies.json');
        skills.value = await response.json();
      } catch (error) {
        console.error("Error loading skills data", error);
      }
    });

    return { skills };
  }
});
</script>

<template>
  <div class="skill-list">
    
    <div class = "title">Skills</div>
    
    <div class="cards-container">
    <div v-for="(skill, index) in skills" :key="index">
        <div class="card">
      <h3>{{ skill.category }}</h3>
      <div class="icon-container">
      <div v-for="(desc, i) in skill.technologies" :key="i">
        <img :src="desc.icon" alt="Technology Image" class="icons">
        <p>{{ desc.name }}</p>
      </div>
    </div>
    </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

.skill-list {
  padding: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  display: flex;
  width: 400px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.icon-container {
    margin-top: 70px;
    gap: 10px;
    display: flex;
    justify-content: center;
}

.icons {
    height: 50px;
}
</style>
