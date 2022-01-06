import tw, { styled } from 'twin.macro';

const StyledNav = styled.nav`
  ${tw`grid grid-template-columns[1fr repeat(2, minmax(min-content, max-content))] gap-x-2 text-center place-items-center`};

  .logo {
    ${tw`flex items-center py-2 justify-self-start md:justify-center`};
    svg {
      ${tw`block w-10 h-12 md:(w-14 h-16)`};
    }
  }

  a:not(.logo) {
    ${tw`flex items-center p-3 motion-safe:transition duration-200 tracking-wide border-b-2 border-transparent md:(ml-0 px-10 text-lg) hover:text-yellow-500`};
    &[aria-current='page'],
    &:hover {
      ${tw`border-yellow-500`};
    }
  }
`;

export default StyledNav;
