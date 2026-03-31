import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Transition } from '~/components/transition';
import styles from './education.module.css';

const EDUCATION = [
  {
    year: 'Expected 2027',
    degree: 'M.Sc. in Computer Science',
    university: 'IU International University of Applied Sciences',
    location: 'Berlin, Germany',
    icon: (
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ) 
  },
  {
    year: '2018 — 2022',
    degree: 'B.E. in Computer Science',
    university: 'Visvesvaraya Technological University',
    location: 'Karnataka, India',
    icon: (
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  }
];

export const Education = ({ id, sectionRef, visible }) => {
  return (
    <Section
      className={styles.educationSection}
      as="section"
      id={id}
      ref={sectionRef}
    >
      <Transition in={visible} timeout={0}>
        {({ visible: sectionVisible, nodeRef }) => (
          <div ref={nodeRef}>
            <div className={styles.header}>
              <Heading level={2} as="h2" className={styles.title} data-visible={sectionVisible}>
                <DecoderText text="Education" start={sectionVisible} delay={300} />
              </Heading>
            </div>
            
            <div className={styles.grid}>
              {EDUCATION.map((edu, index) => (
                <div key={edu.degree} className={styles.cardWrapper} data-visible={sectionVisible} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className={styles.card}>
                    <div className={styles.noise}></div>
                    <div className={styles.iconWrapper}>
                      {edu.icon}
                    </div>
                    <div className={styles.cardInner}>
                      <span className={styles.year}>{edu.year}</span>
                      <h3 className={styles.degree}>{edu.degree}</h3>
                      <p className={styles.university}>{edu.university}</p>
                      <div className={styles.location}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {edu.location}
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
