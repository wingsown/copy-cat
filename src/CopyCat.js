import React from 'react';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
}

export class CopyCat extends React.Component {
    render() {
        return (
            <div>
                <h1>Copy Cat</h1>
                <input
                type="text"/>
                <img/>
            </div>
        )
    }
}