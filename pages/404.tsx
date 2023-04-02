import PageLayout from '@/components/page-layout';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import Link from 'next/link';

import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  Image,
  Text,
  LinkOverlay,
} from '@chakra-ui/react';

          

const projects = [
  {
    id: 1,
    title: 'project1_title',
    description: 'project1_description',
    imageUrl:
      'https://www.mobindustry.net/wp-content/uploads/real_estate_app_-_summary_4x.jpg',
    href: '/project-1',
  },
  {
    id: 2,
    title: 'project2_title',
    description: 'project2_description',
    imageUrl:
      'https://cdn.dribbble.com/users/1615584/screenshots/16909295/media/0cad69865a1345d8d2b113fc52e94918.jpg?compress=1&resize=400x300',
    href: '/project-2',
  },
  {
    id: 3,
    title: 'project3_title',
    description: 'project3_description',
    imageUrl:
      'https://cdn.dribbble.com/users/737304/screenshots/6809106/iphone_x-xs___3.png',
    href: '/project-3',
  },
];

const ProjectItem = ({ project }) => {
  const { title, description, imageUrl, href } = project;
  const { t } = useTranslation();

  return (
    <motion.div
      key={project.id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Box
        p={4}
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        height={['auto', '100%']}
      >
        <Image src={imageUrl} alt={t(title)} height={['200px', 'auto']} />
        <Heading mt={2} size='md' color='gray.500'>
          {t(title)}
        </Heading>
        <Text mt={2} color='gray.500' align='justify'>
          {t(description)}
        </Text>
        <LinkOverlay href={href} isExternal>
          <Button colorScheme='brand' size='md' mt={4}>
            {t('view_project')}
          </Button>
        </LinkOverlay>
      </Box>
    </motion.div>
  );
};

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout title={t('portfolio')} description={t('software_projects')}>
      
      <Box maxW='6xl' mx='auto' py={8} px={{ base: '6', md: '8' }}>
        <Heading size='lg' mb={4} color='gray.500'>
          {t('software_projects')}
        </Heading>
        <Divider mb={8} />

        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default PortfolioPage;

