import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>Die Seite konnte leider nicht gefunden werden</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Zurück zur Startseite</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound;
export { getServerSideProps } from '../components/chakra'