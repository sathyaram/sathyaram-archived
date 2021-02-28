import React from 'react';

const Sky = ({ bgClass = '' }) => (
    <div className={`sky background ${bgClass}`}>
        <div className="rays">
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
        </div>
        <div className="raindrops">
            <div className="rain"></div>
            <div className="rain"></div>
            <div className="rain"></div>
        </div>
    </div>
);

export default Sky;
