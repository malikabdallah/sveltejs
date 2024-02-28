<script>
    import Header from "./UI/Header.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import TextInput from "./UI/TextInput.svelte";
    import Button from "./UI/Button.svelte";

    let title='';
    let subtitle='';
    let imageUrl='';
    let description='';
    let email='';
    let adress='';

    let meetups =[{
        id:'m1',
        title:'Coding bootcamp',
        subtitle: 'Learn to code in 2 hours',
        description: 'In this meetup we\'ll see the basic of programming',
        imageUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2016/06/7373a207-fc98-4533-a68d-2458fccf09c6/560x315_code.ronstik_ok.webp',
        adress: "22 street nerd rule the world",
        contactEmail: "contact@gmail.com"
    },
    {
        id:'m2',
        title:'swim togeter',
        subtitle: 'lets go for swimming',
        description: 'lets swim toger',
        imageUrl: 'data:image/jpeg;base64,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',
        adress: "22 street nerd rule the world",
        contactEmail: "swim@gmail.com"
    }
    ]

    function addMeetup(){
        const meetUp={
            id:Math.random().toString(),
            title:title,
            subtitle:subtitle,
            description:description,
            imageUrl: imageUrl,
            contactEmail:email,
            adress: adress
        };

        meetups = [meetUp,...meetups];
    }
</script>


<style>
    main{
        margin-top: 5rem;
    }

    form {
        width:30rem;
        max-width: 90%;
        margin: auto;
    }
</style>
<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">
        <TextInput id="title"  controlType="text" value="{title}" label="Title" on:input={event=> (title = event.target.value)} />
        <TextInput id="subtitle" controlType="text" value="{subtitle}" label="Subtitle" on:input={event=> (subtitle = event.target.value)} />
        <TextInput id="adress" controlType="text" value="{adress}" label="Adress" on:input={event=> (adress = event.target.value)} />
        <TextInput id="imageUrl"  controlType="text" value="{imageUrl}" label="Image URL" on:input={event=> (imageUrl = event.target.value)} />
        <TextInput id="email"  controlType="email" value="{email}" label="Email" on:input={event=> (email = event.target.value)} />
        <TextInput id="description" rows="3" controlType="textarea" value="{description}" label="Description" on:input={event=> (description = event.target.value)} />

       
        <!--
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value="{title}" />
        </div>

        <div class="form-control">
            <label for="subtitle">subtitle</label>
            <input type="text" id="subtitle" bind:value="{subtitle}" />
        </div>

        <div class="form-control">
            <label for="adress">adress</label>
            <input type="text" id="adress" bind:value="{adress}"/>
        </div>

        <div class="form-control">
            <label for="imageUrl">Image url</label>
            <input type="text" id="imageUrl" bind:value="{imageUrl}"/>
        </div>

        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value="{email}"/>
        </div>

        <div class="form-control">
            <label for="description">description</label>
            <textarea rows="3" id="description" bind:value="{description}"></textarea>
        </div>
    -->
        <Button type="submit" caption="save"/>
    </form>

    <MeetupGrid meetups="{meetups}"/> 
</main>

