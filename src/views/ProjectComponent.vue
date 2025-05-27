<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ProjectComponent',
  setup() {
    const projects = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch('https://cstefanakis.github.io/portfolio/projects.json');    
        projects.value = await response.json();
      } catch (error) {
        console.error("Error loading education data", error);
      }
    });

    return { projects };
  },

  methods: {
    formatDescription(description: string) {
      return description.replace(/\\n/g, '<br>');
    },
    goToGithub(url: string ) {
    window.open(url, '_blank');
  }
  }
});
</script>

<template>
  <div class="article-content">

    <div class = "title">
        <svg class = "title-icon" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 96.000000 96.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M114 786 l-34 -34 0 -286 c0 -315 3 -332 58 -355 16 -7 49 -11 73 -9 l44 3 0 275 0 275 -54 5 c-76 8 -106 55 -61 100 19 19 33 20 358 20 250 0 341 -3 350 -12 18 -18 17 -541 -1 -557 -9 -7 -103 -12 -278 -13 -227 -3 -264 -5 -264 -18 0 -13 38 -15 273 -18 l273 -2 24 24 25 25 0 281 0 281 -25 24 -24 25 -352 0 -351 0 -34 -34z m75 -166 l31 0 0 -240 0 -240 -30 0 c-17 0 -39 9 -50 20 -19 19 -20 33 -20 250 0 225 0 230 19 220 11 -5 33 -10 50 -10z"/>
            <path d="M645 650 c-12 -19 6 -30 48 -30 l42 0 -67 -67 -68 -68 -60 60 -60 60 -72 -72 c-57 -58 -70 -75 -60 -85 10 -10 25 0 72 47 l60 59 60 -59 60 -59 79 78 80 79 3 -44 c2 -31 7 -44 18 -44 12 0 15 15 15 75 l0 75 -72 3 c-42 2 -74 -1 -78 -8z"/>
            <path d="M345 329 c-16 -25 20 -29 231 -27 187 3 219 5 219 18 0 13 -33 15 -222 18 -154 2 -224 -1 -228 -9z"/>
          </g>
            </svg> 
      Projects
    </div>



    <div class = "projects-container">
        <router-link class="box-container" v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`">

        
            <div class = "project-title-container">
                <div class = "project-title">{{ project.title }}</div>
            </div>

            <div class = "project-image-cotainer">
                <img class = "image-icon" :src="project.img" alt="Project Image">
            </div>

            <div class = "project-description-container">
                <p v-html="project.description"></p>
            </div>

            <div class ="githubs">
              <div v-if="project.github.backend !== null">
                <button @click="goToGithub(project.github.backend.url)">
                  GitHub <div style="font-size: 12px;">{{ project.github.backend.description }}</div>
                </button>
              </div>

              <div v-if="project.github.frontend !== null">
                <button @click="goToGithub(project.github.frontend.url)">
                  GitHub <div style="font-size: 12px;">{{ project.github.frontend.description }}</div>
                </button>
              </div>
            </div>
        </router-link>
  </div>
  </div>
</template>

<style scoped>
.projects-container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;;
}

.button {
  padding : 5px 10px;
}

.box-container {
  width: 180px;
  text-decoration: none; 
}

.box-container:hover {
    border: 1px solid white;
}

.project-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
  
}

.project-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: white;
}

.image-icon {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

@media screen and (max-width: 980px) {
    .box-container {
        margin-top: 20px;
    }
}

@media screen and (max-width: 570px) {
    .box-container {
  width: 100%;
  margin-right: 0;
}
}



</style>