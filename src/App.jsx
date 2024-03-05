import { useState } from "react";
import Header from "./components/Header";
import InvestmentResults from "./components/InvestmentResults";
import UserInput from "./components/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && <p className="center"> enter valid number</p>}
      {inputIsValid && <InvestmentResults userInput={userInput} />}
    </>
  );
}

export default App;
