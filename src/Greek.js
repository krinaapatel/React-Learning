import React from 'react'

/*function Greek() {
    return <h1>Hello Krina</h1>
}*/
const Greek = (props) => {
    console.log(props)
    return (
        <div>
        < h1 > Hello { props.name} a.k.a { props.heroName}</h1 >
            {props.children}
        </div>
        )
        
}
export default Greek;