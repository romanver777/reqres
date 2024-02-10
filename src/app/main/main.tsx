import { useState, useEffect } from "react";
import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import MainTitle from "../../components/main-title/main-title";
import AuthTool from "../../components/auth-tool/auth-tool";
import Content from "../../components/content/content";
import List from "../../components/list/list";
import UserCard from "../../components/user-card/user-card";
import Pagination from "../../components/pagination/pagination";

export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function Main() {
  const [users, setUsers] = useState<TUser[]>([]);

  const getUsers = async () => {
    try {
      const resp = await fetch("https://reqres.in/api/users");
      const data = await resp.json();

      setUsers(data.data);
    } catch (err) {
      console.log("err", (err as Error).message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renders = {
    userCard: (item: TUser) => <UserCard key={item.id} item={item} />,
  };

  return (
    <PageLayout>
      <Header>
        <MainTitle />
        <AuthTool />
      </Header>
      <Content>
        <List items={users} renderItem={renders.userCard} />
        <Pagination />
      </Content>
    </PageLayout>
  );
}

export default Main;
