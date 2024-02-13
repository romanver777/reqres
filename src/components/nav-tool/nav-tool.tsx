import style from "./nav-tool.module.scss";
import Button from "../button/button";
import backIcon from "../../assets/arrow-back.svg";

type TNavTool = {
  onBackClick: () => void;
};

function NavTool({ onBackClick }: TNavTool) {
  return (
    <div className={style.NavTool}>
      <Button
        icon={backIcon}
        width="7"
        height="14"
        title="Назад"
        position="left"
        onHandleClick={onBackClick}
      />
    </div>
  );
}

export default NavTool;
