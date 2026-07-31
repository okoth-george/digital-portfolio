const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Connect this to your backend or email service.');
  };

  return (
    <>
      <section className="px-6 py-20 sm:px-8 lg:px-8" id="contact">
        
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Let&apos;s Work Together
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Have a project in mind? Let&apos;s discuss how I can help.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-100/50 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  {/* Modernized Icon Wrapper */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      Email
                    </span>
                    <a 
                      href="mailto:okothgeorge911@gmail.com" 
                      className="block break-all text-sm font-medium text-slate-800 transition hover:text-cyan-600 dark:text-slate-200"
                    >
                      okothgeorge911@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-100/50 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  {/* Modernized Icon Wrapper */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      Location
                    </span>
                    <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                      Kisumu, Kenya
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-100/50 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  {/* Modernized Icon Wrapper */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5M10.5 22.5H13.5M19.5 3.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H6.75C5.50736 22.5 4.5 21.4926 4.5 20.25V3.75C4.5 2.50736 5.50736 1.5 6.75 1.5H17.25C18.4926 1.5 19.5 2.50736 19.5 3.75Z" />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      Phone
                    </span>
                    <a 
                      href="tel:+254715425883" 
                      className="block text-sm font-medium text-slate-800 transition hover:text-cyan-600 dark:text-slate-200"
                    >
                      +254 715 425 883
                    </a>
                  </div>
                </div>
              </div>


              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/okoth-george"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/okoth-george"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>

            <form className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="min-h-32 w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 px-6 py-6 text-center text-sm text-slate-500 sm:px-8 dark:border-slate-800 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-slate-200">George Okoth</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
