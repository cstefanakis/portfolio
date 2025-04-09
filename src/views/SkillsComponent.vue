<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

// Define a type for the language object
interface Language {
  name: string;
  level: string;
}

export default defineComponent({
  name: 'SkillsComponent',
  setup() {
    const technologies = ref<any[]>([]);  
    const languages = ref<Language[]>([]);
    const applications = ref<any[]>([]);

    onMounted(async () => {
      try {
        const responseTechnologies = await fetch('/technologies.json');
        const responseLanguages = await fetch('/languages.json');
        const responseApllications = await fetch('/applications.json');
        technologies.value = await responseTechnologies.json();
        languages.value = await responseLanguages.json();
        applications.value = await responseApllications.json();

        const levelOrder: { [key: string]: number } = {
          'A1': 1,
          'A2': 2,
          'B1': 3,
          'B2': 4,
          'C1': 5,
          'C2': 6
        };

    
        languages.value.sort((b, a) => {
          return levelOrder[a.level] - levelOrder[b.level];
        });
      } catch (error) {
        console.error("Error loading data", error);
      }
    });

    return { technologies, languages, applications };
  }
});
</script>


<template>
  <div class="article-content">
    
    <div class = "title">
      <span>

        <svg class ="title-icon" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M408 917 c-144 -54 -228 -167 -228 -305 0 -94 22 -150 90 -227 62 -70 90 -133 90 -200 0 -87 124 -145 211 -100 38 20 69 71 69 114 0 61 23 113 76 170 73 79 96 130 102 221 3 60 0 86 -18 133 -26 70 -95 143 -165 176 -61 29 -173 38 -227 18z m198 -83 c54 -26 110 -87 128 -141 35 -102 12 -188 -75 -280 -27 -29 -57 -69 -65 -88 -9 -23 -21 -35 -34 -35 -19 0 -20 7 -20 126 l0 125 29 25 c36 30 50 80 28 101 -21 21 -50 9 -64 -27 -8 -21 -18 -30 -33 -30 -15 0 -25 9 -33 30 -14 36 -43 48 -64 27 -22 -21 -8 -71 28 -101 l29 -25 0 -125 c0 -125 0 -126 -23 -126 -17 0 -26 9 -36 35 -7 19 -34 59 -62 89 -84 92 -108 180 -75 274 50 140 210 209 342 146z m-36 -639 c0 -25 -38 -55 -70 -55 -32 0 -70 30 -70 55 0 12 14 15 70 15 56 0 70 -3 70 -15z"/>
          </g>
        </svg>

      </span>
      Skills
    </div>

    <h3>Languages</h3>
    <div class = "container">
      <div class = "box-container">
          <div v-for="(language, index) in languages" :key="index" class ="language">
            <p>
            <img :src="language.icon" alt="Language Image" class="flag-icon">
            <span>{{ language.name }} : </span> 
            <span>{{ language.level }}</span>
            </p>
          </div>
      </div>
    </div>
      
    <h3>Technologies</h3>
    <div class="container">
      <div v-for="(technologie, index) in technologies" :key="index">
        <div class="box-container">
          <h3>{{ technologie.category }}</h3>
          <div class="skills-container">
            <div v-for="(desc, i) in technologie.technologies" :key="i">
              <div class="skill-item">
                <img :src="desc.icon" alt="Technology Image" class="icons">
                <p>{{ desc.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3>Applications</h3>
<div class="container">
  <div v-for="(application, index) in applications" :key="index">
    <div class="box-container">
      <h3>{{ application.category }}</h3>
      <div class="skills-container">
        <div v-for="(desc, i) in application.applications" :key="i">
          <div style="display: flex;">
            <div class="skill-item">
              <img :src="desc.icon" alt="Application Icon" class="icons">
              <p>{{ desc.name }}</p>

            </div>
            
            <div v-if="desc.applications && desc.applications.length > 0" class="subcategory">
              <div v-for="(app, i) in desc.applications" :key="i">
                <div class="skill-item">
                  <img :src="app.icon" alt="Application Icon" class="icons">
                  <p>{{ app.name }}</p>
                </div>
              </div>
            </div>

          </div>
            
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    
}

.box-container {
    border: 1px solid #565656;
    margin-bottom: 20px;
    margin-right: 20px;
    border-radius: 10px;
    padding: 15px;
    background-color: #2e2c2c;
}

ul {
    margin-bottom: 0;
}

p{
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
}

.language {
  padding : 10px;
  
}

.flag-icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}

.subcategory {
    display: flex;
    background-color: #3d3a3a;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #565656;
}

.skills-container {
    gap: 10px;
    display: flex;
    justify-content: left;
}

.skill-item {
  text-align: center;
  padding-right: 5px;
  padding-left: 5px;
  
}

.icons {
    height: 40px;
}
</style>
