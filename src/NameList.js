import React from 'react'

function NameList() {
    /*const names = ['Krina', 'Pratik', 'Amin']
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
                { NameList }
            /* display using arrow map function
            names.map(name => <h2>{name}</h2>)
            //display using array
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>*/}
       /* </div>
    )*/
    const persons = [
        {
            id: 1,
            name: 'krina',
            age: 27,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Pratik',
            age: 26,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Amin',
            age: 26,
            skill: 'Vue'
        }
]
    const personList = persons.map(person => <Person key={person.id} person={person}/>
    return <div>{personList}</div>
}

export default NameList