import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch',
          imgGame:'ZeldaGame.avif',  
          price: '333',
        },
        {
          id: 2,
          title: 'The Legend of Zelda™: Breath of the Wild for Nintendo Switch',
          imgGame:"zelda.jpg",  
          price: '333',

        },
        {
          id: 3,
          title: 'sadasd',
          imgGame:'ZeldaGame.avif',  
          price: '333',

        },
        {
          id: 1,
          title: 'The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch',
          imgGame:'ZeldaGame.avif',  
          price: '333',
        },
        {
          id: 1,
          title: 'The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch',
          imgGame:'ZeldaGame.avif',  
          price: '333',
        },
        {
          id: 1,
          title: 'The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch',
          imgGame:'ZeldaGame.avif',  
          price: '333',
        },

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>

    )
  }
}

export default App;
