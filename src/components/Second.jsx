import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
    const headRef = useRef();
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();

    useEffect(() => {
        gsap.from(headRef.current, {
            x: 500, 
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: headRef.current,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            }
        });

        gsap.from(firstRef.current, {
            x: -1000,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: firstRef.current,
                start: "top 75%",
                end: "top 25%",
                scrub: true,
            }
        });

        gsap.from(secondRef.current, {
            x: 1200,
            duration: 4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: secondRef.current,
                start: "top 70%",
                end: "top 30%",
                scrub: true,
            }
        });

        gsap.from(thirdRef.current, {
            x: -1000,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: thirdRef.current,
                start: "top 65%",
                end: "top 35%",
                scrub: true,
            }
        });
    }, []);

    return (
        <>
            <div className="min-h-screen w-full mt-20 relative">
                <div ref={headRef} className="font-bold text-[4rem] flex justify-center mb-20">
                    Programmes
                </div>

                <div ref={firstRef} className="absolute w-[55rem] h-[30rem] mx-20 bg-green-400 flex flex-col justify-center items-center rounded-lg font-semibold text-[3rem] z-30">
                    STEM Programs
                    <p className="text-sm flex justify-center mt-5 mx-10">STEM (Science, Technology, Engineering, and Mathematics) programs aim to cultivate critical thinking, problem-solving, and innovative skills by engaging students in hands-on learning and real-world applications. These programs emphasize interdisciplinary learning, allowing participants to explore scientific principles, technological advancements, and engineering challenges while honing their mathematical skills</p>
                </div>

                <div ref={secondRef} className="absolute w-[55rem] h-[32rem] top-[34rem] mx-[33rem] bg-blue-400 flex flex-col justify-center items-center rounded-lg font-semibold text-[3rem] z-20">
                    Conferences & Seminars
                    <p className="text-sm flex justify-center mx-10 mt-5">Conferences and seminars provide valuable opportunities for professionals and students to exchange knowledge, explore new ideas, and stay updated on the latest trends in their fields. These events bring together experts, researchers, and industry leaders to discuss cutting-edge developments, share research findings, and foster collaboration. Attendees gain insights through presentations, workshops, and panel discussions, enhancing their understanding of complex topics and emerging technologies. Conferences and seminars also serve as networking platforms, enabling participants to build connections, collaborate on future projects, and advance their careers.</p>
                </div>

                <div ref={thirdRef} className="absolute w-[55rem] h-[30rem] top-[60rem] mx-20 bg-yellow-400 flex flex-col justify-center items-center rounded-lg font-semibold text-[3rem] z-10">
                    Corporate Trainings.
                    <p className="text-sm flex justify-center mx-10 mt-5">Corporate training is essential for enhancing employee skills, improving productivity, and ensuring that teams stay up-to-date with industry trends and technological advancements. These programs are tailored to meet specific business needs, focusing on areas such as leadership development, technical proficiency, communication, and team collaboration. By investing in corporate training, organizations foster a culture of continuous learning and innovation, which leads to better performance, employee satisfaction, and a competitive edge in the marketplace. Effective training not only boosts individual capabilities but also strengthens overall organizational success and growth.</p>
                </div>
            </div>
        </>
    );
};

export default Second;
