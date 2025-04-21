<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'EducationComponent',
  setup() {
    const education = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch('https://cstefanakis.github.io/portfolio/education.json');
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
  <div class="article-content">

    <div class = "title">
      <spam>

        <svg class ="title-icon" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
           <path d="M465 890 c-55 -13 -340 -157 -365 -184 -20 -22 -25 -38 -25 -81 0 -45 4 -58 28 -83 16 -16 46 -37 67 -47 l38 -17 3 -117 c4 -109 6 -121 32 -160 42 -64 96 -84 233 -89 139 -5 207 12 258 64 42 43 56 96 56 212 l0 88 35 17 35 16 2 -162 3 -162 24 -3 c13 -2 28 2 32 10 5 7 9 116 9 241 0 189 -3 233 -16 259 -13 25 -45 45 -187 113 -180 86 -213 97 -262 85z m221 -144 c233 -113 233 -132 -8 -244 -84 -40 -165 -72 -180 -72 -14 0 -96 34 -182 75 -121 57 -159 80 -168 100 -8 18 -9 32 -2 43 15 26 313 171 352 172 22 0 88 -26 188 -74z m-186 -386 c32 0 68 11 119 35 40 19 77 35 82 35 5 0 9 -40 9 -88 0 -83 -2 -90 -27 -114 -36 -34 -90 -48 -183 -48 -104 1 -150 13 -182 50 -26 28 -28 36 -28 120 l0 89 82 -39 c59 -29 95 -40 128 -40z"/>
          </g>
        </svg>

      </spam>  
      Education
    </div>
    
      <div v-for="(edu, index) in education" :key="index">
        <div class = "timeline">
          <div class = "entity">
            <div class="company">{{ edu.school }}</div>
            <div class="diploma"> <b>Diploma: </b>{{ edu.diploma }}</div>
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

.diploma {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>