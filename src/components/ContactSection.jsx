import ContactEmail from "./ContactEmail";
import { Button } from "flowbite-react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import ContactGithub from "./ContactGithub";
import ContactDiscord from "./ContactDiscord";

function ContactSection() {
  // 0: EMAIL - 1: GITHUB - 2: DISCORD
  const [method, setMethod] = useState(0);

  return (
    <div className="mt-20 flex flex-col justify-center items-center mb-20">
      <h2 className="p-2 font-semibold text-2xl text-center">Contáctame</h2>
      <div className="w-full mt-4 mb-6 max-w-lg">
        <div className="flex  w-74 justify-between items-center gap-1">
          <button
            onClickCapture={() => setMethod(0)}
            className="flex bg-indigo-700 hover:bg-indigo-400   justify-center items-center dark:bg-indigo-900 h-12 text-white w-full py-2 mt-2 rounded-lg  dark:hover:bg-indigo-500 max-w-lg"
          >
            <AiOutlineMail className="mr-3 h-4 w-auto" /> Email
          </button>

          <button
            onClickCapture={() => setMethod(1)}
            className="flex  bg-indigo-700 hover:bg-indigo-400  justify-center items-center dark:bg-indigo-900 h-12 text-white w-full  py-2 mt-2 rounded-lg  dark:hover:bg-indigo-500 max-w-lg"
          >
            <AiFillGithub className="mr-3 h-4 w-4" /> Github
          </button>
          <button
            onClickCapture={() => setMethod(2)}
            className="flex bg-indigo-700 hover:bg-indigo-400  justify-center items-center dark:bg-indigo-900 h-12 text-white w-full py-2 mt-2 rounded-lg  dark:hover:bg-indigo-500 max-w-lg"
          >
            <FaDiscord className="mr-3 h-4 w-4" /> Discord
          </button>
        </div>
      </div>
      {method === 0 ? (
        <ContactEmail />
      ) : method === 1 ? (
        <ContactGithub />
      ) : (
        <ContactDiscord />
      )}
    </div>
  );
}

export default ContactSection;
