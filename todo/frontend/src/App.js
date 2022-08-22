import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User"
import ProjectList from "./components/Project"
import TodoList from "./components/Todo"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound404 from "./components/NotFound404";
import {BrowserRouter, Route, Routes, Link, Navigate, useLocation} from 'react-router-dom'
import axios from "axios";

class App extends  React.Component{
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      "projects": [],
      "todo": []
    }
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(response =>{

       this.setState(
        {
          'users': response.data.results
        }
    )
    }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/projects/').then(response =>{

       this.setState(
        {
          'projects': response.data.results
        }
    )
    }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/notes/').then(response =>{

       this.setState(
        {
          'todo': response.data.results
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
         <BrowserRouter>
           <Header/>
           <Routes>
               <Route exact path='/' element={<UserList users={this.state.users}/>} />
               <Route exact path='/products' element={<ProjectList projects={this.state.projects}/>}/>
               <Route exact path='/todo' element={<TodoList notes={this.state.todo}/>}/>
               <Route path='*' element={<NotFound404 />} />
           </Routes>
           <Footer/>
         </BrowserRouter>
      </div>
    )
  }
}
// <UserList users={this.state.users}/>
// <ProjectList projects={this.state.projects}/>
// <TodoList notes={this.state.todo}/>
//  <BrowserRouter>
//     <nav>
//         <li> <Link to='/'>Authors</Link> </li>
//         <li> <Link to='/books'>Books</Link> </li>
//     </nav>
//
//     <Routes>
//         <Route exact path='/' element={<Navigate to='/authors' />} />
//         <Route exact path='/books' element={<BookList books={this.state.books} />} />
//         <Route path='/authors'>
//             <Route index element={<AuthorList authors={this.state.authors} />} />
//             <Route path=':authorId' element={<BooksAuthor books={this.state.books} />} />
//         </Route>
//         <Route path='*' element={<NotFound404 />} />
//     </Routes>
// </BrowserRouter>
export default App;
