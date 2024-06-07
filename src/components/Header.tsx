import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const socials = [
  { icons: <FaYoutube />, href: "#" },
  { icons: <FaInstagram />, href: "#" },
  { icons: <FaTwitter />, href: "#" },
  { icons: <FaFacebook />, href: "#" },
];
const Header = () => {
  return (
    <header className="py-6 shadow-md">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/*logo & socila icons*/}
          <div className="flex items-center gap-5 justify-center xl:w-max">
            <Link href="/">
              <Image src="/assets/logo.svg" width={160} height={160} alt="" />
            </Link>
            {/*separator*/}
            <div className="w-[1px] h-[40px] bg-gray-300 "></div>
            {/*social icos*/}
            <div className="flex gap-2">
              {socials.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="bg-accent text-white hover:bg-accent text-sm w-[28px] h-[28px] flex 
                  items-center justify-center rounded-full transition-all"
                >
                  {item.icons}
                </Link>
              ))}
            </div>
          </div>
          {/*sign in & sign up buttons*/}
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
