import { Routes, Route } from 'react-router-dom';

import { HeroSlider } from './HeroSlider/HeroSlider';

import { DogPage } from 'pages/DogPage/DogPage';
import { CatPage } from 'pages/CatPage/CatPage';
import { HamsterPage } from 'pages/HamsterPage/HamsterPage';
import { BirdPage } from 'pages/BirdPage/BirdPage';
import { HorsePage } from 'pages/HorsePage/HorsePage';

import { Layout } from './Layout/Layout';
import { LivestockPage } from 'pages/LivestockPage/LivestockPage';
import { ReptilePage } from 'pages/ReptilePage/ReptilePage';

export const App = () => {
  return (
    <>
      <HeroSlider />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DogPage />} />
          <Route path="/cat" element={<CatPage />} />
          <Route path="/hamster" element={<HamsterPage />} />
          <Route path="/bird" element={<BirdPage />} />
          <Route path="/horse" element={<HorsePage />} />
          <Route path="/livestock" element={<LivestockPage />} />
          <Route path="/reptile" element={<ReptilePage />} />
        </Route>
      </Routes>
    </>
  );
};
