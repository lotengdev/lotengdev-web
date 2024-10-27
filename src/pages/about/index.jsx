import { Link } from "react-router-dom";
import {Motion}  from "../framer-motion";// For Motion in Text

export function AboutPage() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center w-full mt-6">
                <div className="lg:w-[970px] w-[95%] rounded-3xl bg-white p-5 px-10">
                    <div className="text-[color:#41B883] md:mt-16 mt-5 flex item-center gap-x-1">
                        <Link to="/">
                            Home  
                        </Link>
                        &gt; About
                    </div>
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
                    className="font-bold lg:text-[48px] md:text-[32px] sm:text-[24px] text-[16px] mt-4">
                        Tentang Komunitas Lombok Tengah Developer (Loteng Dev)
                    </Motion.div>
                    <hr className="border-1 border-grey w-full rounded-3xl md:mt-6 mt-2" />
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
                     className="mt-5 mb-16 text-justify text-[18px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae quos veritatis nemo sit praesentium aperiam quasi voluptatum quisquam unde delectus mollitia eveniet rem quia, saepe aliquam, consequuntur similique? Vitae.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, doloremque. Praesentium, ad. Veritatis voluptatibus sunt exercitationem cum dicta velit, ipsa quae deserunt similique, officia commodi quasi nulla vel consectetur
                        impedit?
                        <br />
                        <br /> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius temporibus vitae at. Consequatur reiciendis sit quidem, impedit, facere aperiam nostrum delectus dolore dolor quibusdam harum animi amet repellendus, sunt
                        voluptatibus.
                    </Motion.div>
                </div>
            </div>
        </div>
    )
}