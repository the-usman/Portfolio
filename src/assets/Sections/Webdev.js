import React from 'react'
import Card from './Card'
import cImage from '../images/c++.jpeg'

const Webdev = () => {
    const data = [
        {
            "tag": "Learning",
            "title": "Text Transformer",
            "description": "This is test demo code for testing the code lorem30",
            "src": cImage,
            "date": "Aug 2023",
        },
        {
            "tag": "Learning",
            "title": "Text Transformer",
            "description": "This is test demo code for testing the code lorem30",
            "src": cImage,
            "date": "Aug 2023",
            "isLiveDemo" : false,
        },
        {
            "tag": "Learning",
            "title": "Text Transformer",
            "description": "This is test demo code for testing the code lorem30",
            "src": cImage,
            "date": "Aug 2023",
            "isLiveDemo" : false,
        },
        {
            "tag": "Learning",
            "title": "Text Transformer",
            "description": "This is test demo code for testing the code lorem30",
            "src": cImage,
            "date": "Aug 2023",
            "isLiveDemo" : false,
        },
        
    ]
    return (
        <div className='center showcase'>
            <h1>
                React Projects
            </h1>
            <div className="grid-container">
                {data.map((d, i) => {
                    return <Card data={d} key={i}/>
                })}
            </div>
        </div>
    )
}

export default Webdev
