import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        loginButtonState: true,
        username: '',
        password: ''
    };
  }

  componentDidMount() {
    const el = this;
    (document.getElementById("form")).addEventListener("blur", function(_) {
      el._validFields();
    }, true);
  }

  _validFields() {
    const fRegex = /^[a-zA-Z0-9!"$%&/]{8,20}$/;  
    const numRegex = /\d+/g;
    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const specialCharRegex = /[!"$%&]/;

    const pass = this.state.password;
    const passwordNumbers = pass.match(numRegex);
    let mCheck = false;

    for (const index in passwordNumbers) {
        const numbers = (passwordNumbers[index].split('')).map(Number);    

        if (numbers.length === 1) continue;

        numbers.every(function(number, index) {
            const nIndex = index + 1;
            if (typeof  numbers[nIndex] !== "undefined") {
                const pNext = number + 1;
                mCheck = pNext === numbers[nIndex];
                return mCheck ? false : true;
            }
            return true;
        });
    }

    this.setState({
        loginButtonState: !(fRegex.test(this.state.username)
            && (fRegex.test(pass) && upperRegex.test(pass)
            && lowerRegex.test(pass) && specialCharRegex.test(pass) && !mCheck))
    });
    
  }

  change = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.username);
  }

  render() {
    return(<div className="card vh-center shadow">
        <div className="container">
            <h3> Login </h3>
            <form className="f-container" id="form">
                <input name="username" className="shadow" type="text" placeholder="Username" value={this.state.username} 
                    onChange={(e) => this.change(e) } 
                />
                <input name="password" className="shadow" type="password" placeholder="Password" value={this.state.password}
                    onChange={(e) => this.change(e) } 
                />
                <button className="shadow"
                    disabled={this.state.loginButtonState}
                    onClick={(e) => this.onSubmit(e) }>
                        Enter
                </button>
            </form>
        </div>
    </div>);
  }

}

export default Login;