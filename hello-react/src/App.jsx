import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { TaskcardPen, TaskcardDone, TaskcardS } from './Taskcard';

function App() {
  return (
    <div className='main-container'>
      <header className="header">
        <h1 className="project-title">Smarter Tasks</h1>
        <p className="project-subtitle">
          Project: <span className="project-name">Graduation Final Year Project (Revamp College Website)</span>
        </p>
      </header>
      <div className='container'>
        <div className='TaskColumn'>
          <TaskcardS title="Pending" />
          <TaskcardPen
            title="Build the website with static content" 
            dueDate="10th April" 
            assignee="Rohit S"
          />
          <TaskcardPen 
            title="Add a blog" 
            dueDate="22nd March" 
            assignee="Rohit M"
          />
          <div className="TaskSection new-task">
            <p>+ New task</p>
          </div>
        </div>
        <div className='TaskColumn'>
          <TaskcardS title="Done" />
          <TaskcardDone 
            title="Design the mockup" 
            completedDate="10th April" 
            assignee="Rohit M"
          />
          <TaskcardDone 
            title="Get the approval from principal" 
            completedDate="20th April" 
            assignee="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
