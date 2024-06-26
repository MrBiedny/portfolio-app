import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          I am ready to take <span className="text-purple">opportunities</span>{" "}
          and start doing fascinating projects!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today!
        </p>
        <a href="mailto:rafalpawelsoltysiak@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Rafał
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
            >
              <Link href={profile.link} target="_blank">
                <Image
                  src={profile.img}
                  alt={profile.id}
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
