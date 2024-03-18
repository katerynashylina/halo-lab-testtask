import './Loader.scss';

export const Loader = () => (
  <div className="loader__wrapper">
    <h1>It seems like some data is loading...</h1>

    <div className="loader">
      <div className="loader__content" />
    </div>
  </div>
);