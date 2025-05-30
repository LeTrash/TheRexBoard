<!-- const dayjs = require('dayjs')
import dayjs from 'dayjs'
dayjs().format() -->

<!-- Calendar.vue-->

<template>
  <!-- Parent container for the calendar month-->
  <div class="calendar-month">
    <!-- The Calendar header-->
    <div class="calendar-month-header">
      <CalendarDateIndicator
        :selected-date="selectedDate"
        class="calendar-month-header-selected-month"
      />
      <!-- pagination-->
      <CalendarDateSelector
        :current-date="today"
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
    </div>
    <!-- Calendar grid header -->
    <CalendarWeekdays />

    <!-- Calendar grid -->
    <ol class="days-grid">
      <CalendarMonthDayItem />
    </ol>
  </div>
</template>

<script>
import dayjs from "dayjs";
import CalendarDateIndicator from "./CalendarDateIndicator.vue";
import CalendarDateSelector from "./CalendarDateSelector.vue";

export default {
  components: {
    CalendarDateIndicator,
    CalendarDateSelector,
  },

  data() {
    return {
      selectedDate: dayjs(),
      today: dayjs().format("YYYY-MM-DD"),
    };
  },

  methods: {
    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate;
    },
  },
};
</script>
