import React from 'react';
import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerWrap'>
        <div className='footerLinksContainer'>

          <div className='footerLinkInfo'>
            <p>About me</p>
            <p>
              Looking for an experienced junior developer to build your
              web app or ship your software product? I'm currently
              looking for new opportunities, my inbox is always open, just drop me an email at {' '}
              <a
                className='footer-link'
                href='mailto:vihrogonov@yahoo.com'
                title='Email'
                target='_blank'
                rel="noopener noreferrer"
              >
                vihrogonov@gmail.com
              </a>{' '}
              or use the channels below to get in touch.
            </p>
          </div>

          <div className='footerLinksWrapper'>
            <div className='footerLinkItems '>
              <p>Categories</p>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>JavaScript</li>
                <li>Databese</li>
              </ul>
            </div>
            <div className='footerLinkItems'>
              <p>Explore</p>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='footerLinkItems'>
              <p>Legal</p>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='socialMedia'>
          <div className='socialMediaWrap'>
            <div className='socialLogo'>
              <span>
                <a href='https://avihrogonov.co.uk/'>A\V</a>
              </span>
            </div>
            <div className='socialRights'>
              Copyright © 2021 All rights reserved.
            </div>
            <div className='socialIcons'>
              <FaGithub
                className='socialIcon socialGithub'
                onClick={() =>
                  window.open(
                    'https://github.com/AtanasVihrogonov://www.facebook.com',
                    '_blank'
                  )
                }
              />
              <FaTwitter
                className='socialIcon socialTwitter'
                onClick={() =>
                  window.open(
                    'https://https://twitter.com/TheAV_001.google.com',
                    '_blank'
                  )
                }
              />
              <FaLinkedinIn
                className='socialIcon socialLinkedin'
                onClick={() =>
                  window.open(
                    'https://https://www.linkedin.com/in/atanasvihrogonov/.google.com',
                    '_blank'
                  )
                }
              />
              <FaStackOverflow
                className='socialIcon socialStackOverflow'
                onClick={() =>
                  window.open(
                    'https://stackoverflow.com/users/8870964/atanas-vihrogonov',
                    '_blank'
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
