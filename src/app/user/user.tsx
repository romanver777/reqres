import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadUser, deleteUser } from "../../store/user/user";
import { deleteUsers } from "../../store/users/users";
import { signOut } from "../../store/auth/auth";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import Header from "../../components/header/header";
import NavTool from "../../components/nav-tool/nav-tool";
import UserTitle from "../../components/user-title/user-title";
import AuthTool from "../../components/auth-tool/auth-tool";
import Content from "../../components/content/content";
import SideLayout from "../../components/layouts/side-layout/side-layout";
import UserContent from "../../components/user-content/user-content";
import Message from "../../components/message/message";

function User() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.data);
  const loading = useAppSelector((state) => state.user.loading);
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(loadUser(id));
  }, [id, dispatch]);

  const onLogOut = () => {
    dispatch(signOut());
    dispatch(deleteUsers());
    dispatch(deleteUser());
  };

  const onBack = () => {
    dispatch(deleteUsers());
    navigate(-1);
  }

  if (loading) return <Message text="Загружаем.." />;

  return (
    <PageLayout>
      <Header>
        <NavTool onBackClick={onBack} />
        <SideLayout side="start">
          <UserTitle item={user} />
        </SideLayout>
        <AuthTool onLogOut={onLogOut} />
      </Header>
      <Content>
        <UserContent />
      </Content>
    </PageLayout>
  );
}

export default User;
