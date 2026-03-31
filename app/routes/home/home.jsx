import smartDamageTexture from '~/assets/Smart damage.png';
import smartWasteTexture from '~/assets/Smart Waste.png';
import aiTicketTexture from '~/assets/Ai ticket.png';

import { Heading } from '~/components/heading';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Skills } from './skills';
import { Experience } from './experience';
import { Education } from './education';
import { Achievements } from './achievements';
import { ContactSection } from './contact-section';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const skills = useRef();
  const experience = useRef();
  const education = useRef();
  const achievements = useRef();
  const contact = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details, skills, experience, education, achievements, contact];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Education
        sectionRef={education}
        visible={visibleSections.includes(education.current)}
        id="education"
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Skills
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="tech-skills"
      />
      <div style={{ maxWidth: '1024px', margin: '0 auto', width: '100%', padding: '6rem 2rem 0' }}>
        <Heading level={2} as="h2" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.05em', color: 'var(--text)' }}>
          <DecoderText text="Featured Projects" start={visibleSections.includes(projectOne.current)} delay={300} />
        </Heading>
      </div>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AI Workflow Support Ticket System"
        description="Developed a full-stack analytics system with a React dashboard to visualize support ticket insights, powered by a multimodal NLP classification pipeline combining unstructured text and numerical metadata, complete with model evaluation and retraining workflows."
        buttonText="View GitHub"
        buttonLink="https://github.com/Raksha-1417/AutomaticSupportTicketSystem"
        model={{
          type: 'laptop',
          alt: 'AI Workflow Support Ticket System',
          textures: [
            {
              srcSet: `${aiTicketTexture} 1280w`,
              placeholder: aiTicketTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Smart Damage Detection"
        description="A smart AI-based computer vision system utilizing Convolutional Neural Networks (CNNs) to automatically identify and classify package damage in real-time. By integrating Explainable AI (XAI) techniques like GRAD-CAM and SHAP for transparent predictions, the system significantly reduces manual inspection bottlenecks, minimizes financial losses, and improves overall logistics efficiency."
        buttonText="View GitHub"
        buttonLink="https://github.com/RakshaRajkumar14/IU_Project-Raksha_Rajkumar_Kademani"
        model={{
          type: 'laptop',
          alt: 'Smart Damage Detection App Screen',
          textures: [
            {
              srcSet: `${smartDamageTexture} 800w`,
              placeholder: smartDamageTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Smart Dustbin Management System"
        description="Designed a data-driven system using K-Means clustering and Random Forest models to predict waste bin fill levels. Created an interactive Next.js dashboard to monitor capacities, optimizing collection routes by 30%."
        buttonText="View GitHub"
        buttonLink="https://github.com/Raksha-1417/Smart-Dustbin-Management-System-using-K-Means-Clustering"
        model={{
          type: 'laptop',
          alt: 'Smart Dustbin Management System',
          textures: [
            {
              srcSet: `${smartWasteTexture} 800w`,
              placeholder: smartWasteTexture,
            },
          ],
        }}
      />
      <Achievements
        sectionRef={achievements}
        visible={visibleSections.includes(achievements.current)}
        id="achievements"
      />
      <ContactSection
        sectionRef={contact}
        visible={visibleSections.includes(contact.current)}
        id="contact"
      />
      <Footer />
    </div>
  );
};
