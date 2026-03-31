import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import { Model } from '~/components/model';
import { deviceModels } from '~/components/model/device-models';
import aiTicketTexture from '~/assets/Ai ticket.png';
import styles from './ai-workflow.module.css';

const title = 'AI Workflow Support Ticket System';
const description =
  'A full-stack analytics system predicting outcomes and classifying cases based on 100K+ support tickets using BERT and RoBERTa models. Engineered a React and NodeJS dashboard to visualize key metrics, reducing manual sorting by 40% and improving response times by 25%.';
const roles = ['React & NodeJS', 'PostgreSQL', 'NLP (BERT & RoBERTa)', 'AWS'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AiWorkflow = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.aiWorkflow}>
        <ProjectBackground
          opacity={0.8}
          src={aiTicketTexture}
          srcSet={`${aiTicketTexture} 1280w`}
          placeholder={aiTicketTexture}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Raksha-1417"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.modelWrapper}>
              <Model
                alt="AI Workflow System"
                cameraPosition={{ x: 0, y: 0, z: 8 }}
                showDelay={300}
                show={true}
                models={[
                  {
                    ...deviceModels.laptop,
                    texture: {
                      srcSet: `${aiTicketTexture} 800w`,
                      placeholder: aiTicketTexture,
                      sizes: '(max-width: 1199px) 100vw, 848px',
                    },
                  },
                ]}
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Streamlining Support</ProjectSectionHeading>
            <ProjectSectionText>
              By leveraging advanced natural language processing models like BERT and RoBERTa alongside a robust NodeJS backend, this ticket system instantly categorizes and prioritizes user requests from a dataset of over 100,000 cases. This architecture eliminated manual sorting by 40%, improved response times by 25%, and surfaced systemic issues directly on an elegant React-powered analytics dashboard actively monitored on AWS.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
