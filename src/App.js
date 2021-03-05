import { CardList } from './components/card-list/card-list.component';
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      productos: [
        {
          nombre: 'Milanesa',
          id: '1',
          precio: '$150'
        },
        {
          nombre: 'Francés',
          id: '2',
          precio: '$120'
        },
        {
          nombre: 'Arabe',
          id: '3',
          precio: '$160'
        },
        {
          nombre: 'Ensalada de Frutas',
          id: '4',
          precio: '$250'
        },
        {
          nombre: 'Super',
          id: '5',
          precio: '$100'
        },
        {
          nombre: 'Queso',
          id: '6',
          precio: '$110'
        },
      ],
      searchField: ''
    };
  }

  render() {
    const { productos, searchField } = this.state;
    const productosFiltrados = productos.filter(producto => 
      producto.nombre.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Sandwiches y Postres</h1>
        <SearchBox placeholder='Buscar productos'
        handleChange={e => this.setState({ searchField: e.target.value})}
        />
        <CardList productos={productosFiltrados} />
      </div>
    );
  }
}

export default App;
