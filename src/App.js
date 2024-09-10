import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Recommended from './Recommended';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('AboutMe');

  const renderContent = () => {
    switch (activeTab) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Experiences':
        return <Experiences />;
      case 'Recommended':
        return <Recommended />;
      case 'Gallery':
        return <Gallery />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="container">
      <div className="content-box"> {/* Added a wrapper around tabs and content */}
        {/* Tab buttons */}
        <div className="tab-buttons">
          <button
            className={activeTab === 'AboutMe' ? 'active' : ''}
            onClick={() => setActiveTab('AboutMe')}
          >
            About Me
          </button>
          <button
            className={activeTab === 'Experiences' ? 'active' : ''}
            onClick={() => setActiveTab('Experiences')}
          >
            Experiences
          </button>
          <button
            className={activeTab === 'Recommended' ? 'active' : ''}
            onClick={() => setActiveTab('Recommended')}
          >
            Recommended
          </button>
        </div>

        {/* Render the selected tab's content */}
        <div className="content">{renderContent()}</div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-box"> {/* New wrapper for gallery */}
        <Gallery />
      </div>
    </div>
  );
}

export default App;