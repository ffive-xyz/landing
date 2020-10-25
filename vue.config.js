module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/website-branding/scss/_globals.scss";
          `
      }
    }
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
};
