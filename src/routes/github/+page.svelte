<script>
  import Card from "$components/github/card.svelte";
  const langs = [
    { lang: "html", value: 500 },
    { lang: "typescript", value: 250 },
    { lang: "svelte", value: 1235 },
    { lang: "handlebars", value: 835 },
  ].sort((a, b) => {
    return b.value - a.value;
  });
  export let data;
</script>

<div class="container">
  {#each data.repos as repo}
    <Card {repo} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    width: 65%;
    padding: 10px;
    margin: 50px auto;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
</style>
