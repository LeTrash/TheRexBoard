<template>
  <form @submit.prevent="submitForm">
    <label>Name: </label>
    <input v-model="form.name" type="text" required />
    <label>Email: </label>
    <input v-model="form.email" type="email" required />
    <label>Message: </label>
    <textarea v-model="form.message" required></textarea>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("http://localhost:3000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(this.form),
        });
        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          alert("Failed to submit form.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>

<!-- <style scoped></style>-->
