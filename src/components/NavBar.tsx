'use client'

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Profile"); // Set the initial active item

  const menuItems: string[] = [
    "Profile",
    "Dashboard",
    "Deployments",

  ];

  const handleClick = (item: string) => {
    setActiveItem(item); // Set the active item when clicked
    console.log(item)
  };

  return (
    <div>
      <Navbar className=" w-full md:container md:mx-auto" isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
          <NavbarBrand>
            <p className="font-bold text-inherit">LuminGlass Home</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item} data-active={activeItem === item ? "true" : "false"}>
              <Link href="#" color="foreground" onClick={() => handleClick(item)}>
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}
            data-active={activeItem === item ? "true" : "false"}>
              <Link
                color={"foreground"}
                className="w-full"
                href="#"
                size="lg"
                onClick={() => handleClick(item)}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
