<template>
  <div id="about">
    <h1>COLIN TILBURY</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor sed ipsum nec dignissim. Vivamus nec metus aliquam velit bibendum egestas eu ac lorem. Vestibulum ultrices elit tortor. Vivamus ultrices sollicitudin dapibus. Mauris ac augue quis odio tempor bibendum in vitae nisl. Maecenas eget tellus placerat, tristique lectus tempus, iaculis sem. Nunc urna nisl, tincidunt ut semper sit amet, condimentum sit amet est. Mauris nisl nulla, vestibulum vitae vehicula faucibus, ornare interdum nisl. Donec iaculis commodo volutpat.</p>
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
