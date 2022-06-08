import React from 'react'
import './NaijaBeaches.css'

export default function NaijaBeaches() {

    function handleClick() {
        console.log("I was clicked!")
    }
    
    function handleOnMouseOver() {
        console.log("MouseOver")
    }
    
    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */

  return (
    <div>

          <main className='container'>

            
              <img src="https://picsum.photos/640/360" alt="Nature Habitat"
              onMouseOver={handleOnMouseOver} 
              />
              <h3>Nature Habitat</h3>

              <button onClick={handleClick}>Click me</button>
            

                <img src="./images/Lekki-beach.jpg" alt="Lekki Beach" />
                <h3>Lekki Beach</h3>

              <button>Click me</button>
             

              
                <img src="./images/Victory-Island-beach.jpg" alt="Vicotry Island Beach" />
                <h3>Victory Island Beach</h3>

                <button>Click me</button>
              

              

            
          </main>
    </div>
  )
}
