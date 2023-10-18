import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'The Legend of Zelda™: Tears of the Kingdom',
          imgGame: 'ZeldaGame.avif',
          platform: 'Nintendo Switch',
          price: '99.99',
        },
        {
          id: 2,
          title: 'The Legend of Zelda™: Breath of the Wild',
          imgGame: "ZELda1.avif",
          platform: 'Nintendo Switch',
          price: '59.99',

        },
        {
          id: 3,
          title: 'Super Smash Bros.™ Ultimate',
          imgGame: 'smash.avif',
          platform: 'Nintendo Switch',
          price: '59.99',

        },
        {
          id: 4,
          title: 'Metroid™ Dread',
          imgGame: 'Metroid.avif',
          platform: 'Nintendo Switch',
          price: '59.99',
        },
        {
          id: 5,
          title: 'Super Mario Odyssey™',
          imgGame: 'm.avif',
          platform: 'Nintendo Switch',
          price: '49.99',
        },
        {
          id: 6,
          title: 'Princess Peach™: Showtime!',
          imgGame: 'Princess Peach.avif',
          platform: 'Nintendo Switch',
          price: '59.99',
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
