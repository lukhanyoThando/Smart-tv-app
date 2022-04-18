import React from 'react'
import { FaFilm } from 'react-icons/fa';
import Link from 'next/link'


const Sidebar = ({sidebar}) => {
  return (
    <div className= {sidebar ? "sidebar sidebar--open":"sidebar"}> 
        <Link href="/"><li><FaFilm size={30}/>Architecture</li></Link>
        <Link href="/BusinessWork"><li><FaFilm size={30}/>Business Work</li></Link>
        <Link href="/ColorOfWater"><li><FaFilm size={30}/>Color of Water</li></Link>
        <Link href="/CurrentEvents"><li><FaFilm size={30}/>Current Events</li></Link>
        <Link href="/Experimental"><li><FaFilm size={30}/>Experimental</li></Link>
        <Link href="/Fashion"><li><FaFilm size={30}/>Fashion</li></Link>
        <Link href="/Nature"><li><FaFilm size={30}/>Nature</li></Link>
        <Link href="/TexturePatterns"><li><FaFilm size={30}/>Textures Patterns</li></Link>
        <Link href="/Wallpapers"><li><FaFilm size={30}/>Wallpapers</li></Link>
        <Link href="/Render"><li><FaFilm size={30}/>3D Renders</li></Link>
    </div>
  )
}

export default Sidebar