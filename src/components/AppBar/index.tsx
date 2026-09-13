// [!!!WARNING!!!] THIS SHOULD NOT STAY, ITS JUST A BOILERPLATE. IF YOU WANT TO USE A SHAPE ONLY BUTTON USE A DIFFRENT APPROACH.
/* eslint-disable jsx-a11y/control-has-associated-label */
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
    <div className="absolute z-1000 text-xs top-0 *:drop-shadow-md *:border *:border-stone-500 left-0 w-full p-1 flex justify-end gap-1 items-center text-white">
      <p className="draggable text-md whitespace-nowrap overflow-hidden p-1 px-2 bg-zinc-900 rounded-full text-ellipsis">
        {document.title}
      </p>
      <div className="undraggable gap-1 *:p-2 *:rounded-full bg-zinc-900 p-1 rounded-full flex items-stretch justify-stretch">
        <button onClick={window.Main.Minimize} className="px-4 bg-blue-300" />
        <button onClick={handleToggle} className="px-4 bg-yellow-500 hover:bg-gray-300" />
        <button onClick={window.Main.Close} className="px-4 bg-red-500 hover:text-white" />
      </div>
    </div>
  );
}

export default AppBar;
