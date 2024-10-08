import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logoipsum-327.svg";

interface NavBarProps {
  className?: string;
}

const navigation = [
  { name: "Demo", href: "#", current: false },
  { name: "Log in", href: "/sign-in", current: false },
  { name: "Get Started", href: "/signin", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <Disclosure
      as="nav"
      className={`rounded-3xl  mx-auto mt-4 max-w-3xl px-6 py-2 font-black ${className}`}
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <div className="relative flex h-14 items-center justify-between">
        <div className="flex items-center space-x-2 group">
          <div className="flex items-center space-x-2 hover:bg-white rounded-full p-2 transition-colors duration-300">
            <Image src={Logo} width={30} height={30} alt="Logo" />
            <Link href="/">
              <span className="text-white text-xl font-extrabold group-hover:text-gray-800">
                Lie2Hire
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="hidden sm:flex space-x-4">
            <a
              href="https://www.linkedin.com"
              className="text-gray-300 hover:bg-white hover:text-gray-800 rounded-full p-2 duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <Separator className="w-0.5 h-10 bg-gray-600 mx-4" />

            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.name === "Get Started"
                      ? "bg-white text-gray-800 rounded-full px-4 py-2 font-medium text-xl"
                      : "text-gray-300 hover:bg-white hover:text-gray-800 rounded-full px-4 py-2 text-xl",
                    "text-sm font-medium"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon
              className="hidden h-6 w-6 group-data-[open]:block"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="https://www.linkedin.com"
            className="text-gray-300 hover:bg-white hover:text-gray-800 rounded-full px-3 py-2 flex items-center text-xl"
          >
            <FaLinkedin size={20} />
            <span className="ml-3">LinkedIn</span>
          </DisclosureButton>

          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <DisclosureButton
                as="div"
                className={classNames(
                  item.name === "Get Started"
                    ? "bg-white text-gray-800 rounded-full px-3 py-2 font-medium text-xl"
                    : "text-gray-300 hover:bg-white hover:text-gray-800 rounded-md px-3 py-2 font-medium text-xl",
                  "block"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
