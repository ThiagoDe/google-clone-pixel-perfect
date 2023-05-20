import React from 'react'

// next js allows async fn server side
export default async function WebSearchPage({searchParams}) {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    )

    const data = await response.json()
    console.log(data)
    const results = data.items 
  
  return (
    <>
      {results && results.map(result => <h1 key={result.title}>{result.title}</h1>)}
    </>
  )
}