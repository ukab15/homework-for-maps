import React from 'react';
import './Home-work.css';
import DataList from './compnent/DataList'; 
function HomeWork() {
  const items = ['C#', 'Css', 'C++','Python','React'];

  return (
    <div className="App">
        
      <h1>The list in programing lunguch</h1>
      <h5>نعتذر عن الاخطاء في اللغة الانكليزية</h5>
      <DataList items={items} />
    </div>
  );
}

export default HomeWork;
