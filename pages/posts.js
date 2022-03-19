import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import Paragraph from '../components/paragraph'

function Posts({ articles }) {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                {articles.map((article) => {
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" key={article.id}>
                        <Heading as="h3">{article.title}</Heading>
                        <Box w="300px" h="300px" borderRadius="10px" my={4} >
                            <Image width="100%" height="100%" src={article.cover_image} />
                        </Box>
                        <Paragraph>
                           {article.description}
                        </Paragraph>
                    </Box>
                })}
            </Box>
        </Box>
    )

}

export async function getServerSideProps({ req }) {
    const res = await fetch('https://dev.to/api/articles?username=simonklein/published', {
        method: "GET",
        headers: {
            "X-Auth-Token": process.env.DEV_API_KEY
        }
    })
    const articles = await res.json()

    return {
        props: {
            articles,
            cookies: req.headers.cookies ?? ''
        }
    }
}

export default Posts;