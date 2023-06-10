// Create an App component from scratch
// Use the useEffect hook in the App component.
import React, { useEffect, useState } from 'react'

const apiUrl = "https://dog.ceo/api/breeds/image/random";

function App() {
    const [image, setImage] = useState(null)
    // Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
    
    useEffect(
        () => {
            fetch(apiUrl)
            .then(r => r.json())
            .then(data => setImage(data.message))
        }, [])
        // Display a <p> tag with the text of "Loading..." when the component is first rendered
        if(!image) {
            return <p>Loading...</p>
        }

  return (
    <div>
        {/* After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog". */}
        <img src={image} alt='A Random Dog'/>
    </div>
  )
}

export default App
