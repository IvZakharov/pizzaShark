import React from 'react';

import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort';
import ProductCard from '../Components/ProductCard/ProductCard';
import Skeleton from '../Components/ProductCard/Skeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярные',
    sortProperty: 'rating',
  });

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setIsLoaded(true);
    fetch(
      `https://6284d68aa48bd3c40b767a58.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoaded(false);
      });
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__header">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />
      </div>

      <section className="products">
        <h3 className="content-title">Все пиццы</h3>
        <div className="products__list">
          {isLoaded
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <ProductCard key={obj.id} {...obj} />)}
        </div>
      </section>
    </>
  );
}

export default Home;
