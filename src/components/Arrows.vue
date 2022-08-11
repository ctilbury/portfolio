<template>
  <div id="arrows">
    <a
      v-show="section !== 'about'"
      href=""
      class="nav-arrow arrow-up"
      @click.prevent="scroll('up')"
    >
      <img
        src="../assets/images/arrow-up.png"
        alt="up arrow"
      />
    </a>
    <a
      v-show="section !== 'contact'"
      href=""
      class="nav-arrow arrow-down"
      @click.prevent="scroll('down')"
    >
      <img
        src="../assets/images/arrow-down.png"
        alt="down arrow"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Arrows',
  props: {
    section: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sections: [
        'about',
        'projects',
        'contact'
      ]
    }
  },
  methods: {
    scroll(direction) {
      let sectionIndex = this.sections.indexOf(this.section)
      direction === 'down' ? sectionIndex++ : sectionIndex--
      const newSection = this.sections[sectionIndex]
      this.$emit('scrollToSection', newSection)
    }
  }
}
</script>

<style lang="scss" scoped>
#arrows {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.nav-arrow {
  position: absolute;
  right: 1.5rem;
  display: block;
  width: 5rem;
  cursor: pointer;

  &.arrow-up {
    top: 6rem;
  }

  &.arrow-down {
    bottom: 1.5rem;
  }

  img {
    width: 100%;
    display: block;
  }
}
</style>
