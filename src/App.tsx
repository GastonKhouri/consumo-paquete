import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gk-product-card';
import './App.css';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
};

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={ product }
        initialValues={ {
          count: 4,
          maxCount: 10
        } }
      >
        {
          ( { reset, increaseBy, count, isMaxCountReached, maxCount } ) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }

      </ProductCard>
    </div>
  );
}

export default App;
