<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: ''
    });

    const successMessage = ref('');
    const errorMessage = ref('');

    const submitForm = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/contact', form);
        successMessage.value = 'Message sent successfully!';
        errorMessage.value = '';
        form.name = '';
        form.email = '';
        form.message = '';
      } catch (error) {
        successMessage.value = '';
        errorMessage.value = 'Failed to send message. Please try again.';
        console.error(error);
      }
    };

    return { form, submitForm, successMessage, errorMessage };
  }
});
</script>

<template>
  <div class="article-content">

    <div class = "title">
      <span>

        <svg class ="title-icon" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M58 1074 c-57 -30 -58 -40 -58 -434 0 -396 1 -405 60 -435 44 -23 1116 -23 1160 0 59 30 60 39 60 435 0 396 -1 405 -60 435 -43 22 -1121 22 -1162 -1z m842 -309 c-135 -135 -252 -245 -260 -245 -8 0 -125 110 -260 245 l-245 245 505 0 505 0 -245 -245z m-663 -282 l-157 -158 0 315 0 315 157 -158 158 -157 -158 -157z m963 155 l0 -313 -157 157 -158 158 155 155 c85 85 156 155 157 155 2 0 3 -141 3 -312z m-695 -109 c58 -59 92 -79 135 -79 43 0 66 14 133 78 l57 57 155 -155 c85 -85 155 -158 155 -162 0 -5 -225 -8 -500 -8 -275 0 -500 3 -500 7 0 9 302 313 310 313 3 0 28 -23 55 -51z"/>
          </g>
        </svg>

      </span>  
      Contact Me
    </div>

    <form @submit.prevent="submitForm">
      <input class="input" v-model="form.name" placeholder="Name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <textarea v-model="form.message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    
  </div>
</template>

<style scoped>
.mail-form {
  display:inline-block;
}

input::placeholder, textarea::placeholder {
  color: #aca5a5;
  font-size: 14px;
}

input ,textarea{
  border: 1px solid #565656;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  background-color: #3d3a3a;
  color: white;
  margin-bottom: 20px;
}
textarea {
  max-width: 100%;
  min-width: 200px;
  min-height: 100px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #2CE98D;
}

form {
  display:flex;
  flex-direction: column;
  width: 100%;
}

button {
  width:100px;
}
</style>