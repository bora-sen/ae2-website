import React from 'react'
import dataset from '../../dataset.json';
import Reveal from 'react-reveal/Reveal'

function Pics() {
    let posts = dataset.posts;
  return (
    <section className='mt-24' >
        <Reveal top>
            <h3 className='text-slate-100 font-mono text-2xl lg:text-5xl text-center'>Arts</h3>
        </Reveal>

        <div className='p-4 md:flex md:flex-wrap justify-center'>
            {
                posts.map(post => {
                    return (
                        <Reveal bottom>
                            <div key={post.id} className="mt-4 md:mx-4 md:w-[20rem] lg:w-[24rem] xl:w-[37rem]">
                                <a href="https://instagram.com/ae2_art"><img src={post.img} alt="Descriptive" className='' /></a>

                            </div>
                        </Reveal>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Pics