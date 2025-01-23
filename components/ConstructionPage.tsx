import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'

export default function ConstructionPage() {
  return (
    <Layout loading={false} preview={false}>
      <Container>
        <BlogHeader
          title={'208Club.uy'}
          description={['208Club.uy']}
          level={1}
        />
        <h1 className="mb-12 text-6xl">Próximamente...</h1>
      </Container>
    </Layout>
  )
}
