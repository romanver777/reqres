import style from "./pagination.module.scss";
import arrowIcon from "../../assets/arrow.svg";

function Pagination() {
  return (
    <div className={style.Pagination}>
      <button className={style.Pagination__btn}>
        <span className={style.Pagination__text}>Показать еще</span>
        <img src={arrowIcon} alt="arrow icon" width={17} height={9} />
      </button>
    </div>
  );
}

export default Pagination;
