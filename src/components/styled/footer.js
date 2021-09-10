import tw, { styled } from 'twin.macro';

const StyledFooter = styled.footer`
  ${tw`grid py-6 text-3xl border-t-2 mt-28 md:mt-40 place-items-center gap-y-4`};

  .title {
    ${tw`grid grid-flow-col text-lg font-semibold text-transparent gap-x-2 place-items-center bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500`};

    svg {
      ${tw`inline-block w-8 h-10 md:(w-10 h-12)`};
    }
  }
  .author {
    ${tw`text-sm font-light`};
    a {
      ${tw`tracking-wider border-b-2 border-yellow-500 hover:text-yellow-500`};
    }
  }
`;

export default StyledFooter;
