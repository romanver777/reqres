import style from "./user-title.module.scss";
import type { TUser } from "../../store/user/user";
import Avatar from "../avatar/avatar";

type TUserTitle = {
  item: TUser;
};

function UserTitle({ item }: TUserTitle) {
  return (
    <div className={style.UserTitle}>
      <Avatar item={item} size="big"/>
      <div className={style.UserTitle__text}>
        <h1
          className={style.UserTitle__name}
        >{`${item.first_name} ${item.last_name}`}</h1>
        <span className={style.UserTitle__role}>Партнер</span>
      </div>
    </div>
  );
}

export default UserTitle;
