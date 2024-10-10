import { useRef, useEffect } from "react";
import gsap from 'gsap';
import "@fontsource/pacifico";
import "@fontsource/pacifico/400.css";

const Navbar = () => {
    const mainRef = useRef();
    const akademiaRef = useRef();
    const middleNavRefs = useRef([]);
    const contactRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(akademiaRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.5,
        })

        tl.from(middleNavRefs.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.4,
        });

        tl.from(contactRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
        });

    }, []);

    return (
        <>
            <div ref={mainRef} className="flex justify-between items-center py-4">
                <div ref={akademiaRef} className="font-pacifico text-2xl px-10">
                    Akademia
                </div>
                <div className="flex space-x-20 font-mono text-lg">
                    {["About", "Programmes", "Resources"].map((item, index) => (
                        <div key={index} ref={el => middleNavRefs.current[index] = el}>
                            {item}
                        </div>
                    ))}
                </div>
                <div ref={contactRef} className="px-10 mx-10 border-2 border-black py-4 rounded-lg font-medium">
                    Get in touch
                </div>
            </div>
        </>
    );
}

export default Navbar;
