// HomePage.jsx
import { useEffect, useState } from 'react';
import { FaPaperPlane, FaGithub } from 'react-icons/fa6';

export function HomePage({ isDarkMode }) {
    const [text, setText] = useState('');
    const fullText = 'Beriuk Berajah dan Berkembang';
    const typingDelay = 100; // Typing speed in milliseconds

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < fullText.length) {
                setText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, typingDelay);
        
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className={`flex justify-center items-center h-[80vh] ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`} id="home">
            <div className="lg:flex justify-center p-[32px]">
                <img src="./images/rafiki.png" alt="Illustration" className="lg:w-[30%] lg:h-[30%] rounded" />
                <div className="lg:w-[50%] lg:mt-0 mt-[25px]">
                    <div className="lg:mb-[16px] mb-[14px]">
                        <span className="lg:text-[60px] text-[28px] font-extrabold lg:leading-[62px] leading-[40px]">
                            {text}
                        </span>
                    </div>
                    <div className="mb-[32px]">
                        <span className={`lg:text-[20px] text-[12px] ${isDarkMode ? 'text-gray-300' : 'text-[#5C5C5C]'}`}>
                            Komunitas programmer di Lombok Tengah yang membahas hal seputar IT, Programming, dan masih banyak lagi.
                        </span>
                    </div>
                    <div className="flex">
                        <a href="https://t.me/lotengdev" target='_blank' rel="noopener noreferrer" className="flex items-center bg-blue-600 px-4 py-3 mr-4 rounded text-white text-[12px]">
                            <FaPaperPlane className="inline mr-2 w-4 h-4" />Join Group
                        </a>
                        <a href="https://github.com/lotengdev/lotengdev-web/" target='_blank' rel="noopener noreferrer" className={`flex items-center px-4 py-2 rounded text-[12px] ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-neutral-100 border border-solid border-grey text-black'}`}>
                            <FaGithub className="inline mr-2 w-4 h-4" />Contribute
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
