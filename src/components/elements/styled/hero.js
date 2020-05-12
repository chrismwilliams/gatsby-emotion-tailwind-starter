import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledHero = styled.div`
  min-height: calc(100vh - 250px);
  .hero-wrapper {
    ${tw`grid grid-cols-1 mt-16 px-2 md:mt-32 md:grid-cols-6 md:px-16`};

    .hero-welcome {
      ${tw`md:pr-16 md:col-start-1 md:col-end-5 md:row-start-1`};
      h1 {
        ${tw`text-4xl font-extrabold leading-tight text-gray-800 md:text-6xl`};
        .greeting {
          ${tw`block mb-6 text-3xl md:text-4xl`};
        }
        span[role='img'] {
          ${tw`ml-4`};
        }
        .gatsby {
          ${tw`text-purple-700`};
        }
      }
    }

    .hero-img {
      ${tw`flex mt-4 md:pl-16 md:mt-0 md:col-start-4 md:col-end-7 md:row-start-1`};
    }

    h2 {
      ${tw`mt-12 text-xl font-light leading-loose text-gray-700 md:text-2xl md:col-span-6`};
      a {
        ${tw`border-b-2 border-orange-500 hover:text-orange-500`};
      }
    }

    .tech {
      ${tw`mt-12 md:mt-24 md:col-span-6`};
      ul {
        ${tw`grid items-center grid-cols-1 gap-2 md:grid-cols-3 md:gap-8`};
        li {
          ${tw`w-full mx-auto md:mx-0`};
          max-width: 200px;
          img {
            ${tw`object-contain!`};
          }
        }
      }
    }
  }
`;

export default StyledHero;
