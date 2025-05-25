<!-- CalendarDateIndicator.vue-->
<template>
  <div class="calendar-date-indicator">
    {{ selectedMonth }}
  </div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true,
    },
  },

  computed: {
    selectedMonth() {
      return this.selectedDate.format("MMMM YYYY");
    },
  },
};
</script>
