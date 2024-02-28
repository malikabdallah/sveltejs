<script>
	/*
	let password="";
	let messageError="";
	let passwords=[];
	let majeur=true;

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
			passwords = [...passwords,password];

			console.log("passwords : "+JSON.stringify(passwords));
		}else{
			console.log("password not good");
		}
	}

	function deletePassword(password){
		passwords = [...passwords.filter(p => p !== password)];
	}

	function handleClick(arg){
		console.log("arg :"+JSON.stringify(arg));
	}

	function handlerClick(arg1,arg2){
		console.log("arg1 :"+JSON.stringify(arg1));
		console.log("arg2 :"+JSON.stringify(arg2));
	}
	*/

	let enteredPassword = '';
	let passwordValidity = 'short';
	let passwords=[];

	$: if (enteredPassword.trim().length<5){
		passwordValidity = 'short';
	}else if(enteredPassword.trim().length>10){
		passwordValidity = 'long';
	}else{
		passwordValidity = 'valid';
	}

	function comfirmPassword(){
		if(passwordValidity === 'valid'){
			passwords = [...passwords,enteredPassword];
		}
	}

	function removePassword(index){
			passwords = passwords.filter((px,idx)=>{
				return idx !==index
			});
			//passwords = [...passwords.splice(index,1)];
	}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab');

* {
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Lato', sans-serif;
}

body {
  color: #333;
  margin: 0;
  padding: 2rem;
  background: #f3f3f3;
}

button {
  font: inherit;
  border: 1px solid #cf0056;
  background: #cf0056;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

button:hover,
button:active {
  background: #e40763;
  border-color: #e40763;
  box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
}
</style>

<div>
	<label for='pass'>password :</label>
	<input id='pass' type="password" bind:value="{enteredPassword}"/>
	<button on:click="{comfirmPassword}">Comfirm password</button>


	{#if passwordValidity === 'short'}
		<p>password too short !</p>
	{:else if passwordValidity === 'long'}
		<p>password too long!</p>
	{:else}
		<p>password: {enteredPassword}</p>
	{/if}
</div>
<div>
	<ul>
		{#each passwords as password,index}
			<li on:click="{(removePassword.bind(this,index))}">{password}</li>
		{/each}
	</ul>
</div>

<!--
<div>
	<label for="pass">enter password:</label>
	<input type="password" bind:value="{password}" on:input="{checkPassword}"  />
	<span>{messageError}</span>
	<button on:click="{addPassword}">add password</button>


</div>

<ul>
	{#each passwords as password}
		
		<li on:click="{deletePassword(password)}">{password}</li>
		<li on:click="{()=>handleClick(password)}">{password}:methode 1</li>
		<br/>
		<li on:click="{handlerClick.bind(this,password)}">{password}:methode 2</li>
		<hr/>
	{:else}
		<li>Nothing on your shopping list!</li>
	{/each}
	{#if majeur}
		<h1>majeur</h1>
	{/if}
</ul>
-->