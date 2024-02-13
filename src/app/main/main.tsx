import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadUsers, deleteUsers } from "../../store/users/users";
import { deleteUser } from "../../store/user/user";
import { signOut } from "../../store/auth/auth";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import Header from "../../components/header/header";
import MainTitle from "../../components/main-title/main-title";
import AuthTool from "../../components/auth-tool/auth-tool";
import Content from "../../components/content/content";
import MainContent from "../../components/main-content/main-content";
import List from "../../components/list/list";
import UserCard from "../../components/user-card/user-card";
import Pagination from "../../components/pagination/pagination";
import SideLayout from "../../components/layouts/side-layout/side-layout";
import Spinner from "../../components/spinner/spinner";

export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function Main() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.data);
  const loading = useAppSelector((state) => state.users.loading);
  const currentPage = useAppSelector((state) => state.users.page);
  const totalPages = useAppSelector((state) => state.users.total_pages);

  const [page, setPage] = useState(1);

  useEffect(() => {
      dispatch(loadUsers(page));
  }, [page, dispatch]);

  const onLoad = () => setPage(page + 1);

  const onLogOut = () => {
    dispatch(signOut());
    dispatch(deleteUsers());
    dispatch(deleteUser());
  };

  const renders = {
    userCard: (item: TUser) => <UserCard key={item.id} item={item} />,
  };

  return (
    <PageLayout>
      <Header>
        <SideLayout>
          <MainTitle />
        </SideLayout>
        <AuthTool onLogOut={onLogOut} />
      </Header>
      <Content>
        <MainContent>
          <Spinner loading={loading}>
            <List items={users} renderItem={renders.userCard} />
            <Pagination
              onLoadItems={onLoad}
              isShow={currentPage < totalPages}
            />
          </Spinner>
        </MainContent>
      </Content>
    </PageLayout>
  );
}

export default Main;
