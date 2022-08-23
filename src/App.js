import styled , {keyframes} from "styled-components"
import { BrowserRouter,Routes,Route ,Link} from "react-router-dom";
import Test2 from './Test2'
import Test from './Test'
function App(){
  return <BrowserRouter>
   <Routes>
    <Route path="/test" element={<Test2/>}/>
    <Route path="/" element={<Test/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;