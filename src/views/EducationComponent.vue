<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'EducationComponent',
  setup() {
    const education = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch('/education.json');
        education.value = await response.json();
      } catch (error) {
        console.error("Error loading education data", error);
      }
    });

    return { education };
  },

  methods: {
    formatDescription(description: string) {
      return description.replace(/\\n/g, '<br>');
    }
  }
});
</script>

<template>
  <div class="education-list">

    <div class = "title">Education</div>
    
      <div v-for="(edu, index) in education" :key="index">
        <div class = "timeline">
          <div class = "entity">
            <div class="company">{{ edu.school }}</div>
            <p> <b>Diploma: </b>{{ edu.diploma }}</p>
            <div class = "period">{{ edu.year }}</div>
            <ul>
              <li class = "description" v-for="(desc, i) in edu.description" :key="i" v-html="desc"></li>
            </ul>
          </div>
        </div>
      </div>
    
  </div>
</template>

<style scoped>
.education-list {
  padding: 20px;
}

.timeline {
  position: relative;
  margin-top: 40px;
  padding-left: 20px;
  border-left: 2px solid #565656;
  transition: border-color 0.3s ease;
}

.timeline::before {
  content: '';
  position: absolute;
  left: -7px;
  width: 14px;
  height: 14px;
  background-color: #565656;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.period {
  font-size: 14px;
  color: #6e6e6e;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.timeline:hover {
  border-left-color: #00FF84;
}

.timeline:hover::before {
  background-color: #00FF84;
}

.timeline:hover .period {
  color: #00FF84;
}

.company {
  font-size: 18px;
  font-weight: bold;
  color: #e7e7e7;
}

.description {
  font-size: 14px;
  color: #bdbdbd;
  margin-top: 5px;
}

</style>