function Skills() {

    return (
        <section id="skills" className="h-screen w-full bg-alt-section-bg py-16">
            <div className="container">
                <h3 className="text-xl font-heading uppercase mb-16" data-aos="slide-up">Skills</h3>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 font-body mb-16">
                    <div className="box" data-aos="flip-left" data-aos-duration="1000">
                        <p className="mb-8"><span className="bg-gray p-2">Web faves</span></p>
                        <ul>
                            <li className="mb-4">JS (ES6), React.js</li>
                            <li className="mb-4">WP Bedrock & ACF</li>   
                            <li className="mb-4">SCSS &/or Tailwind</li> 
                            <li className="mb-4">GSAP, CSS Animations</li>    
                        </ul>
                    </div>
            
                    <div className="box" data-aos="flip-left" data-aos-duration="2000">
                    <p className="mb-8"><span className="bg-gray p-2">Tools to help</span></p>
                        <ul>
                            <li className="mb-4">Git/Github</li>
                            <li className="mb-4">NPM</li>   
                            <li className="mb-4">Composer (plugin management)</li>
                            <li className="mb-4">Vite/Webpack</li>          
                        </ul>
                    </div>
            
                    <div className="box" data-aos="flip-left" data-aos-duration="3000">
                        <p className="mb-8"><span className="bg-gray p-2">Lil bit extras</span></p>
                        <ul>
                            <li className="mb-4">Electron.js</li>
                            <li className="mb-4">Laravel</li>
                            <li className="mb-4">WooCommerce</li>
                            <li className="mb-4">Shopify</li>                
                        </ul>
                    </div>
                </div>
            </div>
      </section>
    )
  }
  
  export default Skills