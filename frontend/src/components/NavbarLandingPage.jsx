export default function NavbarLandingPage() {
  const links = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Our Features", href: "#feature" },
    { label: "Contact Us", href: "#contact" },
  ];
  return (
    <main>
      {/*LOGO */}
      <div className="">
        <div>
          <a href="#">
            <h1 className=" uppercase font-rubikmaps text-6xl text-blue">
              Neraki
            </h1>
          </a>
        </div>
        {/*NAVBAR */}
        <nav className=" w-5/12  px-6 py-3 bg-[#FFF9DA] rounded-full">
          <ul className=" flex justify-between">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="bg-yellow ">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/*LOGIN BUTTON */}
        <div></div>{" "}
      </div>
    </main>
  );
}
