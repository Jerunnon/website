import Head from 'next/head';
import dynamic from 'next/dynamic';

import Navbar from '../navbar'
import RocketManLoader from '../rocketManLoader';
import Footer from '../footer'

import { Box, Container } from '@chakra-ui/react';


const LazyRocketMan = dynamic(() => import('../rocketMan'), {
    ssr: false,
    loading: () => <RocketManLoader />
})

const main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Simon Klein's Homepage" />
                <meta name='author' content='Simon Klein' />
                <link rel="apple-touch-icon" href="favicon.png" /> {/*TODO touchicon erstellen */}
                <link rel="shortcut icon" href='favicon.ico' type='image/x-icon' />
                <meta name='twitter:card' content='summary-large_image' />
                <title>Simon Klein - Homepage</title>
            </Head>

            <Navbar paht={router.path}/>

            <Container maxW='container.md' pt={14}>
                <LazyRocketMan />

                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default main;