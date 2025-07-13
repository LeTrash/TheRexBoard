<template>
  <header>
    <div id="top-bar">
      <a id="logo_link" href="./images/Ryka_StudentGuide_HS.png">
        <img
          class="logo"
          src="./images/Ryka_StudentGuide_HS.png"
          alt="Student Guide Logo"
        />
      </a>
      <nav>
        <ul>
          <li>
            <router-link to="/">HomePage</router-link>
          </li>
          <li>
            <router-link to="/academics">Academics</router-link>
          </li>
          <li>
            <router-link to="/calendar">Calendar</router-link>
          </li>
          <li>
            <router-link to="/activities">Activities</router-link>
          </li>
          <li>
            <router-link to="/health">Health</router-link>
          </li>
          <li>
            <router-link to="/financial">Financial</router-link>
          </li>
          <li><router-link to="/form">form</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 15px;
}
</style>
