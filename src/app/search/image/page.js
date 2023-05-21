import ImageSearchResults from '@/components/ImageSearchResults'
import WebSearchResults from '@/components/WebSearchResults'
import Link from 'next/link'
import React from 'react'

// next js allows async fn server side
export default async function ImageSearchPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
  )
  if (!response.ok) {
    throw new Error('Something web wrong')
  }

  const data = await response.json()
  const results = data.items

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No result found</h1>
        <p className="text-lg">
          Try searching for something else or go back to homepage{' '}
          <Link className="text-blue-500" href="/">
            {' '}
            Home
          </Link>
        </p>
      </div>
    )
  }

  return <>{results && <ImageSearchResults results={data} />}</>
}
