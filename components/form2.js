import Link from 'next/link'

import React, { useState } from 'react';




const Form2 = ({onSubmit}) => {
  
  return (
   
    <form onSubmit={onSubmit}>
    <label>
      <span>Article</span>
      
        <select name="article" required>
            <option value="1">Article 1</option>
            <option value="2">Article 2</option>
            <option value="3">Article 3</option>            
        </select>
    </label>
    <label>
      <span>Operation</span>
      <select name="operation" required>
            <option value="buy">Buy </option>
            <option value="sell">Sell </option>
            <option value="devbuys">Devolution in buys </option>
            <option value="devsells">Devolution in sales</option>            
        </select>
    </label>
    <label>
      <span>Units</span>
      <input type="number" name="units" required />        
    </label>

    <button type="submit">Confirm</button>
    

    

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
  );
};

export default Form2