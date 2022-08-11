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
      showModal: false
    }
  },
  methods: {
    scrollToSection(newSection) {
      this.currentSection = newSection
      const el = this.$refs[`${newSection}Section`]

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
