const Navbar = () => {
  const navPages = [
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Projects",
      url: "#projects",
    },
  ];
  return (
    <>
      <nav className="main-container py-4">
        <div className="flex items-center flex-wrap gap-6 md:gap-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              durjoy.dev
            </h2>
          </div>
          <div>
            <ul className="flex gap-3 md:gap-12 text-sm md:text-base font-normal">
              {navPages.map((page, idx) => (
                <a
                  href={`${page.url}`}
                  key={idx}
                  className="hover:text-primary hover:font-medium transition-all delay-100"
                >
                  <li>{page.title}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
