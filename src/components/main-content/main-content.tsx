import style from "./main-content.module.scss";

type TMainContent = {
  children: React.ReactNode;
};

function MainContent({ children }: TMainContent) {
  return <main className={style.MainContent}>{children}</main>;
}

export default MainContent;
