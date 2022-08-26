import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User"
import ProjectList from "./components/Project"
import TodoList from "./components/Todo"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginForm from "./components/Auth";
import NotFound404 from "./components/NotFound404";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  useLocation
} from 'react-router-dom'
import axios from "axios";
import Cookies from "universal-cookie";

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        'users': [],
        "projects": [],
        "todo": [],
        "token": ""
      }
    }

    logout() {
      this.set_token('')
    }

    is_auth() {
      return !!this.state.token
    }
    set_token(token) {
      const cookies = new Cookies()
      cookies.set('token', token)
      console.log(token + "<-----------------------------pl");
      this.setState({
        'token': token
      }, () => this.load_data())
    }
    get_token_from_storage() {
      const cookies = new Cookies()
      const token = cookies.get('token')
      this.setState({
        'token': token
      }, () => this.load_data())
    }

    get_token(username, password) {
      const data = {
        username: username,
        password: password
      }
      axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Неверный логин или пароль'))
    }

    load_data() {
      const headers = this.get_headers()
      axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {

        this.setState({
          'users': response.data.results
        })
      }).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(response => {

        this.setState({
          'projects': response.data.results
        })
      }).catch(error => console.log(error))
      axios.get('http://127.0.0.1:8000/api/notes/', {headers}).then(response => {

        this.setState({
          'todo': response.data.results
        })
      }).catch(error => console.log(error))
    }

    get_headers(){
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_auth()){
            headers['Authorization'] = 'Token ' + this.state.token
        }
        console.log(this.is_auth() + "</--------------------------------");
        return headers

    }
    componentDidMount() {
        this.get_token_from_storage()
    } 

  render() {
    return (
      <div>
         <BrowserRouter>
           <Header/>
           <li>
             {this.is_auth() ? <button onClick={()=> this.logout()}> Logout </button> : <Link to='/login'>Login</Link>}
           </li>
           <Routes>
               <Route exact path='/' element={<UserList users={this.state.users}/>} />
               <Route exact path='/products' element={<ProjectList projects={this.state.projects}/>}/>
               <Route exact path='/todo' element={<TodoList notes={this.state.todo}/>}/>
               <Route exact path='/login' element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>
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
