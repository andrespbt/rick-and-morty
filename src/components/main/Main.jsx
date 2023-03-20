import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ErrorMessage } from './ErrorMessage';
import { CardList } from './card/CardList';
import { MainContext } from './context/MainContext';
import { SkeletonList } from '../main/skeleton/SkeletonList.jsx';

const baseUrl = 'https://rickandmortyapi.com/api/';
const pageSize = 20;

export const Main = () => {
  const [data, setData] = useState({});
  const { setIsLoading, isLoading, currentPage } = useContext(MainContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}character?page=${currentPage}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setData({ error: error.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <main className="bg-veryDarkGray py-8 px-10 flex flex-col gap-10">
      {data.error ? (
        <ErrorMessage message={data.error} />
      ) : isLoading ? (
        <SkeletonList />
      ) : (
        <CardList
          pagination={{ total: data?.info?.count, pageSize }}
          data={data}
        />
      )}
    </main>
  );
};
