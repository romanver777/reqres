import style from "./auth-tool.module.scss";
import exitIcon from "../../assets/exit.svg";

function AuthTool() {
  return (
    <div className={style.AuthTool}>
      <button className={style.AuthTool__btn}>
        <span className={style.AuthTool__text}>Выход</span>
        <img
          src={exitIcon}
          className={style.AuthTool__img}
          width={18}
          height={18}
          alt="exit icon"
        />
      </button>
    </div>
  );
}

export default AuthTool;
