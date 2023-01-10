import PostPreview from '../components/PostPreview'
import getPostMetadata from '../lib/getPostMetadata'

export default function HomePage() {
    const postMetadata = getPostMetadata()
    const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />)

    return (
        <>
            <h1>Homepage</h1>
            {postPreviews}
        </>
    )
}
