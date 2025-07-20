<!-- const dayjs = require('dayjs')
import dayjs from 'dayjs'
dayjs().format() -->

<!-- Calendar.vue-->

<template>
  <!-- Parent container for the calendar month-->
  <div class="calendar-month">
    <!-- Sidebar for Category Filters-->
    <aside class="calendar-sidebar">
      <h3>Filter by Category</h3>
      <div v-for="category in availableCategories" :key="category">
        <label>
          <input
            type="checkbox"
            :value="category"
            v-model="selectedCategories"
            @change="filterEvents"
          />
          {{ category }}
        </label>
      </div>
    </aside>

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
      <CalendarMonthDayItem
        v-for="day in days"
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
        @eventClick="openEventModal"
      />
    </ol>
    <!-- Calendar Modals-->
    <EventModal
      :event="selectedEvent"
      :visible="showModal"
      @close="closeEventModal"
    />
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import CalendarMonthDayItem from "./CalendarMonthDayItem.vue";
import CalendarDateIndicator from "./CalendarDateIndicator.vue";
import CalendarDateSelector from "./CalendarDateSelector.vue";
import CalendarWeekdays from "./CalendarWeekdays.vue";
import EventModal from "./EventModal.vue";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: "CalendarDynamic",

  components: {
    CalendarMonthDayItem,
    CalendarDateIndicator,
    CalendarDateSelector,
    CalendarWeekdays,
    EventModal,
  },

  data() {
    return {
      selectedDate: dayjs(),
      events: [],
      filteredEvents: [],
      selectedEvent: null,
      showModal: false,
      selectedCategories: [],
      availableCategories: [
        "CASUAL",
        "INDOOR",
        "OUTDOOR",
        "HEALTH",
        "FOOD",
        "GAMES",
        "PROFESSIONAL",
        "MARKET",
        "OTHER",
      ], //populated from events
    };
  },

  mounted() {
    axios
      .get("/api/eventInfo", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }, //text/plain?
      })
      .then((res) => {
        this.events = res.data.map((eventInfo) => ({
          ...eventInfo,
          date: new Date(eventInfo.eventDate).toISOString().split("T")[0],
        }));
        this.filteredEvents = this.events;
      });
  },

  computed: {
    days() {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays,
      ];
    },

    today() {
      return dayjs().format("YYYY-MM-DD");
    },

    month() {
      return Number(this.selectedDate.format("M"));
    },

    year() {
      return Number(this.selectedDate.format("YYYY"));
    },

    numberOfDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },
    // date:dayjs(`${this.year}-${this.month}-${index + 1}`).format(
    // "YYYY-MM-DD"
    //         )
    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        const date = dayjs(`${this.year}-${this.month}-${index + 1}`).format(
          "YYYY-MM-DD"
        );
        return {
          date,
          isCurrentMonth: true,
          events: this.filteredEvents.filter(
            (eventInfo) =>
              eventInfo.date === date &&
              (this.selectedCategories.length === 0 ||
                eventInfo.category?.some((cat) =>
                  this.selectedCategories.includes(cat)
                ))
          ),
        };
      });
    },

    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );

      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (_, index) => {
          const date = dayjs(
            `${previousMonth.year()}-${previousMonth.month() + 1}-${
              previousMonthLastMondayDayOfMonth + index
            }`
          ).format("YYYY-MM-DD");
          return {
            date,
            isCurrentMonth: false,
            events: this.filteredEvents.filter(
              (eventInfo) =>
                eventInfo.date === date &&
                (this.selectedCategories.length === 0 ||
                  eventInfo.category?.some((cat) =>
                    this.selectedCategories.includes(cat)
                  ))
            ),
          };
        }
      );
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((_, index) => {
        const date = dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD");
        return {
          date,
          isCurrentMonth: false,
          events: this.filteredEvents.filter(
            (eventInfo) =>
              eventInfo.date === date &&
              (this.selectedCategories.length === 0 ||
                eventInfo.category?.some((cat) =>
                  this.selectedCategories.includes(cat)
                ))
          ),
        };
      });
    },
  },

  methods: {
    getWeekday(date) {
      return dayjs(date).weekday();
    },

    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate;
    },

    openEventModal(event) {
      this.selectedEvent = event;
      this.showModal = true;
    },

    closeEventModal() {
      this.showModal = false;
      this.selectedEvent = null;
    },

    filterEvents() {
      if (this.selectedCategories.length === 0) {
        this.filteredEvents = this.events;
      } else {
        this.filteredEvents = this.events.filter((event) =>
          event.category.some((cat) => this.selectedCategories.includes(cat))
        );
      }
    },
  },
};
</script>

<style scoped>
.calendar-month {
  position: relative;
  background-color: var(--grey-200);
  border: solid 1px var(--grey-300);
  flex: 1;
  margin: 15px;
}

.day-of-week {
  color: var(--grey-800);
  font-size: 18px;
  background-color: #fff;
  padding-bottom: 5px;
  padding-top: 10px;
}

.day-of-week,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
  text-align: right;
  padding-right: 5px;
}

.days-grid {
  height: 100%;
  position: relative;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  border-top: solid 1px var(--grey-200);
}

.calendar-container {
  display: flex;
}

.calendar-sidebar {
  width: 200px;
  padding: 1rem;
  background-color: #f9f9f9;
  border-right: 1px solid #ccc;
}
</style>
