import React from 'react';

function Emoji({ src, percentage }) {
    const circumference = (percentage / 100) * 282.7;

    return (
        <div className="percentage-emoji">
            <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#34453D"
                    strokeWidth="5"
                    strokeDasharray={`${circumference} 282.7`}
                    strokeDashoffset="0"
                />
                <image
                    x="18"
                    y="18"
                    width="84px"
                    height="94px"

                    xlinkHref={src}
                    alt="Emoji"
                    className='emojiImage'
                />
            </svg>
            <div className="bigText">{`${percentage}%`}</div>
        </div>
    );
}

function Percentage({src, percentage}) {
    return (
        <div className="emojis">
            <Emoji
                src={src}
                percentage={percentage}
            />
        </div>
    );
}

export default Percentage;
