<template>
  <div
    id="mobile-menu"
    :class="{ 'open' : menuOpen }"
  >
    <div
      class="menu-button"
      @click="toggleMenu()"
    >
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <nav class="menu">
        <ul>
          <li>
            <a 
              href=""
              @click.prevent="scrollTo('about')"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href=""
              @click.prevent="scrollTo('projects')"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href=""
              @click.prevent="scrollTo('contact')"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    scrollTo(section) {
      this.menuOpen = false

      // wait for menu transition to finish before scrolling
      setTimeout(() => {
        this.$emit('scrollToSection', section)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>

.menu-button {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 15;
  height: 4.5rem;
  width: 4.5rem;
  padding-top: 0.5rem;
  color: $linen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.line {
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.2rem 0;
  background-color: $linen;
  transition: width 0.25s ease-in-out, transform 0.25s 0.25s ease-in-out;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100%;
  z-index: 10;
  background-color: $hookers-green;
  transition: left 0.4s 0.6s ease-in-out;
}

.open {
  .menu {
    left: 0;
  }

  .line {
    &:nth-child(1) {
      transform: translateY(0.6rem) rotate(45deg);
    }

    &:nth-child(2) {
      width: 0;
    }

    &:nth-child(3) {
      transform: translateY(-0.6rem) rotate(-45deg);
    }
  }
}

nav {
  padding-top: 9rem;
  text-align: center;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: $linen;
    text-decoration: none;
    font-family: 'Bebas Neue', cursive;
    line-height: 1.1;
    letter-spacing: 1px;
    font-size: 3.5rem;
  }
}

@media screen and (min-width: 600px) {
  .menu-button {
    display: none;
  }
}

</style>
