<script>
  import Card from "$components/github/card.svelte";
  import repos from "$data/github/repos.json";
</script>

<div class="container">
  {#each repos as repo}
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
