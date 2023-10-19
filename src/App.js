import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
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
        {
          id: 7,
          title: 'God of War: Ragnarök',
          imgGame: 'R.avif',
          platform: 'PlayStation 5, PlayStation 4',
          price: '69.99',
        },

      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />

        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>


    )
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;

    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
