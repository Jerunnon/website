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
                <link rel="icon" type='image/png' href="/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href='/favicon.ico' type='image/x-icon' />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
                <meta name='twitter:card' content='summary-large_image' />
                <title>Simon Klein - Homepage</title>
            </Head>

            <Navbar path={router.path}/>

            <Container maxW='container.md' pt={14}>
                <LazyRocketMan />

                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default main;