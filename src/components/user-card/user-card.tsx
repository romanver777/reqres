import { Link, useLocation } from "react-router-dom";
import style from "./user-card.module.scss";
import type { TUser } from "../../app/main/main";
import likeIcon from "../../assets/like.svg";
import Avatar from "../avatar/avatar";

type TUserProps = {
  item: TUser;
};

function UserCard({ item }: TUserProps) {
  const location = useLocation();

  return (
    <li className={style.UserCard}>
      <Link to={`/user/${item.id}`} state={{ back: location.pathname }}>
        <Avatar item={item} size="small" />
      </Link>
      <Link
        to={`/user/${item.id}`}
        state={{ back: location.pathname }}
        className={style.UserCard__name}
      >{`${item.first_name} ${item.last_name}`}</Link>
      <div className={style.UserCard__likeBlock}>
        <button className={style.UserCard__likeBtn}>
          <img
            src={likeIcon}
            className={style.UserCard__likeImg}
            alt="like icon"
            width={14}
            height={12}
          />
        </button>
      </div>
    </li>
  );
}

export default UserCard;
