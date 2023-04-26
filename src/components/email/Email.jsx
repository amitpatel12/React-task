import React, { useState } from 'react'
import './email.css'
import axios from 'axios'
import { url } from '../../data/data'

const Email = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleData = async () => {
      try {
    
        const emailData = new FormData()
        emailData.append('store_email', email)

      let response = await axios.post(`http://45.64.156.214:9093/password-forget-email/`, emailData)
      response = response.data
      
        setMessage(response.message)
      
        
      } catch (error) {
        console.log("error occur during sent mail",error)
      }
      
    }
  return (
    <div className='email-container'>
      <div className="email-message">
            <h2>We are sending an email for reset your password</h2>
            {
              message && <p className='response_message'> {message} </p>
            }
            
          </div>
          <div className="email email-inputs ">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Email address"
              required
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />


          </div>

          <div className="email-submit">
            <button type="submit" onClick={handleData}>
              Send OTP
            </button>
          </div>
    </div>
  )
}

export default Email
