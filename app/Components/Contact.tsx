import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Link
        href={"mailto:nabilfaturr44@gmail.com"}
        className="border w-40 h-40 flex items-center justify-center p-5 rounded-lg hover:shadow-md"
      >
        <MdEmail size={150} className="text-slate-900" />
      </Link>
      <Link
        href={"tel:+6289628251225"}
        className="border w-40 h-40 flex items-center justify-center p-5 rounded-lg hover:shadow-md"
      >
        <FaPhone size={80} className="text-slate-900" />
      </Link>
      <Link
        href={"https://github.com/nabilfaturr"}
        className="border w-40 h-40 flex items-center justify-center p-5 rounded-lg hover:shadow-md"
      >
        <FaGithub size={100} className="text-slate-900" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/nabilfaturr/"}
        className="border w-40 h-40 flex items-center justify-center p-5 rounded-lg hover:shadow-md"
      >
        <FaLinkedin size={100} className="text-slate-900" />
      </Link>
    </>
  );
};

export default Contact;
