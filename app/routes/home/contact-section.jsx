import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './contact-section.module.css';

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export const ContactSection = ({ id, sectionRef, visible }) => {
  const errorRef = useRef();
  const name = useFormInput('');
  const email = useFormInput('');
  const message = useFormInput('');
  const [formState, setFormState] = useState('default');
  const sending = formState === 'submitting';
  const success = formState === 'success';
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setFormState('success');
        setTimeout(() => setShowSuccess(true), 800);
        formElement.reset();
      } else {
        setFormState('error');
        alert("Error: " + data.message);
      }
    } catch (error) {
      setFormState('error');
      alert("Something went wrong. Please try again.");
    }
  };

  function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
  }

  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contactSection} as="section" id={id} ref={sectionRef}>
      <Transition unmount in={visible} timeout={1600}>
        {({ status, nodeRef }) => (
          <div ref={nodeRef} className={styles.splitLayout}>
            {/* Left Column: Details & Links */}
            <div className={styles.leftCol}>
              <Heading
                className={styles.title}
                data-status={status}
                level={3}
                as="h2"
                style={{ fontSize: '3rem', color: 'var(--text)', transitionDelay: '300ms' }}
              >
                <DecoderText text="Get in Touch" start={status !== 'exited' && visible} delay={300} />
              </Heading>

              <Text size="l" as="p" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Grenzallee 85, Berlin 12057, Germany <br />
                <span style={{ color: 'var(--primary)', marginTop: '0.5rem', display: 'inline-block' }}>+49 17631503817</span>
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a href="mailto:rakshakademani2001@gmail.com" className={styles.contactLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  rakshakademani2001@gmail.com
                </a>
                <a href="https://github.com/Raksha-1417" target="_blank" rel="noreferrer" className={styles.contactLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Github Profile
                </a>
                <a href="https://www.linkedin.com/in/raksha-r-kademani" target="_blank" rel="noreferrer" className={styles.contactLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className={styles.rightCol}>
              <Transition in={!success && visible} timeout={1600}>
                {({ status: formStatus, nodeRef: formNodeRef }) => (
                  <form
                    className={styles.form}
                    onSubmit={onSubmit}
                    ref={formNodeRef}
                    style={{ 
                      pointerEvents: success ? 'none' : 'auto',
                      opacity: success ? 0 : 1,
                      transition: 'opacity 0.4s ease'
                    }}
                    aria-hidden={success}
                  >
                    {/* Hidden honeypot field to identify bots */}
                    <Input
                      className={styles.botkiller}
                      label="Name"
                      name="botcheck"
                      maxLength={MAX_EMAIL_LENGTH}
                    />
                    <Input
                      required
                      className={styles.input}
                      data-status={formStatus}
                      style={getDelay(tokens.base.durationXS, initDelay)}
                      autoComplete="name"
                      label="Your name"
                      type="text"
                      name="name"
                      maxLength={MAX_EMAIL_LENGTH}
                      {...name}
                    />
                    <Input
                      required
                      className={styles.input}
                      data-status={formStatus}
                      style={getDelay(tokens.base.durationXS, initDelay)}
                      autoComplete="email"
                      label="Your email"
                      type="email"
                      name="email"
                      maxLength={MAX_EMAIL_LENGTH}
                      {...email}
                    />
                    <Input
                      required
                      multiline
                      className={styles.input}
                      data-status={formStatus}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="off"
                      label="Message"
                      name="message"
                      maxLength={MAX_MESSAGE_LENGTH}
                      {...message}
                    />
                    <Button
                      className={styles.button}
                      data-status={formStatus}
                      data-sending={sending}
                      style={getDelay(tokens.base.durationM, initDelay)}
                      disabled={sending}
                      loading={sending}
                      loadingText="Sending..."
                      icon="send"
                      type="submit"
                    >
                      Send message
                    </Button>
                  </form>
                )}
              </Transition>
              <Transition unmount in={showSuccess && visible}>
                {({ status: successStatus, nodeRef: successNodeRef }) => (
                  <div className={styles.complete} aria-live="polite" ref={successNodeRef}>
                    <Heading
                      level={3}
                      as="h3"
                      className={styles.completeTitle}
                      data-status={successStatus}
                      style={getDelay('1000ms')}
                    >
                      Message Sent
                    </Heading>
                    <Text
                      size="l"
                      as="p"
                      className={styles.completeText}
                      data-status={successStatus}
                      style={getDelay('1200ms')}
                    >
                      Thank you for your message! I'll get back to you as soon as possible.
                    </Text>
                  </div>
                )}
              </Transition>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
