<template>
  <div class="contentt">
    <header>
      <a id="logo_link" href="./images/Ryka_StudentGuide_logo.png">
        <img
          class="logo"
          src="./images/Ryka_StudentGuide_logo.png"
          alt="Student Guide Logo"
        />
      </a>
      <h1>BYU-I Student Guide</h1>
      <div id="top-bar">
        <nav>
          <router-link to="/pages/academics">Academics</router-link>
          <router-link to="/pages/Activities">Activities</router-link>
          <router-link to="/pages/health">Health</router-link>
          <router-link to="/pages/fin">Finacial</router-link>
          <router-link to="/Calendar">Calendar</router-link>
        </nav>
      </div>
    </header>

    <main>
      <div id="box1">
        <section id="opening">
          <p>
            Welcome to the BYU-I Student Guide! This is not an official BYU-I
            website...
          </p>
          <p>The topics below are clickable and will lead you to a page...</p>
        </section>
      </div>

      <div id="mainboi">
        <section id="aca">
          <img
            class="shadowimg"
            src="./images/guy devo notes edit.jpg"
            alt="AcademicsIMG"
          />
          <a class="Academics" href="./pages/academics.vue">Academics</a>
        </section>
        <section id="hea">
          <img
            class="shadowimg"
            src="./images/run and not be weary 3 edited.jpg"
            alt="HealthIMG"
          />
          <a class="Health" href="./pages/health.vue">Health</a>
        </section>
        <section id="act">
          <!-- <img
            class="sahowimg"
            src="@/components/images/going to church.JPG"
            alt="ActivitesIMG"
          /> -->
          <a class="Activites" href="./pages/activities.vue">Activites</a>
        </section>
        <section id="fin">
          <img class="shadowimg" src="./images/Pertty.jpg" alt="FinancialIMG" />
          <a class="Finanical" href="./pages/fin.vue">Finanical</a>
        </section>
        <!-- <section id="tips">
          <p>
            Click the button below for a few fun tips to get through college!
          </p>
          <a class="Tips" href="./tips.html">Tips</a>
        </section> -->
      </div>

      <!-- <section id="search">
        <p>If none of these categories are what you're looking for...</p>
        <img id="arrow" src="./images/fliparrow.png" alt="arrow" />
        <img id="bar" src="./images/searchabr.png" alt="searchbar" />
      </section> -->

      <!-- <div id="proph">
        <section id="yote">
          <div id="huh">
            <img src="./images/Eyeering.jpg" alt="Elder Eyring" />
            <a
              class="talk"
              href="https://www.byui.edu/foundational-addresses/a-steady-upward-course"
              >Complete Talk</a
            >
          </div>
          <div id="stuff">
            <h2>A Steady Upward Course</h2>
            <p>"I’ll make you a prophecy..."</p>
            <p>-Elder Henry B. Eyring</p>
          </div>
        </section>
      </div> -->
    </main>

    <footer>
      <p>Student Guide &copy; 2022 - Jessica Clark</p>
      <p>Images courtesy of Lexie Stout and Jessica Clark</p>
      <p><a href="./site-plan.html">Site Plan</a></p>
      <p><a href="./pages/contactus.vue">Contact Us</a></p>
      <div class="social">
        <a href="https://byui.edu" target="_blank">
          <img src="./images/BYU-Ilogo.jpg" alt="BYU-I icon" />
        </a>
        <a href="https://www.churchofjesuschrist.org/?lang=eng" target="_blank">
          <img src="./images/LDS_logo.png" alt="LDS icon" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- <style scoped>
@import "./assets/stylehome.css";
</style> -->
