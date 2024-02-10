import { useNavigate } from "react-router-dom";
import style from "./nav-tool.module.scss";
import Button from "../button/button";
import backIcon from "../../assets/arrow-back.svg";

function NavTool() {
  const navigate = useNavigate();
  
  const onBackClick = () => navigate("/");

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
