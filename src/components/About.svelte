<script>
  import Skills from './Skills.svelte';
</script>

<section id="about">
  <div class="content">
    <div class="title">
      <i class="fa-solid fa-code" />
      <h2>Frontend | Backend | Full Stack</h2>
    </div>
    <div class="paras">
      <p>
        Hello! I am a full stack software developer based in the United Kingdom
        with experience working within the JavaScript ecosystem.
      </p>
      <p>
        I am enthusiastic about building high-quality, scalable web applications
        and am always looking to improve my skills and take on new challenges.
      </p>
    </div>
  </div>
  <div class="skills">
    <Skills />
  </div>
</section>

<style>
  section {
    width: 100%;
    height: 90vh;
    background-color: #161b22;
    margin: auto;
    scroll-snap-align: center;
    display: flex;
  }

  h2 {
    font-size: 2rem;
    color: #ccd6f6;
  }

  p {
    margin: 0.5rem 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
  }

  .skills {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #ccd6f6;
    margin-bottom: 1rem;
    text-align: left;
    width: 80%;
  }

  .paras {
    width: 80%;
  }

  i {
    font-size: 2rem;
  }

  @media only screen and (max-width: 1300px) {
    .content {
      width: 60%;
    }
    .skills {
      width: 40%;
    }
  }

  @media only screen and (max-width: 1200px) {
    section {
      flex-direction: column;
    }
    .content {
      width: 80%;
      height: 40%;
      margin: auto;
      justify-content: flex-end;
    }
    .title {
      width: auto;
    }
    .paras {
      display: flex;
      text-align: justify;
      gap: 2rem;
      width: auto;
    }
    .skills {
      width: 100%;
    }
  }

  @media only screen and (max-width: 650px) {
    .paras {
      flex-direction: column;
      width: 90%;
      gap: 0.5rem;
    }
    .content {
      height: 50%;
      width: 90%;
    }
    .title h2 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 450px) {
    .title {
      gap: 0.5rem;
    }
    .title h2 {
      font-size: 1.2rem;
    }
    .title i {
      font-size: 1.2rem;
    }
    .paras {
      width: auto;
    }
    .skills {
      height: 70%;
    }
  }

  @media only screen and (max-width: 350px) {
    .title h2 {
      width: 59%;
    }
    .title {
      justify-content: center;
    }
  }
</style>
