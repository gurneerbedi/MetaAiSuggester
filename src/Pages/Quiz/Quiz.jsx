import { useEffect, useState } from "react";
import { getQuestions } from "../../api/backend";
import { motion, AnimatePresence } from "framer-motion";
import { CircleAlert } from "lucide-react";
import FormProgress from "../../components/FormProgress/FormProgress";

import "./Quiz.scss";
import axios from "axios";

export default function Quiz({ submitHandler }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [errors, setErrors] = useState({});
  const [direction, setDirection] = useState(1);

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    const { question, option } = e.target.dataset;

    setResponses((prev) => {
      const updated = { ...prev };
      updated[question][option] = checked;
      return updated;
    });
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (question in newErrors && newErrors[question]) {
        delete newErrors[question];
      }
      return newErrors;
    });
  };

  const validateCurrentQuestion = () => {
    console.log("Validated question", currentQuestion);
    const options = responses[currentQuestion];
    if (!Object.values(options).some((selection) => selection)) {
      setErrors((prev) => ({
        ...prev,
        [currentQuestion]: "Please make at least one selection",
      }));
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentQuestion()) {
      setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
      setDirection(1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    setDirection(-1);
  };

  const validateResponses = () => {
    const newErrors = {};

    Object.entries(responses).forEach(([questionIndex, options]) => {
      if (!Object.values(options).some((selection) => selection)) {
        newErrors[questionIndex] = "Please make at least one selection";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted at question", currentQuestion);
    if (!validateResponses()) return;
    const scores = {};
    Object.entries(responses).forEach(([questionIndex, options]) => {
      const question = questions[questionIndex];
      Object.entries(options).forEach(([optionIndex, selected]) => {
        if (!selected) return;

        const selectedOption = question.options[optionIndex];
        const categories = selectedOption.categories;
        for (const category of categories) {
          scores[category] = (scores[category] || 0) + 1;
        }
      });
    });
    const recommendations = await axios.post(
      "http://localhost:8080/products",
      scores
    );
    submitHandler(recommendations.data);
  };

  useEffect(() => {
    getQuestions().then((response) => {
      setQuestions(response);

      const initialState = {};
      response.forEach((question, questionIndex) => {
        initialState[questionIndex] = {};
        question.options.forEach((_, optionIndex) => {
          initialState[questionIndex][optionIndex] = false;
        });
      });
      setResponses(initialState);
    });
  }, []);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    show: {
      opacity: 1,
      y: 0,
    },
    exit: (direction) => ({
      y: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <main className="quiz">
      <form onSubmit={handleSubmit} noValidate>
        <AnimatePresence mode="wait" custom={direction}>
          <FormProgress completed={currentQuestion} total={questions.length} />
          {questions.length > 0 && (
            <motion.div
              key={currentQuestion}
              initial="enter"
              animate="show"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="quiz__question"
              custom={direction}
            >
              <h1 className="quiz__title">
                {questions[currentQuestion].question}
              </h1>
              <p className="quiz__instruction">(Select all that apply)</p>
              <div className="quiz__options">
                {questions[currentQuestion].options.map(
                  (option, optionIndex) => (
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        duration: 0.01,
                      }}
                      className="quiz__option"
                      key={optionIndex}
                    >
                      <input
                        type="checkbox"
                        name={`question-${currentQuestion}-option-${optionIndex}`}
                        id={`question-${currentQuestion}-option-${optionIndex}`}
                        data-question={currentQuestion}
                        data-option={optionIndex}
                        onChange={handleCheckboxChange}
                        checked={responses[currentQuestion][optionIndex]}
                        className="quiz__checkbox"
                      />
                      <label
                        htmlFor={`question-${currentQuestion}-option-${optionIndex}`}
                        className="quiz__label"
                      >
                        {option.text}
                      </label>
                    </motion.div>
                  )
                )}
              </div>
              {errors[currentQuestion] && (
                <p className="quiz__error">
                  <CircleAlert size={16} /> {errors[currentQuestion]}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="quiz__button-container">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion < questions.length - 1 ? (
            <button key="submit-btn" type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button key="next-btn" type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
