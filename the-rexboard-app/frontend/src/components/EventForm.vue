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
    <div v-if="form.isFree === 'false'">
      <label>Price Range:</label>
      <input
        v-model="form.priceRange"
        type="text"
        placeholder="e.g. $10 - $50 per person"
      />
    </div>

    <label>Business Name:</label>
    <input v-model="form.business" type="text" required />

    <Label>Where will this event be located?</Label>
    <label>Street:</label>
    <input v-model="form.location.street" type="text" required />

    <label>City:</label>
    <input v-model="form.location.city" type="text" required />

    <label>State:</label>
    <input v-model="form.location.state" type="text" required />

    <label>ZIP Code:</label>
    <input v-model="form.location.zip" type="number" required />

    <label>Categories:</label>
    <div v-for="tag in availableCategories" :key="tag">
      <label>
        <input type="checkbox" :value="tag" v-model="form.category" />
        {{ tag }}
      </label>
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
        eventdate: "",
        isFree: null, // 0 = Free, 1 = Priced
        priceRange: "", //Only use if Priced
        location: {
          street: "",
          city: "",
          state: "",
          zip: null,
        },
        category: [],
      },
      availableCategories: [
        "CASUAL",
        "INDOOR",
        "OUTDOOR",
        "HEALTH",
        "FOOD",
        "GAMES",
        "MARKET",
        "PROFESSIONAL",
        "OTHER",
      ],
    };
  },
  methods: {
    async submitForm() {
      this.form.eventDate = new Date(FormData.eventDate);

      try {
        const response = await fetch("http://localhost:5000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
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
<!-- new URLSearchParams(this.form) -->
