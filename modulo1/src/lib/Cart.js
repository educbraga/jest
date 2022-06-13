import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  checkout() {
    return {
      total: this.getTotal(),
      items: this.items,
    };
  }
}
