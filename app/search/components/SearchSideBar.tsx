import { Location, Cuisine, PRICE } from '@prisma/client'
import Link from 'next/link'

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[]
  cuisines: Cuisine[]
  searchParams: { city?: string; cuisine?: string; price?: PRICE }
}) {
  const prices = [
    {
      id: 1,
      price: PRICE.CHEAP,
      label: '$',
      className: 'border w-full text-reg text-center font-light rounded-l p-2 ',
    },
    {
      id: 2,
      price: PRICE.REGULAR,
      label: '$$',
      className: 'border w-full text-reg text-center font-light p-2 ',
    },
    {
      id: 3,
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className: 'border w-full text-reg text-center font-light rounded-r p-2 ',
    },
  ]
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            key={location.id}
            className="font-light text-reg capitalize"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id}
            className="font-light text-reg capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ id, price, label, className }) => (
            <Link
              key={id}
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price: price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
