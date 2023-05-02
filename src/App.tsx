import React from 'react';
import './App.css';
import { FormGenerator, Field } from './Form';
import { generateFields } from './utils/generatorFields';

const App: React.FC = () => {
  const formFields: Field[] =  generateFields(10);;

  return (
    <div className="App">
      <h1>Form Generator</h1>
      <FormGenerator fields={formFields} />
    </div>
  );
};

export default App;
