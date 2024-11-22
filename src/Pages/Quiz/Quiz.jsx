import { useEffect, useState } from "react";
import { getQuestions } from "../../api/backend";
import { motion, AnimatePresence } from "framer-motion";
import { CircleAlert } from "lucide-react";

import "./Quiz.scss";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [errors, setErrors] = useState({});

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
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
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
    console.log(recommendations.data);
    return recommendations.data;
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

  const slideVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <main className="quiz">
      <form onSubmit={handleSubmit} noValidate>
        <AnimatePresence mode="wait">
          {questions.length > 0 &&
            questions.map((question, questionIndex) => {
              return (
                <motion.div
                  key={currentQuestion}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 0.3 }}
                  className="quiz__question"
                >
                  <h1>{question.question}</h1>
                  <div className="quiz__options">
                    {question.options.map((option, optionIndex) => {
                      return (
                        <div className="quiz__option" key={optionIndex}>
                          <input
                            type="checkbox"
                            name={`question-${questionIndex}-option-${optionIndex}`}
                            id={`question-${questionIndex}-option-${optionIndex}`}
                            data-question={questionIndex}
                            data-option={optionIndex}
                            onChange={handleCheckboxChange}
                            checked={responses[questionIndex][optionIndex]}
                          />
                          <label
                            htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                            className="quiz__option"
                          >
                            {option.text}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  {errors[questionIndex] && (
                    <p className="quiz__error">
                      <CircleAlert size={16} /> {errors[questionIndex]}
                    </p>
                  )}
                </motion.div>
              );
            })}
        </AnimatePresence>
        <button type="submit" className="quiz__submit">
          Submit
        </button>
      </form>
    </main>
  );
}
