import tw, { styled } from 'twin.macro';

const StyledButton = styled.button`
  ${tw`inline-flex items-center justify-center p-0 px-6 py-2 text-xl leading-tight text-center text-white no-underline motion-safe:transition duration-200 bg-purple-600 border-none rounded-md shadow-md hover:bg-purple-800 active:bg-purple-800 focus:(outline-none ring-4 ring-purple-300)`};
`;

export default StyledButton;
