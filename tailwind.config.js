module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
   extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676')",
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ], 
}
