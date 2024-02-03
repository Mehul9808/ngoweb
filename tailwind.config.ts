import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/lib/**/*.js",
    
  ],
  theme: {
    colors:
    {
     'primary': '#36BA24',
     'wheat': '#EEE2DC',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
     
    },
  },
  
  plugins: [
    require("flowbite/plugin")
  ],
  // plugins: [require("daisyui")],
}
export default config
