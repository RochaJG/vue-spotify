module.exports = {
  devServer: {
    disableHostCheck: true
  },

  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
}
