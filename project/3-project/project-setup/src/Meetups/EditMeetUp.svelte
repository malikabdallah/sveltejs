<script>
    import { createEventDispatcher } from 'svelte';


    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from '../UI/Modal.svelte';
    import {isEmailValid, isEmpty} from '../helpers/Validation.js';

    const dispatch = createEventDispatcher();

    let title='';
    let titleValid = false;
    let subtitle='';
    let subtitleValid = false;
    let imageUrl='';
    let imageUrlValid = false;
    let description='';
    let descriptionValid = false;
    let email='';
    let emailValid =false;
    let adress='';
    let adressValid = false;
    let formValid = false;

    //0660477225

    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: imageUrlValid = !isEmpty(imageUrl);
    $: descriptionValid = !isEmpty(description);
    $: emailValid = !isEmpty(email)&isEmailValid(email);
    $: adressValid = !isEmpty(adress);
    $: formValid = titleValid && subtitleValid && imageUrlValid && descriptionValid && emailValid && adressValid;


    function submitForm(){
        let meetUp = {
            title:title,
            subtitle:subtitle,
            imageUrl: imageUrl,
            description: description,
            email: email,
            adress: adress
        };

        dispatch('save',meetUp);

    }

    function cancelForm(){
        dispatch('cancel');

    }


</script>

<style>

form {
        width:100%;
       
    }
</style>

<Modal title="Edit Meetup" on:cancel>

<form on:submit|preventDefault="{submitForm}">
    <TextInput valid={titleValid} validityMessage="Please enter a valid title." id="title"  controlType="text" value="{title}" label="Title" on:input={event=> (title = event.target.value)} />
    <TextInput valid={subtitleValid} validityMessage="Please enter a valid subtitle." id="subtitle" controlType="text" value="{subtitle}" label="Subtitle" on:input={event=> (subtitle = event.target.value)} />
    <TextInput valid={adressValid} validityMessage="Please enter a valid adress." id="adress" controlType="text" value="{adress}" label="Adress" on:input={event=> (adress = event.target.value)} />
    <TextInput valid={imageUrlValid} validityMessage="Please enter a valid url." id="imageUrl"  controlType="text" value="{imageUrl}" label="Image URL" on:input={event=> (imageUrl = event.target.value)} />
    <TextInput valid={emailValid} validityMessage="Please enter a valid email." id="email"  controlType="email" value="{email}" label="Email" on:input={event=> (email = event.target.value)} />
    <TextInput valid={descriptionValid} validityMessage="Please enter a valid description ." id="description" rows="3" controlType="textarea" value="{description}" label="Description" on:input={event=> (description = event.target.value)} />


   
</form>
<div slot="footer">
    <Button disable="{!formValid}" type="button" on:click={submitForm}>Save</Button>
    <Button type="button" mode="outline" on:click={cancelForm}>Cancel</Button>

</div>

</Modal>
