import { Routes, Route } from "react-router-dom";
import Main from "./main/main";
import User from "./user/user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}

export default App;
