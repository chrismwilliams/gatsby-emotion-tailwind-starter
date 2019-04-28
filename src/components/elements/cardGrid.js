import React from 'react';
import styled from '@emotion/styled';

import Card from './card';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`;

export default function cardGrid(props) {
  return (
    <CardGrid {...props}>
      <Card title="Card 1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          labore repellat maxime tempore incidunt nemo vero voluptatibus debitis
          aut, quam ipsam. Nostrum placeat ad animi eligendi. Ea, laboriosam in?
        </p>
      </Card>
      <Card title="Card 2">
        <p>
          Distinctio similique modi doloremque maxime explicabo neque expedita
          reiciendis? Omnis earum consequatur expedita, placeat praesentium
          incidunt possimus fugit id labore pariatur cumque recusandae,
          quibusdam commodi accusantium temporibus consectetur!
        </p>
      </Card>
      <Card title="Card 3">
        <p>
          Debitis, animi! Ipsam dolorem tenetur accusantium repellat, dolorum
          deserunt aliquam neque atque nemo, ullam quas. Qui blanditiis aliquam,
          adipisci suscipit ex eum ullam eligendi obcaecati illo porro eos
          consequuntur eius minima non.
        </p>
      </Card>
      <Card title="Card 4">
        <p>
          Aliquam, dolores ab. Labore consequatur, ad magni omnis totam fugiat,
          nobis recusandae placeat at eius nesciunt cum voluptate dolor optio!
          Reiciendis vitae repellat sequi in culpa ut illo nostrum odit. Eaque
          quas delectus rem, nesciunt perferendis asperiores amet possimus nisi
          et! Veniam ab quam architecto debitis soluta.
        </p>
      </Card>
    </CardGrid>
  );
}
