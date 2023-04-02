import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import NextLink from 'next/link';
import TypeIt from "typeit-react";
import {
  Button,
  Center,
  chakra,
  Divider,
  Heading,
  HStack,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { ImSphere } from 'react-icons/im';
import { GITHUB_PROFILE, WEBSITE } from 'src/constants';

const CustomImage = chakra(NextImage, {
  baseStyle: {
    borderRadius: 'lg',
    boxShadow: 'lg',
  },
  shouldForwardProp: (prop) =>
    ['src', 'alt', 'width', 'height'].includes(prop),
});

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title='Wake Up Neo'
      description='Innovatoin technology.'
    >
      <Stack
        spacing={4}
        py={12}
        align='center'
        h='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align='start'
          w={{ base: '100%', md: '50%' }}
          py={{ base: 20, md: 0 }}
        >

        <Heading style={{fontFamily: 'monospace'}}>
<Text style={{color: '#0BA7CF', fontFamily: 'monospace', textAlign: 'justify'}}>
<TypeIt
options={{ loop: true }}
getBeforeInit={(instance) => {
instance.type("Wake up Neo").pause(750).delete(12).pause(500).
type("you in the matrix").delete(18).pause(500).
type("follow the white rabbit");
return instance;
}}
/>
</Text>
</Heading>
  <Divider />
          <Text color='gray.500' align='justify'>
          <Trans i18nKey='excerpt'>
              <strong>Student</strong> by day, <strong>mad developer</strong> by
              night. Passionate about computer science and{' '}
              <strong>new technologies</strong>, currently{' '}
              <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink> &{' '}
              <ExternalLink href='https://chakra-ui.com/'>
                Chakra UI
              </ExternalLink>
              , I develop in order to propose different{' '}
              <strong>opensource</strong> contents.
            </Trans>
</Text>
          <HStack
            spacing={4}
            w='full'
            justify={{ base: 'center', md: 'flex-start' }}
          >
 <NextLink href='/@components/NotFoundPage' passHref>
          
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<ImSphere />}
              >
                Portfolio
              </Button>
              </NextLink>
           <NextLink href="/@components/AboutUsPage" passHref>
              <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<FiExternalLink />}
              >
                About us
              </Button>
            </NextLink>
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          <CustomImage
            src='/assets/images/some.gif'
            width={350}
            height={250}
            alt='Cover Image'
          />
        </Center>
      </Stack>
    </PageLayout>
  );
};

export default IndexPage;
