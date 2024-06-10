import React, {useEffect, useState} from 'react'
import Products from '../../components/products/Products'
import axios from '../../api'
import Hero from '../../components/Hero/Hero';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero/>
      <Products  title="Mahsulatlar" data={data}/>
    </div>
  )
}

export default Home