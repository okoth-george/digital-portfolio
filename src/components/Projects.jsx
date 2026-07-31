const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'A brief description of this project. What it does, what problem it solves, and what makes it unique.',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Project Two',
      description:
        'A brief description of this project. What it does, what problem it solves, and what makes it unique.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Project Three',
      description:
        'A brief description of this project. What it does, what problem it solves, and what makes it unique.',
      tags: ['TypeScript', 'Next.js', 'Tailwind'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section className="bg-slate-50/70 px-6 py-20 sm:px-8 lg:px-8 dark:bg-slate-900/40" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            My Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${index % 2 === 0 ? 'from-cyan-100 to-blue-200' : 'from-fuchsia-100 to-purple-200'}`}>
                <span className="text-5xl">🖼️</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.codeUrl}
                    className="text-sm font-semibold text-slate-600 transition hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
