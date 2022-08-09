<template>
  <div>
    <header-bar />
    <div class="page-wrap">
      <main>
        <div id="div1">
          <h1>
            <span>hello</span>
          </h1>
        </div>
        <div id="div2">
          <text-examples
            msg="test"
          />
        </div>
        <div id="div3"></div>
        <div id="div4"></div>
        <div id="div5"></div>
        <div id="div6"></div>
        <div id="div7"></div>
        <div id="div8"></div>
        <div id="div9"></div>
      </main>
    </div>
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
import TextExamples from './components/TextExamples.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    HeaderBar,
    TextExamples,
    Modal
  },
  data() {
    return {
      showModal: true
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
