import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import mysql from '../assets/mysql.png'
import net from '../assets/net.png'
import next from '../assets/nextjs-icon.png'
import nodejs from '../assets/nodejs.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

function SkillsSection() {

  return (
    <div className="mt-12 grid grid-cols-3 gap-2 gap-y-8 text-center place-items-center w-5/6 md:w-3/4 md:max-w-sm max-w-xl mx-auto lg:gap-10 xl:max-w-full xl:w-1/3">
      <h2 className="col-span-3 p-2 font-semibold text-2xl">Skills</h2>
      <div>
        <img className='lenguaje-img' src={html} alt="" />
        <p>HTML</p>
      </div>
      <div>
      <img className='lenguaje-img' src={css} alt="" />
       <p>CSS</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img className='lenguaje-img ' src={js} alt="" />
        <p>Javascript</p>
      </div>
      <div className='flex flex-col justify-between'>
      <img className='lenguaje-img' src={react} alt="" />
        <p>React</p>
      </div>
      <div className='h-full flex flex-col justify-evenly'>
      <img className='lenguaje-img next' src={next} alt="" />
        <p>Next</p>
      </div>
      <div>
      <img className='lenguaje-img tw' src={tailwind} alt="" />
        <p>Tailwind</p>
      </div>
      <div className='grid h-full w-full grid-rows-3 place-items-center'>
      <img className='lenguaje-img node row-span-2' src={nodejs} alt="" />
        <p className='pppp text-center w-full'>Node</p>
      </div>
      <div>
      <img className='lenguaje-img' src={mysql} alt="" />
        <p>MySQL</p>
      </div>
      <div>
      <img className='lenguaje-img' src={net} alt="" />
      <p>Vb.NET</p>
      </div>
    </div>
  )
}

export default SkillsSection