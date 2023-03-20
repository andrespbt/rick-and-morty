import { useContext, useState } from 'react';
import { MainContext } from '../context/MainContext';
import { Card } from './Card';
import { Pagination } from './Pagination';

export const CardList = ({ data, pagination }) => {
  const { setCurrentPage, currentPage } = useContext(MainContext);
  const { results } = data;
  const { pageSize, total } = pagination;
  const siblingCount = 1;

  return (
    <>
      <ul className="flex flex-wrap max-w-[1920px] xl:flex-row xl:w-full xs:justify-center items-center xl:gap-6 xl:my-10">
        {results &&
          results.map(character => {
            const { name, status, species, image, location, origin, id } = character;
            return (
              <Card
                key={id}
                info={{ name, status, species, image, location, origin }}
              />
            );
          })}
      </ul>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={total}
        siblingCount={siblingCount}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};
