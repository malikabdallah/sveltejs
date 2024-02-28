<script>
    import Product from "./Product.svelte";
    import Modal from "./Modal.svelte";

    let products = [{
        id:"p1",
        title:"a book",
        price: 9.99,
        bestseller: true
    }]

    let modalOpen=false;
    let closeAble=false;
  
    function addToCart(event) {
      //console.log(event);
    }
  
    function deleteProduct(event) {
     // console.log(event.detail);
    }

    function showModal(){
        modalOpen=true;

    }

    function closeModal(){
        alert("close modal");
        modalOpen=false;
    }
  </script>
  
  {#each products as product}
  <Product
    {...product}
    on:add-to-cart={addToCart}
    on:delete={deleteProduct} />
  {/each}


  <!--
  <Modal content="<h1>hi!</h1>" />
  -->

<!--
<Modal>
    <h1>hello</h1>
    <p>text</p>
</Modal>
-->

<button on:click="{showModal}">show modal</button>

{#if modalOpen}
<Modal

     on:cancel={()=>(modalOpen = false)} 
     on:close={closeModal}
     let:didAgree={closeAble}>
    <h4 slot="header">hello</h4>
    <p>text</p>
    
    <button slot="footer" on:click="{()=>modalOpen=false}" disabled={!closeAble}>comfirm footer overide</button>
    
</Modal>
{/if}