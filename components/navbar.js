import NextLink from 'next/link'

//Chakra UI Components
import {
  Box,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  Stack,
  Link,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react'

import ThemeToggleButton from './themeToggleButton';
import Logo from './logo'
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, target, children, ...props}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
   <NextLink href={href} passHref scroll={false}>
     <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
     </Link>
   </NextLink>
  ) 
}

export default function Navbar() {
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue("#F0E7DB", "#24343A")}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        align="center"
        justifyContent='space-between'
      >
        <Flex align="center" mr={5} >
          <Heading as='h1' size='lg' letterSpacing={'tighter'} >
            <Logo />
          </Heading>
        </Flex>

        <Stack 
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/portfolio' className='Link'>
            Portfolio
          </LinkItem>
          <LinkItem href="/posts">
            Posts
          </LinkItem>
          <LinkItem href="/contact">
            Kontakt
          </LinkItem>
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label='Options' />
              <MenuList>
                <NextLink href="/" className='Link'>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" className='Link'>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/posts" className='Link'>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/contact" className='Link'>
                  <MenuItem as={Link}>Kontakt</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>

          </Box>
        </Box>
      </Container>
    </Box>
  )
};