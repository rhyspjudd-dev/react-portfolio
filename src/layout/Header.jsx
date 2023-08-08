import { Link } from "react-scroll";
import React, { useState, useEffect, useRef } from 'react';
import BgImg from './../assets/bg.jpg'

function Header() {
    const targetRefs = useRef([]);
    const target = document.querySelectorAll('.scroll');

    useEffect(() => {
        // ... (other code)
    
        const handleScroll = () => {
            console.log('Scrolling...');
            targetRefs.current.forEach(target => {
                console.log('data-direction:', target.dataset.direction); // Debug output
                
                const rate = parseFloat(target.dataset.rate);
                const ratex = parseFloat(target.dataset.ratex);
                const ratey = parseFloat(target.dataset.ratey);
    
                const pos = window.pageYOffset * rate;
                const posX = window.pageYOffset * ratex;
                const posY = window.pageYOffset * ratey;
    
                if (target.dataset.direction === 'vertical') {
                    console.log('Applying vertical transform:', pos); // Debug output
                    target.style.transform = `translate3d(0px, ${pos}px, 0px)`;
                } else {
                    console.log('Applying horizontal transform:', posX, posY); // Debug output
                    target.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
                }
            });
        };
    
        // ... (other code)
    }, []);

    return (
        <section id="header">
            <div className="relative overflow-hidden w-full h-screen shadow-lg">
                <img className="object-cover w-full h-full" src={BgImg} alt="Hero Banner Image" />
                <div className="flex justify-end"><span className='text-white text-4xl'></span></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-heading lowercase text-center text-black p-8 bg-opacity-25 bg-bubble-gum">
                        <h1 className="scroll text-2xl inline" data-rate="-2" data-ratey="vertical">rhys p. </h1><h1 className="scroll text-2xl inline" data-rate="2" data-ratey="vertical">judd</h1>
                        <h5 className='text-lg'>JavaScript Developer</h5>
                        <Link
                            className="cursor-grab rounded-full bg-midnight text-white p-4 mt-16 hover:bg-silver hover:text-bubble-gum hover:font-bold"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Scroll down
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
