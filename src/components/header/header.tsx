import style from "./header.module.scss";

type THeader = {
  children: React.ReactNode;
}

function Header({children}: THeader) {
  return (
    <div className={style.Header}>{children}</div>
  )
}

export default Header;