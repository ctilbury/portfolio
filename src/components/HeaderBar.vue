<template>
  <header>
    <div class="header-wrap">
      <div>Colin Tilbury | Front End Developer</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $rich-black;
  border-top: 0.5rem $hookers-green solid;
}

.header-wrap {
  max-width: 1280px;
  margin: 0 auto;
  height: 4rem;
  display: flex;
  align-items: center;
}
</style>
