import React from 'react'

/*function Greek() {
    return <h1>Hello Krina</h1>
}*/
const Greek = props => {
   // console.log(props)
    const { name, heroName } = props
    return (
        <div>
        < h1 > Hello { name} a.k.a { heroName}</h1 >
            {/*props.children*/}
        </div> 
        )
        
}
export default Greek;