<script>

    import CustomInput from "./CustomInput.svelte";
    import Toggle from "./Toggle.svelte";

    let selectedOption=1;
    let val = '';

    $: console.log(selectedOption);

    $: console.log(val);

    function setValue(event){
        val = event.target.value;
    }
</script>

<h1>Bindings & Forms</h1>

<!--
<input type="text" value={val}  on:input={setValue}/>
<p>{val}</p>
<input type="text" bind:value="{val}"/>
-->

<CustomInput  bind:val={val} />

<Toggle bind:chosenOption={selectedOption} />

