import NextLink from 'next/link'
import Image from 'next/image'
import { Box, chakra, Heading, useColorModeValue, Container } from '@chakra-ui/react'

import Layout from '../components/layouts/article';
import { GriItem } from '../components/gridItem';
import Section  from '../components/section'
import Paragraph from '../components/paragraph'

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

      </Container>
    </Layout>
  )
}

export default Home;
