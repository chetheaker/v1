<footer>
  <div class="left">
    <a href="mailto:che.theaker@gmail.com" target="_blank">
      <i class="fa-solid fa-envelope" />
    </a>
    <a href="https://github.com/chetheaker" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-github" />
    </a>
    <a
      href="https://linkedin.com/in/chetheaker"
      target="_blank"
      rel="noreferrer"
    >
      <i class="fa-brands fa-linkedin" />
    </a>
  </div>
  <div class="right">
    <p>Developed by Che Theaker</p>
    <a href="https://github.com/chetheaker/v1" target="_blank" rel="noreferrer">
      <i class="fa-solid fa-code-branch" />
    </a>
  </div>
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .left,
  .right {
    display: flex;
    width: 50%;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: #ccd6f6;
  }

  i {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #ccd6f6;
    transition: transform 150ms;
  }

  a:hover {
    color: white;
    transform: translateY(-20%);
  }
</style>
