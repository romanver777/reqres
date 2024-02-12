import style from "./spinner.module.scss";

type TSpinner = {
  loading: boolean;
  children: React.ReactNode;
};

function Spinner({ loading, children }: TSpinner) {
  const loadingStyle = loading ? style.Spinner_loading : style.Spinner;

  return <div className={loadingStyle}>{children}</div>;
}

export default Spinner;
