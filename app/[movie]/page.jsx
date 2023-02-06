import React from 'react'
import Image from 'next/image'

export default async function MovieDetail({ params }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    )

    const res = await data.json()
    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold mb-5'>{res.title}</h2>
                <h2 className='text-lg'>{res.release_date}</h2>
                <h2>Runtime : {res.runtime} Minutes</h2>
                <h2 className='text-sm bg-green-500 inline-block px-4 py-2 mt-3 rounded-md '>{res.status}</h2>
                <Image className='my-12 w-full' src={imagePath + res.backdrop_path} width={1000} height={1000} />
                <p>{res.overview}</p>
            </div>
        </div>
    )
}
