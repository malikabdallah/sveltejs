<script>

    import CustomInput from "./CustomInput.svelte";
    import Toggle from "./Toggle.svelte";

    let selectedOption=1;
    let val = '';
    let price =10;
    let agreed;
    let favColor=['red'];
    let animeFavorite = 'dbz';

    let usernameInput;
    let someDiv;
    let customVariable;

    $:console.log(agreed);

    $: console.log(selectedOption);

    $: console.log(val);

    $: console.log(favColor);

    $: console.log(animeFavorite);

    function setValue(event){
        val = event.target.value;
    }

    function clicked(event){
        selectedOption=event.detail;
    }

    function saveData(){
        console.log(usernameInput.value);
        console.log(someDiv);
        console.log(customVariable.val);
    }

    export function empty(){
        console.log(JSON.stringify(customVariable));
        customVariable.empty();
    }

</script>

<h1>Bindings & Forms</h1>

<!--
<input type="text" value={val}  on:input={setValue}/>
<p>{val}</p>
<input type="text" bind:value="{val}"/>
-->
<input type="button" value="empt y" on:click="{empty}"/><br/>
<CustomInput  bind:val={val}   bind:this={customVariable} />
<!-- shortcut bind:val -->

<!--
<Toggle bind:chosenOption={selectedOption} />
-->

<Toggle on:clicked="{clicked}"  />

<input type="number" value={price}  on:input={event =>console.log(event.target.value)} />
<br/>

<label>
    <input  type="checkbox" bind:checked={agreed} />
    Agree to term ?

</label>


<br/>
<h1>favorite color</h1>
<label>
    <input type="checkbox" name="color" bind:group="{favColor}" value="green">
    green
</label>

<label>
    <input type="checkbox" name="color" bind:group="{favColor}" value="red">
    red
</label>
<label>
    <input type="checkbox" name="color" bind:group="{favColor}" value="blue">
    blue
</label>

<br/>

Manga prefere:
<select bind:value="{animeFavorite}">
    <option value="dbz">DBZ</option>
    <option value="naruto">NARUTO</option>
    <option value="berserk">BERSERK</option>

</select>

<br/>
<hr/>

<input type="text" id="username" bind:this="{usernameInput}">
<button on:click="{saveData}">save</button>

<div bind:this="{someDiv}"></div>