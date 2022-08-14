<template>
  <header>
    <div class="header-wrap">
      <div>Colin Tilbury | Front End Developer</div>
      <nav class="menu">
        <ul>
          <li>
            <a 
              href=""
              @click.prevent="scrollTo('about')"
            >
              About
            </a>
            <span class="divider">|</span>
          </li>
          <li>
            <a 
              href=""
              @click.prevent="scrollTo('projects')"
            >
              Projects
            </a>
            <span class="divider">|</span>
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
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    scrollTo(section) {
      this.$emit('scrollToSection', section)
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.2rem;
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $rich-black;
  border-top: 0.5rem $hookers-green solid;
  z-index: 5;
}

.header-wrap {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

nav {
  display: none;
}

@media screen and (min-width: 600px) {
  nav {
    display: block;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: inline;
    }

    a {
      color: $linen;
      text-decoration: none;
    }

    .divider {
      display: inline-block;
      padding: 0 4px;
    }
  }
}

@media screen and (min-width: 1280px) {

  $max-container-width: 1280px;
  $gutter-width: calc((100vw - $max-container-width) / 2);

  header {
    display: grid;
    grid-template-columns: $gutter-width auto $gutter-width;
}

  .header-wrap {
    grid-column: 2 / 3;
    padding: 0;
  }

}

</style>
