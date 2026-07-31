const About = () => {
  const stats = [
    { value: '5+', label: 'Projects' },
    { value: '2+', label: 'Years Exp.' },
    { value: '10+', label: 'Technologies' },
  ];

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-8" id="about">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              A passionate developer building digital experiences
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m a developer based in Kisumu, with a passion for building web
              applications that make a difference. I love working with modern
              technologies and constantly learning new things.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring ideas,
              creating side projects, and refining the details that make software
              feel effortless for people.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-slate-50 p-4 text-center dark:bg-slate-800/80">
                  <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
