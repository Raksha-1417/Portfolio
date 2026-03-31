import { Heading } from '~/components/heading';
import { DecoderText } from '~/components/decoder-text';
import { Section } from '~/components/section';
import { Transition } from '~/components/transition';
import styles from './achievements.module.css';

export const Achievements = ({ id, sectionRef, visible }) => {
  return (
    <Section className={styles.achievements} as="section" id={id} ref={sectionRef}>
      <Transition in={visible} timeout={0}>
        {({ visible: sectionVisible, nodeRef }) => (
          <div ref={nodeRef}>
            <div className={styles.header}>
              <Heading level={2} as="h2" className={styles.title} data-visible={sectionVisible}>
                <DecoderText text="Honors & Languages" start={sectionVisible} delay={300} />
              </Heading>
            </div>
            
            <div className={styles.container}>
              {/* Left Column: Achievements & Certs */}
              <div className={styles.col}>
                <div className={styles.sectionTitle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Achievements & Certifications
                </div>
                
                <div className={styles.trophyCard}>
                  <div className={styles.trophyHeader}>
                    <div className={styles.trophyIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                    </div>
                    <div>
                      <div className={styles.trophyLabel}>Top 5 Business Case Pitch</div>
                      <span className={styles.trophySub}>Tech Utsav 2024 (Tietoevry)</span>
                    </div>
                  </div>
                  <div className={styles.trophyBody}>
                    Recognized for proposing a voice-enabled accessibility solution for web applications to support visually and physically impaired users.
                  </div>
                </div>

                <div className={styles.certsList}>
                  <div className={styles.certBadge}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    Microsoft Azure Fundamentals (AZ-900)
                  </div>
                  <div className={styles.certBadge}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    Retail 101 Certification
                  </div>
                  <div className={styles.certBadge}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    Modern JavaScript (Udemy)
                  </div>
                </div>
              </div>

              {/* Right Column: Languages */}
              <div className={styles.col}>
                <div className={styles.sectionTitle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Languages
                </div>

                <div className={styles.languagesGrid}>
                  <div className={styles.langPill}>
                    <span className={styles.langName}>German</span>
                    <span className={styles.langLevel}>A1 (Target: A2)</span>
                  </div>

                  <div className={styles.langPill}>
                    <span className={styles.langName}>English</span>
                    <span className={styles.langLevel}>Fluent</span>
                  </div>

                  <div className={styles.langPill}>
                    <span className={styles.langName}>Hindi</span>
                    <span className={styles.langLevel}>Fluent</span>
                  </div>

                  <div className={styles.langPill}>
                    <span className={styles.langName}>Kannada</span>
                    <span className={styles.langLevel}>Native</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </Transition>
    </Section>
  );
};
