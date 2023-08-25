import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";

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
