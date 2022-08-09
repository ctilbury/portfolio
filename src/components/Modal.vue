<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >
              OK
            </button>
          </slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(18, 22, 25, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $linen;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  color: $rich-black;
}

.modal-header h3 {
  margin-top: 0;
  color: $tuscan-red;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

// The following styles are auto-applied to elements 
// with transition="modal" when their visibility is toggled by Vue.js:

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
