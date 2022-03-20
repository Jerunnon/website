import { Heading, Container, SimpleGrid } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/gridItem'

function Posts({ articles }) {

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>neueste Posts</Heading>
                {articles.map((article) => {
                    return (
                        <Section delay={0.1} key={article.length}>
                            <SimpleGrid columns={[1, 2, 2]} gap={6} key={article.id}>
                                <GridItem key={article.title}
                                    title={article.title}
                                    thumbnail={article.cover_image}
                                    href={article.url}
                                >
                                {article.description}
                                </GridItem>
                            </SimpleGrid>
                        </Section>
                    )
                })}
            </Container>
        </Layout>
    )

}

export async function getServerSideProps({ req }) {

    try {
        const res = await fetch('https://dev.to/api/articles/me/published', {
            method: "GET",
            headers: {
                "api-key": process.env.DEV_API_KEY
            }
        })
        const articles = await res.json()
        return {
            props: {
                articles,
                cookies: req.headers.cookies ?? ''
            }
        }
    } catch (error) {
        console.log(error)
    }
   
}

export default Posts;