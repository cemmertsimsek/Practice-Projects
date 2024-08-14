import React from 'react'

const BasicForm = () => {
  return (
    <form>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='Enter your email' />
    </form>
  )
}

export default BasicForm