const App = () => {
  const now = newDate();
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

export default App;
