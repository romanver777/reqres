import style from "./pagination.module.scss";
import arrowIcon from "../../assets/arrow.svg";

type TPagination = {
  onLoadItems: () => void;
  isShow: boolean;
};

function Pagination({ onLoadItems, isShow }: TPagination) {
  if (!isShow) return null;

  return (
    <div className={style.Pagination}>
      <button className={style.Pagination__btn} onClick={onLoadItems}>
        <span className={style.Pagination__text}>Показать еще</span>
        <img src={arrowIcon} alt="arrow icon" width={17} height={9} />
      </button>
    </div>
  );
}

export default Pagination;
