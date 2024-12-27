/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If you are using Vite, include this.
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src folder.
  ],
  theme: {
    extend: {}, // Add customizations here if needed
  },
  plugins: [], // Add plugins here if needed
};

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         gradientStart: "#000428",
//         gradientEnd: "#004e92",
//       },
//       backgroundImage: {
//         'custom-gradient': 'linear-gradient(to right, #000428, #004e92)',
//       },
//     },
//   },
//   plugins: [],
// };
