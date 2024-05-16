import React from 'react'

function Onchangevnets() {
  return (
    <div>
      <label>
      <input type="radio" value="pick up" 
    checked={payment === 'pick up'} onChange={payupdate}/>
      Pickup
    </label>
    <label>
      <input type="radio" value="delivery" 
    checked={payment === 'delivery'} onChange={payupdate}/>
      Delivery
    </label>

    <p>shipping:
      {payment}
    </p>

    <select value={selct} onChange={selupdate}>
      <option value="not availble">select on option </option>
      <option value="visa">visa</option>
      <option value="master-card">master card </option>
    </select>
    <p>pay:{selct}</p>
    </div>
  )
}

export default Onchangevnets