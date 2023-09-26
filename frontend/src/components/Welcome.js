import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <h1>Personal Expense Manager</h1>
        <p className='lead'>
            Create your account to manage your daily expense
        </p>
        <hr/>
        <Link className='btn btn-success' to="/login">Login</Link>{' '}
        <Link className='btn btn-primary' to="/signup">signup</Link>
    </div>
  )
}

export default Welcome