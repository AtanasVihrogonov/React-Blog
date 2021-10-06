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

          <div className='footerLinksWrapper'>
            <div className='footerLinkItems'>
              <p>About me</p>
              <p>Looking for an experienced junior developer to build your <br></br>web app or ship your software product? I'm currently <br></br>looking for new opportunities, my inbox is always open,<br></br> just drop me an email at <a
              class="footer-link"
              href="mailto:vihrogonov@yahoo.com"
              title="Email"
              target="_blank"
            >
              vihrogonov@gmail.com</a
            > or <br></br>use the channels below to get in touch.</p>
            </div>
          </div>

          <div className='footerLinksWrapper'>
            <div className='footerLinkItems'>
              <p>Categories</p>
              <ul>
                <li>Facebook</li>
                <li>YouTube</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className='footerLinkItems'>
              <p>Quick Links</p>
              <ul>
                <li>Contact</li>
                <li>Destinations</li>
                <li>Sponsorships</li>
              </ul>
            </div>
          </div>

        </div>

        <div className='socialMedia'>
          <div className='socialMediaWrap'>
            <div className='socialLogo'>
              <span><a href='#'>AV</a></span>
            </div>
            <div className='socialRights'>
              Copyright © 2021 All rights reserved.
            </div>
            <div className='socialIcons'>
              <FaGithub
                className='socialIcon'
                onClick={() =>
                  window.open(
                    'https://github.com/AtanasVihrogonov://www.facebook.com',
                    '_blank'
                  )
                }
              />
              <FaTwitter
                className='socialIcon'
                onClick={() =>
                  window.open(
                    'https://https://twitter.com/TheAV_001.google.com',
                    '_blank'
                  )
                }
              />
              <FaLinkedinIn
                className='socialIcon'
                onClick={() =>
                  window.open(
                    'https://https://www.linkedin.com/in/atanasvihrogonov/.google.com',
                    '_blank'
                  )
                }
              />
              <FaStackOverflow
                className='socialIcon'
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
