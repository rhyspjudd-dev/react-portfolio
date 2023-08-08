import Range from "../components/range"

function Experience() {

    const content = {
        buttonText: 'Visit'
    }

    return (
        <section id="experience" className=" w-full py-8">
            <div className="container mt-16">
                <div className="experience-container">
                <h3 data-aos="fade-in" className="text-xl font-heading uppercase mb-16" data-aos-duration="2000">Experience</h3>
                <h5 className="text-lg font-heading uppercase mt-16" data-aos="slide-up">Reckless</h5>
                <p className="bg-gray mb-8 p-2 w-44 text-center" data-aos="slide-up"><span>Frontend Developer</span></p>
                <div className="font-body" >
                <p className="mb-4" data-aos="fade-in" data-aos-duration="1000">Spearheaded the creation of bespoke ecommerce themes, harnessing the power of Woocommerce, ACF, Bedrock, and Laravel. Collaborated with backend developers and designers to ensure integration and a positive user journey.</p>
                <p className="mb-4" data-aos="fade-in" data-aos-duration="1000">Actively participated in continuous learning, staying at the forefront of industry trends and leveraging modern Wordpress development.</p>
                </div>
                <a href="https://reckless.agency/" target="_blank"><button className="button" data-aos="zoom-in-up" data-aos-offset="50">{ content.buttonText }</button></a>

                <h5 className="text-lg font-heading uppercase mt-16" data-aos="fade-in" data-aos-duration="2000">Fuzzy Duck</h5>
                <p className="bg-gray mb-8 p-2 w-44 text-center" data-aos="slide-up"><span>Frontend Developer</span></p>
                <p data-aos="fade-in" data-aos-duration="1000">Crafted captivating pixel-perfect Museum Interactives and web apps, ensuring seamless user experiences and pushing the boundaries of design and functionality.</p>
                <p data-aos="fade-in" data-aos-duration="1000">Collaborated with cross-functional teams encompassing Design, Animation, and Film, seamlessly integrating a diverse range of media into AV installations and websites.</p> 
                <p data-aos="fade-in" data-aos-duration="1000">Played a pivotal role in on-site hardware installation, translating technical expertise into the physical realm to create immersive audiovisual environments.</p>               
                <a href="https://fuzzyduck.co.uk" target="_blank"><button className="button" data-aos="zoom-in-up" data-aos-offset="50">{ content.buttonText }</button></a>
                </div>

                <h5 className="text-lg font-heading uppercase mt-16" data-aos="slide-up">Morph</h5>
                <p className="bg-gray mb-8 p-2 w-44 text-center" data-aos="slide-up"><span>Wordpress Developer</span></p>
                <p data-aos="fade-in" data-aos-duration="1000">Morph (not to be confused with the plasticine model show) are a small creative team based in the Zed Studio in Kendal Cumbria.</p>
                <p data-aos="fade-in" data-aos-duration="1000">Morph offer a particular focus on web apps and animations. My role consisted of website maintenance of Morph's high profile clients all of whose websites were built in WordPress. In addition, custom development of website themes and eCommerce platforms for B2B and B2C clients.</p>
                <p data-aos="fade-in" data-aos-duration="1000">Working in a small team agile environment with a particular focus of strong development practices and robust testing techniques ensuring a seamless technique from design to delivery.</p>
                <a href="https://reckless.agency/" target="_blank"><button className="button" data-aos="zoom-in-up" data-aos-offset="50">{ content.buttonText }</button></a>

            </div>
        </section>
    )
  }
  
  export default Experience