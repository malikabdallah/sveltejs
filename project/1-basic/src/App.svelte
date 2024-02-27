<script>
	import ContactCarde from "./contact-card/ContactCarde.svelte";

	let name="malik";
    let age=28;
	let description="";
	let url="";

	$: uppercaseName = name.toUpperCase(); 
	$: console.log(name);
	$: if(name === 'MAXIMILIAM'){
		age =31;
	}

	function incrementAge(){
		age =age+1;
	}

	function decrementAge(){
		age =age-1;
	}

	function changeName(){
		name="MAXIMILIAM";
	}

	function nameInput(event){
		const enteredValue=event.target.value;
		name = enteredValue;
	}

	
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}! your age is {age}</h1>
<div>
	<button on:click="{incrementAge}">+</button><button on:click={decrementAge}>-</button>
</div>
<div>
	<!--<button on:click="{changeName}">change name</button>-->
	<!--<input type="text" value="{name}" on:input="{nameInput}"/>-->
	
	name :<input type="text" bind:value={name}/>
	description : <input type="text" bind:value={description}/>
	url: <input type="text" bind:value={url}/>
	
</div>

<ContactCarde userName="{name}" description="{description}" url="{url}"/>
