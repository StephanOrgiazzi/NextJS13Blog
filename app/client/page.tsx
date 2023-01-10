'use client'
import useSWR from 'swr'
import Link from 'next/link'
import { Suspense } from 'react'

const fetcher = (path: string) => fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json())

export default function ClientPage() {
    const allCharacters = useSWR('api/character', fetcher)
    return (
        <>
            <h1>Client Fetching Page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {allCharacters?.data?.results?.map((character: any) => (
                    <ul key={character.id}>
                        <Link href={`/staticprops/${character.name}`}>
                            <li>{character.name}</li>
                        </Link>
                    </ul>
                ))}
            </Suspense>
        </>
    )
}
