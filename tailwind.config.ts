module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "700px",
          md: "900px",
          lg: "1400px", // bigger than default 1024px
          xl: "1800px", // bigger than default 1280px
          "2xl": "2000px", // bigger than default 1536px
        },
      },
    },
  },
};
