import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../message/message";

type TProtected = {
  children: React.ReactNode;
  redirect: string;
};

function Protected({ children, redirect }: TProtected) {
  const navigate = useNavigate();
  const isAuth = false;
  const loading = false; 

  useEffect(() => {
    if (!isAuth && !loading) {
      navigate(redirect);
    }
  }, [isAuth, loading, navigate, redirect]);

  if (!isAuth || loading) {
    return <Message text="Загружаем.." />;
  } else {
    return children;
  }
}

export default Protected;
