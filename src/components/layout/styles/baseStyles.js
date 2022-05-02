import tw, { css, theme } from 'twin.macro';

export const LightBackground = theme`colors.white`;
export const DarkBackground = theme`colors.gray.700`;

const baseStyles = css`
  .light {
    --bg-primary: ${LightBackground};
    --text-primary: ${theme`colors.gray.600`};
    --text-dark: ${theme`colors.gray.700`};
  }

  .dark {
    --bg-primary: ${DarkBackground};
    --text-primary: ${theme`colors.purple.50`};
  }

  body {
    ${tw`font-sans font-normal bg-primary text-primary before:(block w-full)`};
    &::before {
      ${tw`h-1 bg-gradient-to-r from-purple-800 via-yellow-400 to-turquoise`};
    }

    #___gatsby {
      ${tw`max-w-5xl min-h-screen mx-auto px-2 lg:px-0`};
    }

    a {
      ${tw`focus:(outline-none) focus-visible:(outline-none ring-2 ring-purple-300)`};
    }

    #skip-link {
      ${tw`sr-only focus:(not-sr-only fixed left-1 top-1.5 bg-primary)`};
    }
  }
`;

export default baseStyles;
