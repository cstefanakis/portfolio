<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';


interface Contact {
  name: string;
  value: string;
  icon?: string;
  'icon-green'?: string;
  'icon-gray'?: string;
}

export default defineComponent({
  name: 'AboutMeComponent',

  setup() {
    const contacts = ref<Contact[]>([]);
    const aboutMe = ref<Record<string, any>>({});
    
    onMounted(async () => {
      try {
        const responseContact = await fetch('https://cstefanakis.github.io/portfolio/contact.json');
        const responseAboutMe = await fetch('https://cstefanakis.github.io/portfolio/aboutMe.json');
        contacts.value = await responseContact.json();
        aboutMe.value = await responseAboutMe.json();
      } catch (error) {
        console.error("Error loading data", error);
      }
    });

    const getEmail = () => {
      const emailContact = Object.values(contacts.value).find(contact => contact.name === 'email');
      return emailContact ? emailContact : '';
    };

    const getLocation = () => {
      const locationContact = Object.values(contacts.value).find(contact => contact.name === 'location');
      return locationContact ? locationContact : '';
    };

    return { contacts, aboutMe, getEmail, getLocation };
  },

  methods: {
    openLink(url: string) {
      window.open(url, '_blank');
    },
    sendEmail() {
        const subject = encodeURIComponent("Hello Christos!");
        const body = encodeURIComponent("Hi Christos,\n\nI wanted to get in touch with you regarding...");
        const email = "christosste86@gmail.com";
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      }
  }
});
</script>

