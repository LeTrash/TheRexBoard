<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#background {
  background-color: #ffda90;
  display: none;
}

main {
  font-family:
    news gothic,
    sans-serif;
  color: #101d42;
}

body {
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;
  font-family:
    news gothic,
    sans-serif;
  background-color: #ffda90;
  font-size: 22px;
  margin: 0;
  padding: 0;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
}

main img {
  width: 400px;
  box-sizing: border-box;
}

.shadowimg {
  border: 10px outset #101d42;
  width: 450px;
}

.content {
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
  color: #101d42;
}

header {
  color: #ffda90;
  font-family: "Noto Serif", serif;
  background-color: #101d42;
  height: 90px;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}

#logo_link {
  justify-self: center;
  align-self: center;
  background-color: transparent;
  width: 200px;
  display: block;
  margin: 0 auto;
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 8%;
}

.logo {
  width: 150px;
  height: 100%;
  background-color: transparent;
}

#top-bar nav a {
  text-decoration: none;
  text-align: center;
  color: #ffda90;
  background-color: #101d42;
  display: block;
  padding: 10px;
}

#top-bar nav {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-left: 10%;
}

#top-bar nav a:hover {
  color: #1b9aaa;
  background-color: #1f487e;
  padding: 10px;
  border-radius: 5px;
}

#box1 {
  padding: 15px 15px 15px 35%;
  text-align: left;
}

main a {
  text-align: center;
  text-decoration: none;
  color: #101d42;
  background-color: #1b9aaa;
  font-family: "Noto Serif", serif;
  font-size: 18px;
  padding: 15px 30px;
  margin-top: 50px;
  border-radius: 5px;
  font-weight: bolder;
}

main a:hover {
  color: #ffda90;
  background-color: #101d42;
}

#mainboi {
  background-color: #1f487e;
  display: grid;
  grid-template-rows: repeat(14, 100px);
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  align-items: end;
  justify-items: center;
  height: 1400px;
}

#aca,
#fin {
  grid-column: 2/3;
}

#act,
#hea {
  grid-column: 4/5;
}

#aca {
  grid-row: 4;
}

#hea {
  grid-row: 7;
}

#fin {
  grid-row: 11;
}

#act {
  grid-row: 11/12;
}

footer {
  color: #ffda90;
  background-color: #101d42;
  padding: 25px 50px;
  margin-top: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  flex-direction: row;
  font-size: 15px;
}

footer img {
  width: 70px;
}

footer a {
  background-color: transparent;
}

.f1 {
  padding: 8% 0;
  display: grid;
  grid-template-columns: 800px 400px;
  grid-template-rows: repeat(13, 100px);
  margin: 2% 2%;
  column-gap: 5%;
  justify-items: center;
}

.f1 a {
  display: block;
}

#a1 {
  grid-row: 1/2;
}

#a2 {
  grid-row: 3/4;
}

#a3 {
  margin-top: 7%;
  grid-row: 5/6;
}

#a4 {
  margin-top: 5%;
  grid-row: 7/8;
}

#a5 {
  grid-row: 8;
  grid-column: 2 / end;
}

#a6 {
  grid-row: 9;
  margin-top: 7%;
}

#a1,
#a2,
#a3,
#a4,
#a6 {
  grid-column: 1;
  margin-top: 10%;
}

.img1,
.img2,
.img3 {
  grid-column: 2 / end;
}

.img1 {
  grid-row: 1;
}

.img2 {
  grid-row: 11;
}

.img3 {
  margin-top: 10%;
  grid-row: 6;
}
</style>
