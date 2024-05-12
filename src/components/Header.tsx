"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import {
      Menu,
      MenuButton,
      Button,
      MenuList,
      MenuGroup,
      MenuItem,
      MenuDivider,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
      {
            title: "About",
            path: "#about",
      },
      {
            title: "Projects",
            path: "#projects",
      },
      {
            title: "Contact",
            path: "#contact",
      },
];

const Navbar = () => {
      const [navbarOpen, setNavbarOpen] = useState(false);

      return (
            <nav
                  className="fixed w-full mx-auto top-0 left-0 right-0 z-10 bg-gradient-to-b from-dark to-primary"
                  style={{
                        backdropFilter: "saturate(180%) blur(20px)",
                        boxShadow: "0 1px 10px rgb(255 255 255 / 0.2)",
                        transition: "background-color 0.2s",
                        backgroundColor: "linear-gradient(to-b, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
                  }}
                  onScroll={(e) => {
                        if (e.currentTarget.scrollTop > 0)
                              e.currentTarget.style.backgroundColor =
                                    "linear-gradient(to-b, rgba(0,0,0,1), rgba(0,0,0,1))";
                        else
                              e.currentTarget.style.backgroundColor =
                                    "linear-gradient(to-b, rgba(0,0,0,0.8), rgba(0,0,0,0.8))";
                  }}
            >
                  <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                        {/* logo */}
                        <div className="flex items-center">
                              <motion.svg
                                    animate={{
                                          rotate: 45,
                                    }}
                                    transition={{
                                          duration: 1,
                                          ease: "anticipate",
                                    }}
                                    className="w-12 h-12 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M12 22V10m0 0l-3-3m3 3l3-3m2 1a2 2 0 10-4 0 2 2 0 014 0z"
                                    />
                              </motion.svg>
                              <Link href={"/"} className="text-white text-[1.2rem] font-bold ml-2">
                                    Arka
                              </Link>
                        </div>
                        {/* mobile overlay */}
                        <div className="mobile-menu block md:hidden">
                              <Menu>
                                    <MenuButton as={Button} colorScheme="pink">
                                          Profile
                                    </MenuButton>
                                    <MenuList>
                                          <MenuGroup title="Profile">
                                                <MenuItem>My Account</MenuItem>
                                                <MenuItem>Payments </MenuItem>
                                          </MenuGroup>
                                          <MenuDivider />
                                          <MenuGroup title="Help">
                                                <MenuItem>Docs</MenuItem>
                                                <MenuItem>FAQ</MenuItem>
                                          </MenuGroup>
                                    </MenuList>
                              </Menu>
                        </div>
                        {/* menu */}
                        <div className="menu hidden md:block md:w-auto" id="navbar">
                              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0 text-white">
                                    {navLinks.map((link, index) => (
                                          <li key={index}>
                                                <NavLink href={link.path} title={link.title} />
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  </div>
                  {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}
            </nav>
      );
};

export default Navbar;
