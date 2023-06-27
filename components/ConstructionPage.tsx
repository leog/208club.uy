import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'

import Footer from './Footer'

export default function ConstructionPage() {
    return (<Layout loading={false} preview={false}>
        <Container>
            <BlogHeader title={"208Club.uy"} description={["208Club.uy"]} level={1} />
            <h1 className='text-6xl mb-12'>En construcción...</h1>
        </Container>
        <Footer />
    </Layout>)
}