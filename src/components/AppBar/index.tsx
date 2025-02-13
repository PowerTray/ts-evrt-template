import React, { useState } from 'react';

function AppBar() {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  return (
    <div className="absolute top-0 left-0 w-full dark:bg-gray-800 bg-gray-200 py-1 pl-2 px-1 flex justify-between items-center draggable text-white">
      <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">{document.title}</p>
      <div className="undraggable inline-flex">
        <button onClick={window.Main.Minimize} className="px-4 hover:bg-gray-300">
          &#8211;
        </button>
        <button onClick={handleToggle} className="px-4 hover:bg-gray-300">
          {isMaximize ? '\u2752' : '⃞'}
        </button>
        <button onClick={window.Main.Close} className="px-4 hover:bg-red-500 hover:text-white">
          &#10005;
        </button>
      </div>
    </div>
  );
}

export default AppBar;
