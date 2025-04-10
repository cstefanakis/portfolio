<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface AboutMe {
  name: string;
  proffession: string;
  attack: string;
  description: string;
  profile : string;
}

export default defineComponent({
  name: 'AboutMeComponent',
  
  setup() {
    const aboutMe = ref<AboutMe>({ attack: '', description: '', name: '', proffession: '', profile: '' });

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
  <div class="article-content">
    
    <div class ="title">
      <span>

        <svg class ="title-icon" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M414 911 c-90 -41 -144 -147 -123 -241 42 -189 287 -230 394 -67 7 12 18 42 24 67 37 167 -139 312 -295 241z m162 -76 c63 -41 83 -134 41 -196 -79 -118 -257 -65 -257 77 0 109 126 178 216 119z"/>
            <path d="M285 411 c-86 -39 -105 -82 -105 -232 l0 -109 35 0 35 0 0 108 c0 170 17 182 252 182 229 0 248 -14 248 -187 l0 -103 35 0 35 0 0 109 c0 150 -19 193 -105 232 -59 27 -371 27 -430 0z"/>
          </g>
        </svg>

      </span>
      About Me
    </div>
        <div class = "attack" v-html = "aboutMe.attack"></div>
        
          <p v-html ="aboutMe.description"></p>
       
  </div>
</template>

<style scoped>


.attack{
  margin-top:30px;
  margin-bottom:30px;
  font-size: 60px;
  font-weight: bold;
}

@media screen and (max-width: 700px) {
  .attack{
    font-size: 40px;
  }
}

</style>