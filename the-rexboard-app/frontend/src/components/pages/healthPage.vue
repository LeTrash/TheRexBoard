<template>
  <div class="content">
    <main>
      <h1>Mental and Physical Health Resources</h1>
      <P>Please click on the buttons to open the collapsible content.</P>

      <div v-for="(section, index) in sections" :key="index">
        <button
          class="accordion"
          :class="{ active: activeIndex === index }"
          @click="toggle(index)"
        >
          {{ section.title }}
        </button>
        <div
          class="panel"
          :style="{
            maxHeight:
              activeIndex === index ? panelHeights[index] + 'px' : null,
          }"
        >
          <div v-html="section.content"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      panelHeights: [],
      sections: [
        {
          title: "Physical",
          content: `
          <div id="phys">
            <section id="a1">
          <a class="healthcenter" href="https://www.byui.edu/health-center/"
                >Health Center</a
              >
              <p>
                Located beside the Kimball and Hinkley building. There to aid
                with all your sickly matters! They are happy to schedule a check
                up or blood test with a quick response. No need to wait 3
                months for an appointment. Their pharmacy is useful for picking
                up medication after your classes have ended. The office for
                BYU-I student insurance is also there. Feel free to walk in with
                any question at hand!
              </p>
        </section>
        <section id="a2">
          <a class="wellness" href="https://www.byui.edu/wellness-center/"
                >Wellness Center</a
              >
              <p>
                Located on the first floor of the Hart building resides the
                Wellness center. They over several services that are either
                free or below $30 such as a Wellness Assessment, Nutrition
                Consultation, Fitness Consultation, Cholesterol Screening, an
                Inbody test, and Bioimpedance analysis. They also have programs
                such as Fit4Life and THRIVE: Mental Wellness.
              </p>
        </section>
        <img src="/moreIMG/wellnessbaby.jpg" alt="WellnessIMG"/>
        <section id="a3">
          <a class="wellness" href="https://campusrec.byui.edu/"
                >Campus Recreation</a
              >
              <p>
                Here you can search for programs that are either free or under
                $10.They have Fitness classes, Emotional health workshops,
                wellness workshops, more! The best thing to do is search around
                and explore what is available.
              </p>
        </section>
        <img src="/moreIMG/gym.jpg" alt="hartgymIMG"/>
        <section id="a4">
           <a
                class="wellness"
                href="https://www.byui.edu/recreational-services/hart-building/fitness-center"
                >Fitness Center</a
              >
              <p>
                Within the Hart building, BYU-I provides a free gym open to all
                students! They have a cardio section, circuit section, free
                weights and machines. They can even provide a free trainer to
                teach you how to properly exercise and use the machines. As long
                as you have a valid I-Card and a BYU-I approved grey shirt you
                can use their facility from 5:00 AM - 11:30 PM.
              </p>
        </section>
        <section id="a4">
           <a
                class="wellness"
                href="https://www.byui.edu/recreational-services/hart-building/swimming-pool"
                >Swimming Pool</a
              >
              <p>
                Yep, there's an actual swimming pool on campus. Inside of course
                and open to public at certain times. The pool schedule lists
                when it's open to the public, reserved for classes or activities.
                However, there are quite a few fun activities that include the
                pool that anyone can sign up for such as kayaking, Aerobics, and
                water polo.
              </p>
        </section>
        </div>`,
        },
        {
          title: "Mental",
          content: `<div id="ment">
            <section id="a5">
          <a
                class="healthcenter"
                href="https://www.byui.edu/counseling-center/"
                >Counseling Center</a
              >
              <p>
                Located on the top floor of the Health Center! There you can
                schedule an appointment to meet with one of their many
                counselors, free to students as long as they currently take 6
                credits. They can also aid you with other health resources on
                campus such as meeting with a dietician or applying for
                Medicaid.
              </p>
        </section>
        <img id="tao" src="/moreIMG/TAO_logo.png" alt="TAOIMG" />
        <section id="a6">
          <a
                class="healthcenter"
                href="https://www.byui.edu/counseling-center/tao"
                >TAO</a
              >
              <p>
                Therapy Assistance Online: An easy tool free to all students and
                those alike to educate and better themselves on mental health.
              </p>
        </section>
        <section id="a7">
           <a class="wellness" href="https://campusrec.byui.edu/"
                >Campus Recreation</a
              >
              <p>
                Here you can search for programs that are either free or under
                $10.They have Fitness classes, Emotional health workshops,
                wellness workshops, more! The best thing to do is search around
                and explore what is available.
              </p>
        </section>
        <section id="a8">
          <a
                class="wellness"
                href="https://familycrisiscenter.wixsite.com/familycrisiscenter"
                >Family Crisis Center</a
              >
              <p>
                Located just by the Romance Theater on Main St. This lovely
                organization provides several resources for anyone in need. They
                provide resources for emotional needs and for escaping abuse.
              </p>
        </section>
            </div>`,
        },
        {
          title: "Phone Number Resources",
          content: `
          <div id="numb">
            <img class="img6" src="/moreIMG/htepy.jpg" alt="inspirationIMG" />
            <section id="a9">
          <a class="resources" href="https://idahocrisis.org/"
                >Idaho Suicide Prevention hotline</a
              >
              <p>Call 208-398-4357 [HELP]</p>
              <p>Available 24/7, FREE, and confidential</p>
              <p>
                Open to helping a friend, a loved one, or even yourself. All are
                welcome to use this hotline, regardless of suicidal tendencies
              </p>
        </section>
        <section id="a10">
          <a class="resources" href="https://www.911.gov/"
                >Life-Threatening Emergencies</a
              >
              <p>Call 911</p>
        </section>
        <section id="a11">
          <a class="resources" href="https://www.byui.edu/counseling-center/"
              >BYU-I Counseling-Center Appointments</a
            >
            <p>Call 208-496-9370</p>
        </section>
        <section id="a11">
          <a
                class="resources"
                href="https://www.byui.edu/disability-services/"
                >Disability Services</a
              >
              <p>Call 208-496-9210</p>
        </section>
            </div>
          `,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.panelHeights = Array.from(document.querySelectorAll(".panel")).map(
        (panel) => panel.scrollHeight
      );
    });
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
<style scoped>
.accordion {
  background-color: #101d42;
  color: #ffda90;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 22px;
  transition: 0.4s;
}

.accordion:hover {
  background-color: #1f487e;
  color: #1b9aaa;
}

.active {
  background-color: #101d42;
  color: #ffda90;
}

.panel {
  color: #ffda90;
  padding: 0 18px;
  background-color: #1f487e;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

#tao {
  padding: 20px;
}

#phys,
#ment,
#numb {
  display: block;
  padding: 30px 15%;
}

#phys img,
#numb img {
  width: 550px;
  border: 10px outset #101d42;
}
</style>

<!--     <main>
      <div class="f1">
        <section id="a1">
          <a></a>
          <p></p>
        </section>
        <section id="a2">
          <a></a>
          <p></p>
        </section>
        <section id="a3">
          <a></a>
          <p></p>
        </section>
        <section id="a4">
          <a></a>
          <p></p>
        </section>
        <section id="a5">
          <a></a>
          <p></p>
        </section>
        <section id="a6">
          <a></a>
          <p></p>
        </section>
        <img
          class="img1"
          src="../images/students.jpg"
          alt="SeniorShowcaseIMG"
        />
        <img
          class="img2"
          src="../images/marriage prep pic edited.jpg"
          alt="TeachingClassIMG"
        />
      </div>
    </main>
-->
