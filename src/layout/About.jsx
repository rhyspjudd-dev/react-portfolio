function About() {

    return (
        
        <section id="about" className="h-full md:h-screen w-full bg-alt-section-bg py-8">
            <div className="container">
            <div className="about-container">
                <div className="id-pic mb-16">
                <img className="rounded-lg" src="./src/assets/port.jpg" alt="portfolio picture" />
                <h3 className="text-xl font-heading uppercase">About</h3>
                </div>

                <div className="content font-body text-sm mt-8">
                    <p className="leading-8 mb-8">Hey, I’m Rhys, I’m passionate about the web and driving business success online through great user experiences. I've got over 7 years commercial agency experience as a <span>Front-End Developer</span> building a wide range of exciting range of websites and apps.</p>
                    <p className="leading-8">Hailing from the tropical England and web trained in the beautiful Portland Oregon, USA.  When I’m not exploring new technologies I love to travel the world, watch loud live music, talk politics and go hiking when I can dodge the UK rain.</p>
                    <p className="leading-8">Currently accepting work. <a className="swipe-hover" href="mailto:rhyspjudd.dev@gmail.com"><em>Let’s talk.</em></a></p>
                </div>
            </div>
            </div>
        </section>
        
    )
  }
  
  export default About