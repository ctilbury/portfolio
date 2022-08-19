<template>
  <div id="skills">
    <img src="../assets/images/skills-icons/html.png" />
    <img src="../assets/images/skills-icons/css.png" />
    <img src="../assets/images/skills-icons/js.png" />
    <img src="../assets/images/skills-icons/vue.png" />
    <img src="../assets/images/skills-icons/react.png" />
    <img src="../assets/images/skills-icons/ts.png" />
    <img src="../assets/images/skills-icons/sass.png" />
  </div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style lang="scss" scoped>

#skills {
  background-color: $rich-black;
  padding: 1.5rem 0 1.5rem 1rem;
  display: flex;
}

img {
  display: block;
  height: 2.5rem;
  width: auto;
}

@media screen and (min-width: 600px) {
  #skills {
    padding-left: 2rem;
  }

  img {
    height: 4rem;
  }
}

</style>
