import Logo from "@/components/logo";
import Menu from "@/components/menu";
import HeaderSearch from "@/components/header-search";

export default async function Header() {
  return (
    <div className='absolute top-0 w-full border-b border-gray-900 backdrop-blur-sm bg-background/60 z-50'>
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
