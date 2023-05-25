import { useState } from "react"
import * as usersService from '../../utilities/users-service'


export default function LoginForm() {
      const [creds, SetCreds] = useState({
            email: '',
            password: ''
      })

      const [error, SetError] = useState('')

      function handleChange(event) {
            event.preventDefault()
            SetCreds({
                  ...creds, 
                  [event.target.name]: event.target.value
            })
      }

      async function handleSubmit(event) {
            event.preventDefault()
            try {
                  const user = await usersService.logIn(creds)
            }
            catch (error) {
                  SetError('Log in failed, try again')
            }
      }

      return(
            <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={creds.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={creds.password} onChange={handleChange} required />
                <button type="submit" >LOG IN</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
          </div>
      )
  }