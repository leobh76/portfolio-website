import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lbhurovich@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-8">
        <h4 className="xs:text-md sm:text-2xl font-semibold text-center">
          I would love to get to know you better!{" "}
          <span className="underline decoration-[#F7AB0A]/50">Get in touch.</span>
        </h4>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="xs:text-sm sm:text-xl">+972532809884</p>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="xs:text-sm sm:text-xl">lbhurovich@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="xs:text-sm sm:text-xl">Central District, Israel</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto xs:w-[90%] sm:w-[90%]"
        >
          <div className="flex space-x-2 xs:flex-col xs:space-x-0 xs:space-y-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-xs font-light text-gray-400">This is a full stack website and was built using:<br></br><span className="text-gray-300">Next.js, Tailwind CSS, Sanity CMS & more</span></p>
      </div>
    </div>
  );
}

export default ContactMe;
