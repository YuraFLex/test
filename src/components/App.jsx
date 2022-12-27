import { Routes, Route } from 'react-router-dom';

import { DogPage } from 'pages/DogPage/DogPage';
import { HeroSlider } from './HeroSlider/HeroSlider';

export const App = () => {
  return (
    <>
      <HeroSlider />
      <Routes>
        <Route path="/" element={<DogPage />} />
        <Route path="/about" element={<HeroSlider />} />
      </Routes>
    </>
  );
};
