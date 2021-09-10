<p align="center">
  <img alt="Gatsby" src="./src/images/icon/logo.png" width="80" />
</p>
<h1 align="center">
  Gatsby Emotion Tailwind Starter
</h1>

<p align="center">
  <img src="https://api.netlify.com/api/v1/badges/55304957-dc11-4f85-9975-157021aa405a/deploy-status" alt="Netlify Deploy Status">
</p>

A starter template to create a lightening-fast static website. Comes pre-built with Gatsby, Emotion, and Tailwind to get you up and running quickly. Inspired by the [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

[Demo](https://gatsby-emotion-tailwind-starter.netlify.app) hosted on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter)

## Features

- React static generator [GatsbyJS](https://www.gatsbyjs.org/) v2
- CSS-in-JS library [Emotion](https://emotion.sh/) for your styled components
- CSS utility framework [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) to quickly add style
- Offline Support
- Progressive Web App
- Lazy loading images with webp support
- Auto-Generated sitemap
- Dark Mode
- Google Analytics

## Getting started

```sh
# download the template zip via dropdown or
git clone https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter.git
```

## Start developing

_Navigate into template directory_

```sh
# install dependencies
npm install
# yarn
yarn

# development with hot re-load
npm run dev
# yarn
yarn dev

# build for production
npm run build
# yarn
yarn build
```

**Using Emotion & Tailwind**

With the CSS utility library Tailwind you can quickly add styles and responsive design, all without having to write any css. Emotion allows you to name and style elements within your js files.

```JSX
/*
  import tw, { styled } from 'twin.macro';

  ** Creating a styled div, centering children via flex-box **
*/

const StyledDiv = styled.div`
  ${tw`flex justify-center items-center`}
`

/*
  ** Or with grid **
*/
const AltStyledDiv = tw.div`grid place-content-center place-items-center`

return (
 <>
    <StyledDiv>
      <p>I'm centred</p>
      <p>Me too!</p>
    </StyledDiv>
    <AltStyledDiv>
      <p>Same here</p>
    </AltStyledDiv>
 </>
);
```

The [tailwind docs](https://tailwindcss.com) is a great resource to get you started. The starter uses [twin.macro](https://github.com/ben-rogerson/twin.macro) which is a fantastic library, and includes many additional variants.

**Customisation**

- [Tailwind config](https://tailwindcss.com/docs/configuration). Open up the `tailwind.config.js` file to set your own project preferences & requirements, such as break-points, colours, and fonts.

- A layout component (`src/components/Layout.js`) is used for setting a standardised default layout to wrap pages.

- Dark & Light mode. Open up `src/components/styled/baseStyles.js` and `tailwind.config.js` to see where/how CSS custom properties are added.

- This template uses the plugin [typefaces](https://github.com/KyleAMathews/typefaces/blob/master/README.md) to optimise font delivery. Changing font(s) simply requires installing your favourite typeface-font and importing into `gatsby-browser.js`. Remember to add your font(s) into `tailwind.config.js`, either the fonts sans/serif array, in order to use it with tailwind utilities.

- SEO component, taken from [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog), allowing you to add your SEO descriptions & title's.

- Favicon. Auto-generated from [gatsby-plugin-manifest](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest#readme) set in `gatsby-config.js`. Replace the current favicon (`src/images/icon/logo.png`) with your own 512x512 icon

- Analytics. Add your google analytics id via an .env file `GOOGLE_ANALYTICS` to get started.
