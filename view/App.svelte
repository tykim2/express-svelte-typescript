<script>
	import Table from '@view/component/Table.svelte'
	import getTable from '@view/data/query'
	export let name;

	
</script>

<main>
	<h1>Hello {name}!</h1>
	<Table />
</main>

<style>
	main {
		text-align: center;
		zoom: 70%;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0-beta.15/bare.css"/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@material/typography@13.0.0/dist/mdc.typography.css"/>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
</svelte:head>