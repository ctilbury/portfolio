<template>
  <div id="about">
    <h1>COLIN TILBURY</h1>
    <p>I'm a front end developer based in Derbyshire, UK, with years of experience building responsive websites and user interfaces. I love solving problems and creating things.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>

h1 {
  padding-left: 1rem;
}

p {
  background-color: $rich-black-transparent;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
}

@media screen and (min-width: 600px) {
  #about {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    padding-left: 2rem;
  }

  p {
    border-radius: 0.4rem;
    padding: 1.5rem 2rem;
    margin-bottom: 0;
  }
}

</style>
