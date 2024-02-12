import style from "./auth-tool.module.scss";
import Button from "../button/button";
import exitIcon from "../../assets/exit.svg";

type TAuthTool = {
  onLogOut: () => void;
}

function AuthTool({onLogOut}: TAuthTool) {
  return (
    <div className={style.AuthTool}>
      <Button
        icon={exitIcon}
        width="18"
        height="18"
        title="Выход"
        position="right"
        onHandleClick={onLogOut}
      />
    </div>
  );
}

export default AuthTool;
