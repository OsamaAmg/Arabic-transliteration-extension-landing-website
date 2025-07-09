import './Footer.css'
import logo from './assets/HarfSync-white.png';
import callIcon from './assets/call.png';
import linkedinIcon from './assets/LinkedIn.png';
import gmailIcon from './assets/gmail.png';

function Footer() {
  return (
    <>
      <footer id="contact">
        <div className='footer-logo'><img src={logo} alt="Extension Logo" /></div>
        
        <div className='footer-contacts'>
          <a href="tel:+1234567890" className='contact-item'>
            <img src={callIcon} alt="Call" className='contact-icon' />
            <span>+123 456 7890</span>
          </a>
          
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className='contact-item'>
            <img src={linkedinIcon} alt="LinkedIn" className='contact-icon' />
            <span>LinkedIn</span>
          </a>
          
          <a href="mailto:your.email@gmail.com" className='contact-item'>
            <img src={gmailIcon} alt="Gmail" className='contact-icon' />
            <span>Gmail</span>
          </a>
        </div>
        
        <div className='footer-copyright'>
          <p>&copy; 2025 HarfSync Extension</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
