<template>
  <div id="sticker">
    <div id="sticker-peel" class="peel hidden">
      <div class="peel-top">
        <img src="../assets/images/sticker.png" />
      </div>
      <div class="peel-back" />
      <div class="peel-bottom" />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Sticker',
  methods: {
    setUpPeel() {
      const p = new Peel('#sticker-peel', {
        corner: Peel.Corners.TOP_RIGHT,
        topShadowAlpha: 0.8,
        topShadowBlur: 20,
        backShadowSize: 0.05,
        backShadowAlpha: 0.15,
        backReflection: true,
        backReflectionSize: 0.02,
        backReflectionAlpha: 0.25,
        bottomShadowDarkAlpha: 1,
        bottomShadowLightAlpha: 0.3,
      })

      // set the initial position to be peeled off
      p.setPeelPosition(-40, 960)
      // return it to an 'unpeeled' position
      p.setPeelPath(-40, 960, 320, 0);

      // animate the sticking down effect
      p.t = 0;
      gsap.to(p, {
        t: 1,
        delay: 0.5,
        duration: 1.75,
        ease: 'power4.out',
        onStart: () => {
          document.querySelector('#sticker-peel').classList.remove('hidden');
        },
        onUpdate: () => {
          p.setTimeAlongPath(p.t)
        }
      })
    }
  },
  mounted() {
    this.setUpPeel()
  }
}
</script>

<style lang="scss" scoped>

#sticker {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-5deg);
}

#sticker-peel {
  transition: opacity 0.15s ease-in-out;
}

.peel {
  width: 320px;
  height: 427px;
  margin: auto;
}

.hidden {
  opacity: 0;
}

img {
  display: block;
  width: 100%;
}

.peel-back {
  background-color: $linen;
}

.peel-bottom {
  background: transparent;
}

</style>
