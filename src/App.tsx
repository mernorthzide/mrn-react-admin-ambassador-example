import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Users} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
