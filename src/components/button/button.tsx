import style from "./button.module.scss";

type TButton = {
  icon: string;
  width: string;
  height: string;
  position: string;
  title: string;
  onHandleClick: () => void;
};

function Button({
  icon,
  width,
  height,
  position,
  title,
  onHandleClick,
}: TButton) {
  const newClass = `Button_${position}`;
  const btnStyle = style.Button + " " + style[newClass];

  return (
    <button className={btnStyle} onClick={onHandleClick}>
      <span className={style.Button__text}>{title}</span>
      <img
        src={icon}
        className={style.Button__img}
        width={width}
        height={height}
        alt="icon"
      />
    </button>
  );
}

export default Button;
