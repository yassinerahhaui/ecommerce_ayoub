import Image from "next/image";
import bgContact from "../../assets/images/chanel.jpg";
import { h4Style } from "./ContactDetails";

interface ContactForm {
  contact_us: string;
  name: string;
  email: string;
  subject: string;
  send: string;
}

const FormContact = ({
  contact_us,
  name,
  email,
  subject,
  send,
}: ContactForm) => {
  const inputStyles = "mt-1 p-2 w-full border border-gray-300 rounded-md";
  return (
    <div className="relative mb-20 min-h-screen flex sm:justify-start py-10 md:px-20 sm:items-center mt-4">
      <Image
        className="sm:flex hidden -z-10 absolute top-0 start-0 w-full h-full"
        src={bgContact}
        alt="background-form"
      />
      <div className="lg:w-[40rem] sm:rounded-sm lg:px-12 lg:py-16 flex flex-col items-center justify-center sm:items-start gap-4 p-4 sm:bg-white sm:w-[24rem]">
        <h3 className="text-[#222] font-bold text-4xl text-center sm:text-left ">
          {contact_us}
        </h3>
        <form action="" method="post" className="w-full">
          <div className="mb-4">
            <input
              placeholder={name}
              type="text"
              id="name"
              name="name"
              required
              className={inputStyles}
            />
          </div>
          <div className="mb-4">
            <input
              placeholder={email}
              type="email"
              id="email"
              name="email"
              required
              className={inputStyles}
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder={subject}
              required
              className={inputStyles}
            ></textarea>
          </div>
          <button className="w-full font-semibold h-16 hover:bg-primary-dark select-none bg-primary text-center px-24 rounded-sm whitespace-nowrap uppercase lg:w-1/2 flex items-center justify-center text-white">
            {send}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
