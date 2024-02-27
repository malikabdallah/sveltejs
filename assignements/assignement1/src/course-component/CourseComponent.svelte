
<script>
    export let course;

    $: shouldHidhlight = course.includes('!');
</script>
<style>
    .contains-exclamation {
        color: red;
    }
</style>
<!--
<h1 class="{course.includes('!') ? 'contains-exclamation' : ''}" >{course}</h1>

<h1 class:contains-exclamation={course.includes('!')}>{course}</h1>
-->

<h1 class:contains-exclamation={shouldHidhlight}>{course} : {shouldHidhlight}</h1>
<!--
class:highlight={course.includes('!')}

-->
