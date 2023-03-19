import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './screens/home';
import Adpost from './screens/addpost';
import Adpostdetails from './screens/addpostdetails'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addpost" element={<Adpost />} />
      <Route path="/addpostdetails:userId" element={<Adpostdetails />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
