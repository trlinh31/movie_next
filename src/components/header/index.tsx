import Logo from "@/components/logo";
import Menu from "@/components/menu";
import HeaderSearch from "@/components/header-search";
import { Menu as MenuIcon } from "lucide-react";

export default async function Header() {
  return (
    <div className='absolute top-0 w-full border-b border-gray-900 backdrop-blur-sm bg-background/60 z-50'>
      <div className='container'>
        <div className='py-4'>
          <div className='flex justify-between items-center'>
            <Logo />
            <Menu />
            <HeaderSearch />
            <div className='md:hidden block'>
              <MenuIcon size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
