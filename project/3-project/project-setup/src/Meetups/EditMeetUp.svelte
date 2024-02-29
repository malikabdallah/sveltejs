<script>
    import { createEventDispatcher } from 'svelte';


    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from '../UI/Modal.svelte';

    const dispatch = createEventDispatcher();

    let title='';
    let subtitle='';
    let imageUrl='';
    let description='';
    let email='';
    let adress='';

    //0660477225

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
    <TextInput id="title"  controlType="text" value="{title}" label="Title" on:input={event=> (title = event.target.value)} />
    <TextInput id="subtitle" controlType="text" value="{subtitle}" label="Subtitle" on:input={event=> (subtitle = event.target.value)} />
    <TextInput id="adress" controlType="text" value="{adress}" label="Adress" on:input={event=> (adress = event.target.value)} />
    <TextInput id="imageUrl"  controlType="text" value="{imageUrl}" label="Image URL" on:input={event=> (imageUrl = event.target.value)} />
    <TextInput id="email"  controlType="email" value="{email}" label="Email" on:input={event=> (email = event.target.value)} />
    <TextInput id="description" rows="3" controlType="textarea" value="{description}" label="Description" on:input={event=> (description = event.target.value)} />

   
</form>
<div slot="footer">
    <Button type="button" on:click={submitForm}>Save</Button>
    <Button type="button" mode="outline" on:click={cancelForm}>Cancel</Button>

</div>

</Modal>
