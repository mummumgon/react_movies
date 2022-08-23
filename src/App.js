import Home from './routes/Home'
import Detail from './routes/Detail'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return   <BrowserRouter> {/* Router */}
  <Routes>{/* Switch */}
    <Route path="/react_movies" element={<Home />} />{/* component도 element */}
    <Route path="/movie/:id" element={<Detail/>} />
    <Route path='/hellow' element={"안녕 나는 누구게?"} />
  </Routes>
</BrowserRouter>
}

export default App;

/* path="/movie":내가 만든경로 /// element={<Detail/>}:보여지는 페이지 */
//App에서는 rauter를 render해
//router은 url을 보고  우리에게 해당페이지의 component페이지를 보여줌
//App은 새로운component의 url를 보고있고 체크하여 보여줌
//url에 변수를 넣는다고 생각하면됨