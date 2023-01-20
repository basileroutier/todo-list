import React from 'react'

export default function Fruits({fruitInfo, onClick}) {

  return (
    <li key={fruitInfo.id}>
        {fruitInfo.name} <button onClick={onClick} >X</button> 
    </li>
)
}
