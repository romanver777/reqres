import { Routes, Route } from "react-router-dom";
import Protected from "../components/protected/protected";
import SignUp from "./sign-up/sign-up";
import Main from "./main/main";
import User from "./user/user";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected redirect="/signup">
            <Main />
          </Protected>
        }
      />
      <Route
        path="/user/:id"
        element={
          <Protected redirect="/signup">
            <User />
          </Protected>
        }
      />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