<template>
    
      <div class = "title-container">
        <div class="name">{{ aboutMe.name }}</div>

        <div class="work-title" >{{ aboutMe.profession }}</div>
      </div>
      <div class = "image-container">
          <img class="profile" src="../assets/profile-web.png" alt="profile picture">
      </div>
      
      <div class = "contact-container">
          <div class = "email">{{getEmail().value}}</div>
          <div class = "location">
            Based in
            {{ getLocation().value }}
          </div>
           
            <button @click="sendEmail" class = "link">
              <div class ="contact-me">
                <svg class="button-icon" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M58 1074 c-57 -30 -58 -40 -58 -434 0 -396 1 -405 60 -435 44 -23 1116 -23 1160 0 59 30 60 39 60 435 0 396 -1 405 -60 435 -43 22 -1121 22 -1162 -1z m842 -309 c-135 -135 -252 -245 -260 -245 -8 0 -125 110 -260 245 l-245 245 505 0 505 0 -245 -245z m-663 -282 l-157 -158 0 315 0 315 157 -158 158 -157 -158 -157z m963 155 l0 -313 -157 157 -158 158 155 155 c85 85 156 155 157 155 2 0 3 -141 3 -312z m-695 -109 c58 -59 92 -79 135 -79 43 0 66 14 133 78 l57 57 155 -155 c85 -85 155 -158 155 -162 0 -5 -225 -8 -500 -8 -275 0 -500 3 -500 7 0 9 302 313 310 313 3 0 28 -23 55 -51z"/>
                  </g>
                </svg>
                Contact Me
              </div>
          </button>

     

      </div>

      

      <div class="social-container">
        <a href="https://www.linkedin.com/in/christos-stefanakis-74199543/" target="_blank">
          <svg class="icons" viewBox="0,0,255.98958,255.98958">
            <g fill-rule="nonzero">
            <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM16,12c-1.64501,0 -3,1.35499 -3,3c0,1.64501 1.35499,3 3,3c1.64501,0 3,-1.35499 3,-3c0,-1.64501 -1.35499,-3 -3,-3zM16,14c0.56413,0 1,0.43587 1,1c0,0.56413 -0.43587,1 -1,1c-0.56413,0 -1,-0.43587 -1,-1c0,-0.56413 0.43587,-1 1,-1zM14,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v15c0.00006,0.55226 0.44774,0.99994 1,1h4c0.55226,-0.00006 0.99994,-0.44774 1,-1v-15c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM22,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v15c0.00006,0.55226 0.44774,0.99994 1,1h4c0.55226,-0.00006 0.99994,-0.44774 1,-1v-7.5c0,-1.37955 1.12045,-2.5 2.5,-2.5c1.37955,0 2.5,1.12045 2.5,2.5v2.5v5c0.00006,0.55226 0.44774,0.99994 1,1h4c0.55226,-0.00006 0.99994,-0.44774 1,-1v-8.5c0,-4.13039 -3.36961,-7.5 -7.5,-7.5c-1.28647,0 -2.44026,0.41615 -3.5,0.99023c-0.00541,-0.54844 -0.45153,-0.99021 -1,-0.99023zM15,21h2v13h-2zM23,21h2v0.81641c0.00005,0.40093 0.23954,0.76309 0.60845,0.9201c0.36891,0.15701 0.79594,0.07853 1.08491,-0.19939c0.99083,-0.9518 2.32332,-1.53711 3.80664,-1.53711c3.04961,0 5.5,2.45039 5.5,5.5v7.5h-2v-4v-2.5c0,-2.47046 -2.02954,-4.5 -4.5,-4.5c-2.47046,0 -4.5,2.02954 -4.5,4.5v6.5h-2z"></path>
            </g>
            </g>
          </svg>
        </a>
        <a href="https://github.com/cstefanakis" target="_blank">
          <svg class="icons" viewBox="0,0,255.98958,255.98958">
            <g fill-rule="nonzero">
            <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.68866,0 -23,10.31134 -23,23c0,12.68867 10.31134,23 23,23c12.68867,0 23,-10.31133 23,-23c0,-12.68866 -10.31133,-23 -23,-23zM25,4c11.60734,0 21,9.39266 21,21c0,0.07137 -0.00515,0.14169 -0.00586,0.21289c-0.63961,-0.05904 -1.37863,-0.11511 -2.31836,-0.14844c-1.32872,-0.04712 -3.00352,-0.03347 -4.90234,0.06055c0.07041,-0.49035 0.11977,-0.98762 0.12109,-1.49805c0.09683,-1.87262 -0.53201,-3.62449 -1.55469,-5.17187c0.24707,-0.85373 0.5369,-1.93986 0.60938,-3.17187c0.0826,-1.40428 -0.03862,-2.96144 -1.16602,-4.01367l-0.28906,-0.26953h-0.39453c-2.68307,0 -4.51959,1.12321 -5.64258,2.01367c-1.6215,-0.62765 -3.44481,-1.01367 -5.45703,-1.01367c-2.02363,0 -3.86447,0.39142 -5.55273,1.01758c-1.12235,-0.89089 -2.96048,-2.01758 -5.64648,-2.01758h-0.39258l-0.28906,0.26758c-1.09819,1.01974 -1.19936,2.53418 -1.13086,3.93164c0.06041,1.23229 0.33345,2.35292 0.57617,3.24805c-1.03996,1.57759 -1.66406,3.37475 -1.66406,5.15234c0,0.51163 0.04758,1.01046 0.11719,1.50195c-1.80576,-0.08375 -3.41548,-0.09989 -4.69336,-0.05469c-0.9397,0.03324 -1.67878,0.08884 -2.31836,0.14844c-0.0006,-0.06534 -0.00586,-0.12983 -0.00586,-0.19531c0,-11.60733 9.39266,-21 21,-21zM14.39648,13.13086c2.01758,0.19118 3.53551,1.09211 4.23828,1.7168l0.46875,0.41406l0.57813,-0.23633c1.58145,-0.65119 3.34534,-1.02539 5.31836,-1.02539c1.97302,0 3.73739,0.37608 5.19922,1.01563l0.58594,0.25781l0.47852,-0.42578c0.70301,-0.6249 2.22351,-1.5261 4.24219,-1.7168c0.2684,0.44498 0.50163,1.07781 0.44531,2.03516c-0.0674,1.14572 -0.37387,2.39364 -0.60547,3.13477l-0.15039,0.48242l0.29883,0.4082c0.98947,1.34928 1.49398,2.80953 1.4082,4.35352l-0.00195,0.02734v0.02734c0,2.49545 -0.89861,4.49273 -2.8125,5.97266c-1.91384,1.47993 -4.93523,2.42773 -9.1875,2.42773c-4.25227,0 -7.27556,-0.94781 -9.18945,-2.42773c-1.91389,-1.47993 -2.81055,-3.4772 -2.81055,-5.97266c0,-1.46471 0.52892,-3.07601 1.50586,-4.4082l0.29297,-0.39844l-0.14062,-0.47461c-0.23173,-0.78787 -0.51577,-2.06426 -0.57227,-3.2168c-0.04699,-0.95862 0.17989,-1.56453 0.41016,-1.9707zM8.88477,26.02148c0.70669,0.00903 1.51669,0.04717 2.32813,0.08789c0.07753,0.3118 0.16593,0.61852 0.27344,0.91797c-3.30736,0.06975 -5.7816,0.40233 -7.30664,0.6875c-0.06448,-0.50035 -0.11584,-1.00482 -0.14453,-1.51562c1.12705,-0.10696 2.71584,-0.20499 4.84961,-0.17773zM41.11523,26.03711c2.13229,-0.02708 3.72049,0.07105 4.84766,0.17773c-0.02866,0.50348 -0.07914,1.00082 -0.14258,1.49414c-1.57954,-0.28977 -4.12064,-0.6223 -7.51367,-0.67578c0.1053,-0.29353 0.19299,-0.59498 0.26953,-0.90039c0.89512,-0.04798 1.76839,-0.08592 2.53906,-0.0957zM11.91211,28.01953c0.59674,1.1958 1.44941,2.26349 2.57617,3.13477c1.54054,1.19123 3.54334,2.02354 5.98828,2.46875c-0.31986,0.32865 -0.61078,0.68955 -0.86914,1.07031l-0.06055,-0.05273c0.0055,-0.0063 -0.49713,0.24525 -1.24805,0.3125c-0.75092,0.06725 -1.67721,0.04688 -2.49805,0.04688c-1.225,0 -1.76457,-0.57879 -2.62695,-1.63281c-0.47755,-0.64363 -1.05973,-1.16486 -1.625,-1.56055c-0.57881,-0.40517 -1.07257,-0.69113 -1.68359,-0.79297l-0.08203,-0.01367h-0.08398c-0.46667,0 -0.91824,0.03379 -1.33984,0.51563c-0.2108,0.24092 -0.3561,0.68694 -0.26172,1.06445c0.09438,0.37752 0.3332,0.6095 0.54688,0.75195c1.36672,0.91115 1.60826,2.71448 2.46484,4.31836c0.79992,1.59392 2.52629,2.34961 4.29102,2.34961h2.59961v4.80273c-7.03219,-2.4822 -12.33532,-8.59812 -13.66797,-16.09961c1.5309,-0.28835 4.09451,-0.63502 7.58008,-0.68359zM37.88281,28.02734c3.56273,0.0305 6.19824,0.37672 7.78711,0.66992c-1.33087,7.50424 -6.63585,13.6226 -13.66992,16.10547v-5.20312c0,-1.58457 -0.52036,-3.3319 -1.42578,-4.78906c-0.2749,-0.44241 -0.59827,-0.86081 -0.95898,-1.23633c2.31522,-0.45738 4.21713,-1.2754 5.69727,-2.41992c1.12432,-0.86939 1.97509,-1.93387 2.57031,-3.12695zM23.69922,34.09961h2.80078c0.81282,0 1.68042,0.64779 2.375,1.76563c0.69458,1.11783 1.125,2.61894 1.125,3.73438v5.79883c-1.60259,0.3908 -3.27621,0.60156 -5,0.60156c-1.72379,0 -3.39741,-0.21077 -5,-0.60156v-5.79883c0,-1.09074 0.46783,-2.5883 1.20898,-3.71094c0.74116,-1.12264 1.67741,-1.78906 2.49023,-1.78906zM12.30859,35.28125c0.86577,0.89801 1.91393,1.71875 3.49219,1.71875c0.77917,0 1.7517,0.02807 2.67578,-0.05469c0.00329,-0.00029 0.00648,-0.00166 0.00977,-0.00195c-0.12175,0.35 -0.21258,0.70217 -0.28906,1.05664h-2.79687c-1.23333,0 -2.10462,-0.44557 -2.50586,-1.24805l-0.00781,-0.01367l-0.00586,-0.01172c-0.1644,-0.30537 -0.38021,-0.91597 -0.57226,-1.44531z"></path>
            </g>
            </g>
          </svg>
        </a>

      </div>
   

