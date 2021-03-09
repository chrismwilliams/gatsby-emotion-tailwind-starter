import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Card from './card';
import StyledCardGrid from './styled/card-grid';

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
  return (
    <StyledCardGrid>
      <h2>Example Project Cards</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipiscing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>
      <div className="cards">
        <Card title="Project 1">
          <StaticImage
            src="../../images/pugs/pug-1.jpg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">{tempCardData.getRandomItem('type')}</span>
            <h3>{tempCardData.getRandomItem('title')}</h3>
            <p>{tempCardData.getRandomItem('lorem')}</p>
          </div>
        </Card>
        <Card title="Project 2">
          <StaticImage
            src="../../images/pugs/pug-2.jpg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">{tempCardData.getRandomItem('type')}</span>
            <h3>{tempCardData.getRandomItem('title')}</h3>
            <p>{tempCardData.getRandomItem('lorem')}</p>
          </div>
        </Card>
        <Card title="Project 3">
          <StaticImage
            src="../../images/pugs/pug-3.jpg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">{tempCardData.getRandomItem('type')}</span>
            <h3>{tempCardData.getRandomItem('title')}</h3>
            <p>{tempCardData.getRandomItem('lorem')}</p>
          </div>
        </Card>
        <Card title="Project 4">
          <StaticImage
            src="../../images/pugs/pug-4.jpg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">{tempCardData.getRandomItem('type')}</span>
            <h3>{tempCardData.getRandomItem('title')}</h3>
            <p>{tempCardData.getRandomItem('lorem')}</p>
          </div>
        </Card>
        <Card title="Project 5">
          <StaticImage
            src="../../images/pugs/pug-5.jpg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">{tempCardData.getRandomItem('type')}</span>
            <h3>{tempCardData.getRandomItem('title')}</h3>
            <p>{tempCardData.getRandomItem('lorem')}</p>
          </div>
        </Card>
      </div>
    </StyledCardGrid>
  );
}
