
function Counter(props) {
  const count = () => props.count
  const setCount = (c: number) => props.setCount(c)

  return <div>
    <button onClick={() => setCount(count() - 1000)}>-1000</button>
    <button onClick={() => setCount(count() - 100)}>-100</button>
    <button onClick={() => setCount(count() - 10)}>-10</button>
    <button onClick={() => setCount(count() - 1)}>-</button>
    {' '}
    <span>{count()}</span>
    {' '}
    <button onClick={() => setCount(count() + 1)}>+</button>
    <button onClick={() => setCount(count() + 10)}>+10</button>
    <button onClick={() => setCount(count() + 100)}>+100</button>
    <button onClick={() => setCount(count() + 1000)}>+1000</button>
  </div>;
}

export default Counter
