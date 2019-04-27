import React from 'react';

import {
  Layout,
  SEO,
  Hero,
  ContentWrapper,
  CardGrid,
  Card,
} from '../components/elements';

export default function indexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css"
        keywords={[`starter`, `gatsby`, `javascript`, `react`]}
      />
      <Hero />
      <ContentWrapper>
        <CardGrid>
          <Card title="Card 1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              labore repellat maxime tempore incidunt nemo vero voluptatibus
              debitis aut, quam ipsam. Nostrum placeat ad animi eligendi. Ea,
              laboriosam in?
            </p>
          </Card>
          <Card title="Card 2">
            <p>
              Distinctio similique modi doloremque maxime explicabo neque
              expedita reiciendis? Omnis earum consequatur expedita, placeat
              praesentium incidunt possimus fugit id labore pariatur cumque
              recusandae, quibusdam commodi accusantium temporibus consectetur!
            </p>
          </Card>
          <Card title="Card 3">
            <p>
              Debitis, animi! Ipsam dolorem tenetur accusantium repellat,
              dolorum deserunt aliquam neque atque nemo, ullam quas. Qui
              blanditiis aliquam, adipisci suscipit ex eum ullam eligendi
              obcaecati illo porro eos consequuntur eius minima non.
            </p>
          </Card>
          <Card title="Card 4">
            <p>
              Aliquam, dolores ab. Labore consequatur, ad magni omnis totam
              fugiat, nobis recusandae placeat at eius nesciunt cum voluptate
              dolor optio! Reiciendis vitae repellat sequi in culpa ut illo
              nostrum odit. Eaque quas delectus rem, nesciunt perferendis
              asperiores amet possimus nisi et! Veniam ab quam architecto
              debitis soluta.
            </p>
          </Card>
        </CardGrid>
      </ContentWrapper>
    </Layout>
  );
}
