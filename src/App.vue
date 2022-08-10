<template>
  <div>
    <header-bar />
    <main>
      <sticker />
      <about />
      <div id="div3"></div>
      <div id="div4"></div>
      <div id="div5"></div>
      <div id="div6"></div>
      <div id="div7"></div>
      <div id="div8"></div>
      <div id="div9"></div>
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

<style lang="scss" scoped>
h1 {
  color: $fire-opal;

  span {
    color: $linen;
  }
}
</style>
