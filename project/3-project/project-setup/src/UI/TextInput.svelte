<script>
    export let controlType=null;
    export let id=null;
    export let label=null;
    export let rows=null;
    export let value=null;
    

</script>    

<style>
      input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
</style>
<!--
    on:input => forward to parent componnent
-->

<div class="form-control">
    <label for="{id}">{label}</label>

    {#if controlType === 'textarea'}
        <textarea  rows="{rows}" id="{id}" bind:value="{value}" on:input></textarea>
    {:else if controlType === 'text'}
        <input type="text" id="{id}" bind:value="{value}" on:input/>
    {:else}
        <input type="email" id="{id}" bind:value="{value}" on:input/>
    {/if}
</div>