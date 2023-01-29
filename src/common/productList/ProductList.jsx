import React from 'react';
import * as S from './ProductList.Style';

const ProductList = () => {
  // const [imageData, setImageData] = useState([]);
  // const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <S.ProductWrapper>
      <S.ProductImg src='' alt='상품 이미지' />
      <S.ProductTxt>
        <li className='store-tit'>storename</li>
        <li className='product-name'>productname</li>
        <li className='product-price'>
          price
          <span>원</span>
        </li>
      </S.ProductTxt>
    </S.ProductWrapper>
  );
};

export default ProductList;
