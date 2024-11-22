import "./FormProgress.scss";

export default function FormProgress({ completed, total }) {
  return (
    <div className="form-progress">
      {Array.from({ length: total }).map((item, index) => {
        return (
          <div
            key={index}
            className={`form-progress__item ${
              index < completed ? "form-progress__item--completed" : ""
            }`}
          ></div>
        );
      })}
      <p>
        {completed}/{total}
      </p>
    </div>
  );
}
