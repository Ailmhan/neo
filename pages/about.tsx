import PageLayout from '@/components/page-layout';
import { VStack, Heading, Text } from '@chakra-ui/react';
import TypeIt from 'typeit-react';
import { Trans, useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  // Store the text for TypeIt in an array
  const typeItText = [
    'We are a team of developers.',
    'Passionate about creating innovative projects.',
    'Dedicated to delivering high-quality products.',
    'Committed to continuously improving.',
    'Ready to take on any challenge.',
    'Think outside the box.',
    'Never give up.',
    'Always strive for excellence.'
  ];

  return (
    <PageLayout
      title='About Us'
      description='All about our team'
    >
      <VStack py={12} align='center' h='100vh'>
        <Heading mb='8'>Learn about our team</Heading>
        <TypeIt
          element={Text}
          options={{ loop: true }}
          getBeforeInit={(instance) => {
            typeItText.forEach((text) => {
              instance.type(text).pause(750).delete(text.length).pause(500);
            });
            return instance;
          }}
        />
        <Text>
          Our team is comprised of passionate and skilled developers who are dedicated to delivering high-quality products. We pride ourselves on thinking outside the box and never giving up, no matter the challenge. At our core, we are committed to continuously improving and always striving for excellence.
        </Text>
      </VStack>
    </PageLayout>
  );
};

export default AboutUsPage;
