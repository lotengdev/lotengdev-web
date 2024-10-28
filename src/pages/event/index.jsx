import PlayIcon from '@/assets/icons/play.svg'
import {Motion}  from "../framer-motion";// For Motion in Text

export function EventPage() {
    return (
        <div className="bg-[#F5F5F5] pt-14">
            <header className="text-center w-full mb-16">
                <Motion.h1 
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
                    Semua Acara
                </Motion.h1>
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
                className="text-[32px] font-bold">
                    yang telah terlaksana
                </Motion.p>
            </header>
            <section className="container mx-auto md:mt-8 mt-6">
                <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 content-around">
                    <div className="flex items-center justify-center">
                        <div className="md:w-[320px] w-[280px] h-auto">
                            <a href="">
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
                                    className="rounded-[24px] overflow-hidden relative">
                                    <img src="./images/event.png" className="w-full relative" alt="images" />
                                        <div
                                            className="absolute z-10 top-0 bottom-0 left-0 right-0 bg-[rgba(255,255,255,.5)] sm:hover:opacity-100 sm:opacity-0 opacity-100 transition-all flex justify-center items-center">
                                            <img src={PlayIcon} className="w-[63px] h-[64px]" alt=" play " />
                                        </div>
                                </Motion.div>
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
                                    className="w-full font-bold md:text-left text-center md:text-[20px] text-[18px] mt-[14px] ">
                                    Lotengdev Online Meetup #2: Prepare for Hacktoberfest
                                </Motion.div>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="md:w-[320px] w-[280px] h-auto">
                            <a href="">
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
                                    className="rounded-[24px] overflow-hidden relative">
                                    <img src="./images/event.png" className="w-full relative" alt="images" />
                                        <div
                                            className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(255,255,255,.5)] sm:hover:opacity-100 sm:opacity-0 opacity-100 transition-all flex justify-center items-center">
                                            <img src={PlayIcon} className="w-[63px] h-[64px]" alt=" play " />
                                        </div>
                                </Motion.div>
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
                                    className="w-full font-bold md:text-left text-center md:text-[20px] text-[18px] mt-[14px] ">
                                    Lotengdev Online Meetup #2: Prepare for Hacktoberfest
                                </Motion.div>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="md:w-[320px] w-[280px] h-auto">
                            <a href="">
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
                                    className="rounded-[24px] overflow-hidden relative">
                                    <img src="./images/event.png" className="w-full relative" alt="images" />
                                        <div
                                            className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(255,255,255,.5)] sm:hover:opacity-100 sm:opacity-0 opacity-100 transition-all flex justify-center items-center">
                                            <img src={PlayIcon} className="w-[63px] h-[64px]" alt=" play " />
                                        </div>
                                </Motion.div>
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
                                    className="w-full font-bold md:text-left text-center md:text-[20px] text-[18px] mt-[14px] ">
                                    Lotengdev Online Meetup #2: Prepare for Hacktoberfest
                                </Motion.div>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="md:w-[320px] w-[280px] h-auto">
                            <a href="">
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
                                    className="rounded-[24px] overflow-hidden relative">
                                    <img src="./images/event.png" className="w-full relative" alt="images" />
                                        <div
                                            className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(255,255,255,.5)] sm:hover:opacity-100 sm:opacity-0 opacity-100 transition-all flex justify-center items-center">
                                            <img src={PlayIcon} className="w-[63px] h-[64px]" alt=" play " />
                                        </div>
                                </Motion.div>
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
                                    className="w-full font-bold md:text-left text-center md:text-[20px] text-[18px] mt-[14px] ">
                                    Lotengdev Online Meetup #2: Prepare for Hacktoberfest
                                </Motion.div>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="md:w-[320px] w-[280px] h-auto">
                            <a href="">
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
                                    className="rounded-[24px] overflow-hidden relative">
                                    <img src="./images/event.png" className="w-full relative" alt="images" />
                                        <div
                                            className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(255,255,255,.5)] sm:hover:opacity-100 sm:opacity-0 opacity-100 transition-all flex justify-center items-center">
                                            <img src={PlayIcon} className="w-[63px] h-[64px]" alt=" play " />
                                        </div>
                                </Motion.div>
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
                                    className="w-full font-bold md:text-left text-center md:text-[20px] text-[18px] mt-[14px] ">
                                    Lotengdev Online Meetup #2: Prepare for Hacktoberfest
                                </Motion.div>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="md:w-[320px] w-[280px] h-auto">
                            <a href="">
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
                                    className="rounded-[24px] overflow-hidden relative">
                                    <img src="./images/event.png" className="w-full relative" alt="images" />
                                        <div
                                            className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(255,255,255,.5)] sm:hover:opacity-100 sm:opacity-0 opacity-100 transition-all flex justify-center items-center">
                                            <img src={PlayIcon} className="w-[63px] h-[64px]" alt=" play " />
                                        </div>
                                </Motion.div>
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
                                    className="w-full font-bold md:text-left text-center md:text-[20px] text-[18px] mt-[14px] ">
                                    Lotengdev Online Meetup #2: Prepare for Hacktoberfest
                                </Motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container pt-20 pb-20 mx-auto text-center ">
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
                className="lg:text-[32px] text-[24px] font-bold ">
                    Next meetup kita mau bahas <br /> apa nih?
                </Motion.div>
                <a href="https://github.com/Loteng-Dev/MeetupTopics/issues "
                    className="text-white bg-[#007BFF] font-normal text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 mt-[32px] ">
                    + Kirim ide topik
                </a>
            </section>
        </div>
    )
}
