import style from "./avatar.module.scss";
import { TUser } from "../../store/user/user";

type TAvatar = {
  item: TUser;
  width: string;
  height: string;
};

function Avatar({ item, width, height }: TAvatar) {
  return (
    <div className={style.Avatar}>
      <img
        src={item.avatar}
        alt={`${item.first_name} ${item.last_name} аватар`}
        className={style.Avatar__img}
        width={width}
        height={height}
      />
    </div>
  );
}

export default Avatar;
