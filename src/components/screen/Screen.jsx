import React from 'react';
import CurrentScreen from './current-screen/CurrentScreen';
import PreviousScreen from './previous-screen/PreviousScreen';
import './Screen.css';

export default function Screen() {
   return (
      <div className='screen'>
         <PreviousScreen></PreviousScreen>
         <CurrentScreen></CurrentScreen>
         
      </div>
   );
};
