import { Routes, Route } from 'react-router-dom';

import { HeroSlider } from './HeroSlider/HeroSlider';

import { DogPage } from 'pages/DogPage/DogPage';
import { CatPage } from 'pages/CatPage/CatPage';
import { HamsterPage } from 'pages/HamsterPage/HamsterPage';
import { BirdPage } from 'pages/BirdPage/BirdPage';
import { HorsePage } from 'pages/HorsePage/HorsePage';

import { Layout } from './Layout/Layout';
import { AquamarinePage } from 'pages/AquamarinePage/AquamarinePage';
import { ReptilePage } from 'pages/ReptilePage/ReptilePage';
import { KormPage } from 'pages/DogPage/KormPage/KormPage';
import { Korm } from 'pages/DogPage/Korm/Korm';
// import { FeedPage } from 'pages/DogPage/Feed/FeedPage';
import { Sale } from './Sale/Sale';
import { FeedPage } from 'pages/DogPage/Feed/FeedPage';
// import { FullPageKorm } from 'pages/DogPage/FullPageKorm/FullPageKorm';

export const App = () => {
  return (
    <>
      <HeroSlider />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DogPage />} />

          <Route path="dog/feed" element={<Korm />} />
          <Route path="dog/corm" element={<KormPage />} />
          {/* <Route path="dog/feed/:id" element={<FullPageKorm />} /> */}
          <Route path="dog/goodies" element={<FeedPage />} />
          <Route path="../../bird" element={<BirdPage />} />

          <Route path="cat" element={<CatPage />} />
          <Route path="hamster" element={<HamsterPage />} />
          <Route path="bird" element={<BirdPage />} />
          <Route path="horse" element={<HorsePage />} />
          <Route path="aquamarine" element={<AquamarinePage />} />
          <Route path="reptile" element={<ReptilePage />} />
        </Route>
      </Routes>

      <Sale />
    </>
  );
};
