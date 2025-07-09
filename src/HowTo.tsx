import './HowTo.css';

function HowTo() {
  // Transliteration rules extracted from the actual extension logic
  // These rules match exactly what the HarfSync extension uses for transliteration
  const transliterationRules = [
    // Multi-character patterns (digraphs) - highest priority
    { latin: 'sh', arabic: 'ش', description: 'Sheen', category: 'Multi-Character' },
    { latin: 'th', arabic: 'ث', description: 'Thaa (soft "th" like in "thin")', category: 'Multi-Character' },
    { latin: 'dh', arabic: 'ذ', description: 'Dhaal (soft "th" like in "this")', category: 'Multi-Character' },
    { latin: 'ch', arabic: 'ش', description: 'Alternative for Sheen', category: 'Multi-Character' },
    
    // Numerical substitutions (Arabizi numbers) - second priority
    { latin: '3', arabic: 'ع', description: 'Ain (guttural stop)', category: 'Numbers' },
    { latin: '7', arabic: 'ح', description: 'Hha (strong "h" from throat)', category: 'Numbers' },
    { latin: '5', arabic: 'خ', description: 'Kha (guttural "kh" sound)', category: 'Numbers' },
    { latin: '2', arabic: 'ء', description: 'Hamza (glottal stop)', category: 'Numbers' },
    { latin: '9', arabic: 'ق', description: 'Qaf (deep "k" sound)', category: 'Numbers' },
    { latin: '6', arabic: 'ط', description: 'Ta emphatic (strong "t")', category: 'Numbers' },
    { latin: '8', arabic: 'غ', description: 'Ghain (guttural "gh" sound)', category: 'Numbers' },
    
    // Emphatic consonants (capital letters) - third priority
    { latin: 'S', arabic: 'ص', description: 'Sad (emphatic "s")', category: 'Emphatic' },
    { latin: 'D', arabic: 'ض', description: 'Dad (emphatic "d")', category: 'Emphatic' },
    { latin: 'Z', arabic: 'ظ', description: 'Zha (emphatic "z")', category: 'Emphatic' },
    { latin: 'T', arabic: 'ت', description: 'Ta (regular ta with uppercase T)', category: 'Emphatic' },
    { latin: 'O', arabic: 'ؤ', description: 'Waw with hamza (Shift+O)', category: 'Emphatic' },
    { latin: 'Y', arabic: 'ئ', description: 'Ya with hamza (Shift+Y)', category: 'Emphatic' },
    
    // Standard single letters
    { latin: 'a', arabic: 'ا', description: 'Alif (long "a" or placeholder)', category: 'Letters' },
    { latin: 'b', arabic: 'ب', description: 'Ba', category: 'Letters' },
    { latin: 't', arabic: 'ة', description: 'Taa marbuta (lowercase t)', category: 'Letters' },
    { latin: 'j', arabic: 'ج', description: 'Jeem', category: 'Letters' },
    { latin: 'd', arabic: 'د', description: 'Dal', category: 'Letters' },
    { latin: 'r', arabic: 'ر', description: 'Ra', category: 'Letters' },
    { latin: 'z', arabic: 'ز', description: 'Zay', category: 'Letters' },
    { latin: 's', arabic: 'س', description: 'Seen', category: 'Letters' },
    { latin: 'f', arabic: 'ف', description: 'Fa', category: 'Letters' },
    { latin: 'k', arabic: 'ك', description: 'Kaf', category: 'Letters' },
    { latin: 'l', arabic: 'ل', description: 'Lam', category: 'Letters' },
    { latin: 'm', arabic: 'م', description: 'Meem', category: 'Letters' },
    { latin: 'n', arabic: 'ن', description: 'Noon', category: 'Letters' },
    { latin: 'h', arabic: 'ه', description: 'Ha (soft "h")', category: 'Letters' },
    { latin: 'w', arabic: 'و', description: 'Waw (consonant or long "oo")', category: 'Letters' },
    { latin: 'y', arabic: 'ي', description: 'Ya (consonant or long "ee")', category: 'Letters' },
    { latin: 'p', arabic: 'ب', description: 'P → B (no P in Arabic)', category: 'Letters' },
    
    // Vowel mappings
    { latin: 'e', arabic: 'ي', description: 'E sound → Ya', category: 'Vowels' },
    { latin: 'i', arabic: 'ي', description: 'I sound → Ya', category: 'Vowels' },
    { latin: 'o', arabic: 'و', description: 'O sound → Waw', category: 'Vowels' },
    { latin: 'u', arabic: 'و', description: 'U sound → Waw', category: 'Vowels' }
  ];

  // Group rules by category for better organization
  const ruleCategories = {
    'Multi-Character Patterns': transliterationRules.filter(rule => rule.category === 'Multi-Character'),
    'Number Substitutions (Arabizi)': transliterationRules.filter(rule => rule.category === 'Numbers'),
    'Emphatic Letters (Capitals)': transliterationRules.filter(rule => rule.category === 'Emphatic'),
    'Regular Consonants': transliterationRules.filter(rule => rule.category === 'Letters'),
    'Vowel Sounds': transliterationRules.filter(rule => rule.category === 'Vowels')
  };

  return (
    <section id="how-to" className="how-to">
      <div className="how-to-content">
        <h2 className="how-to-title">How to Type Arabic</h2>
        <p className="how-to-subtitle">Learn the transliteration patterns to type Arabic using your keyboard</p>
        
        <div className="demo-section">
          <h3>Quick Examples</h3>
          <div className="demo-examples">
            <div className="demo-card">
              <span className="demo-input">mrhba</span>
              <span className="demo-arrow">→</span>
              <span className="demo-output">مرحبا</span>
              <span className="demo-meaning">(Hello)</span>
            </div>
            <div className="demo-card">
              <span className="demo-input">alm8rb</span>
              <span className="demo-arrow">→</span>
              <span className="demo-output">المغرب </span>
              <span className="demo-meaning">(Morocco)</span>
            </div>
            <div className="demo-card">
              <span className="demo-input">kyf</span>
              <span className="demo-arrow">→</span>
              <span className="demo-output">كيف</span>
              <span className="demo-meaning">(What/How)</span>
            </div>
          </div>
        </div>

        <div className="rules-container">
          {Object.entries(ruleCategories).map(([category, rules]) => (
            <div key={category} className="rule-category">
              <h3 className="category-title">{category}</h3>
              <div className="rules-grid">
                {rules.map((rule, index) => (
                  <div key={index} className="rule-card">
                    <div className="rule-mapping">
                      <span className="latin-text">{rule.latin}</span>
                      <span className="arrow">→</span>
                      <span className="arabic-text">{rule.arabic}</span>
                    </div>
                    <div className="rule-description">{rule.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowTo;
