import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-8" id="hero">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex justify-center lg:justify-frex-start">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-cyan-200/70 blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-fuchsia-200/70 blur-3xl"></div>
            <div className="animate-[float_6s_ease-in-out_infinite] overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-white/80 bg-gradient-to-br from-cyan-100 to-blue-200 p-3 shadow-2xl dark:border-slate-800 dark:from-cyan-950/70 dark:to-blue-950/70">
              <img
                src={profilePhoto}
                alt="George Okoth"
                className="h-72 w-72 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover object-top sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-950/40 dark:text-cyan-300">
            👋 Hello, I&apos;m
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
            George <span className="text-cyan-600">Okoth</span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-300">
            Software Developer
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            I build beautiful, responsive web applications and softwares with modern
            technologies. Passionate about clean code, great user experiences,
            and turning ideas into reality.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              View Projects ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="h-px w-12 bg-slate-300 dark:bg-slate-600"></span>
            Scroll to explore
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
