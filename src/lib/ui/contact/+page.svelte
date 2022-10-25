<div class="container">
  <p>You can also find me on:</p>
  <a
    href="https://github.com/MohamadOjail"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg>
      <use href="icons/github.svg#github" />
    </svg>
  </a>

  <a
    href="https://se.linkedin.com/in/ojail"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg>
      <use href="icons/linkedin.svg#linkedin" />
    </svg>
  </a>
</div>

<style>
  .container {
    width: fit-content;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--cyan);
    transition: all 100ms ease;
  }
  a:hover svg {
    transform: scale(1.2);
    fill: var(--yellow);
  }
</style>
