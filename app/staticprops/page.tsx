import { use } from 'react'

async function getCharacters() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const json = await res.json()
    return json.results
}

export default function StaticPropsPage() {
    const allCharacters = use(getCharacters())
    return (
        <div>
            <h1>Static Props Page</h1>
            <ul>
                {allCharacters.map((character: any) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    )
}
