<section id="contact">
  <div class="left">Let's <span>connect:</span></div>
  <div class="right">
    <a
      href="https://github.com/chetheaker"
      target="_blank"
      rel="noreferrer"
      class="github"
    >
      <i class="fa-brands fa-github" />
      <span>GitHub</span>
    </a>
    <a
      href="https://linkedin.com/in/chetheaker"
      target="_blank"
      rel="noreferrer"
      class="linkedin"
    >
      <i class="fa-brands fa-linkedin" />
      <span>LinkedIn</span>
    </a>
    <a href="mailto:che.theaker@gmail.com" target="_blank" class="email">
      <i class="fa-solid fa-envelope" />
      <span>che.theaker@gmail.com</span>
    </a>
  </div>
</section>

<style>
  section {
    display: flex;
    width: 80%;
    height: 75vh;
    margin: auto;
    align-items: center;
    justify-content: center;
    gap: 10%;
  }

  .left {
    color: white;
    font-size: 3rem;
    text-align: right;
    width: 45%;
    line-height: 1;
  }

  .left > span {
    color: #ccd6f6;
  }

  .right {
    width: 45%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }

  i {
    font-size: 1.5rem;
    padding-right: 1rem;
    width: 50px;
    text-align: center;
    transition: transform 150ms;
    color: #ccd6f6;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  i:hover {
    color: white;
    transform: translateY(-10%);
  }

  @media only screen and (max-width: 640px) {
    section {
      gap: 5%;
    }
    i {
      font-size: 1.25rem;
      width: 35px;
    }
    a {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 530px) {
    section {
      flex-direction: column;
      gap: 1rem;
    }
    .left {
      text-align: center;
      width: auto;
    }

    .right {
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    a {
      align-items: flex-end;
    }

    i {
      width: auto;
      padding-right: 5px;
    }
  }

  @media only screen and (max-width: 400px) {
    .left {
      font-size: 2.5rem;
    }

    .right {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0;
      grid-row-gap: 1rem;
    }

    a {
      justify-content: center;
    }

    .github {
      grid-area: 1 / 1 / 2 / 2;
    }

    .linkedin {
      grid-area: 1 / 2 / 2 / 3;
    }

    .email {
      grid-area: 2 / 1 / 3 / 3;
    }
  }
</style>