</template>

<style scoped>

button {
  all:unset
}
.title-container{
  display: flex;
  margin:20px;
  justify-content: space-between;  
}

.work-title{
  width: 30%;
  font-size: 17px;
  color: #fff;
  text-align: left;
  border: 1px solid #565656;
  border-radius: 10px;
  background-color: #2e2c2c;
  padding : 5px;
  display: flex;
  align-items: center;
}

.name{
  width:60%;
  font-size: 30px;
  color: #fff;
  text-align: left;
  font-weight: bold;
  align-items: center;
}

.profile {
    width: 260px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
}

.image-container, .social-container {
  display: flex;
  justify-content: center;
}

.contact-container {
    padding: 10px;
    display: flex;
  flex-direction: column;
  justify-content: center;

}

.email, .location{
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding: 5px;
}

.social-container {
    margin-top: 20px;
    gap: 10px;
}

.icons ,.button-icon{
  width: 40px;
  height: 40px; 
  fill: #797979;
  cursor: pointer;
}

.contact-me {
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 18px;
  margin-left: 20px;
  margin-right:20px;
}

.button-icon{
  width: 25px;
  height: 25px;
  margin-right: 10px;
  fill: black;
  cursor: pointer;
}

.contact-me:hover .button-icon{
  fill:#00FF84;
}

.icons:hover {
  fill: #2CE98D;
  transform: scale(1.1); 
  transition: fill 0.3s, transform 0.3s;
}


</style>
