import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import StyledSocialList from './styled/social-list';

export default function SocialList(props) {
  return (
    <StyledSocialList className="social-list" {...props}>
      <li>
        <a
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </li>
    </StyledSocialList>
  );
}
