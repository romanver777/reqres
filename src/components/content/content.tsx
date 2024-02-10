import style from "./content.module.scss";

type TContent = {
  children: React.ReactNode;
};

function Content({ children }: TContent) {
  return <main className={style.Content}>{children}</main>;
}

export default Content;
