import Image from "next/image";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import Person from "../../../../public/Ellipse 6.png";

const Header = () => {
  return (
    <div className="flex flex-col pt-16 pb-6 px-7">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <Link href="#!">
            <Image
              src={Person}
              alt="Profile Picture"
              width={42}
              height={42}
              className="rounded-full w-12"
            />
          </Link>
          <p className="ml-3 font-medium text-[18px]">Hi, John Doe</p>
        </div>
        <Link href="#!">
          <button className="ml-4">
            <IoNotifications size={29} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
