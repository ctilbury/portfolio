<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <header>
    <div class="header-wrap">
      <div>Colin Tilbury | Front End Developer</div>
    </div>
  </header>



</template>

<style lang="scss" scoped>

$off-white: #f5eee6;

header {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba($off-white, 0.1);
  border-top: 4px #ef6461 solid;
}

.header-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

</style>
