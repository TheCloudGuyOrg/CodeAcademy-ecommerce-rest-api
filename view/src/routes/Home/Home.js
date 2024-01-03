import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        async function load() {
          await dispatch();
        }
        load();
      }, [dispatch]);

      return (
        <section className="grid">
          { products && Object.keys(products).length > 0 &&
            Object.keys(products).map((key) => {
              const product = products[key];
            })
          }
        </section>
      );


};

export default Home;