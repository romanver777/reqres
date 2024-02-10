import style from "./list.module.scss";
import type { TUser } from "../../app/main/main";

type TList = {
  items: TUser[];
  renderItem: (item: TUser) => JSX.Element;
};

function List({ items, renderItem }: TList) {
  return (
    <div className={style.List}>
      <ul className={style.List__ul}>
        {items.map((item) => renderItem(item))}
      </ul>
    </div>
  );
}

export default List;
