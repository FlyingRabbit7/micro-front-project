import React, { useState, useEffect } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(() => {
        // console.log(props)
      return 0
  });

  function addCount() {
    setCount(count + 1)
  }

  useEffect(() => {
      console.log(1111)
  }, [])

  const [count2, setCount2] = useState(0);

  function addCount2() {
    setCount2(count2 + 1)
  }

  useEffect(() => {
    console.log(2222)
})

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={addCount}>
        Click me
      </button>
      <p>You clicked {count2} times2</p>
      <button onClick={addCount2}>
        Click me2
      </button>
    </div>
  );
}

export default Example