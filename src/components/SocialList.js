import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faDiscord,
  faDev,
} from '@fortawesome/free-brands-svg-icons';

import { StyledSocialList, StyledButton } from './styled';

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDev} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </StyledButton>
      </li>
    </StyledSocialList>
  );
}
