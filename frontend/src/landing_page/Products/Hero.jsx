import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-40">
          <h1 className="font-bold text-3xl text-zinc-600">Zerodha Products</h1>
          <p className="text-2xl text-zinc-600 mt-3">Sleek, modern, and intuitive trading platforms</p>
          <Link to="/pricing" className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded">Check out our investment offerings →</Link>
      </div>
    </>
  )
}

export default Hero
