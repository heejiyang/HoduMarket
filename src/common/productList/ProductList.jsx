import React from 'react';
import ProductList from './ProductList.Style';

const ProductList = ({ locationData }) => {
  const [imageData, setImageData] = useState([]);

  return (
    <S.ProductWrapper>
      <img src={`${data.image}`} alt='상품 이미지' />
      <ul>
        <li className='store-tit'>{data.store_name}</li>
        <li className='product-name'>{data.produce_name}</li>
        <li className='product-price'>
          {price}
          <span>원</span>
        </li>
      </ul>
    </S.ProductWrapper>
  );
};

export default ProductList;
