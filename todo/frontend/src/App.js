import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User"
import Header from "./components/Header"
import Footer from "./components/Footer"
import axios from "axios";

class App extends  React.Component{
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/user/').then(response =>{

       this.setState(
        {
          'users':response.data
        }
    )
    }).catch(error => console.log(error))
    // const users = [
    //   {
    //     'first_name':'Фёдор',
    //     'last_name':'Достаевский',
    //     'birthday_year':1821,
    //   },
    //   {
    //     'first_name':'Александр',
    //     'last_name':'Грин',
    //     'birthday_year':1880,
    //   }
    //
    // ]
    // this.setState({
    //   "users": users
    // })
  }


  render() {
    return (
      <div>
         <Header/>
         <UserList users={this.state.users}/>
         <Footer/>
      </div>
    )
  }
}

export default App;
