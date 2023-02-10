import './App.css';
import StudentCourse from './component/StudentCourse';
import "bootstrap/dist/css/bootstrap.min.css"
import StudentTable from './component/StudentTable';


function App() {
  return (
    <div className="App">
     <StudentTable/>
     {/* <StudentCourse/> */}
    </div>
  );
}

export default App;
