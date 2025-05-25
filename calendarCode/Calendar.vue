<!-- const dayjs = require('dayjs')
import dayjs from 'dayjs'
dayjs().format() -->

<!-- Calendar.vue-->

<template>
  <!-- Parent container for the calendar month-->
  <div class="calendar-month">
    <!-- The Calendar header-->
    <div class="calendar-month-header" <!-- Month name -->
      <CalendarDateIndicator />
      <!-- pagination-->
      <CalendarDateSelector />
    </div>
    <!-- Calendar grid header -->
    <CalendarWeekdays />

    <!-- Calendar grid -->
    <ol class="days-grid">
      <CalendarMonthDayItem />
    </ol>
  </div>
</template>
