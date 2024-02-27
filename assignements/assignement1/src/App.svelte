<script>
	import CourseComponent from "./course-component/CourseComponent.svelte";
	let course="";
</script>

<style>
	h1 {
		color: purple;
	}

	p {
		color: beige;
	}
</style>

<input type="text" bind:value="{course}"/>
<CourseComponent course="{course}"/>
