import React from 'react';
import styled from '@emotion/styled';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`;

export default function cardGrid(props) {
  return <CardGrid>{props.children}</CardGrid>;
}
