

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            summary: '',
            user: '',
            f1: false,
            hidef1: false,
            f2: false,
            f3: false
        }
    }

handleOnSummary() {
    var they = this;
    console.log("THIS ", this.state)
    axios.get('/summary', they.state)
    .then(function (response) {
    console.log("RESPONSEE ",response.data);
    var data = response.data
      they.setState({summary:data})
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
     
    }); 
}  
handlerOnclick(e) {
   this.setState({f1:true});
}

handlerOnclickhide(e) {
    e.preventDefault();
    this.setState({hidef1:true});
    
 }

handlerOnclickf2(e) {
    this.setState({f2:true})
}
handlerOnclickf3(e) {
    this.setState({f3:true})
    this.handleOnSummary();
}

handlerOnclickSummary(e) {
    this.setState({hidef1:false});
    this.setState({f1:false});
    this.setState({f2:false});
    this.setState({f3:false})
}

handlerOnclickUser(e) {
    this.setState({user:e})
    this.handleOnSummary();
}


    render() {

         return (
         
            <div>
                {!this.state.hidef1 && (
                    <div>
                        {this.state.f1 && (<F1 hide = {this.handlerOnclickhide.bind(this)} appuser={this.handlerOnclickUser.bind(this)} />)}
                        {!this.state.f1 && (<button onClick={this.handlerOnclick.bind(this)}>
                             Checkout
                            </button>)}
                        
                    </div>)} 
                {this.state.hidef1 && (
                    <div>
                        {!this.state.f2 && (<F2 handlerf2 = {this.handlerOnclickf2.bind(this)} appuser={this.state.user}/>)}
                        {this.state.f2 && (
                            <div>
                                {!this.state.f3 &&(<F3 handlerf3 = {this.handlerOnclickf3.bind(this)}/>)}
                                {this.state.f3 && (
                                <div>
                                    <h1>Order Review:</h1>
                                    <br></br>
                                    <p>{this.state.summary}</p>
                                    <button onClick = {this.handlerOnclickSummary.bind(this)}> Purchase </button>
                                    
                                    </div>)}
                            </div>
                        )}
                    </div>
                )}                 
            </div>
        )
    }
}


class F1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            email: '',
            pass:''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var they = this.props
        axios.post('/checkout',this.state)
        .then(function (response) {
            they.hide(e);
            var data = JSON.parse(response.config.data)
            var user = data.user;
            they.appuser(user);
            console.log("F1",user)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return(
         
    <form onSubmit={this.handleSubmit.bind(this)} >
        <label>
            Name:
            <input type="text"name="user" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <br></br>
        <label>
            Email:
            <input type="text" name="email" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <label>
            Password:
            <input type="text" name="pass" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
    </form>

     )}
}

class F2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipcode: '',
            phonenumber: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var they = this.props
        axios.post('/f2',{f2:this.state, user:this.props.appuser})
        .then(function (response) {
            they.handlerf2(e);
            console.log("F2",response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return(
         
    <form onSubmit={this.handleSubmit.bind(this)} >
        Shippig Address:
        <br></br>
        <label>
            Line1:
            <input type="text"name="line1" value={this.state.value} onChange={this.handleChange.bind(this)} />
            <br></br>
            Line2:
            <input type="text"name="line2" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <br></br>
        <label>
            City:
            <input type="text" name="city" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <label>
            State:
            <input type="text" name="state" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <label>
            Zip Code:
            <input type="text" name="zipcode" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <label>
            Phone Number:
            <input type="text" name="phonenumber" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
    </form>

     )}
    //the 'next button' to hidef2 to true
}

class F3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            card: '',
            expdate: '',
            cvv: '',
            billing: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var they = this.props
        axios.post('/f3',{f3:this.state, user:this.props.appuser})
        .then(function (response) {
            they.handlerf3(e);
            console.log("F3",response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return(
         
    <form onSubmit={this.handleSubmit.bind(this)} >
        <label>
            Credit card#:
            <input type="text"name="user" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <br></br>
        <label>
            Expiration Date:
            <input type="text" name="email" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <label>
            CVV:
            <input type="text" name="pass" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <label>
            Billing Zip Code:
            <input type="text" name="pass" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
    </form>

     )}
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );

