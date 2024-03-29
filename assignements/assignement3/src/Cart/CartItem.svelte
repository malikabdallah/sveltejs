<script>
  import Button from "../UI/Button.svelte";
  import {products } from '../Products/product-store';
  import cartItems from "./cart-store";
    import { destroy_component } from "svelte/internal";
  export let title;
  export let price;
  export let id;

  let description = 'Not Available!';
  let showDescription = false;
  let fetchedProducts = [];

  products.subscribe(prods=>{
    fetchedProducts=prods;
  });

  function displayDescription() {
    showDescription = !showDescription;
    const unsubscribe=description= fetchedProducts.find(p=>p.id === id).description;
    unsubscribe();
  }

  function removeFromCart() {
    // ...
   // console.log("Removing...");
    console.log("id "+id);
    cartItems.update(items=>{
      return items.filter(i => i.id !== id);
    });


  }
</script>

<style>
  li {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h2 {
    color: #494949;
    margin-bottom: 1rem;
  }
</style>

<li>
  <h1>{title}</h1>
  <h2>{price}</h2>
  <h3>{id}</h3>
  <Button mode="outline" on:click={displayDescription}>
    {showDescription ? 'Hide Description' : 'Show Description'}
  </Button>
  <Button on:click={removeFromCart}>Remove from Cart</Button>
  {#if showDescription}
    <p>{description}</p>
  {/if}
</li>
