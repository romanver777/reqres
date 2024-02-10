import style from "./main-title.module.scss";

function MainTitle() {
  return (
    <div className={style.MainTitle}>
      <h1 className={style.MainTitle__title}>Наша команда</h1>
      <h2 className={style.MainTitle__desc}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </h2>
    </div>
  );
}

export default MainTitle;
