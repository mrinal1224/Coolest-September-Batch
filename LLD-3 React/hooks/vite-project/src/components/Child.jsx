import React from 'react'

function Child({buttonName, sayHelloFn}) {
    console.log('Child Re-Rendered again')
  return (
    <div>
        <button>{buttonName}</button>
        <h1>{sayHelloFn()}</h1>
    </div>
  )
}

export default React.memo(Child) 