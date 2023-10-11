import React from 'react'

const Card = ({data}) => {
    const limitTheWords = ( data, limit) => {
        if (data.length <= limit)
            return data;
        return data.slice(0, limit) + "...";
    }
    return (
        <div className='card'>
            <div className="image">
                <img src={data.src} alt="" />
            </div>
            <div className="title">
                <h2>
                    {data.title}
                </h2>
            </div>
            <div className="month-year">
                {data.date}
            </div>
            <div className="tag">
                {data.tag}
            </div>
            <div className="description">
                {limitTheWords(data.description, 150)}
            </div>
            <div className="btns">
                <button>
                    Get Code
                </button>
                {data.isLiveDemo && <button>Live Demo</button>}
            </div>
        </div>
    )
}

export default Card
