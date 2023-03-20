import { Header } from './components/header/Header';
import { MainContext } from './components/main/context/MainContext';
import { MainProvider } from './components/main/context/MainProvider';
import { Main } from './components/main/Main';

export const RickAndMorty = () => {
  return (
    <>
      <MainProvider>
        <Header />
        <Main />
      </MainProvider>
    </>
  );
};
