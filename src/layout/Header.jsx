import BgImg from './../assets/bg.jpg'

function Header() {

    return (
        <section id="header">
            <div className="relative overflow-hidden w-full h-screen mb-4 shadow-lg">
            <img className="object-cover w-full h-full" src={BgImg} alt="Hero Banner Image" />
            <div className="time flex justify-end"><span className='text-white text-4xl'></span></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8 bg-opacity-25 bg-bubble-gum">
                <h1 className='text-2xl'>Rhys P. Judd</h1>
                
                            {/* <Link
                                className="cursor-grab rounded-full bg-midnight text-white p-4 mt-16 hover:bg-silver hover:text-bubble-gum hover:font-bold"
                                activeClass="active"
                                to="text-container"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                >
                                Scroll to Section
                            </Link> */}
                <h5 className='lowercase bg-white bg-opacity-25'>Frontend Developer</h5>
                </div>
            </div>
            </div>
        </section>
    )
  }
  
  export default Header