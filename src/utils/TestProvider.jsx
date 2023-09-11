import TestContext from "../context/TestContext";

function TestProvider({ children }) {
  const data = {
    message: "Hii pal!",
  };
  return <TestContext.Provider value={data}>{children}</TestContext.Provider>;
}

export default TestProvider;
