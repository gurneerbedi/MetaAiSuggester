import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const getQuizResults = async (answers) => {
  try {
    const { data } = await axios.post(`${backendUrl}/results`, answers);
    return data;
  } catch (error) {
    console.error("Could not get quiz results:", error);
    throw new Error("Error getting quiz results");
  }
};

const getProducts = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/products`);
    return data;
  } catch (error) {
    console.error("Could not get products:", error);
    throw new Error("Error getting products");
  }
};

const getQuestions = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/`);
    return data;
  } catch (error) {
    console.error("Could not get quiz questions:", error);
    throw new Error("Error getting quiz questions");
  }
};

export { getQuizResults, getProducts, getQuestions };
