import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'

import bkApp from '../public/images/firstClient.jpeg'

const Portfolio = () => (
    <Layout title='Portfolio'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>Portfolio</Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6} >
                <Section>
                    <WorkGridItem id='bk-app' title='BK-App' thumbnail={bkApp} >
                        Eine Website für das Restaurant meiner Mutter und ihren Mann. 
                        In Verbindung mit einem Headless CMS.
                    </WorkGridItem>
                </Section>

                
            </SimpleGrid>
        </Container>
    </Layout>
);

export default Portfolio;
export { getServerSideProps } from '../components/chakra'