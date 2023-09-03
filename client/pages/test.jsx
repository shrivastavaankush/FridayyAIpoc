import { useState, useEffect } from 'react';
import { storefront } from '@/utils';

const MyPage = () => {

  return (
    <div>
      <h1>Products</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageSrc} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .product {
          border: 1px solid #ccc;
          padding: 1rem;
        }

        .product-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};



export default MyPage;

export async function getStaticProps(){
    const { data } = await storefront(productsQuery)
    return {
        props : {
            // products : data.
        },
    }
}

const gql = String.raw
const productsQuery = gql`
query Products{
    products(first:5){
      edges{
        node{
                  title
          tags
          handle
          priceRange {
                      minVariantPrice{
              amount
            }
          }
          images(first: 1){
            edges{
              node{
                url
                altText
              }
            }
          }
          
        }
        
      }
    }
  }
`