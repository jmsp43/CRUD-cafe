import React from 'react'
import { PureComponent } from 'react'
import { signUp } from '../../../utilities/users-service';

export default class SignUpForm extends PureComponent {
  // state is always an object with a property for each "piece" of state
  state = {
     name: '',
     email: '',
     password: '',
     confirm: '',
     error: ''
  };
     
     // The object passed to setState is merged with the current state object
     handleChange = (evt) => {
          evt.preventDefault()
     this.setState({
       [evt.target.name]: evt.target.value,
       error: ''
     });
};
     
handleSubmit = async (evt) => {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // We don't want to send the 'error' or 'confirm' property,
    //  so let's make a copy of the state object, then delete them
    const formData = {...this.state};
    delete formData.error;
    delete formData.confirm;
    // The promise returned by the signUp service method
  // will resolve to the user object included in the
  // payload of the JSON Web Token (JWT)
  const user = await signUp(formData);
  //console.log(user)
  this.props.setUser(user)

    // this.setState({ confirm: 'Sign Up Successful!' });


  } catch {
    // An error occurred
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};
  
     render() {
          const disable = this.state.password !== this.state.confirm;
          return (
            <div>
              <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                  <label>Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                  <label>Email</label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  <label>Password</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                  <label>Confirm</label>
                  <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                  <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
              </div>
              <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
          );
     }
   }