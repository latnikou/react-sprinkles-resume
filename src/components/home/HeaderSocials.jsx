import React from "react";
import { faTwitter, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faTwitter, faTelegram, faGithub)

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://github.com/latnikou"  className="home__social-link" rel="noreferrer" target="_blank">
      <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>

      <a href="https://twitter.com/latnikov"  className="home__social-link" rel="noreferrer" target="_blank">
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
      </a>

      <a href="https://t.me/latnikov"  className="home__social-link" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon="fa-brands fa-telegram" />
      </a>
    </div>
  );
};

export default HeaderSocials;
