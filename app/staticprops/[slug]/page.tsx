// getStaticProps in Next13
async function getCharacters() {
    return await (await fetch('https://rickandmortyapi.com/api/character')).json()
}

// getStaticPaths in Next13
export async function generateStaticParams() {
    const allCharacters = await getCharacters()

    return allCharacters?.results.map((character: any) => ({
        slug: character?.name.replace(/\s+/g, '-').toLowerCase()
    }))
}

export default function Staticpage({ params }: any) {
    return (
        <>
            <h1>The character name is: {params.slug}</h1>
        </>
    )
}
