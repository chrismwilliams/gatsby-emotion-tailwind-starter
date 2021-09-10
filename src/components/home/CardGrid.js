import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import StyledCardGrid from './styled/cardGrid';
import StyledCard from './styled/card';

const tempCardData = {
  type: ['blog', 'tech', 'case study', 'learning'],
  title: [
    'Vitae tempus quam pellentesque nec',
    'Et malesuada fames ac turpis egestas integer',
    'Augue lacus viverra vitae congue',
    'Dui sapien eget mi proin sed',
    'Gravida rutrum quisque non tellus orci ac auctor',
  ],
  lorem: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras. Mauris pellentesque.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Et malesuada fames ac turpis egestas.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras.',
  ],
  getRandomItem: function (prop) {
    return this[prop][Math.floor(Math.random() * this[prop].length)];
  },
};

export default function CardGrid() {
  const { pugGallery } = useStaticQuery(CardGridQuery);
  return (
    <StyledCardGrid>
      <section>
        <h2>Example Project Cards</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
        <ul className="cards">
          {pugGallery.nodes.map((node, i) => {
            let num = i + 1;
            let image = getImage(node);
            return (
              <StyledCard as="li" title={`Project ${num}`} key={`Card ${num}`}>
                <GatsbyImage image={image} alt="Pug" placeholder="blurred" />
                <div className="card-content">
                  <span className="type">
                    {tempCardData.getRandomItem('type')}
                  </span>
                  <h3>{tempCardData.getRandomItem('title')}</h3>
                  <p>{tempCardData.getRandomItem('lorem')}</p>
                </div>
              </StyledCard>
            );
          })}
        </ul>
      </section>
    </StyledCardGrid>
  );
}

const CardGridQuery = graphql`
  query CardGridQuery {
    pugGallery: allFile(filter: { relativeDirectory: { eq: "pugs" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
