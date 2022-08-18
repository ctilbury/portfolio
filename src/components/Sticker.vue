<template>
  <div id="sticker">
    <div id="sticker-peel" class="peel hidden">
      <div class="peel-top">
        <img src="../assets/images/sticker.png" />
      </div>
      <div class="peel-back" />
      <div class="peel-bottom" />
    </div>
    <img
      src="../assets/images/arrow-down.png"
      alt="down arrow"
      class="nav-arrow"
    />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Sticker',
  methods: {
    initSticker() {
      this.getAvailableArea()
    },
    getAvailableArea() {
      // get the dimensions of the #sticker div
      const stickerArea = document.querySelector('#sticker')
      const stickerAreaWidth = stickerArea.offsetWidth
      let stickerAreaHeight = stickerArea.offsetHeight

      // there won't be any horizontal padding but there may be vertical padding
      const stickerAreaStyles = getComputedStyle(stickerArea)
      let paddingTop = stickerAreaStyles['paddingTop']
      let paddingBottom = stickerAreaStyles['paddingBottom']

      // these are returned as strings with 'px' at the end, we just want the numbers
      paddingTop = parseInt(paddingTop.substring(0, paddingTop.length - 2))
      paddingBottom = parseInt(paddingBottom.substring(0, paddingBottom.length - 2))
      const totalPadding = paddingTop + paddingBottom
      stickerAreaHeight = stickerAreaHeight - totalPadding

      this.calculateStickerDimensions(stickerAreaWidth, stickerAreaHeight)

    },
    calculateStickerDimensions(areaWidth, areaHeight) {
      // intrinsic size of image is 640 x 854 (w x h)
      const widthMultiplier = 640 / 854
      const heightMultiplier = 854 / 640
      let stickerWidth, stickerHeight
      const isNarrowViewport = window.innerWidth < 600

      // on narrow screens, use full width available and set the height in proportion
      // on wider screens, base it on the height but reduce size a bit to leave a bit of space around the outside
      if (isNarrowViewport) {
        stickerWidth = areaWidth
        stickerHeight = Math.round(stickerWidth * heightMultiplier)
      } else {
        stickerHeight = Math.round(areaHeight * 0.9)
        stickerWidth = Math.round(stickerHeight * widthMultiplier)
      }

      // for tall and wide screens
      if (stickerWidth > 640 ) {
        stickerWidth = 640
        stickerHeight = Math.round(stickerWidth * heightMultiplier)
      }

      const sticker = document.querySelector('.peel')
      sticker.style.width = `${stickerWidth}px`
      sticker.style.height = `${stickerHeight}px`

      if (!isNarrowViewport) {
        this.setStickerRotation()
      }

      this.setUpPeel(stickerWidth, stickerHeight)
    },
    setStickerRotation() {
      // give the sticker a random slight rotation
      const sticker = document.querySelector('#sticker-peel')
      const angle = (Math.random() * 10) - 5;
      sticker.style.transform = `rotate(${angle}deg)`
    },
    setUpPeel(peelWidth, peelHeight) {
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
      let offsetX = peelWidth / -8
      let offsetY = peelHeight * 2.25
      p.setPeelPosition(offsetX, offsetY)

      // path to return it to an 'unpeeled' position
      p.setPeelPath(offsetX, offsetY, peelWidth, 0);

      // animate the sticking down effect
      p.t = 0;
      gsap.to(p, {
        t: 1,
        delay: 1,
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
    this.initSticker()
  }
}
</script>

<style lang="scss" scoped>

#sticker {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#sticker-peel {
  transition: opacity 0.15s ease-in-out;
}

.peel {
  img {
    display: block;
    width: 100%;
  }
}

.hidden {
  opacity: 0;
}

.peel-back {
  background-color: $linen;
}

.peel-bottom {
  background: transparent;
}

.nav-arrow {
  display: block;
  width: 5rem;
  opacity: 0;
  animation: arrowBounce 2s 4s 1 ease-in-out; // duration 2s, delay 4s, 1 repeat
}

@media screen and (min-width: 600px) {
  #sticker {
    justify-content: center;
  }

  .nav-arrow {
    display: none;
  }
}

</style>
