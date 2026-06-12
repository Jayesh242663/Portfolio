import { useState, useEffect, useRef } from 'react'
import './ProjectsSection.css'

function ProjectsSection() {
  const projects = [
    {
      id: '01',
      title: 'SECUREPASS',
      status: 'IN DEV',
      type: 'Security Platform',
      description:
        'Password auditing and breach-monitoring platform built on zero-knowledge architecture principles — the server never sees plaintext credentials. Identifies weak, reused, and compromised passwords via entropy analysis and HIBP-style breach checks. Features JWT-based authentication, per-user encrypted vaults, and a security reporting dashboard. Backend in Flask with PostgreSQL/Supabase; React frontend with a data-dense audit UI.',
      technologies: [
        {
          icon: 'devicon-react-original colored',
          name: 'React'
        },
        {
          icon: 'devicon-flask-original colored',
          name: 'Flask'
        },
        {
          icon: 'devicon-postgresql-plain colored',
          name: 'PostgreSQL'
        },
        {
          icon: 'devicon-supabase-plain colored',
          name: 'Supabase'
        }
      ],
      github: 'https://github.com/jayesh242663',
      live: '#',
    },

    {
      id: '02',
      title: 'SARATHI FINANCE',
      status: 'ACTIVE',
      type: 'Institutional Management System',
      description:
        'Production web application commissioned by SHMCT to manage student placements, fee collections, and institutional expense workflows. Implements role-based access control with three actor tiers, database-level constraints preventing duplicate fee submissions, and a full audit log trail for all financial mutations. Containerized with Docker; served on React + Express.js + Supabase PostgreSQL. Responsive dashboards give admins live visibility into placement and finance status.',
      technologies: [
        {
          icon: 'devicon-react-original colored',
          name: 'React'
        },
        {
          icon: 'devicon-nodejs-plain colored',
          name: 'Node.js'
        },
        {
          icon: 'devicon-postgresql-plain colored',
          name: 'PostgreSQL'
        },
        {
          icon: 'devicon-docker-plain colored',
          name: 'Docker'
        }
      ],
      github: 'https://github.com/jayesh242663',
      live: '#',
    },

    {
      id: '03',
      title: 'WORKSPACE MGMT',
      status: 'COMPLETE',
      type: 'Team Collaboration Platform',
      description:
        'Centralised workspace management system for teams to manage employees, assign tasks, and track project progress across departments. Automated status propagation keeps task state consistent without manual updates. Database schema designed for multi-team hierarchies with efficient reporting queries. Pure Python backend with MySQL — all raw queries, no ORM — ensuring full visibility into data access patterns.',
      technologies: [
        {
          icon: 'devicon-python-plain colored',
          name: 'Python'
        },
        {
          icon: 'devicon-mysql-plain colored',
          name: 'MySQL'
        }
      ],
      github: 'https://github.com/jayesh242663',
      live: '#',
    },

    {
      id: '04',
      title: 'BANK MANAGEMENT',
      status: 'COMPLETE',
      type: 'Banking Application',
      description:
        'Core banking application supporting account creation, deposits, withdrawals, transfers, and customer record management. Originally built in Java; migrated to Python for improved maintainability and cleaner MySQL integration. Transaction operations are wrapped in explicit commits and rollback handlers to prevent partial-write corruption. A deliberate study in financial data integrity and secure state management.',
      technologies: [
        {
          icon: 'devicon-python-plain colored',
          name: 'Python'
        },
        {
          icon: 'devicon-mysql-plain colored',
          name: 'MySQL'
        }
      ],
      github: 'https://github.com/jayesh242663',
      live: '#',
    },
  ]

  const [selectedProject, setSelectedProject] =
    useState(projects[0])

  const hoverTimeout = useRef(null)

  function handleProjectHover(project) {
    clearTimeout(hoverTimeout.current)

    hoverTimeout.current = setTimeout(() => {
      setSelectedProject(project)
    }, 120)
  }

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout.current)
    }
  }, [])

  return (
    <section
      id="projects"
      className="section-wrap border-b border-outline-variant"
    >
      <div
        className="projects-heading flex items-center justify-between"
        style={{
          marginBottom: '20px',
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
          /PROJECTS
        </h2>

        <span className="text-label-sm text-on-surface-variant uppercase opacity-50">
          [ SECTION_03 ]
        </span>
      </div>

      <div className="projects-layout">
        {/* LEFT PANEL */}

        <div className="project-sidebar">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject.id === project.id
                ? 'active'
                : ''
                }`}
              onMouseEnter={() =>
                handleProjectHover(project)
              }
            >
              <div className="project-nav-id">
                [{project.id}]
              </div>

              <div className="project-nav-title">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}

        <div
          key={selectedProject.id}
          className="project-detail"
        >
          <div className="project-status">
            STATUS: {selectedProject.status}
          </div>

          <h3 className="project-detail-title">
            {selectedProject.title}
          </h3>

          <div className="project-detail-type">
            {selectedProject.type}
          </div>

          <p className="project-detail-description">
            {selectedProject.description}
          </p>

          <div className="project-footer-row">

            <div className="project-tech-icons">
              {selectedProject.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-tooltip-wrapper"
                >
                  <i
                    className={`${tech.icon} project-tech-icon`}
                  />

                  <span className="tech-tooltip">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
              >
                <span className="material-symbols-outlined">
                  code
                </span>
                GITHUB
              </a>

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
              >
                <span className="material-symbols-outlined">
                  open_in_new
                </span>
                LIVE DEMO
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
