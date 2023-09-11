import TestContext from "../context/TestContext";

function TestProvider({ children }) {
  const data = {
    message: "Hii pal! It's Context API.",
  };
  return <TestContext.Provider value={data}>{children}</TestContext.Provider>;
}

export default TestProvider;
