import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROOT_PATH} from "./routes/Slug.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className={'font-roboto'}>
          <Header/>
          <Routes>
            <Route path={ROOT_PATH} element={<Home/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
