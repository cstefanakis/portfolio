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
    <div class="contact-form">
      <h2>Contact Me</h2>
      <form @submit.prevent="sendEmail">
        <input v-model="name" type="text" placeholder="Your Name" required />
        <input v-model="email" type="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
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