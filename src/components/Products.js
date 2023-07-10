import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/api/v2/products`)
      .then((res) => res.json())
      .then((data) => {
        const products = data.map((product) => {
          return {
            id: product.id,
            title: product.title,
            image: product.better_featured_image.med
              ? product.better_featured_image.med
              : product.better_featured_image.source_url,
          };
        });
        setProducts(products);
      });
  }, []);

  return (
    <div class="product-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-section text-center">
              <h2>منتجاتنا</h2>
              <div class="img-title">
                <a href="#">
                  <img
                    width="221"
                    height="19"
                    src="https://fastercool.com/wp-content/themes/Fastercool/img/Forma-12.png"
                    loading="lazy"
                    data-lazy-src="https://fastercool.com/wp-content/themes/Fastercool/img/Forma-12.png"
                    data-ll-status="loaded"
                    class="entered lazyloaded"
                  />
                  <noscript>
                    <img
                      width="221"
                      height="19"
                      src="https://fastercool.com/wp-content/themes/Fastercool/img/Forma-12.png"
                      loading="lazy"
                    />
                  </noscript>
                </a>
              </div>
            </div>
          </div>
          {products.map((product) => (
            <div class="col-md-4 col-sm-6">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
