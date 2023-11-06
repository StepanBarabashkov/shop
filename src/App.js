import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";
import Categories from "./components/Categories.js";
import ShowFullItime from "./components/ShowFullItime.js";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'The Legend of Zelda™: Tears of the Kingdom',
          imgGame: 'ZeldaGame.avif',
          platform: 'for Nintendo Switch',
          price: '99.99',
        },
        {
          id: 2,
          title: 'The Legend of Zelda™: Breath of the Wild',
          imgGame: "ZELda1.avif",
          platform: 'for Nintendo Switch',
          price: '59.99',

        },
        {
          id: 3,
          title: 'Super Smash Bros.™ Ultimate',
          imgGame: 'smash.avif',
          platform: 'for Nintendo Switch',
          price: '59.99',

        },
        {
          id: 4,
          title: 'Metroid™ Dread',
          imgGame: 'Metroid.avif',
          platform: 'for Nintendo Switch',
          price: '59.99',
        },
        {
          id: 5,
          title: 'Super Mario Odyssey™',
          imgGame: 'm.avif',
          platform: 'for Nintendo Switch',
          price: '49.99',
        },
        {
          id: 6,
          title: 'Princess Peach™: Showtime!',
          imgGame: 'Princess Peach.avif',
          platform: 'for Nintendo Switch',
          price: '59.99',
        },
        {
          id: 7,
          title: 'God of War: Ragnarök',
          imgGame: 'R.avif',
          platform: 'for PlayStation 5, PlayStation 4',
          price: '69.99',
        },
        {
          id: 8,
          title: 'Spider-Man 2',
          imgGame: 'Sp.jpg',
          platform: 'for PlayStation 5',
          price: '100',
        },
        {
          id: 9,
          title: 'Horizon Forbidden West',
          imgGame: 'h.webp',
          platform: 'for PlayStation 5',
          price: '69.99',
        },
        {
          id: 10,
          title: 'Forza Horizon 5',
          imgGame: 'ss.jpg',
          platform: 'for Xbox Series X|S, Xbox One',
          price: '29.99',
        },
        {
          id: 11,
          title: "Five Nights at Freddy's Help Wanted 2",
          imgGame: 'fn.jpg',
          platform: 'for PlayStation 5',
          price: '59.99',
        },
        {
          id: 12,
          title: "Rayman® Legends Definitive Edition",
          imgGame: 'w.avif',
          platform: 'for Nintendo Switch',
          price: '19.99',
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">

        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItime onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>


    )
  }
  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    const currentItems = category === 'all' ? this.state.items : this.state.items.filter(el => el.platform === category)
    this.setState({
      currentItems: currentItems
    })
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
