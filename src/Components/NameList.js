import React from 'react'

function NameList() {

    const names = ['Jackie', 'Titouan', 'Théodule']
    const NameList = names.map(name => <h2>{name}</h2>)

  return (
    <div>
         {NameList }
    </div>
  )
}
