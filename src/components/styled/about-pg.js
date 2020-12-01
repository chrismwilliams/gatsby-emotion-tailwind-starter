import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledAboutPg = styled.section`
  ${tw`mx-auto mt-32 px-2 text-gray-700 md:px-16`};

  h1 {
    ${tw`text-4xl font-extrabold leading-tight text-gray-800 md:text-6xl`};
  }

  > div {
    ${tw`mt-32`};
  }

  .section {
    ${tw`grid items-start grid-cols-1 mb-16 leading-loose md:grid-cols-12`};
    h2 {
      ${tw`text-xl font-semibold leading-tight md:col-span-5 md:text-3xl`};
    }
    ul,
    p {
      ${tw`mt-4 md:(mt-0 col-span-6 col-start-7 text-lg)`};
    }
    ul {
      ${tw`space-y-2`};
    }
    a {
      ${tw`border-b-2`};
    }

    &.starter {
      a {
        ${tw`border-yellow-500 hover:text-yellow-500`};
      }
    }
    &.tech {
      a {
        &.gatsby {
          ${tw`text-purple-700 border-purple-700`};
        }
        &.emotion {
          ${tw`text-pink-600 border-pink-600`};
        }
        &.tailwind {
          ${tw`text-blue-500 border-blue-500`};
        }
      }
    }
    &.features {
      ul {
        ${tw`list-disc list-inside`};
        a {
          ${tw`border-yellow-500 hover:text-yellow-500`};
        }
      }
    }
  }
`;

export default StyledAboutPg;
