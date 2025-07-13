<template>
  <form @submit.prevent="submitForm">
    <label>Event Title: </label>
    <input v-model="form.title" type="text" required />

    <label>Email: </label>
    <input v-model="form.email" type="email" required />

    <label>Details: (Please include the event time) </label>
    <textarea v-model="form.body" required></textarea>

    <label>Date: (YYYY-MM-DD) </label>
    <input v-model="form.date" type="date" required />

    <label>Is this event free?</label>
    <label>
      <input type="radio" name="price" v-model="form.isFree" value="true" />
      Free
    </label>
    <label>
      <input type="radio" name="price" v-model="form.isFree" value="false" />
      Priced
    </label>
    <!-- Conditional Price Range Input-->
    <div v-if="form.inpVal === 'false'">
      <label>Price Range:</label>
      <input
        v-model="form.priceRange"
        type="text"
        placeholder="e.g. $10 - $50 per person"
      />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        email: "",
        body: "",
        date: "",
        isFree: null, // 0 = Free, 1 = Priced
        priceRange: "", //Only use if Priced
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("http://localhost:5000/submit", {
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
