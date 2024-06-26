import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Accounts from '../Accounts/Accounts';
import Profiles from '../Profiles/profiles';
import Deleted from '../Deleted/Deleted';

const NavigationMenu = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage} app__pages`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
      >
      <Routes location={displayLocation}>
        <Route path="/" element={<Accounts/>} />
        <Route path='profiles' element={<Profiles />} />
        <Route path='deleted' element={<Deleted />} />
      </Routes>
    </div>
  )
}

export default NavigationMenu;