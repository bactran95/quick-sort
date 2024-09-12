import React, { useState } from 'react';

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (const el of arr.slice(0, -1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const QuickSortComponent = () => {
  const [array, setArray] = useState([5, 3, 8, 4, 2]);

  const handleSort = () => {
    const sortedArray = quickSort([...array]);
    setArray(sortedArray);
  };

  return (
    <div>
      <h2>Quick Sort Example</h2>
      <div>
        {array.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
      </div>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default QuickSortComponent;
