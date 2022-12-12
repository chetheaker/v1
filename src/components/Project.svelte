<div class="container">
  <h1>TOURIFY</h1>
  <h3 class="heading">
    Tourify is an all-in-one road trip application to help you plan and organise
    your road trips from scratch.
  </h3>
  <div class="project" id="tourify">
    <div class="left">
      <div class="content">
        <p>
          I built this full-stack application from the ground up, carefully
          designing and implementing more than 50+ components throughout the
          frontend in React and the backend in Node and Express.
        </p>
        <p>
          I also leveraged multiple APIs, allowing for efficient data exchange
          under the hood, resulting in a seamless user experience.
        </p>
        <p>
          Through careful planning and execution, I was able to create a
          complete, end-to-end application.
        </p>
      </div>
      <div class="skills">
        <p>JavaScript</p>
        <i class="fa-solid fa-circle" />
        <p>React</p>
        <i class="fa-solid fa-circle" />
        <p>Chakra UI</p>
        <i class="fa-solid fa-circle" />
        <p>Google Maps API</p>
        <i class="fa-solid fa-circle" />
        <p>NodeJS</p>
        <i class="fa-solid fa-circle" />
        <p>ExpressJS</p>
        <i class="fa-solid fa-circle" />
        <p>PassportJS</p>
        <i class="fa-solid fa-circle" />
        <p>Stripe</p>
        <i class="fa-solid fa-circle" />
        <p>MongoDB</p>
      </div>
    </div>
    <div class="image">
      <img src="src/assets/mocks/tourify1.png" alt="tourify demo" />
    </div>
  </div>
  <div class="buttons">
    <a
      href="https://github.com/chetheaker/tourify"
      target="_blank"
      rel="noreferrer"
    >
      <i class="fa-brands fa-github" />
    </a>
    <a href="https://tourify.me" target="_blank" rel="noreferrer">
      <i class="fa-solid fa-link" />
    </a>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 3rem;
  }

  h1 {
    color: #ccd6f6;
  }

  .project {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 1.6;
  }

  .content {
    padding: 1rem;
    background-color: #161b22;
    border-radius: 1rem;
    width: 90%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 90%;
  }

  .skills i {
    font-size: 0.5rem;
  }

  .image {
    width: 50%;
    aspect-ratio: 1.6;
    border-radius: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }

  .buttons a {
    color: white;
  }

  .buttons a:hover {
    color: #ccd6f6;
  }

  .buttons i {
    font-size: 1.5rem;
  }
</style>
