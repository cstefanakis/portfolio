<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'TopNavbar',
  setup() {
    const aboutMe = ref({});
      onMounted(async () => {
        try {
          const responseAboutMe = await fetch('/aboutMe.json');
          aboutMe.value = await responseAboutMe.json();
        } catch (error) {
          console.error("Error loading about me data", error);
        }
      });
    return { aboutMe };
  },
  data() {
    return {
      introductionBatton : false,
      aboutMeBatton : false,
      educationBatton : false,
      workExperienceBatton : false,
      skillsBatton : false,
      contactBatton : false,
    };
  },
  methods: {
    toggleClass(selected) {
      this.introductionBatton = false;
      this.aboutMeBatton = false;
      this.educationBatton = false;
      this.workExperienceBatton = false;
      this.skillsBatton = false;
      this.contactBatton = false;
      this[selected] = true;
    }
  },
});
</script>

<template>
  <nav class="navbar">

        <img class="menu-profile" :src="aboutMe.profile" alt="profile image" />
    
        <router-link to="/" @click="toggleClass('introductionBatton')" :class="{ 'active': introductionBatton, 'menu-item': !introductionBatton }">
          <svg class ="icons" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M2397 5096 c-32 -13 -75 -36 -95 -50 -21 -14 -526 -515 -1124 -1113 -876 -878 -1091 -1098 -1112 -1140 -96 -194 -64 -406 83 -554 92 -91 209 -139 343 -139 l68 0 0 -800 c0 -541 4 -816 11 -852 38 -182 185 -347 367 -410 66 -23 71 -23 554 -23 476 0 487 0 514 21 15 11 37 33 48 48 21 27 21 40 26 695 l5 668 30 49 c38 61 115 110 189 119 28 4 168 5 311 3 l260 -3 53 -29 c50 -28 82 -61 113 -116 11 -21 15 -144 19 -692 5 -654 5 -667 26 -694 11 -15 33 -37 48 -48 27 -21 38 -21 514 -21 483 0 488 0 554 23 182 63 329 228 367 410 7 36 11 311 11 852 l0 800 68 0 c188 0 352 100 433 265 34 69 34 71 34 205 0 228 115 93 -1169 1376 -1276 1277 -1148 1167 -1366 1172 -113 2 -130 0 -183 -22z m247 -286 c59 -28 2149 -2121 2171 -2172 21 -51 19 -94 -6 -144 -37 -77 -68 -88 -261 -94 -181 -5 -194 -9 -242 -74 -21 -27 -21 -38 -26 -934 l-5 -907 -28 -47 c-15 -26 -42 -59 -60 -72 -70 -54 -91 -56 -473 -56 l-354 0 0 560 c0 367 -4 577 -11 612 -39 188 -190 350 -384 411 -66 21 -88 22 -395 22 -358 0 -376 -2 -504 -67 -127 -64 -245 -222 -275 -366 -7 -35 -11 -245 -11 -612 l0 -560 -354 0 c-382 0 -403 2 -473 56 -18 13 -45 46 -60 72 l-28 47 -5 907 c-5 896 -5 907 -26 934 -48 65 -61 69 -242 74 -193 6 -224 17 -261 94 -25 50 -27 93 -6 144 21 50 2112 2143 2170 2172 51 25 98 25 149 0z"/>
            </g>
          </svg>
          <span class="tooltip">Introduction</span>
        </router-link>
      
        <router-link to="/about-me" @click="toggleClass('aboutMeBatton')" :class="{ 'active': aboutMeBatton, 'menu-item': !aboutMeBatton }">
          <svg class ="icons" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M414 911 c-90 -41 -144 -147 -123 -241 42 -189 287 -230 394 -67 7 12 18 42 24 67 37 167 -139 312 -295 241z m162 -76 c63 -41 83 -134 41 -196 -79 -118 -257 -65 -257 77 0 109 126 178 216 119z"/>
              <path d="M285 411 c-86 -39 -105 -82 -105 -232 l0 -109 35 0 35 0 0 108 c0 170 17 182 252 182 229 0 248 -14 248 -187 l0 -103 35 0 35 0 0 109 c0 150 -19 193 -105 232 -59 27 -371 27 -430 0z"/>
              </g>
          </svg>
          <span class="tooltip">About me</span>
        </router-link>
      
        <router-link to="/education" @click="toggleClass('educationBatton')" :class="{ 'active': educationBatton, 'menu-item': !educationBatton }">
        <svg class ="icons" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
           <path d="M465 890 c-55 -13 -340 -157 -365 -184 -20 -22 -25 -38 -25 -81 0 -45 4 -58 28 -83 16 -16 46 -37 67 -47 l38 -17 3 -117 c4 -109 6 -121 32 -160 42 -64 96 -84 233 -89 139 -5 207 12 258 64 42 43 56 96 56 212 l0 88 35 17 35 16 2 -162 3 -162 24 -3 c13 -2 28 2 32 10 5 7 9 116 9 241 0 189 -3 233 -16 259 -13 25 -45 45 -187 113 -180 86 -213 97 -262 85z m221 -144 c233 -113 233 -132 -8 -244 -84 -40 -165 -72 -180 -72 -14 0 -96 34 -182 75 -121 57 -159 80 -168 100 -8 18 -9 32 -2 43 15 26 313 171 352 172 22 0 88 -26 188 -74z m-186 -386 c32 0 68 11 119 35 40 19 77 35 82 35 5 0 9 -40 9 -88 0 -83 -2 -90 -27 -114 -36 -34 -90 -48 -183 -48 -104 1 -150 13 -182 50 -26 28 -28 36 -28 120 l0 89 82 -39 c59 -29 95 -40 128 -40z"/>
          </g>
        </svg>
        <span class="tooltip">Education</span>
        </router-link>
           
        <router-link to="/work-experience" @click="toggleClass('workExperienceBatton')" :class="{ 'active': workExperienceBatton, 'menu-item': !workExperienceBatton }">
          <svg class ="icons" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M395 916 c-34 -15 -90 -74 -100 -105 -5 -16 -15 -21 -39 -21 -48 0 -127 -44 -156 -87 -24 -36 -25 -41 -28 -252 -2 -134 1 -230 7 -252 15 -51 48 -88 95 -110 37 -17 70 -19 326 -19 255 0 289 2 325 19 94 43 105 79 105 343 0 191 -2 216 -20 253 -30 61 -101 105 -170 105 -21 0 -30 7 -39 29 -16 36 -68 87 -104 100 -39 15 -166 13 -202 -3z m210 -86 c14 -13 25 -27 25 -32 0 -4 -58 -8 -130 -8 -72 0 -130 4 -130 8 0 11 40 47 60 55 8 4 45 5 82 4 55 -2 72 -7 93 -27z m220 -150 c26 -28 30 -39 33 -105 l4 -75 -362 0 -362 0 4 76 c3 71 6 78 36 105 l32 29 293 0 293 0 29 -30z m-360 -282 c8 -26 15 -33 35 -33 20 0 27 7 35 33 l9 32 158 0 158 0 0 -100 c0 -114 -12 -150 -60 -175 -43 -22 -557 -22 -600 0 -48 25 -60 61 -60 175 l0 100 158 0 158 0 9 -32z"/>
            </g>
          </svg>
          <span class="tooltip">Work Experiemnce</span>
        </router-link>
      
        <router-link to="/skills" @click="toggleClass('skillsBatton')" :class="{ 'active': skillsBatton, 'menu-item': !skillsBatton }">
          <svg class ="icons" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M408 917 c-144 -54 -228 -167 -228 -305 0 -94 22 -150 90 -227 62 -70 90 -133 90 -200 0 -87 124 -145 211 -100 38 20 69 71 69 114 0 61 23 113 76 170 73 79 96 130 102 221 3 60 0 86 -18 133 -26 70 -95 143 -165 176 -61 29 -173 38 -227 18z m198 -83 c54 -26 110 -87 128 -141 35 -102 12 -188 -75 -280 -27 -29 -57 -69 -65 -88 -9 -23 -21 -35 -34 -35 -19 0 -20 7 -20 126 l0 125 29 25 c36 30 50 80 28 101 -21 21 -50 9 -64 -27 -8 -21 -18 -30 -33 -30 -15 0 -25 9 -33 30 -14 36 -43 48 -64 27 -22 -21 -8 -71 28 -101 l29 -25 0 -125 c0 -125 0 -126 -23 -126 -17 0 -26 9 -36 35 -7 19 -34 59 -62 89 -84 92 -108 180 -75 274 50 140 210 209 342 146z m-36 -639 c0 -25 -38 -55 -70 -55 -32 0 -70 30 -70 55 0 12 14 15 70 15 56 0 70 -3 70 -15z"/>
            </g>
          </svg>
          <span class="tooltip">Skills</span>
        </router-link>
      
        <router-link to="/contact" @click="toggleClass('contactBatton')" :class="{ 'active': contactBatton, 'menu-item': !contactBatton }">
        <svg class=" icons" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M58 1074 c-57 -30 -58 -40 -58 -434 0 -396 1 -405 60 -435 44 -23 1116 -23 1160 0 59 30 60 39 60 435 0 396 -1 405 -60 435 -43 22 -1121 22 -1162 -1z m842 -309 c-135 -135 -252 -245 -260 -245 -8 0 -125 110 -260 245 l-245 245 505 0 505 0 -245 -245z m-663 -282 l-157 -158 0 315 0 315 157 -158 158 -157 -158 -157z m963 155 l0 -313 -157 157 -158 158 155 155 c85 85 156 155 157 155 2 0 3 -141 3 -312z m-695 -109 c58 -59 92 -79 135 -79 43 0 66 14 133 78 l57 57 155 -155 c85 -85 155 -158 155 -162 0 -5 -225 -8 -500 -8 -275 0 -500 3 -500 7 0 9 302 313 310 313 3 0 28 -23 55 -51z"/>
          </g>
        </svg>
        <span class="tooltip">Contact</span>
        </router-link>
      

  </nav>
