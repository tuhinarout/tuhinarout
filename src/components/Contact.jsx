import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from './Title';
import { GlobeDemo } from './GlobeDemo';
import StarsCanvas from './Stars';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      const templateParams = {
        user_name: username,
        user_phone: phoneNumber,
        user_email: email,
        subject,
        message,
      };

      emailjs.send('service_at8rvnr', 'template_xe8jaz8', templateParams,'OOxxO-wM6FAsYVs-k')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMsg(`Thank you dear ${username}, Your Message has been sent successfully!`);
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, (error) => {
          console.log('FAILED...', error);
          setErrMsg("Failed to send your message, please try again later.");
        });
    }
  };

  return (
    <section id="contact" className="w-full px-6 py-12 sm:px-5 sm:py-16 z-30">
      <StarsCanvas></StarsCanvas>
      <div style={{ color: 'white' }}>
        {/* <div className="lines -z-20">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
        <div className="flex justify-center items-center text-center mb-8">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2">
            <GlobeDemo />
          </div>
          <div className="w-full lg:w-1/2 py-10 px-4 sm:px-8">
            <form className="flex flex-col gap-6">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Your Name</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" && "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" && "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Subject</label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Please give your Subject!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
