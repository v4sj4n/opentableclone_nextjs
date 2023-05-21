"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { PrismaClient } from "@prisma/client"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [location, setLocation] = useState('')

  const search = searchParams.get('city')

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
    <input
      className="rounded  mr-3 p-2 w-[450px]"
      type="text"
      placeholder="State, city or town"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
    <button
      className="rounded bg-red-600 px-9 py-2 text-white"
      onClick={() => {
        if (location === 'banana') return
        router.push(`/search/?city=${location}`)
        setLocation("")
      }}
    >
      Let's go
    </button>
  </div>
  )
}
