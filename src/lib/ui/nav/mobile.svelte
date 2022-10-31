<script>
  import MobileMenuStatus from "$stores/mobileMenuStore";
</script>

<div class:hidden={!$MobileMenuStatus}>
  <a href="/about">About me</a>
  <a href="/github">Latest on Github</a>
  <a href="/contact">Contact Me</a>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 100%;
    right: 0;
    background: #111111c1;
    padding: 25px;
  }
  a {
    font-size: 18px;
    color: var(--white-yellowish);
    position: relative;
  }
  a:hover {
    color: var(--yellow);
  }
  a::before {
    position: absolute;
    bottom: -4px;
    right: 0;
    content: "";
    width: 0;
    height: 2px;
    background: var(--cyan);
    transition: all 250ms ease;
  }
  a:hover::before {
    width: 100%;
  }
  .hidden {
    display: none;
  }

  /* @media (min-width: 570px) {
    div {
      display: none;
    }
  } */
</style>
