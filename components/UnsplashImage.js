import React from 'react'

export const UnsplashImage = ({url, key}) =>{
    return ( 
    <div className="row__poster">
    <img src ={url} key={key} alt=""/>
    </div>
    )
}