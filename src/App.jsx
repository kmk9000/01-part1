import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const HelloComponent = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Hello from component");
  return (
    <>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </>
  );
};

const Name = () => {
  const name = "Pekka";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </>
  );
};

const App = () => {
  return (
    <>
      <HelloComponent />
      <Name />
    </>
  );
};

export default App;
