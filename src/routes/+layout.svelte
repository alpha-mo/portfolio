<script>
  import "$styles/colors.css";
  import "$styles/font_and_sizes.css";
  import "$styles/app.css";
  import Nav from "$ui/nav/+page.svelte";
  import Modal from "$ui/modal/+page.svelte";
  import modalStatus from "$stores/modalStore";
  const test = async () => {
    console.log("Trying to connect");
    const res = await fetch("http://localhost:4000", {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await res.json();
    console.log(result);
  };
  test();
</script>

<svelte:head>
  <title>Mohamad Ojail - portfolio</title>
</svelte:head>

{#if $modalStatus.on === true}
  <Modal />
{/if}

<Nav />
<slot />
