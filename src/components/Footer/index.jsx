import React from 'react'

function Footer() {
  return (
    <section>
        <div className='text-slate-200 flex items-center mt-4 p-4'>
        <div className='w-full'>
            <h1 className='font-display text-3xl'>(AESTHETIC)^2</h1>
        </div>
        <div className=''>
            <ul>
                <li className='text-slate-100 p-2 rounded-lg hover:bg-slate-100 hover:text-gray-900 transition-colors'>
                    <a href="https://instagram.com/ae2_art">
                        
                        <svg width={36} height={36} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></svg>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <div className='text-center'>
            <span className='text-gray-800 text-xs'>Copyright 2023 © | All Rights Reserved | Designed by <a href="http://bborasen.com" className='text-gray-700'>BORA</a></span>
        </div>
    </section>
  )
}

export default Footer