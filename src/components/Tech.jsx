import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/inedx'
import { div } from 'three/examples/jsm/nodes/Nodes.js'



const Tech = () => {
  return (
    <div className=' flex flex-row flex-wrap  justify-center gap-10'>
      {
      technologies.map((technology)=> (
        <div className=' w-28 h-28 text-center' key={technology.name}>
          <div>{technology.name}</div>
          <BallCanvas icon={technology.icon}/>
        </div> 
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")