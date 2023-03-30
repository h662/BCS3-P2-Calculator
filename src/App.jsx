import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onClickAdd = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const onClickSubstract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const onClickMultiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };
  const onClickDivide = () => {
    setResult(parseInt(parseInt(num1) / parseInt(num2)));
  };

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };
  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-2xl font-bold mb-4">
        Awesome한 계산기(로 바뀔예정)
      </div>
      <div
        className={`${
          result > 100 ? "text-red-500" : "text-red-300"
        } text-3xl font-black mb-4`}
      >
        {result}
      </div>
      <div className="mb-4">
        <input
          className="border-2 focus:outline-none focus:border-purple-500 rounded-xl px-4 py-2 text-xl"
          type="text"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-purple-500 rounded-xl px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
          onClick={onClickAdd}
        >
          Add
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-2"
          onClick={onClickSubstract}
        >
          Substract
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-2"
          onClick={onClickMultiply}
        >
          Multiply
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-2"
          onClick={onClickDivide}
        >
          Divide
        </button>
      </div>
    </div>
  );
}

export default App;
