# ChatGPT for Developers - React Tailwind Card Gallery

Learn how to utilize ChatGPT to expedite your workflow by following this YouTub series with code samples and tutorials! [CLICK HERE](https://www.youtube.com/watch?v=M4tb5bNkOVA) for the video!


## The 4 Steps to Install TailwindCSS Into Your React App

### Install TailwindCSS

```
npm install -D tailwindcss postcss autoprefixer
```

### Initialize TailwindCSS


```
npx tailwindcss init -p
```

### Configure TailwindCSS in `tailwind.config.js`


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

### Place classes in `index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Contact
<img src="https://avatars0.githubusercontent.com/u/17928947?v=4" alt="Github profile image" width="80px" height="80px" />

__Jon Christie__ 

GitHub: [mathcodes](https://github.com/mathcodes) 

[<code><img width="36px" src="https://img.icons8.com/color/48/000000/linkedin.png"/></code>](https://www.linkedin.com/jonpchristie)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/twitter--v2.png"/></code>](https://twitter.com/jcircle9)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/youtube-play.png"/></code>](https://www.youtube.com/channel/UC5GFnN-lv8Yuqc9O3b79k6g)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/facebook.png"/></code>](https://www.facebook.com/jonpchristie)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"/></code>](https://www.instagram.com/jcirclenine)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/soundcloud.png"/></code>](https://soundcloud.com/jonchristie#/)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/spotify--v1.png"/></code>](https://open.spotify.com/artist/07S7aLfxH70VAX64g1WuFw?si=tlOj1OMBRLm-y4sY8Lox3Q)
