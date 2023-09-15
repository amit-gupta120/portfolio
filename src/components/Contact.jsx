import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen
    bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center
      max-w-screen-lg mx-auto h-screen">
        <div className="pb-8 my-100">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/cf08e3a6-d40f-41b1-8f1e-b776705c209a"  method='POST' className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your email"
              className= " my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              type="text"
              rows='4'
              name="message"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 rounded-md text-white
              focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
            flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
