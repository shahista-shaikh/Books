import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import StudentForm from './Pages/StudentForm';
import Addnewbook from './Pages/Addnewbook';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import StudentList from './Pages/StudentList';
import BookList from './Pages/BookList';
import Appbar from './Components/Navbar/Appbar';
import Student from './Pages/Student';
import BookData from './Pages/BookData';

function App() {
  return (
    <div className="App">
     {/* <ResponsiveAppBar/> */}
     
    

      <Router>
      <Appbar/> 
      <Routes>
        <Route exact path="StudentForm" element={<StudentForm/>}/>
        <Route  path="addnewbook" element={<Addnewbook/>}/>
        <Route  path="studentList" element={<StudentList/>}/>
        <Route  path="bookList" element={<BookList/>}/>
        <Route  path="student" element={<Student/>}/>
        <Route  path="bookData" element={<BookData/>}/>
      </Routes>
      </Router>
      
       {/* <BookList/> */}
    </div>
  );
}

export default App;
