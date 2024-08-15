import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './ui/Main';
import Content from './ui/Content';
import Profile from './Components/Profile/Profile';
import Stats from './Components/Stats/Stats';
import Team from './Components/Team/Team';
import Event from './Components/Event/Event';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Main>
        <Content> 
          <Stats darkMode={darkMode} />

          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>


    </div>
  );
};

export default App;
