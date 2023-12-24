import Image from "next/image"
import bgContact from "../../assets/images/chanel.jpg";
import { h4Style } from "./ContactDetails";

const FormContact = () => {
    const inputStyles = "mt-1  p-2 w-full border border-gray-300 rounded-md"
    return (
        <div className="relative mb-20 h-screen flex sm:justify-start sm:items-center mt-4">
            <Image className="sm:flex hidden -z-10 absolute top-0 start-0 w-full h-full" src={bgContact} alt="background-form" />
            <div className="lg:ml-16 lg:w-[40rem] sm:rounded-sm lg:px-12 lg:py-24 flex flex-col items-center justify-center sm:items-start gap-4 p-4 sm:bg-white sm:w-[24rem]">
                <span className="sm:hidden bg-primary-light w-[2.47438rem] h-[0.125rem]" />
                <h4 className={h4Style}>Contact Us</h4>
                <h3 className="text-[#222] font-bold text-4xl text-center sm:text-left ">Schedule a
                    viewing</h3>
                <form action="" method="post" className="w-full">
                    <div className="mb-4">
                        <input
                        placeholder="Name"
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={inputStyles}
                        />
                    </div>
                    <div className="mb-4">
                    <input
                    placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={inputStyles}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        placeholder="Date"
                            type="date"
                            id="date"
                            name="date"
                            required
                            className={inputStyles}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            required
                            className={inputStyles}
                        ></textarea>
                    </div>
                </form>
                <button className="w-full h-16 hover:opacity-80 bg-primary-light text-center px-24 rounded-sm whitespace-nowrap uppercase lg:w-1/2 text-white">Send request</button>

            </div>
        </div>
    )
}

export default FormContact