import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky top-0 bg-opacity-70 backdrop-blur pointer-events-none flex flex-col h-full py-8 z-40">
      <Navbar />
    </header>
  );
}

export default Header;
