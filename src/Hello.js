import React from 'react'

const Hello = () => {
    /*return (
        <div>
            <h2>Hello Krina Pratik</h2>
        </div>    
    )*/
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('<h2>', null, 'Hello Krina Pratik')
    )
}

export default Hello