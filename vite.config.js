const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = {
  plugins: [createVuePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/variables.scss";
          @import "./src/assets/styles/animation.scss";
        `
      }
    }
  }
};