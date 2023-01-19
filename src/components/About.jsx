import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 sm:mt-16">
        I am a self-taught developer and a recent graduate of Bachelor of Computer Applications (BCA). I
        am proficient in a variety of programming languages, including HTML, CSS, Python, C programming, Java and other technologies 
        like Bootstrap, and SQLite. I am currently on the path of learning React and Tailwind. I have a good experience in building responsive and interactive 
        web applications and well-versed in both front-end and back-end development. Specifically, I have experience with Django, SQL, REST API development, and Git version control. 
        I have good understanding of database management and optimization, 
        and I have experience with integrating web applications with back-end systems.
        </p>

        <br />

        <p className="text-xl">
        Throughout my academic journey, I have had the opportunity to work
         on several freelance projects for clients, which has helped me gain valuable 
         experience and skills in the field of web development. I am excited to share my
          work and projects with you, and I look forward to connecting with other
         developers and professionals in the industry. Thank you for visiting my portfolio!
        </p>
      </div>
    </div>
  );
};


export default About