</template>

<style scoped>

.menu-profile {
  display: none;
}

.menu-item {
  position: relative;
}

.menu-item:hover .tooltip {
  display: block;
}

.icons {
  width: 30px;
  height: 30px; 
  fill: #797979;
  cursor: pointer;
  margin: 5px;
}

.icons:hover {
  fill: #2CE98D;
  transform: scale(1.1); 
  transition: fill 0.3s, transform 0.3s;
  
}

.tooltip {
  position: absolute;
  right: 55px; /* Adjust the distance from the icon */
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  clip-path: polygon(0% 0%, 83% 0, 83% 23%, 100% 45%, 81% 44%, 81% 75%, 0% 75%);
  color: #fff;
  padding: 5px 10px;

  display: none;
  font-size: 14px;
  padding-right: 35px;
  height:30px;
  white-space: nowrap;
  
}

@media screen and (max-width: 1250px) {
  .navbar {
    display: flex;
    margin-left: 20px;
  }

  .tooltip {
    all: unset;
    color: white;
    float: left;
    text-align: center;
  }

  .menu-item, .active {
    all: unset;
    position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    text-align: center;
    max-width: 100px;
    border: 1px solid #565656;
    border-radius: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    max-width: 90px;
  }

  .active {
  border-color:  #2CE98D;
}

  .menu-item:hover {
    background-color: #2e2c2c;
    color: #fff;
    border-color: #2CE98D;
    cursor: pointer;
  }

  .menu-item:hover .tooltip {
    all: unset;
    color: white;
  }

  .icons {
    width: 100%;
    height: 25px;
    
  }

  .menu-item:hover .icons {
    fill: #2CE98D;
    transform: scale(1.1);
    transition: fill 0.3s, transform 0.3s;
  }

@media screen and (max-width: 980px) {
  .menu-profile {
    display:flex;
    width: 85px;
    height: 85px;
    border-radius: 10px;;
    margin-right: 10px;
  }
}

  @media screen and (max-width: 700px) {
  .menu-profile {
    display:flex;
    width: 85px;
    height: 85px;
    border-radius: 10px;;
    margin-right: 10px;
  }
  .tooltip{
    display: none;
  }

  .menu-item:hover .tooltip {
    display: none;
  }
}
}
</style>