<template>
  <div class="contentt">
    <header>
      <h1>BYU-I Student Guide</h1>
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
          <a class="Academics" href="./pages/academicsPage">Academics</a>
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
          <img
            class="shadowimg"
            src="./images/church.JPG"
            alt="ActivitiesIMG"
          />
          <a class="Activities" href="./pages/activities.vue">Activities</a>
        </section>
        <section id="fin">
          <img class="shadowimg" src="./images/Pertty.jpg" alt="FinancialIMG" />
          <a class="Financial" href="./pages/fin.vue">Financial</a>
        </section>
      </div>
    </main>

    <footer>
      <p>Student Guide &copy; 2022-2025 - Jessica Clark</p>
      <p>Images courtesy of Lexie Stout and Jessica Clark</p>
      <p><a href="./site-plan.html">Site Plan</a></p>
      <p><router-link to="/contact">Contact Us!</router-link></p>
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
