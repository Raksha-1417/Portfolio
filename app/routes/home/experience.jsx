import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Transition } from '~/components/transition';
import styles from './experience.module.css';

const EXPERIENCES = [
  {
    year: '2025 - Present',
    location: 'Stockholm, Sweden (Remote)',
    title: 'AI & Full Stack Developer Intern',
    company: 'Gaddr',
    description: 'Developing features for an AI-powered recruitment platform, integrating backend services with frontend components. Managing JWT authentication, state management, and real-time updates using NestJS, TypeScript, PostgreSQL, and Redis.',
    skills: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'LLM Workflows']
  },
  {
    year: '2022 - 2025',
    location: 'Bengaluru, India',
    title: 'Software Engineer',
    company: 'Tietoevry',
    description: 'Developed and maintained full-stack web applications using C#, .NET, Blazor WebAssembly, and MS SQL Server. Built RESTful APIs, implemented secure file handling, and wrote unit tests to improve application stability.',
    skills: ['C#', '.NET', 'Blazor WebAssembly', 'MS SQL Server', 'REST APIs', 'MSTest']
  }
];

export const Experience = ({ id, sectionRef, visible }) => {
  return (
    <Section
      className={styles.experienceSection}
      as="section"
      id={id}
      ref={sectionRef}
    >
      <Transition in={visible} timeout={0}>
        {({ visible: sectionVisible, nodeRef }) => (
          <div ref={nodeRef} className={styles.wrapper}>
            <div className={styles.header}>
              <Heading level={2} as="h2" className={styles.title} data-visible={sectionVisible}>
                <DecoderText text="Career Path" start={sectionVisible} delay={300} />
              </Heading>
              <p className={styles.subtitle} data-visible={sectionVisible}>
                A chronicle of my professional evolution, from foundational web development to advanced AI systems and backend architecture.
              </p>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineLine}></div>
              <div className={styles.timelineLineGlow}></div>
              
              {EXPERIENCES.map((exp) => (
                <div key={exp.company} className={styles.item} data-visible={sectionVisible}>
                  <div className={styles.node}>
                    <div className={styles.nodeAccent}></div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.card}>
                      <div className={styles.noise}></div>
                      <div className={styles.cardInner}>
                        <div className={styles.cardHeader}>
                          <span className={styles.year}>{exp.year}</span>
                          <div className={styles.location}>
                            <svg className={styles.locationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            {exp.location}
                          </div>
                        </div>
                        <h3 className={styles.role}>{exp.title}</h3>
                        <p className={styles.company}>{exp.company}</p>
                        <p className={styles.description}>{exp.description}</p>
                        <div className={styles.skills}>
                          {exp.skills.map(skill => (
                            <span key={skill} className={styles.skillBadge}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
