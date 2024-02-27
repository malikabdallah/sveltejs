<script>
	
	let password="";
	let messageError="";
	let passwords=[];
	let passwordsBis=[];


	function checkPassword(){
		if(password.length<5){
			messageError="Too short";
		}else if(password.length>10){
			messageError="Too long";
		}else{
			messageError="";
		}
	}

	function addPassword(){
		checkPassword();
		if(messageError===""){
			console.log("password pushed");
			passwords.push({'password':password});
			passwordsBis = [...passwordsBis,password];

			console.log("passwords : "+JSON.stringify(passwords));
		}else{
			console.log("password not good");
		}
	}

	function deletePassword(index){
		passwords.slice(index,1);
	}

</script>

<style>

</style>

<div>
	<label for="pass">enter password:</label>
	<input type="password" bind:value="{password}" on:input="{checkPassword}"  />
	<span>{messageError}</span>
	<button on:click="{addPassword}">add password</button>
</div>

<ul>
	{#each passwords as item}
		<li>{item.password}</li>
	{:else}
		<li>Nothing on your shopping list!</li>
	{/each}
</ul>


<ul>
	{#each passwordsBis as item, index}
		<li on:click="{deletePassword(index)}">{item}</li>
	{:else}
		<li>Nothing on your shopping list!</li>
	{/each}
</ul>