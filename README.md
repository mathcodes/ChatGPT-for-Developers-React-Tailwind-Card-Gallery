# The 4 Steps to Install TailwindCSS Into Your React App

## Install TailwindCSS

```
npm install -D tailwindcss postcss autoprefixer
```

## Initialize TailwindCSS


```
npx tailwindcss init -p
```

## Configure TailwindCSS in `tailwind.config.js`


```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Place classes in `index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```