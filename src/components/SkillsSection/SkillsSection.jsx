import './SkillsSection.css'

function SkillsSection() {
  const categories = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'React.js', iconClass: 'devicon-react-original colored', level: 'ADVANCED' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored', level: 'ADVANCED' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', level: 'ADVANCED' },
        { name: 'HTML5', iconClass: 'devicon-html5-plain colored', level: 'ADVANCED' },
        { name: 'CSS3', iconClass: 'devicon-css3-plain colored', level: 'ADVANCED' },
      ],
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', level: 'ADVANCED' },
        { name: 'Express.js', iconClass: 'devicon-express-original colored', level: 'ADVANCED' },
        { name: 'Python', iconClass: 'devicon-python-plain colored', level: 'ADVANCED' },
        { name: 'Flask', iconClass: 'devicon-flask-original colored', level: 'INTERMEDIATE' },
        { name: 'Java', iconClass: 'devicon-java-plain colored', level: 'INTERMEDIATE' },
        { name: 'C', iconClass: 'devicon-c-plain colored', level: 'INTERMEDIATE' },
      ],
    },
    {
      title: 'DATABASES',
      skills: [
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored', level: 'ADVANCED' },
        { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', level: 'ADVANCED' },
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', level: 'INTERMEDIATE' },
        { name: 'Supabase', iconClass: 'devicon-supabase-plain colored', level: 'ADVANCED' },
        { name: 'SQLite', iconClass: 'devicon-sqlite-plain colored', level: 'INTERMEDIATE' },
      ],
    },
    {
      title: 'DEVOPS & TOOLS',
      skills: [
        { name: 'Docker', iconClass: 'devicon-docker-plain colored', level: 'INTERMEDIATE' },
        { name: 'Git', iconClass: 'devicon-git-plain colored', level: 'ADVANCED' },
        { name: 'GitHub', iconClass: 'devicon-github-original colored', level: 'ADVANCED' },
        { name: 'REST APIs', iconClass: 'material', iconName: 'api', level: 'ADVANCED' },
        { name: 'RBAC / Auth', iconClass: 'material', iconName: 'lock', level: 'ADVANCED' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="section-wrap border-b border-outline-variant bg-surface"
    >
      <div
        className="skills-heading flex items-center justify-between"
        style={{
          marginBottom: '32px',
          flexShrink: 0,
        }}
      >
        <h2
          className="font-headline-md text-primary-container"
          style={{
            fontSize: '28px',
            fontWeight: 700,
          }}
        >
          /SKILLS
        </h2>

        <span className="text-label-sm text-on-surface-variant opacity-50 font-code-snippet uppercase">
          [ SECTION_04 ]
        </span>
      </div>

      <div className="skills-columns">
        {categories.map((category) => (
          <div
            key={category.title}
            className="skill-column"
          >
            <h3 className="skill-column-title">
              {category.title}
            </h3>

            <div className="skill-icons">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item"
                >
                  {skill.iconClass === 'material' ? (
                    <span className="material-symbols-outlined skill-item-icon">
                      {skill.iconName}
                    </span>
                  ) : (
                    <i
                      className={`${skill.iconClass} skill-item-icon`}
                    />
                  )}

                  <span className="skill-item-name">
                    {skill.name}
                  </span>

                  <span className="skill-item-level">
                    [{skill.level}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
