import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Protected from "../components/protected/protected";
import SignUp from "./sign-up/sign-up";
import Main from "./main/main";
import User from "./user/user";
import { useAppDispatch } from "../store/hooks";
import { init } from "../store/auth/auth";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

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
