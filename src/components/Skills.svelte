<script lang="ts">
  import { onMount } from 'svelte';

  let container;

  onMount(() => {
    const skills = Array.from(document.getElementsByClassName('skill'));
    const n = skills.length;
    const angle = 360 / n;

    let setId = 0;
    let deg = [];
    let x = 0;
    let y = 0;
    const touchDevice = () => 'ontouchstart' in document.documentElement;
    const setTransition = (time: string) => {
      for (let i = 0; i < n; i++)
        (skills[i] as HTMLElement).style.transition = `all ${time}s`;
    };
    const positionSkills = () => {
      const r = container.offsetWidth / 2;

      setTransition('0');

      for (let i = 0; i < n; i++) {
        deg[i] = i * angle;
        x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
        y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;

        (skills[i] as HTMLElement).style.top = `${~~y}px`;
        (skills[i] as HTMLElement).style.left = `${~~x}px`;
      }

      setTimeout(() => {
        setTransition('.3');
      }, 10);
    };
    const nextSlide = () => {
      for (let i = 0; i < n; i++) deg[i] += angle;
      animateSlide();
    };
    const animateSlide = () => {
      const r = container.offsetWidth / 2;

      for (let i = 0; i < n; i++) {
        x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
        y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;

        (skills[i] as HTMLElement).style.top = `${~~y}px`;
        (skills[i] as HTMLElement).style.left = `${~~x}px`;

        y === 0
          ? skills[i].classList.add('active')
          : skills[i].classList.remove('active');
      }
    };
    const autoPlay = () => (setId = setInterval(nextSlide, 3000));
    const changeSlideImg = (e) => {
      for (let i = 0; i < n; i++) skills[i].classList.remove('active');
      e.currentTarget.classList.add('active');
    };

    skills.forEach((slide) => {
      if (touchDevice()) {
        slide.addEventListener('click', (e) => {
          changeSlideImg(e);
          clearInterval(setId);
          autoPlay();
        });
      } else {
        slide.addEventListener('mouseenter', (e) => {
          changeSlideImg(e);
          clearInterval(setId);
        });
        slide.addEventListener('mouseleave', () => {
          clearInterval(setId);
          autoPlay();
        });
      }
    });
    window.addEventListener('resize', () => {
      clearInterval(setId);
      positionSkills();
      autoPlay();
    });

    positionSkills();
    nextSlide();
    autoPlay();
  });
</script>

<section id="skills" bind:this={container}>
  <div class="skill" data-skill="1" />
  <div class="skill" data-skill="2" />
  <div class="skill" data-skill="3" />
  <div class="skill" data-skill="4">
    <div />
  </div>
  <div class="skill" data-skill="5">
    <div />
  </div>
  <div class="skill" data-skill="6">
    <div />
  </div>
  <div class="skill" data-skill="7">
    <div />
  </div>
  <div class="skill" data-skill="8" />
  <div class="skill" data-skill="9" />
  <div class="skill" data-skill="10" />
  <div class="skill" data-skill="11" />
  <div class="skill" data-skill="12" />
  <div class="title">
    <i class="fa-solid fa-layer-group" />
    <h2>My Tech Stack</h2>
  </div>
</section>

<style>
  section {
    position: relative;
    width: 30vw;
    height: 30vw;
    margin: auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    color: #ccd6f6;
  }

  .skill {
    position: absolute;
    top: 0;
    left: 0;
    width: 6vw;
    height: 6vw;
    margin-top: -3vw;
    margin-left: -3vw;
    /* background-color: white; */
    border-radius: 1rem;
    transform: scale(1);
    opacity: 0.9;
    transition: all 0.3s;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  .skill[data-skill='1'] {
    background: url('../assets/icons/javascript.svg') no-repeat center/cover;
  }

  .skill[data-skill='2'] {
    background: url('../assets/icons/typescript.svg') no-repeat center/cover;
  }

  .skill[data-skill='3'] {
    background: url('../assets/icons/react.svg') no-repeat center/cover;
  }

  .skill[data-skill='4'] > div {
    margin: 2.5% auto;
    width: 95%;
    height: 95%;
    background: url('../assets/icons/svelte.svg') no-repeat center/cover;
    opacity: 1;
  }

  .skill[data-skill='5'] > div {
    margin: 2.5% auto;
    width: 95%;
    height: 95%;
    background: url('../assets/icons/git.svg') no-repeat center/cover;
    opacity: 1;
  }

  .skill[data-skill='6'] > div {
    margin: 2.5% auto;
    width: 95%;
    height: 95%;
    background: url('../assets/icons/nodejs.png') no-repeat center/cover;
    opacity: 1;
  }

  .skill[data-skill='7'] > div {
    margin: 2.5% auto;
    width: 95%;
    height: 95%;
    background: url('../assets/icons/express.png') no-repeat center/cover;
    opacity: 1;
  }

  .skill[data-skill='8'] {
    background: url('../assets/icons/mongodb.svg') no-repeat center/cover;
  }

  .skill[data-skill='9'] {
    background: url('../assets/icons/firebase.svg') no-repeat center/cover;
  }

  .skill[data-skill='9'] {
    background: url('../assets/icons/postgresql.svg') no-repeat center/cover;
  }

  .skill[data-skill='10'] {
    background: url('../assets/icons/googlecloud.svg') no-repeat center/cover;
  }

  .skill[data-skill='11'] {
    background: url('../assets/icons/angular.svg') no-repeat center/cover;
  }

  .skill[data-skill='12'] {
    background: url('../assets/icons/stripe.svg') no-repeat center/cover;
  }

  @media only screen and (max-width: 1650px) {
    .title {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 1250px) {
    .title {
      gap: 0.5rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    section {
      width: 40vw;
      height: 40vw;
    }
    .skill {
      width: 8vw;
      height: 8vw;
      margin-top: -4vw;
      margin-left: -4vw;
    }
  }

  @media only screen and (max-width: 900px) {
    section {
      width: 50vw;
      height: 50vw;
    }
    .skill {
      width: 10vw;
      height: 10vw;
      margin-top: -5vw;
      margin-left: -5vw;
    }
  }

  @media only screen and (max-width: 700px) {
    section {
      width: 400px;
      height: 400px;
    }

    .skill {
      width: 80px;
      height: 80px;
      margin-top: -40px;
      margin-left: -40px;
    }
  }

  @media only screen and (max-width: 500px) {
    section {
      width: 300px;
      height: 300px;
    }

    .skill {
      width: 60px;
      height: 60px;
      margin-top: -30px;
      margin-left: -30px;
    }

    .title {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 380px) {
    section {
      width: 250px;
      height: 250px;
    }

    .skill {
      width: 50px;
      height: 50px;
      margin-top: -25px;
      margin-left: -25px;
    }

    .title {
      font-size: 1rem;
    }
  }
</style>
