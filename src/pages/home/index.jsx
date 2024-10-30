import { useEffect, useState } from 'react';
import TelegramIcon from '@/assets/icons/telegram.svg';
import GithubIcon from '@/assets/icons/github.svg';

export function HomePage() {
    const [text, setText] = useState('');
    const fullText = 'Beriuk Berajah dan Berkembang';
    const typingDelay = 100; 

    const [contributors, setContributors] = useState([]); 

    const fetchContributor = async () => {
        try {
            const response = await fetch(`https://api.github.com/repos/lotengdev/lotengdev-web/contributors?per_page=1000`);
            const data = await response.json();
            console.log(data);
            setContributors(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContributor();
    }, []);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, typingDelay);
        
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <>
            <div className="flex justify-center items-center h-[80vh]" id="home">
                <div className="lg:flex justify-center p-[32px]">
                    <img src="./images/rafiki.png" className="lg:w-[30%] lg:h-[30%]" />
                    <div className="lg:w-[50%] lg:mt-0 mt-[25px]">
                        <div className="lg:mb-[16px] mb-[14px]">
                            <span className="lg:text-[60px] text-[28px] font-extrabold lg:leading-[62px] leading-[40px]">
                                {text}
                            </span>
                        </div>
                        <div className="mb-[32px]">
                            <span className="lg:text-[20px] text-[12px] text-[#5C5C5C]">
                                Komunitas programmer di Lombok Tengah yang membahas hal seputar IT, Programming, dan masih banyak lagi.
                            </span>
                        </div>
                        <div className="flex">
                            <a href="https://t.me/lotengdev" target='_blank' className="flex items-center bg-blue-600 px-4 py-3 mr-4 rounded text-white text-[12px]">
                                <img className="inline mr-3 lg:w-auto lg:h-auto h-[12px] w-[12px]" src={TelegramIcon} />Join Group
                            </a>
                            <a href="https://github.com/lotengdev/lotengdev-web/" target='_blank' className="flex items-center bg-neutral-100 border border-solid border-grey px-4 py-2 rounded">
                                <img className="inline mr-3 lg:w-auto lg:h-auto h-[12px] w-[12px]" src={GithubIcon} />Contribute
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-10 md:mb-8 mt-28 md:mt-3 text-center">Contributors</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {contributors && contributors.map((contributor) => (
                        <div key={contributor.id} className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <img src={contributor.avatar_url} alt={contributor.login} className="w-24 h-24 rounded-full mb-4" />
                            <p className="text-center font-medium">
                                <a href={contributor.html_url} target='_blank' rel='noopener noreferrer' className=" text-sm md:text-xl text-black hover:text-blue-500">
                                    {contributor.login}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
