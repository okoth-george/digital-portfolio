const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'HTML & CSS', icon: '🌐' },
        { name: 'TypeScript', icon: '🔷' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'REST APIs', icon: '🔗' },
      ],
    },
    {
      title: 'Tools & Other',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', icon: '📂' },
        { name: 'Docker', icon: '🐳' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Figma', icon: '🎯' },
      ],
    },
  ];

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-8" id="skills">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            What I Know
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="text-3xl">{category.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
