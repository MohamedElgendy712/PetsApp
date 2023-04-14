import LoginPage from "./components/login/LoginPage";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import ErrorPage404 from "./components/errors/ErrorPage404";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./components/dashboard/home";
import PetPopup from "./components/dashboard/petPopup";

function App() {
  return (
    //   <BrowserRouter>
    //       <Routes>
    //           <Route path='*' element={<ErrorPage404 />} />

    //           <Route element={<PrivateRoutes/>}>
    //               <Route path={"/"} element={<Home/>}/>
    //           </Route>

    //           <Route path={"/login"} element={<LoginPage/>}/>
    //       </Routes>
    //   </BrowserRouter>

    <Home />
    // <PetPopup />
  );
}

export default App;
