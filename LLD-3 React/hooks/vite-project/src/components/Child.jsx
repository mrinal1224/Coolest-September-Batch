import React from 'react'

function Child({buttonName}) {
    console.log('Child Re-Rendered again')
  return (
    <div>
        <button>{buttonName}</button>
    </div>
  )
}

export default React.memo(Child) 