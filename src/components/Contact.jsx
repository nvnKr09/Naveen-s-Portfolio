import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = userInfo;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("PLease fill all details");
      return;
    }

    // backend logic
    try {
      const response = await axios.post("https://portfolio-backend-t9o0.onrender.com/contact", {name, email, message});
      // console.log(response);

      if (response.status === 201) {
        toast.success("Thank you for reaching out to us");
        setUserInfo({ name: '', email: '', message: '' });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <form
        action="http://localhost:8000/contact"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full p-4"
      >
        <div className="pb-8">
          <p className="text-4xl sm:text-center font-bold inline border-b-4 border-orange-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email{" "}
            <a
              href="mailto:nvnkr09@gmail.com"
              target="_blank"
              className="text-sky-300 pb-0 border-sky-300 border-b-[1px]"
            >
              here
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 placeholder:text-slate-600"
          type="text"
          placeholder="Name"
          name="name"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] placeholder:text-slate-600"
          type="email"
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 placeholder:text-slate-600"
          name="message"
          rows="4"
          placeholder="Message"
          value={userInfo.message}
          onChange={(e) =>
            setUserInfo({ ...userInfo, message: e.target.value })
          }
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-orange-500 hover:border-orange-500 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
