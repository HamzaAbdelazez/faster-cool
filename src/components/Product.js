export default function Product({ product }) {
  return (
    <article class="products relative">
      <div class="img-product">
        <div class="post--short__img view effect_img">
          <a
            href="https://fastercool.com/%d9%85%d8%ae%d8%a7%d8%b2%d9%86-%d9%88%d8%ba%d8%b1-%d8%a7%d9%84%d8%aa%d8%a8%d8%b1%d9%8a%d8%af-%d9%88%d8%a7%d9%84%d8%aa%d8%ac%d9%85%d9%8a%d8%af/"
            alt="مخازن وغرف التبريد والتجميد"
          >
            <img
              width="300"
              height="300"
              src={product.image}
              class="attachment-medium size-medium wp-post-image entered lazyloaded"
              alt=""
              loading="lazy"
              data-lazy-src={product.image}
              data-ll-status="loaded"
            />
          </a>
        </div>
      </div>
      <h2 class="product__title">
        <a href="https://fastercool.com/%d9%85%d8%ae%d8%a7%d8%b2%d9%86-%d9%88%d8%ba%d8%b1-%d8%a7%d9%84%d8%aa%d8%a8%d8%b1%d9%8a%d8%af-%d9%88%d8%a7%d9%84%d8%aa%d8%ac%d9%85%d9%8a%d8%af/">
          {product.title}
        </a>
      </h2>
    </article>
  );
}
