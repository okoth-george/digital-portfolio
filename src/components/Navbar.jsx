import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          George<span className="ml-1 text-cyan-600">Techies</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 md:inline-flex"
          >
            Talk to me
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200/80 bg-white/95 transition-all duration-300 md:hidden dark:border-slate-800 dark:bg-slate-950/95 ${
          mobileOpen ? 'max-h-64 py-4' : 'max-h-0 border-t-transparent py-0'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex w-fit rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white"
            onClick={handleLinkClick}
          >
            Talk to me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
