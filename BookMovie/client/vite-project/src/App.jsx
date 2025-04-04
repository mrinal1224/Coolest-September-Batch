import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Partner from "./pages/Partner";
import Register from "./pages/Register";
import BookShow from "./pages/BookShow";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import User from "./pages/User";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>

          <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>
          <Route path='/partner' element={<ProtectedRoute><Partner/></ProtectedRoute>}/>
          <Route path='/user' element={<ProtectedRoute><User/></ProtectedRoute>}/>
          <Route path="/movie/:id" element={<ProtectedRoute><SingleMovie/></ProtectedRoute>} />
          <Route path="/book-show/:id" element={<ProtectedRoute><BookShow/></ProtectedRoute>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
