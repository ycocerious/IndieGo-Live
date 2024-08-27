import { Logo } from "./logo";
import { Search } from "./search";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#8e44ad] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
    </nav>
  );
};