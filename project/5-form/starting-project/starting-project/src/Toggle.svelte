<script>
    import {createEventDispatcher} from "svelte";
    export let chosenOption = 1;

    const dispatch = createEventDispatcher();

    function handleClcik(){
        chosenOption = chosenOption === 1 ? 2:1;
        dispatch("clicked",chosenOption);
    }
</script>

<!--
<button disabled="{chosenOption === 1}" on:click="{()=> chosenOption = 1}">option 1</button>
<button disabled="{chosenOption === 2}" on:click="{() => chosenOption = 2}">option 2</button>
-->

<button disabled="{chosenOption === 1}" on:click="{handleClcik}">option 1</button>
<button disabled="{chosenOption === 2}" on:click="{handleClcik}">option 2</button>