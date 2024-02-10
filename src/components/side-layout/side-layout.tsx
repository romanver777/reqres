import style from "./side-layout.module.scss";

type TSideLayout = {
  side?: string;
  children: React.ReactNode;
};

function SideLayout({ side, children }: TSideLayout) {
  const newClass = side !== undefined ? `SideLayout_${side}` : "";

  const newStyle = newClass
    ? style.SideLayout + " " + style[newClass]
    : style.SideLayout;

  return <div className={newStyle}>{children}</div>;
}

export default SideLayout;
