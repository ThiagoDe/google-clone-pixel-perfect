"use client"

import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const searchParams = useSearchParams()
  const searchTerms = searchParams.get("searchTerm")
  const [term, setTerm] = useState(searchTerms || '')
  const rounter = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!term.trim()) return
    rounter.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <form onSubmit={ handleSubmit} className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-4 flex-grow max-w-3xl items-center">
      <input onChange={(e) => setTerm(e.target.value)} value={term} type="text" className='w-full focus:outline-none '/>
      <RxCross2 onClick={() => setTerm('')}  className='text-2xl text-gray-500 cursor-pointer sm:mr-2'/>
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3'/>
      <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'/>
    </form>
  )
}
