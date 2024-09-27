import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from '../../Context'

// https://api.escuelajs.co/api/v1/products


function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems && context.filteredItems?.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))
      )
    } else {
      return (
          <div>No hay coincidencias :(</div>
      )
    }
  }

  return (
    <>
      <Layout>
        <div className="flex w-80 relative justify-center items-center mb-4">
          <h1 className="font-medium text-xl">Productos exclusivos</h1>
        </div>
        <input
          type="text"
          placeholder="Busca un producto"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
