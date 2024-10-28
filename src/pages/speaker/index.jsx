import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/github.svg';
import WebsiteIcon from '@/assets/icons/website.svg';
import {Motion}  from "../framer-motion";// For Motion in Text

export function SpeakerPage() {
    return (
        <div className="bg-[#F5F5F5] pt-14">
            <section className="text-center w-full">
                <Motion.p 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 110,
                  delay: 0,
                }}
                className="text-[20px] font-bold text-[color:#41B883] ">
                    Semua Pembicara
                </Motion.p>
                <Motion.p 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 110,
                  delay: 0,
                }}
                className="text-[32px] font-bold mt-5">
                    yang telah berbagi di <br/> acara Lotengdev
                </Motion.p>
            </section>
            <section className="container mx-auto">
                <div
                    className="w-full lg:h-screen h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-4 content-around">
                    {[
                        { name: "Jenny Wilson", imgSrc: "./images/Frame 13.png" },
                        { name: "Esther Howard", imgSrc: "./images/Frame 14.png" },
                        { name: "Leslie Alexander", imgSrc: "./images/Frame 15.png" },
                        { name: "Bessie Cooper", imgSrc: "./images/Frame 22.png" },
                        { name: "Floyd Miles", imgSrc: "./images/Frame 23.png" },
                        { name: "Kathryn Murphy", imgSrc: "./images/Frame 24.png" },
                    ].map((speaker, index) => (
                        <Motion.div 
                        initial={{ opacity: 0, x: -100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{
                       duration: 0.8,
                       type: "spring",
                       stiffness: 110,
                       delay: 0,
                     }}
                        className="flex items-center justify-center" key={index}>
                            <div className="w-[260px] h-auto">
                                <div className="w-[260px] h-[260px] rounded-[24px] overflow-hidden">
                                    <img
                                        src={speaker.imgSrc}
                                        alt="images"
                                        className="transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                                    />
                                </div>
                                <div className="w-full font-bold md:text-left text-center text-[24px] text-[color:#606060] mt-[14px]">
                                    {speaker.name}
                                </div>
                                <div className="w-full flex md:justify-start justify-center md:items-start items-center">
                                    <a href="#">
                                        <img className="w-[23px] h-[23px] mr-2" src={LinkedinIcon} alt="icon_linkedin"/>
                                    </a>
                                    <a href="#">
                                        <img className="w-[23px] h-[23px] mr-2" src={GithubIcon} alt="icon_github"/>
                                    </a>
                                    <a href="#">
                                        <img className="w-[23px] h-[23px]" src={WebsiteIcon} alt="icon_website"/>
                                    </a>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </section>
            <section className="container pt-20 pb-20 mx-auto text-center">
                <Motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 110,
                  delay: 0,
                }}
                className="text-[32px] font-bold">
                    Tertarik menjadi pembicara di <br/> acara Lotengdev ?
                </Motion.div>
                <a href="https://github.com/Loteng-Dev/MeetupTopics/issues"
                    className="text-white bg-[#007BFF]  font-normal text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 mt-[32px]">
                    + Kirim ide topik
                </a>
            </section>
        </div>
    )
}
