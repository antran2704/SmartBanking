"use client";

import { Burger, Button, CloseButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="container flex items-center justify-between mx-auto p-5">
        <Link href={"/"}>
          <img
            src="/images/logo.png"
            width="100"
            height="100"
            title="logo"
            alt="logo"
            className="size-12 min-w-12 object-contain object-center"
          />
        </Link>

        <ul className="md:flex hidden items-center gap-5">
          <li>
            <Link
              href={"#home"}
              className="text-lg font-medium text-white hover:text-accent px-5 py-1">
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#home"}
              className="text-lg font-medium text-white hover:text-accent px-5 py-1">
              Feature
            </Link>
          </li>
          <li>
            <Link
              href={"#home"}
              className="text-lg font-medium text-white hover:text-accent px-5 py-1">
              Pricing
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <Button
            radius={"lg"}
            size="md"
            className="px-8 bg-accent hover:bg-primary text-white transition-all ease-linear duration-75">
            Sign up
          </Button>
          <Burger
            className="md:hidden block"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </div>
      </div>

      {/* menu on mobile and tablet */}
      <div
        className={clsx("fixed top-0 bottom-0 left-0 right-0 z-50", [
          !opened && "pointer-events-none",
        ])}>
        <div
        onClick={toggle}
          className={clsx(
            "absolute top-0 bottom-0 left-0 right-0 bg-black/50 transition-all ease-linear duration-100 z-0",
            [opened ? "opacity-100" : "opacity-0"],
          )}
        />
        <div className={clsx("relative md:w-1/2 w-3/4 h-full bg-white p-5 transition-all ease-linear duration-100", [opened ? "translate-x-[0%]" : "-translate-x-full"])}>
          <div className="flex items-center justify-between pb-10">
            <Link href={"/"}>
              <img
                src="/images/logo.png"
                width="100"
                height="100"
                title="logo"
                alt="logo"
                className="size-16 min-w-16 object-contain object-center"
              />
            </Link>

            <CloseButton size={"xl"} onClick={toggle} />
          </div>
          <ul className="w-full flex flex-col gap-5">
            <li className="w-full">
              <Link
                href={"#home"}
                className="block text-lg font-medium hover:text-accent px-5 py-1">
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href={"#home"}
                className="block text-lg font-medium hover:text-accent px-5 py-1">
                Feature
              </Link>
            </li>
            <li className="w-full">
              <Link
                href={"#home"}
                className="block text-lg font-medium hover:text-accent px-5 py-1">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
