import { Heart } from "lucide-react";
import gsap from 'gsap';
import { useRef, useEffect } from "react";

const Footer = () => {
    const heartRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            heartRef.current,
            { scale: 1 }, 
            {
                scale: 1.2,
                duration: 0.5, 
                repeat: -1,
                yoyo: true, 
                ease: "power1.inOut", 
            }
        );
    }, []);

    return (
        <div className="flex justify-center font-normal mt-[50rem] p-[2rem] text-[1rem] border-t border-black">
            &copy; {new Date().getFullYear()} Harsh Golyan. All rights reserved.
            <Heart size={20} color="red" className="ml-2" ref={heartRef} />
        </div>
    );
}

export default Footer;
