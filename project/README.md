# sveltejs

### backend
1) reach out to db
2) user auth
3) heavy lifting

### frontend
1) reactive ui (feel like gui app -> sentiment d instanament contrairement au blanck page)
utilisation de js (qui permet de modifie le html dynamiquement au runtime sans avoir a appele un serveur)

on parle de SPA (il y a qu une page que le serveur renvoi) et tous les changement qu on voit apres se fait depuis javascript (qui recupere les data). No page reload donc maintenant le backend ne renvoit plus de page mais une api qui renvoit des json. 

### svelte js

objectif : le bundle js telechargé avant que tout se passe , plus l application est complexe plus le telechargement sera lent . svlete est un outil qui permet de crée des bundle leger qui utilise le minimum de js et du js optimisé au loading et au running.

Svelte est un compileur pas un framework contrairement a angular ou react ( qui te donne la platforme pour ecrire du code selon les regles et concept du framework et qu on deploy ce code avec ce framework).

pro : 
beaucoup de feature fournis par le framework qui rendent le dev plaisant

mais malgres que le bundle est petit il n est pas plus petit que svelte .
svelte n est pas un framework , il n a pas de code en plus a deployé. le code est compilé au build .

avec svlete pas de mon code + framework pour crée la magie
on ecrit du code suivant une certaine syntaxe et svelte est un outils qui passe par dessus a genere du vanilla js optimisé.

ce qu on ship c est du compiled js generé par svelte .

le compiler svelte traduit le code en instructio au build en code optimisé au runtime , point clé on deploie moins de code que avec les autres frameworks.

### objectif 
crée des ui reactif pour le web

mon code genere du js optimisé

on crée du code suivant la syntaxe svelte qui compile le code en runtime optimze instruction , deploy uniquement le code necessaire qui s execute dans le navigateur



### 
svelte est un compilateur , il nous faut ce compilateur

    "svelte": "^3.0.0"

    "dev": "run-p start:dev autobuild",
demo web server pour avoir une experience proche de l utilsateur en passant par le protocole http et pas file protocole( double click sur html)

    automatique reload :autobuild

tout est orchestré par un outil appele rollup (surveille js code et qd on change quelque chose le recompile)



rollup.config.js:


src : ou on ecrit notre code
main.js premier code js qui est executé 
.svelte extension comprise par rollup qui contient le html et css et js

<script>
//js partie
</script>
<style>
//css partie
</style>

//html partie
<h1>hello</h1>


chaque fichier svelte est un composant logique

spa : index.html


import App from './App.svelte';
 const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
instancie le composant dans le body

### node js:

#js runtime pour ecrire du js cote serveur( on va pas l utiliser)
#execute du code js hors du navigateur(rollup l utilise pour compiler le code a besoin de nodejs)
#fournis aussi npm 


npm install download dependencies in node_modules

npm run dev genere bundle.js qui est le code js optimisé compilé 
nb: c est dev mode code , pas minifie et pas fully optimized le bundle final de prod sera bcp plus petit et contient toutes les fonctionnalité dont on aura besoin (beaucoup moin que les framework angular qui contienne tous les set dont on a besoin et non juste quelque fonctionnalite)


on a la commande name qu on utilise plus bas , avec le export on dit qu elle seter depuis outside of the component.
commande pour popule valeur
props: {


}
export let name;

afficher la valeur d une variable avec un framework
{age}


en js classic

getElement
addEvent
update value + add new value to dom html

### event listener
	<button on:click={incrementAge}>+</button><button on:click={decrementAge}>-</button>
    <button on:click="{incrementAge}">+</button> 
normalement ce nest pas du code javascript ce n est pas compresenhible par le navigateur mais ce n est pas grave car svelte est un outil qui run notre code le transforme en js.



#### BASIC SYNTAX

output
-> output des donnes
-> changer du css dynamique en js
-> set html attribute , property

input/change
->text entré
->button clicked
->data load from serveur

outputting content
{}
le contenu est dans le script 

```
    $: uppercaseName = name.toUpperCase(); 
    $: console.log(name);
    $: if(name === 'MAXIMILIAM'){
            age =31;
    }
```

puissante fonctionnalité pour executé du coup quand ue variable change et update le dom


2) binding element to properties
<input type="text" value="{name}"/>


par defaut en svelte le flow est unidirectionnel 
donc model -> vue

<input type="text" value="{name}" on:input="{changeName}"/>
input event firé quand l utilisateur tape un input

double way binding
    <input type="text" value="{name}" on:input="{nameInput}"/>
	<input type="text" bind:value={name}/>


#### working with component

svelte apps are build from multiple component - ui building block same philosophy as react , angular

PascalCase  element seront traité en tant que composant

les styles sont scopé au composant , le composant enfant n herite pas du style du parent.

svelte optimise et enleve le css inutilisé du bundle final

import ContactCarde from "./contact-card/ContactCarde.svelte";


export pour rendre bindable depuis l exterieur
props enfant pour recupere la valeur
export let userName;

//composant parent
<ContactCarde userName="{name}" />

il existe un shortcut si le nom du props est egal a la valeur

<ContactCarde {name}>


#### outputing html component
svelte ne le fait pas automatiquement faire gaffe que le texte soit sanitize
<p>{@html description}</p>




 