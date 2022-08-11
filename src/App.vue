<template>
  <div>
    <header-bar />
    <main>
      <section
        id="about-section"
        ref="aboutSection"
      >
        <sticker />
        <about />
      </section>
      <section
        id="projects-section"
        ref="projectsSection"
      >
      </section>
      <section
        id="contact-section"
        ref="contactSection"
      >
      </section>
    </main>
    <arrows
      v-if="showArrows"
      :section="currentSection"
      :scrolled-to-bottom="scrolledToBottom"
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
import Arrows from './components/Arrows.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    HeaderBar,
    Sticker,
    About,
    Arrows,
    Modal
  },
  data() {
    return {
      currentSection: 'about',
      showArrows: true,
      scrolledToBottom: false,
      showModal: false
    }
  },
  methods: {
    scrollToSection(newSection) {
      window.removeEventListener('scroll', this.handleScroll)

      this.currentSection = newSection
      const el = this.$refs[`${newSection}Section`]

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }

      // need to re-add scroll event listener after a timeout
    },

    handleScroll() {
      // if the user scrolls manually, hide the arrows
      this.showArrows = false

      // when they stop scrolling:
      // a. if they're at the bottom -> show a 'back to top' arrow
      // b. if they're at the top -> behave as if the page has just loaded

      const contactTopPos = document.querySelector('#contact-section').getBoundingClientRect().top

      if (contactTopPos === 0) {
        this.showArrows = true
        this.currentSection = 'contact'
        this.scrolledToBottom = true
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
