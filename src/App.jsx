import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import { UserForm } from "./components/UserForm/UserForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userForm" element={<UserForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
