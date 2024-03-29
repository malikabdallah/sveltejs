import {writable} from 'svelte/store';

const cartItems =writable([{
    id: "p8",
    title: "Test",
    price: 9.99
  },
  {
    id: "p9",
    title: "Test",
    price: 9.99
  }]);

export default cartItems;  