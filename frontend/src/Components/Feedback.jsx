import React, { useState } from 'react';

const CheckboxList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Online Consultation', checked: false },
    { id: 2, name: 'Prescription', checked: false },
    { id: 3, name: 'Medicine instruction', checked: false },
  ]);

  // Function to handle the change event for checkboxes
  const handleCheckboxChange = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className='checkbox'>
      <ul className='lis'>
        {items.map(item => (
          <li className='lis-item' key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxList;

