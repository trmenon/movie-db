import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout,HomePage,MoviePage} from "./pages";

// 6aee6850

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={"/:id"} element={<MoviePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
