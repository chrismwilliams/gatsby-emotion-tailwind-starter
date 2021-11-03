import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import StyledCardGrid from './styled/cardGrid';
import StyledCard from './styled/card';

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <section>
        <h2>Example Project Cards</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
        <ul className="cards">
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-1.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">blog</span>
              <h3>Vitae tempus quam pellentesque nec</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                vel risus commodo viverra.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-2.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">tech</span>
              <h3>Et malesuada fames ac turpis egestas integer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-3.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">case study</span>
              <h3>Augue lacus viverra vitae congue</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                et tortor consequat id porta nibh venenatis cras. Mauris
                pellentesque.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-4.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">blog</span>
              <h3>Dui sapien eget mi proin sed</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum dolor sit amet consectetur. Et malesuada fames ac turpis
                egestas.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-5.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">learning</span>
              <h3>Gravida rutrum quisque non tellus orci ac auctor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                viverra aliquet eget sit amet tellus cras.
              </p>
            </div>
          </StyledCard>
        </ul>
      </section>
    </StyledCardGrid>
  );
}
