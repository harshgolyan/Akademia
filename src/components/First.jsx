import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef, useEffect } from "react";

const First = () => {
    const firstRef = useRef();
    const imageRef = useRef();
    const seminarRef = useRef();
    const trainingRef = useRef();
    const hashRef = useRef();
    const astRef = useRef();
    const trainersRef = useRef();
    const descRef = useRef();
    const sendRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(firstRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            delay: 1,
            ease: "Power4.out"
        })
        .from(imageRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "Power4.out"
        })
        .from(seminarRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "Power4.out"
        })
        .from(trainingRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "Power4.out"
        })
        .from(hashRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "Power4.out"
        })
        .from(astRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "Power4.out"
        })
        .from(trainersRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "Power4.out"
        });

        gsap.to([hashRef.current, astRef.current], {
            x: (i) => (i === 0 ? 90 : -80),
            duration: 1, 
            ease: "back.inOut", 
            repeat: -1,
            yoyo: true
        });

        gsap.from(descRef.current, {
            opacity: 0,
            duration: 1.5,
            delay : 5
        })
        gsap.from(sendRef.current, {
            opacity: 0,
            duration: 1.5,
            delay : 5.3
        })
        
    });

    const onMouseMoveHandler = (event) => {
        const { screenX, screenY } = event;
    
        gsap.to(imageRef.current, {
            x: 1-((screenX / window.innerWidth) * 70 - 20),
            y: 1-((screenY / window.innerHeight) * 70 - 20), 
            ease: "Power3.out", 
            duration: 0.5       
        });
    };
    

    return (
        <>
            <div className="text-[5rem] font-semibold flex flex-col justify-center items-center mt-20 h-full w-full">
               <div className="flex items-center">
                   <span ref={firstRef} className="mr-5">First</span> 
                   <span ref={imageRef} onMouseMove={onMouseMoveHandler} className="h-[7rem] w-[20rem] rounded-[10rem] bg-black overflow-hidden border border-black">
                        <img 
                            className="h-[7rem] w-full object-cover rounded-2xl object-top" 
                            src="https://plus.unsplash.com/premium_photo-1679656159524-3558eafb1d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjB3b21lbiUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" 
                            alt="Seminar" 
                        />
                    </span>
                    <span ref={seminarRef} className="ml-5">Seminars</span>
               </div>
               <div className="flex items-center mt-10">
                    <span ref={trainingRef} className="mr-5">Trainings</span> 
                    <span ref={hashRef} className="h-[7rem] w-[7rem] bg-blue-500 rounded-full mx-5 px-2 text-white flex justify-center items-center z-10 relative -mr-12">
                        #b
                    </span>
                    <span ref={astRef} className="h-[7rem] w-[7rem] bg-yellow-500 rounded-full mx-5 px-2 flex justify-center items-center z-0 relative">
                        &..
                    </span>
                    <span ref={trainersRef} className="ml-5">Trainers</span>
                </div>

               {/* Description section */}
               <div ref={descRef} className="text-2xl mt-10 text-center">
                    Do you want to learn techniques that will make your 
                    <span className="block mx-20">day job or starting a new position easier?</span>
               </div>

               {/* Input field with button */}
               <div ref={sendRef} className="text-lg font-medium mt-10 relative">
                    <input 
                        className="px-3 py-4 w-[28rem] border rounded-lg border-black" 
                        type="text" 
                        placeholder="Enter your email" 
                    />
                    <button className="absolute bg-black text-white font-normal px-4 py-4 rounded-lg right-0 top-0">
                        Send
                    </button>
               </div>
            </div>
        </>
    );
};

export default First;
