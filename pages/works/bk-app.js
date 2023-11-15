
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/works';
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='bk-app'>
            <Container>
                <Title>
                    Fresh&Tasty | Restaurant <Badge>2021-</Badge>
                </Title>
                <Paragraph>
                    Eine Beispielhafte Website für ein Restaurant. 
                    Das Projekt beinhaltet auch ein Headless CMS
                </Paragraph>
                <List ml={4} my ={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://bk-app-4a16f.web.app' target="_blank">
                        https://bk-app-4a16f.web.app <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plattform</Meta>
                        <span>Windows/Mac/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Ressourcen</Meta>
                        <span>NodeJS, Axios, React, Typescript, MaterialUI</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href='https://dev.to/simonklein/my-first-big-project-my-advice-for-beginners-55d3' target="_blank">
                            Was ich durch meinem erstes großes Projekt gelernt habe! <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src='/images/firstClient.jpeg' />
            </Container>
        </Layout>
    )
};

export default Work;
export { getServerSideProps } from '../../components/chakra';