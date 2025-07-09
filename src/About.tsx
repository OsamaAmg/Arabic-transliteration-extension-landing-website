import './About.css';

function About(){
    return (
        <>
        <div id="about" className='about-container'>
            <div className="about-title">
                <h1>About</h1>
            </div>
            
            <div className="about-content">
                <p>This extension was created to make typing in Arabic easier and more accessible for users who don't have an Arabic keyboard layout. It allows you to write Arabic phonetically using a standard QWERTY or AZERTY keyboard, with real-time transliteration directly in search inputs on platforms like YouTube, Google, and more.</p>
                <p>The idea came from a personal need — to avoid using virtual keyboards, copying text from other websites, or applying keyboard stickers that ruin the aesthetic of a clean setup. This tool eliminates all that friction, offering a fast, seamless way to type Arabic without interrupting your workflow.
                No tracking. No setup required. Just install and start typing.</p>
            </div>
        </div>
        </>
    );
}

export default About;