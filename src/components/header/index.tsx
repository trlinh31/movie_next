import React from "react";
import Logo from "@/components/logo";
import HeaderSearch from "@/components/header-search";
import Menu from "@/components/menu";

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 border-b border-gray-900'>
      <div className='container'>
        <div className='py-2'>
          <div className='flex justify-between items-center'>
            <Logo />
            <Menu />
            <HeaderSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
