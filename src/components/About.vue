<template>
  <div id="about">
    <p class="header">COLIN TILBURY</p>
    <p class="w-300">{{ msg }} Light</p>
    <p class="w-400">{{ msg }} Regular</p>
    <p class="w-500">{{ msg }} Medium</p>
    <p class="w-600">{{ msg }} Semibold</p>
    <p class="w-700">{{ msg }} Bold</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
p {
  font-size: 2rem;
}

.header {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 1px;
}

.w-300 {
  font-weight: 300;
}
.w-400 {
  font-weight: 400;
}
.w-500 {
  font-weight: 500;
}
.w-600 {
  font-weight: 600;
}
.w-700 {
  font-weight: 700;
}

</style>
