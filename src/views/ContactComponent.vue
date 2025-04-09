<script>
import { ref } from "vue";
import axios from "axios"; // Import axios for API requests

export default {
  setup() {
    // Define reactive variables
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const successMessage = ref("");

    // Function to send email
    const sendEmail = async () => {
      try {
        const response = await axios.post("http://localhost:3000/send-email", {
          name: name.value,
          email: email.value,
          message: message.value,
        });

        if (response.status === 200) {
          successMessage.value = "Message sent successfully!";
          name.value = "";
          email.value = "";
          message.value = "";
        } else {
          successMessage.value = "Failed to send message.";
        }
      } catch (error) {
        console.error("Error sending email:", error);
        successMessage.value = "An error occurred.";
      }
    };

    return { name, email, message, successMessage, sendEmail };
  },
};
</script>

<template>
  <div calss = "article-content">
    <div class ="title">
      <spam>

        <svg class="title-icon" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M58 1074 c-57 -30 -58 -40 -58 -434 0 -396 1 -405 60 -435 44 -23 1116 -23 1160 0 59 30 60 39 60 435 0 396 -1 405 -60 435 -43 22 -1121 22 -1162 -1z m842 -309 c-135 -135 -252 -245 -260 -245 -8 0 -125 110 -260 245 l-245 245 505 0 505 0 -245 -245z m-663 -282 l-157 -158 0 315 0 315 157 -158 158 -157 -158 -157z m963 155 l0 -313 -157 157 -158 158 155 155 c85 85 156 155 157 155 2 0 3 -141 3 -312z m-695 -109 c58 -59 92 -79 135 -79 43 0 66 14 133 78 l57 57 155 -155 c85 -85 155 -158 155 -162 0 -5 -225 -8 -500 -8 -275 0 -500 3 -500 7 0 9 302 313 310 313 3 0 28 -23 55 -51z"/>
          </g>
        </svg>

      </spam>
      Contact
    </div>
    <div class="contact-form">
      <form @submit.prevent="sendEmail">
        <input v-model="name" type="text" placeholder="Your Name" required />
        <input v-model="email" type="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </div>
  </template>

<style scoped>
.contact-form {
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>