import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort';
import ProductCard from '../Components/ProductCard/ProductCard';
import Skeleton from '../Components/ProductCard/Skeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(true);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const order = sortType.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setIsLoaded(true);

    axios
      .get(
        'https://6284d68aa48bd3c40b767a58.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}',
      )
      .then((res) => {
        setItems(res.data);
        setIsLoaded(false);
      });
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__header">
        <Categories value={categoryId} onChangeCategory={(id) => onChangeCategory(id)} />
        <Sort />
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
