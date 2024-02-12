import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import Header from "../../components/header/header";
import NavTool from "../../components/nav-tool/nav-tool";
import UserTitle from "../../components/user-title/user-title";
import AuthTool from "../../components/auth-tool/auth-tool";
import Content from "../../components/content/content";
import SideLayout from "../../components/layouts/side-layout/side-layout";
import UserContent from "../../components/user-content/user-content";
import Message from "../../components/message/message";
import type { TUser } from "../main/main";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState<TUser>();

  const getUser = async (id: string) => {
    try {
      const resp = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await resp.json();

      setUser(data.data);
    } catch (err) {
      console.log("err", (err as Error).message);
    }
  };

  useEffect(() => {
    if (id) getUser(id);
  }, [id]);

  if (!user) return <Message text="Загружаем.." />;

  return (
    <PageLayout>
      <Header>
        <NavTool />
        <SideLayout side="start">
          <UserTitle item={user} />
        </SideLayout>
        <AuthTool />
      </Header>
      <Content>
        <UserContent />
      </Content>
    </PageLayout>
  );
}

export default User;
