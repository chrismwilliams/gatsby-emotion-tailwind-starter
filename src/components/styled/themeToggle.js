import tw, { styled } from 'twin.macro';

const StyledToggle = styled.label`
  ${tw`inline-grid self-center grid-template-areas["input label"] grid-template-columns[2.5rem auto] gap-1 items-center text-sm`};
  input,
  span {
    ${tw`grid-area[input] h-3 w-8 text-base`};
  }
  input {
    ${tw`opacity-0`};
  }
  span {
    ${tw`items-center bg-indigo-500 inline-grid opacity-80 rounded-2xl`};

    &::before {
      ${tw`w-4 h-4 transform transition-all -translate-y-0.5 duration-200 bg-white border-2 border-indigo-500 rounded-full content`};
    }
  }
  input:checked + span::before {
    ${tw`translate-x-4 bg-gray-800`};
  }
  input:focus + span::before {
    ${tw`ring-2 ring-indigo-800`};
  }
  input:checked:focus + span::before {
    ${tw`ring-2 ring-white`};
  }
`;

export default StyledToggle;
