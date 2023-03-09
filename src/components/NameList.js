import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {nameList}
    //         {/* {
    //             names.map(name => <h2>{name}</h2>)
    //         } */}
    //     </div>
    // )

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'Rich'
        },
        {
            id: 2,
            name: 'Clarke',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>

}

export default NameList
