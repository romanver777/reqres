import cn from "classnames";
import style from "./avatar.module.scss";
import { TUser } from "../../store/user/user";

type TAvatar = {
  item: TUser;
  size: string;
};

function Avatar({ item, size }: TAvatar) {
  const avaSize = `Avatar__${size}`;

  return (
    <div className={cn(style.Avatar, style[avaSize])}>
      <img
        src={item.avatar}
        alt={`${item.first_name} ${item.last_name} аватар`}
        className={style.Avatar__img}
      />
    </div>
  );
}

export default Avatar;
