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
  <div class="article-content">

    <div class = "title">
      <spam>

        <svg class ="title-icon" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M395 916 c-34 -15 -90 -74 -100 -105 -5 -16 -15 -21 -39 -21 -48 0 -127 -44 -156 -87 -24 -36 -25 -41 -28 -252 -2 -134 1 -230 7 -252 15 -51 48 -88 95 -110 37 -17 70 -19 326 -19 255 0 289 2 325 19 94 43 105 79 105 343 0 191 -2 216 -20 253 -30 61 -101 105 -170 105 -21 0 -30 7 -39 29 -16 36 -68 87 -104 100 -39 15 -166 13 -202 -3z m210 -86 c14 -13 25 -27 25 -32 0 -4 -58 -8 -130 -8 -72 0 -130 4 -130 8 0 11 40 47 60 55 8 4 45 5 82 4 55 -2 72 -7 93 -27z m220 -150 c26 -28 30 -39 33 -105 l4 -75 -362 0 -362 0 4 76 c3 71 6 78 36 105 l32 29 293 0 293 0 29 -30z m-360 -282 c8 -26 15 -33 35 -33 20 0 27 7 35 33 l9 32 158 0 158 0 0 -100 c0 -114 -12 -150 -60 -175 -43 -22 -557 -22 -600 0 -48 25 -60 61 -60 175 l0 100 158 0 158 0 9 -32z"/>
          </g>
        </svg>

      </spam>
      Work Experience
    </div>

    <div v-for="(work, index) in workExperience" :key="index">
      <div class = "timeline">
        <div class = "entity">
          <div class="company">{{ work.position }}</div>
          <div class = "period">{{ work.year }}</div>
            <ul>
              <li class = "description" v-for="(desc, i) in work.description" :key="i" v-html="desc"></li>
            </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>