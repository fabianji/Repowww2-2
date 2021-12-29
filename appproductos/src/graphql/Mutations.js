import { gql } from "apollo-boost";

export const SET_PRODUCTO = gql`
mutation addProd($descripcion: String!, $valor: Int, $stock: Int){
    addProd(input: {descripcion: $descripcion, valor: $valor, stock: $stock}){
      id
      valor
      descripcion
      stock
    }
  }
`;