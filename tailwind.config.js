module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          25: "#f6f8ff",
        },
        Orangee: "#ff8c00",
        Blancc: "#fefefe",
        Noirr: "#1a2023",
      },

      fontFamily: {
        quicksand: "Quicksand",
        inter: "Inter",
      },

      fontsize: {
        base: "1rem",
        lg: "1.5rem",
        xl: "2.25rem",
        "2xl": "3.75rem",
      },

      borderRadius: {
        none: "0",
        xs: "0.625rem",
        sm: "1.25rem",
      },
    },
  },
  plugins: [],
};
