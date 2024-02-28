<script>
    //export let content;
    import {createEventDispatcher, onMount, onDestroy} from "svelte";
    import { afterUpdate, beforeUpdate } from "svelte/internal";

    const dispatch = new createEventDispatcher();

    let agree =false;


    onMount(()=>{
        console.log("on mount");
    });

    onDestroy(()=>{
        console.log("on destroy");
    });

    beforeUpdate(()=>{
        console.log("after update");  
    });

    afterUpdate(()=>{
        console.log("after update");
    })

    console.log("script executed");
    
</script>

<style>
.backdrop {
  padding: 1rem;  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  padding: 1rem;
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  max-height: 80vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: scroll;
}

header {
    border-bottom: 1px solid #ccc;
}
</style>



<div class="backdrop" on:click={() => dispatch('cancel')}>
</div>
<div class="modal">
    <header>
        <slot name="header"/>
    </header>
    <div class="content">
        <slot/>
    </div>
    <div class="disclaimer">
        <p>before you close , you need to agree to our terms!</p>
        <button on:click="{()=> agree =true }">Agree</button>
    </div>
    <footer>
        <slot name="footer" didAgree={agree}>
            <button on:click="{()=> dispatch('close')}" disabled={!agree}>Close</button>
        </slot>
    </footer>
    <!--
    {@html content}
    -->
</div>