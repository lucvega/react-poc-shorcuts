import React, { useState, useEffect } from 'react';
import './App.css';

const TABS = [
  { id: 1, title: 'Tab (1)', content: 'Contenido de la pestaña 1', action: 'Presiona "A" para activar la acción' },
  { id: 2, title: 'Tab (2)', content: 'Contenido de la pestaña 2', action: 'Presiona "S" para activar la acción' },
  { id: 3, title: 'Tab (3)', content: 'Contenido de la pestaña 3', action: 'Presiona "D" para activar la acción' },
  { id: 4, title: 'Tab (4)', content: 'Contenido de la pestaña 4', action: 'Presiona "F" para activar la acción' },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAction = (tabId) => {
    // Aquí puedes definir las acciones que desees para cada pestaña
    switch (tabId) {
      case 1:
        alert('Acción de la pestaña 1 activada');
        break;
      case 2:
        alert('Acción de la pestaña 2 activada');
        break;
      case 3:
        alert('Acción de la pestaña 3 activada');
        break;
      case 4:
        alert('Acción de la pestaña 4 activada');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const numKey = parseInt(event.key);
      if (!isNaN(numKey) && numKey >= 1 && numKey <= 4) {
        setActiveTab(numKey);
      } else {
        switch (event.key.toUpperCase()) {
          case 'A':
            handleAction(1);
            break;
          case 'S':
            handleAction(2);
            break;
          case 'D':
            handleAction(3);
            break;
          case 'F':
            handleAction(4);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <div className="Tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`TabButton ${tab.id === activeTab ? 'ActiveTab' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="TabContent">
        <p>{TABS.find((tab) => tab.id === activeTab)?.content}</p>
        <p>{TABS.find((tab) => tab.id === activeTab)?.action}</p>
      </div>
    </div>
  );
};

export default App;
