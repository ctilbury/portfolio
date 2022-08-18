<template>
  <div>
    <header-bar
      @scrollToSection="scrollToSection"
    />
    <mobile-menu
      @scrollToSection="scrollToSection"
    />
    <main>
      <section
        id="about-section"
        ref="aboutSection"
      >
        <sticker />
        <about />
        <skills />
      </section>
      <section
        id="projects-section"
        ref="projectsSection"
      >
        <projects />
      </section>
      <section
        id="contact-section"
        ref="contactSection"
      >
        <contact />
      </section>
    </main>
    <scroll-arrows
      v-if="showArrows"
      :section="currentSection"
      @scrollToSection="scrollToSection"
    />
    <modal
      v-if="showModal"
      @close="showModal = false"
    >
      <h3 slot="header">Hi, I'm a modal.</h3>
    </modal>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import Sticker from './components/Sticker.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import MobileMenu from './components/MobileMenu.vue'
import ScrollArrows from './components/ScrollArrows.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    HeaderBar,
    Sticker,
    About,
    Skills,
    Projects,
    Contact,
    MobileMenu,
    ScrollArrows,
    Modal
  },
  data() {
    return {
      currentSection: 'about',
      showArrows: false,
      showModal: false
    }
  },
  methods: {
    scrollToSection(newSection) {
      // remove manual scroll event listener temporarily while auto scroll is happening
      window.removeEventListener('scroll', this.handleScroll)

      this.currentSection = newSection
      const el = this.$refs[`${newSection}Section`]

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }

      // add event listener back in after a timeout to allow auto scroll to finish
      setTimeout(() => {
        window.addEventListener('scroll', this.handleScroll)
      }, 1500)
    },

    handleScroll() {
      // if the user scrolls manually, hide the arrows
      this.showArrows = false

      // when they stop scrolling:
      // a. if they're at the bottom, show up arrow
      const contactTopPos = document.querySelector('#contact-section').getBoundingClientRect().top

      if (contactTopPos === 0) {
        this.currentSection = 'contact'
        // this.showArrows = true
      }

      // b. if they're at the top, behave as if the page has just loaded
      const aboutTopPos = document.querySelector('#about-section').getBoundingClientRect().top

      if (aboutTopPos === 0) {
        this.currentSection = 'about'
        // this.showArrows = true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>

#projects-section {
  background-color: $hookers-green-transparent;
}

</style>
