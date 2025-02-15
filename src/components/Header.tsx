"use client";

import { Avatar, Button, Divider, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { menuData } from "../utils/menuData";
import { DropdownMenu } from "./DropdownMenu";
import { signOut, useSession } from "next-auth/react";

export const Header = () => {
  const [menuAnchor, setmenuAnchor] = useState<{
    id?: number | null;
    element: HTMLElement | null;
  }>({ id: null, element: null });
  const [profileAnchor, setProfileAnchor] = useState(false);

  const session = useSession();

  const handleOpen = (e: React.MouseEvent<HTMLElement>, id: number) => {
    setmenuAnchor({ id, element: e.currentTarget });
  };

  const handleClose = () => {
    setmenuAnchor({ id: null, element: null });
  };

  return (
    <header className="flex text-blue-600 lg:bg-white w-full px-10 lg:py-6 pt-6 items-center justify-between gap-8">
      <IoMdMenu className="text-4xl cursor-pointer lg:hidden" />

      <Image src="/images/logo.svg" alt="logo" width={80} height={80} />

      <ul className="hidden lg:flex w-full justify-end gap-8 text-secondary text-lg">
        {menuData.map((item) => (
          <li key={item.id} className="flex items-center gap-2 cursor-pointer">
            <span
              id={`menu-${item.id}`}
              onClick={(e) => handleOpen(e, item.id)}
              aria-controls={
                menuAnchor.id === item.id ? `menu-items-${item.id}` : undefined
              }
              aria-haspopup="true"
            >
              {item.name}
            </span>
            <IoIosArrowDown />
            <DropdownMenu
              anchorEl={menuAnchor.id === item.id ? menuAnchor.element : null}
              id={item.id}
              isOpen={menuAnchor.id === item.id}
              onClose={handleClose}
            >
              {item.menuItem.map((item) => (
                <MenuItem key={item.id}>{item.name}</MenuItem>
              ))}
            </DropdownMenu>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 items-center">
        <div className="hidden lg:flex border border-blue-600 h-9 w-9 rounded-full items-center justify-center">
          <GrSearch className="text-black" />
        </div>
        {session.status === "authenticated" && (
          <>
            <Avatar
              id="profile"
              onClick={() => setProfileAnchor(true)}
              src={session.data?.user?.image || ""}
              className="text-white cursor-pointer"
            />
            <DropdownMenu
              anchorEl={document.getElementById("profile")}
              id={1}
              isOpen={profileAnchor}
              onClose={() => setProfileAnchor(false)}
            >
              <MenuItem>Editar informações da conta</MenuItem>
              <MenuItem onClick={() => signOut()}>Sair</MenuItem>
              <Divider />
              <MenuItem>Trocar para Perfil Profissional</MenuItem>
            </DropdownMenu>
          </>
        )}
        {session.status === "unauthenticated" && (
          <Link href="/auth">
            <Button variant="contained" className="text-white">
              Entrar
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};
