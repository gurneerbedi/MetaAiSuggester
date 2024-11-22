import "./FormProgress.scss";

export default function FormProgress({ completed, total }) {
  return (
    <div className="quiz__progress progress">
      {Array.from({ length: total }).map((item, index) => {
        return (
          <div
            key={index}
            className={`progress__item ${
              index < completed ? "progress__item--completed" : ""
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
