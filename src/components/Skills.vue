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
  padding: 1.5rem 0;
  display: flex;
}

img {
  display: block;
  height: 46px;
  width: auto;
}

</style>
