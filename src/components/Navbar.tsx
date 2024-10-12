"use client";

import { Burger, Button, CloseButton } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import clsx from "clsx";
import { useEffect } from "react";
import { INavbarItem } from "~/interfaces/navbar";
import { useRouter } from "next/navigation";
import useActiveNavbar from "~/app/hooks/useActiveNavbar";

const itemNavbar: INavbarItem[] = [
  { label: "Home", href: "/" },
  { label: "Feature", href: "#feature" },
  { label: "Pricing", href: "#price" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const router = useRouter();

  const [opened, { toggle }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const { currentSession, setCurrentSession } = useActiveNavbar();

  const onClickItem = (data: INavbarItem) => {
    setCurrentSession(data.href);
    router.push(data.href);
  };

  const onClickItemMobile = (data: INavbarItem) => {
    setCurrentSession(data.href);
    toggle();
    router.push(data.href);
  };

  useEffect(() => {
    if (opened) {
      document.querySelector("body")?.classList.add("disable__scroll");
    }

    return () => {
      document.querySelector("body")?.classList.remove("disable__scroll");
    };
  }, [opened]);

  return (
    <div className={clsx("w-full fixed top-0 z-[999]")}>
      <div
        className={clsx("transition-all ease-linear duration-100 ", [
          scroll.y > 100
            ? "bg-[rgba(0,0,0,0.4)] backdrop-blur-lg"
            : "bg-transparent",
        ])}
      >
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
            {itemNavbar.map((item: INavbarItem, index: number) => (
              <li
                key={index}
                onClick={() => onClickItem(item)}
                className={clsx(
                  "text-lg font-medium hover:text-accent px-5 py-1 cursor-pointer",
                  [currentSession === item.href ? "text-accent" : "text-white"],
                )}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <Button
              radius={"lg"}
              size="md"
              className="px-8 bg-accent hover:bg-primary text-white transition-all ease-linear duration-75"
            >
              Sign up
            </Button>
            <Burger
              className="md:hidden block"
              color={scroll.y > 100 ? "white" : "dark"}
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </div>
        </div>
      </div>

      {/* menu on mobile and tablet */}
      <div
        className={clsx("fixed top-0 bottom-0 left-0 right-0 z-50", [
          !opened && "pointer-events-none",
        ])}
      >
        <div
          onClick={toggle}
          className={clsx(
            "absolute top-0 bottom-0 left-0 right-0 bg-black/50 transition-all ease-linear duration-100 z-0",
            [opened ? "opacity-100" : "opacity-0"],
          )}
        />
        <div
          className={clsx(
            "relative md:w-1/2 w-3/4 h-full bg-white p-5 transition-all ease-linear duration-100",
            [opened ? "translate-x-[0%]" : "-translate-x-full"],
          )}
        >
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
            {itemNavbar.map((item: INavbarItem, index: number) => (
              <li
                onClick={() => onClickItemMobile(item)}
                className={clsx(
                  "w-full text-lg font-medium hover:text-accent px-5 py-1 cursor-pointer",
                  [currentSession === item.href ? "text-accent" : ""],
                )}
                key={index}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
