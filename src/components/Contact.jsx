import React from 'react'

const contact = () => {
    return (
        <div
          name="contact"
          className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white h-full"
        >
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen mt-16">
            <div className="mt-1">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 h-auto">
                Contact
              </p>
              <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
    
            <div className=" flex justify-center items-center">
              <form
                action="https://getform.io/f/90e0aa06-c159-436f-8543-13d150228174"
                method="POST"
                className=" flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>
    
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let's talk
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default contact
