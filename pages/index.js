import NextLink from 'next/link'
import Image from 'next/image'
import { Box, chakra, Heading, useColorModeValue, Container, Button, List, ListItem, Link, SimpleGrid } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GrLinkedin } from "react-icons/gr";

import Layout from '../components/layouts/article';
import { GridItem } from '../components/gridItem';
import Section  from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio';
import thumbYoutube from '../public/images/space.jpg';
import thumbClient from '../public/images/firstClient.jpeg';


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg" 
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hi 👋, ich bin Simon ein hobby Frontend-Entwickler aus Deutschland! 🇩🇪

        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">Simon Klein</Heading>
            <p>kreativer WebEntwickler {`{ React, Vue, Angular }`} </p>
          </Box>
        

        <Box 
          flexShrink={0} 
          mt={{ base: 4, md: 0 }} 
          ml={{ md: 6 }} 
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage 
              src="/images/avatar.jpg"
              alt='Profile Image'
              borderRadius="full"
              width="100%"
              height="100%"
            />

          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work 💻
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
          lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, 
          vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
        </Paragraph>
      </Section>

      <Box>
        <NextLink href='/portfolio' scroll={false} passHref >
          <Button
            rightIcon={ <ChevronRightIcon /> }
            colorScheme='teal'
            variant='solid'
            my={6}
          >
            Portfolio
          </Button>
        </NextLink>
      </Box>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>Bio 📝</Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Geboren in Troisdorf, Deutschland
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          abgeschlossenes dualen Bachelorstudium in Wirtschaftsinformatik bei der deutschen Telekom AG und anschließende Übernahme.
        </BioSection>
        <BioSection>
          <BioYear>2019 bis heute</BioYear>
          Nebentätigkeit als Webdesigner und Webdeveloper. Seit dem konnte ich meine Fähigkeiten ausweiten und verfeinern.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>Hobbies ❤️</Heading>
        <Paragraph>Klavier, Design, Sport, Technologie</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3'variant='section-title'>Im Internet 🔎</Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/Jerunnon' target='_blank'>
              <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoGithub />}>
                @simonklein
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://twitter.com/simonklein96' target='_blank'>
              <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoTwitter />}>
                @simonklein96
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://www.instagram.com/simon_kl96/' target='_blank'>
              <Button variant='ghost' colorScheme='teal' leftIcon={<IoLogoInstagram />}>
                @Simon_kl96
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://www.linkedin.com/in/simon-klein-346987186/' target='_blank'>
              <Button variant='ghost' colorScheme='teal' leftIcon={<GrLinkedin />}>
                @Simon Klein
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} >
          <GridItem
            href="https://youtube.com"
            title='rocket-belt design'
            thumbnail={thumbYoutube}
          >
            Youtube Channel
          </GridItem>
          <GridItem
            href="https://bk-app-4a16f.web.app"
            title='Bruno&Katia Restaurant'
            thumbnail={thumbClient}
          >
          Homepage für ersten Clienten
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={6}>
            <NextLink href="/posts" scroll={false} passHref >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                neue posts
              </Button>
            </NextLink>
        </Box>
      </Section>

      

      </Container>
    </Layout>
  )
}

export default Home;
export { getServerSideProps } from '../components/chakra'; 
