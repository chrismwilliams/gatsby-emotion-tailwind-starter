<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="./src/images/icon/logo.png" width="80" />
  </a>
</p>
<h1 align="center">
  Gatsby Emotion Tailwind Starter
</h1>

A starter template to create lightening fast static websites. Comes pre-built with Gatsby, Emotion, and Tailwind to get you up and running quickly. Inspired by [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

[Demo](https://gatsby-emotion-tailwind-starter.netlify.com) hosted on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter)

## Features

- React static generator [GatsbyJS](https://www.gatsbyjs.org/) v2
- CSS-in-JS library [Emotion](https://emotion.sh/) for your styled components
- CSS utility framework [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) to quickly add style
- Built to customise à la carte to your preference and/or work-flow
- Offline Support
- Progressive Web App
- Lazy loading images with webp support
- Auto-Generated sitemap
- Google Analytics

## Getting started

```sh
# downloading the template
git clone https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter.git
```

## Start developing

_Navigate into template directory_

```sh
# install dependencies
yarn install

# run development
yarn dev

# run a build
yarn build
```

**Using Emotion & Tailwind**

With the CSS utility library Tailwind you can quickly add styles, even adding responsive styles for different screen sizes without having to write any css. Emotion allows you to name and style elements within your js files.

```JSX
/*
  remember to import styled from 'emotion'
  creating a styled div, centring children using flex
*/

const StyledDiv = styled.div`
  ${tw`flex justify-center items-center`}
`

return (
  <StyledDiv>
    <p>I'm centred</p>
    <p>Me too!</p>
  </StyledDiv>
);
```

The [tailwind website](https://tailwindcss.com/docs/what-is-tailwind/) has great documentation to get you started.

**Customisation**

- [Tailwind config](https://tailwindcss.com/docs/configuration). Open up the tailwind.js file to set your own project preferences & requirements, such as break-points, colors, and fonts

- Edit the global styles (`src/styles/global.js`) which is injected into every page, or remove entirely

- A layout component (`src/components/elements/layout.js`) is used for wrapping every page, setting a default layout and importing the template's Open Sans font

- This template uses the plugin [gatsby-plugin-subfont](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-subfont#readme) together with [typefaces](https://github.com/KyleAMathews/typefaces/blob/master/README.md) to optimise font delivery. Changing font(s) simply requires installing your favourite typeface-font and importing into layout.js, or removing it altogether. Remember to add your font(s) into the tailwind.js config, into either the fonts sans/serif array, in order to use it with tailwind

- SEO component, taken from [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog), allowing you to add your meta/descriptions/title's

- Favicon. Auto-generated from [gatsby-plugin-manifest](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest#readme) set in `gatsby-config.js`. Replace the current favicon (`src/images/icon/logo.png`) with your own 512x512 icon

- Analytics. Add your google analytics id into the `gatsby-config.js` file to get started
