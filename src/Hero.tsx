import { useEffect, useRef } from 'react';
import './Hero.css';
import searchIcon from './assets/search-icon.png';

function Hero() {
  const animationTimeoutsRef = useRef<number[]>([]);

  function clearAllTimeouts() {
    animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    animationTimeoutsRef.current = [];
  }

  useEffect(() => {
    // Clear any existing timeouts and intervals on mount
    clearAllTimeouts();
    
    const keyMapping: { [key: string]: string } = {
        'm': 'key-m',
        'r': 'key-r', 
        'h': 'key-h',
        'b': 'key-b',
        'a': 'key-a' 
    };

    const arabicWord = "مرحبا";
    const englishSequence = "mrhba";
    
    function typeAnimation() {
      // Clear any existing timeouts first
      clearAllTimeouts();
      
      const searchInput = document.querySelector('.search-input');
      
      if (searchInput) {
        searchInput.innerHTML = '';
      }

      document.querySelectorAll('.key').forEach((key: Element) => {
          const keyElement = key as HTMLElement;
          keyElement.style.transform = '';
          keyElement.style.backgroundColor = '';
          keyElement.style.transition = '';
      });
      
      // Type each letter with animation
      englishSequence.split('').forEach((letter, index) => {
          const timeout = setTimeout(() => {
              // Get the corresponding key element
              const keyId = keyMapping[letter];
              const keyElement = document.getElementById(keyId);
              
              if (keyElement) {
                  // Animate key press
                  keyElement.style.transition = 'transform 0.15s ease, background-color 0.15s ease';
                  keyElement.style.transform = 'translateY(2px)';
                  keyElement.style.backgroundColor = '#e94f37';
                  
                  // Reset key after brief moment
                  const resetTimeout = setTimeout(() => {
                      keyElement.style.transform = '';
                      keyElement.style.backgroundColor = '';
                  }, 200);
                  
                  animationTimeoutsRef.current.push(resetTimeout);
              }
              
              // Add corresponding Arabic letter to search input with styling
              if (searchInput) {
                const arabicLetter = document.createElement('span');
                arabicLetter.className = 'arabic-text';
                arabicLetter.textContent = arabicWord[index];
                searchInput.appendChild(arabicLetter);
              }
              
          }, index * 500); // 500ms delay between each keystroke (slower)
          
          animationTimeoutsRef.current.push(timeout);
      });
    }
    
    // Start the animation after a small delay to ensure DOM is ready
    const initialTimeout = setTimeout(() => {
      typeAnimation();
    }, 100);
    
    // Set up interval for repeated animation
    const intervalId = setInterval(typeAnimation, 4000);
    
    // Cleanup function to clear interval and timeouts when component unmounts
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
      clearAllTimeouts();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Type Arabic, No Special Keyboard Needed.
        </h1>
        
          <p className="hero-subtitle">
          Unlock effortless Arabic communication, right from your standard keyboard.
        </p>
        {/* 
        <p className="hero-description">
          Struggling to type in Arabic because your keyboard doesn't have the letters? Say goodbye to frustrating workarounds and complicated on-screen layouts. With **AlifType** (or your chosen name), you can finally write in Arabic as easily as you type in English.
        </p>
        <p className="hero-description">
          Simply use your familiar Roman letters (like `mrhba`), and watch the magic happen: your words instantly transform into beautiful, accurate Arabic script (مرحبا), in real-time.
        </p>
        */}
      </div>

      <div className="hero-animation">
        <div className="keyboard-mockup">
          <div className="search-bar-container">
            <img src={searchIcon} alt="Search Icon" className='search-icon'/>
            <div className="search-input"></div>
          </div>
          <div className="keyboard">  {/* Attach ref to the keyboard container */}
            <div className="row row-1">
              <div className="key empty">~</div>
              <div className="key letter-key">Q</div>
              <div className="key letter-key">W</div>
              <div className="key letter-key">E</div>
              <div className="key letter-key" id="key-r">R</div>
              <div className="key letter-key">T</div>
              <div className="key letter-key">Y</div>
              <div className="key letter-key">U</div>
              <div className="key letter-key">I</div>
              <div className="key letter-key">O</div>
              <div className="key letter-key">P</div>
              <div className="key empty">[</div>
              <div className="key empty">]</div>
              <div className="key empty">\</div>
            </div>

            <div className="row row-2">
              <div className="key empty">Caps</div>
              <div className="key letter-key" id="key-a">A</div>
              <div className="key letter-key">S</div>
              <div className="key letter-key">D</div>
              <div className="key letter-key">F</div>
              <div className="key letter-key">G</div>
              <div className="key letter-key" id="key-h">H</div>
              <div className="key letter-key">J</div>
              <div className="key letter-key">K</div>
              <div className="key letter-key">L</div>
              <div className="key letter-key">;</div>
              <div className="key letter-key">'</div>
              <div className="key empty">Enter</div>
            </div>

            <div className="row row-3">
              <div className="key empty">Shift</div>
              <div className="key letter-key">Z</div>
              <div className="key letter-key">X</div>
              <div className="key letter-key">C</div>
              <div className="key letter-key">V</div>
              <div className="key letter-key" id="key-b">B</div>
              <div className="key letter-key">N</div>
              <div className="key letter-key" id="key-m">M</div>
              <div className="key empty">,</div>
              <div className="key empty">.</div>
              <div className="key empty">/</div>
              <div className="key empty">Shift</div>
            </div>

            <div className="row row-4">
              <div className="key empty">Ctrl</div>
              <div className="key empty">Win</div>
              <div className="key empty">Alt</div>
              <div className="key space">Space</div>
              <div className="key empty">Alt</div>
              <div className="key empty">Fn</div>
              <div className="key empty">Menu</div>
              <div className="key empty">Ctrl</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;