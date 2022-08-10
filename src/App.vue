<template>
  <div>
    <header-bar />
    <main>
      <section id="about-section">
        <sticker />
        <about />
      </section>
      <section id="projects-section"></section>
      <section id="contact-section"></section>
    </main>
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
import Modal from './components/Modal.vue'

export default {
  components: {
    HeaderBar,
    Sticker,
    About,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>
