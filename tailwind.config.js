module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/assets/images/bg.png')",
        'appointment-bg': "url('/src/assets/images/appointment.png')",
        'footer-bg': "url('/src/assets/images/footer.png')"
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      }
    ]
  },
}
