//import logo from './logo.svg';
import './App.css';
//import {ApolloProvider} from 'react-apollo';
//import { client } from './graphql/ApolloClient';
import {GET_PRODUCTOS} from './graphql/Queries';
import { SET_PRODUCTO } from './graphql/Mutations';
import {useQuery} from '@apollo/client';
import {useMutation} from '@apollo/client';
function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTOS);
  //loading ? console.log("loading") : console.log(data);
  const load = loading && <p>Loading</p>
  const[addProd, { dato, cargando, fallo }]  = useMutation(SET_PRODUCTO);

  const pulsar = (name)=>{
    console.log('Me has pulsado');
    console.log(name);
    addProd({variables: {descripcion: "Hercules", valor: 22, stock: 200}})
    
  }

  return (
    <div>
      <h1>Catálogo de productos</h1>
      <div class="flexbox-container">
        {load}
        {data &&
          data.getProductos.map((getProductos) => {

              return <div class="caja-roja">
                <div >
                  <p key={getProductos.id}>{getProductos.descripcion} </p>
                  <p> Precio: {getProductos.valor}</p>
                </div>
                <img class="foto" src={getProductos.foto} />
                <button type="button" valor="1" onClick={()=>{pulsar (getProductos.carro)}} >Agregar al carro</button>
                </div>

            ;

        } )}
      </div>
    </div>
  );
}

export default App;
