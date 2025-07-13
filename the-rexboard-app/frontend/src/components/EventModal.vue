<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h3 @click="toggleDetails" class="modal-title">
        {{ event.title
        }}<span class="toggle-icon">{{ showDetails ? "▲" : "▼" }}</span>
      </h3>
      <!-- <p>{{ event.body }}</p> -->

      <transition name="fade">
        <div v-if="showDetails" class="modal-details">
          <p><strong>Description:</strong> {{ event.body }}</p>
          <p v-if="event.eventDate">
            <strong>Date:</strong>{{ formatDate(event.eventDate) }}
          </p>
          <p v-if="event.location">
            <strong>Location:</strong> {{ event.location }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import { Transition } from "vue";
import dayjs from "dayjs";

export default {
  props: ["event", "visible"],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    formatDate(date) {
      return dayjs(date).format("MMMM, D, YYYY");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 24px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.modal-title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.toggle-icon {
  font-size: 0.9rem;
  color: #666;
}

.modal-details {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
