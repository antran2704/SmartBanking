import Link from "next/link";

const Footer = () => {
  return (
    <div >
      <div className="container flex md:flex-row flex-col justify-between py-10  px-5 gap-10">
        <div className="md:w-4/12 w-full flex flex-col md:items-start items-center">
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              width="100"
              height="100"
              title="logo"
              alt="logo"
              className="size-20 min-w-20 object-contain object-center"
            />
          </Link>
        </div>
        <div className="md:w-8/12 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Press
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Fees
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Affiliate
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Terms of use
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-lg text-neutral-100 hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-5 py-2 border-t border-neutral-200">
        <p className="text-base text-neutral-100">
          Copyright © {new Date().getFullYear()} By Antran.
        </p>
      </div>
    </div>
  );
};

export default Footer;
