import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Transition } from '~/components/transition';
import { Section } from '~/components/section';
import { Fragment } from 'react';
import styles from './skills.module.css';

const SKILLS = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react', delay: 0, duration: 4, rotate: -5 },
  { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular', delay: 0.5, duration: 5, rotate: 0 },
  { name: 'Blazor', icon: 'https://cdn.simpleicons.org/blazor', delay: 1, duration: 6, rotate: 5 },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', delay: 1.5, duration: 4, rotate: -5 },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git', delay: 2, duration: 6, rotate: 5 },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap', delay: 2, duration: 5, rotate: 0 },
  { name: '.NET', icon: 'https://cdn.simpleicons.org/dotnet', delay: 0, duration: 6, rotate: 5 },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', delay: 0, duration: 4, rotate: -5 },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python', delay: 0.5, duration: 4, rotate: -5 },
  { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs', delay: 1, duration: 5, rotate: 0 },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', delay: 1.5, duration: 6, rotate: 5 },
  { name: 'MS SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', delay: 2, duration: 4, rotate: -5 },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', delay: 0, duration: 5, rotate: 0 },
  { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv', delay: 0.5, duration: 6, rotate: 5 },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', delay: 1, duration: 4, rotate: -5 },
  { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', delay: 1.5, duration: 5, rotate: 0 }
];

export const Skills = ({ id, sectionRef, visible }) => {
  return (
    <Section
      className={styles.skillsSection}
      as="section"
      id={id}
      ref={sectionRef}
    >
      <Transition in={visible} timeout={0}>
        {({ visible: sectionVisible, nodeRef }) => (
          <div ref={nodeRef}>
            <div className={styles.header}>
              <Heading level={2} as="h2" className={styles.title} data-visible={sectionVisible}>
                <DecoderText text="Skills & Tech" start={sectionVisible} delay={300} />
              </Heading>
            </div>
            
            <div className={styles.grid}>
              {SKILLS.map((skill, index) => (
                <div key={skill.name} className={styles.skillItem} data-visible={sectionVisible}>
                  <div
                    className={styles.card}
                    style={{
                      animationDelay: `${skill.delay}s`,
                      animationDuration: `${skill.duration}s`,
                      '--rotation': `${skill.rotate}deg`,
                    }}
                  >
                    <img
                      alt={skill.name}
                      className={styles.icon}
                      src={skill.icon}
                      loading="lazy"
                    />
                    <div className={styles.tooltip}>
                      <span className={styles.tooltipText}>{skill.name}</span>
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
