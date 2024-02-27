<script>
	import ContactCarde from "./contact-card/ContactCarde.svelte";

	let name="malik";
    let age=28;
	let description="";
	let url="";
	let title="";
	let formState='empty';
	let createdContacts=[];


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

	function deleteFirst(){
		createdContacts = createdContacts.slice(1);
	}

	function deleteLast(){
		createdContacts = createdContacts.slice(0,-1);
	}


	function displayCard(){
		if (
		name.trim().length==0 ||
		title.trim().length==0 ||
		url.trim().length==0 ||
		description.trim().length ==0
		) {
			formState='invalid';
			return;
		}

		createdContacts = [...createdContacts,{id:Math.random() ,name:name,title:title,url:url,description:description}];
		formState='done';
	}
	
</script>

<style>
	h1 {
		color: purple;
	}

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

<h1>Hello {uppercaseName}! your age is {age}</h1>
<div>
	<button on:click="{incrementAge}">+</button><button on:click={decrementAge}>-</button>
</div>
<div>
	<!--<button on:click="{changeName}">change name</button>-->
	<!--<input type="text" value="{name}" on:input="{nameInput}"/>-->
	<div class="form-control">
		<label for="name">name</label>
		<input id="name" type="text" bind:value={name}/>

	</div>
	<div class="form-control">
		<label for="title">title</label>
		<input type="text" bind:value={title}/>
	</div>
	<div class="form-control">
		<label for="image">image</label>
		<input type="text" bind:value={url}/>
	</div>
	<div class="form-control">
		<label for="description">description</label>
		<textarea id="description" rows="3" bind:value={description} />
	</div>	
</div>
<div>
	<button on:click="{displayCard}">show contact card</button>
	<button on:click="{deleteLast}">delete last</button>
	<button on:click="{deleteFirst}">delete first</button>
</div>

{#if formState === 'done'}
	<p>please enter some data and hit the button !</p>
{:else if formState === 'invalid'} 
<p>invalid states</p>
{/if}

{#each createdContacts as contact, index (contact.id)}
<h2># {index}</h2>
<ContactCarde userName="{contact.name}" title="{contact.title}" description="{contact.description}" url="{contact.url}"/>
{:else}
<p>please add some contact</p>
{/each}

