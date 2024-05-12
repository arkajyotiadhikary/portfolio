import Link from "next/link";

const NavLink = ({ href, title }: { href: string; title: string }) => {
      return (
            <Link
                  href={href}
                  className="block p-4 text-dark font-semibold sm:text-[1.2rem] rounded"
            >
                  {title}
            </Link>
      );
};

export default NavLink;
