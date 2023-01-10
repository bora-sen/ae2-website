import React from 'react';
import FadeReveal from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal'

function Header() {
  return (
<section className='flex flex-col xl:mb-52'>
  <FadeReveal duration={3000}>
      <div className='flex h-screen w-full items-center justify-center bg-[url("https://media.tenor.com/S4iurctzKx8AAAAC/city-cars.gif")] bg-center bg-cover bg-no-repeat'>
      <Reveal bottom delay={6000}>
        <div className='hover:backdrop-blur-sm p-4 rounded-xl transition-all cursor-default'>
          <h1 className='font-display text-slate-100 text-5xl sm:text-7xl md:text-8xl xl:text-9xl'>(AESTHETIC)^2</h1>
        </div>
    </Reveal>
    </div>
  </FadeReveal>
</section>
  )
}

export default Header