import { use } from 'react'

async function getCharacters() {
    const res = await fetch('https://rickandmortyapi.com/api/character', { cache: 'no-store' })
    const json = await res.json()
    return json
}

export default function ServerPage() {
    const allCharacters = use(getCharacters())
    return (
        <>
            <h1>Server Fetching (getServerSideProps) Page</h1>
            <ul>
                {allCharacters?.results?.map((character: any) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </>
    )
}
