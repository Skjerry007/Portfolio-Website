import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                🚀 2.5 Years Experience: Full Stack SDET 🚀

🔹 Proficient in Selenium for Web Application Testing and Postman for REST API Testing.
🔹 Expertise in complex projects covering Smoke, Sanity, Regression, and Functional Testing.
🔹 Specialized in Blockchain Technology for Supply Chain Management using APIs.
🔹 Skilled in understanding Requirements and Functional Specifications.
🔹 Creator of Rest Assured and Karate automation frameworks.
🔹 Tech blogger, writer, and advocate for the importance of SDET roles.
🔹 Committed to changing perceptions and elevating the value of SDET roles in companies.

Beyond Bugs: Empowering SDET Excellence!
                </p>
               { /* <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                </p>
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="https://drive.google.com/file/d/1IN8zpVevJ8Sfo8N0_idzuFDYeJRHCK-P/view?usp=sharing" ShashankAwasthiSDET_Resume>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About