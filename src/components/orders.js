import React from 'react'

function Orders({ details }) {
  if (!details) {
    return <h3>Working fetching your order&apos;s details...</h3>
  }

  return (
    <div className='order container'>
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p> <br></br>
      <p>Special Instructions: {details.specialInstruction}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Orders