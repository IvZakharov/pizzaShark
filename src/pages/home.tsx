import React from 'react';

// import qs from 'qs';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzasSlice';

import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort';
import ProductCard from '../Components/ProductCard/ProductCard';
import Skeleton from '../Components/ProductCard/Skeleton';
import { RootState } from '../redux/store';

function Home() {
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const { items, status } = useSelector((state: RootState) => state.pizzas);

  const sortType = useSelector((state: RootState) => state.filter.sort.sortProperty);
  const dispatch = useAppDispatch();

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const getPizzas = async () => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
      }),
    );
  };

  // Сохраняем параметры url

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));

  //     const sort = sort.find((obj) => obj.sortProperty === params.sortProperty);
  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       }),
  //     );
  //   }
  // }, []);

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType]);

  // Парсим url

  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     sortType: sortType,
  //     categoryId: categoryId,
  //   });

  //   navigate(`?${queryString}`);
  // }, [categoryId, sortType]);

  return (
    <>
      <div className="content__header">
        <Categories value={categoryId} onChangeCategory={(id) => onChangeCategory(id)} />
        <Sort />
      </div>

      <section className="products">
        <h3 className="content-title">Все пиццы</h3>
        <div className="products__list">
          {status === 'loading'
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <ProductCard key={obj.id} {...obj} />)}
        </div>
      </section>
    </>
  );
}

export default Home;
