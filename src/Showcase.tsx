import './Showcase.css';
import Youtube from './assets/youtubelogo.png'
import Google from './assets/googlelogos.png'
import Facebook from './assets/faceboojz.png'
import Telegram from './assets/telegramlogo.png'
import Pinterest from './assets/dfqsdfqsdv.png'

function Showcase() {
  return (
    <section id="showcase" className="showcase">
      <div className="showcase-content">
        <h2 className="showcase-title">Works on Your Favorite Sites</h2>
        <p className="showcase-subtitle">And More</p>
      </div>
      
      <div className="showcase-animation">
        <div className="websites-container">
          <div className="website-item">
            <div className="website-logo youtube">
              <img src={Youtube} alt="YouTube" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo google">
              <img src={Google} alt="Google" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo facebook">
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo pinterest">
              <img src={Pinterest} alt="Pinterest" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo telegram">
              <img src={Telegram} alt="Telegram" />
            </div>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="website-item">
            <div className="website-logo youtube">
              <img src={Youtube} alt="YouTube" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo google">
              <img src={Google} alt="Google" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo facebook">
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo pinterest">
              <img src={Pinterest} alt="Pinterest" />
            </div>
          </div>
          <div className="website-item">
            <div className="website-logo telegram">
              <img src={Telegram} alt="Telegram" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
