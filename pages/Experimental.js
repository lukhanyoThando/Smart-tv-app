import React, {useState, useEffect} from 'react'
import Backdrop from '../components/Backdrop'
import Sidebar from '../components/Sidebar'
import Toolbar from '../components/Toolbar'
import { UnsplashImage } from '../components/UnsplashImage';

import axios from 'axios';

function Experimental() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  const [images, setImages] = useState([]);

  useEffect(()=> {
    const apiRoot = 'https://api.unsplash.com';

    {/*const accessKey = process.env.REACT_APP_ACCESSKEY;*/}
   
    axios
    .get(`${apiRoot}/topics/qPYsDzvJOYc/photos?client_id=vQq6vZLV9ISSrvuFm5hzg61KAkVAmLTDo2j7EN7PsbQ`)
    .then(res => setImages([...images, ...res.data]))
    
  }, [])

  return (
    <div>
      <Toolbar openSidebar ={toggleSidebar}/>
        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
        <Sidebar sidebar = {sidebar}/>
     
     <h1>Experimental</h1>

     <div className='row__posters'>
           {images.map(image => (
             <UnsplashImage url={image.urls.thumb} key={image.id}/>
           ))}
        
        </div>

    </div>
  )
}

export default Experimental