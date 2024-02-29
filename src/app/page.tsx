import ProductItem from '../components/products/ProductItem';
import data from '../../lib/data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data.productsData.map((product: any) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
