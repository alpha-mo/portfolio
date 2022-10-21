<script>
  import List from "./list.svelte";
  import Burger from "$ui/burger/+page.svelte";
  import Logo from "$ui/logo/+page.svelte";
</script>

<nav>
  <Logo />
  <List />
  <Burger />
</nav>

<style>
  nav {
    width: 100%;
    padding: 15px 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
