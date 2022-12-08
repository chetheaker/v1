<nav>
  <div class="left">
    <div class="close" />
    <div class="min" />
    <div class="max" />
  </div>
  <div class="middle">
    <i class="fa-solid fa-terminal" />
    <h3>Terminal</h3>
  </div>
  <div class="right" />
</nav>

<style>
  nav {
    height: 30px;
    border-bottom: solid 1px #404040;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  .left > div {
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }

  .left,
  .middle {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .middle {
    gap: 5px;
    font-family: 'Mona Sans';
  }

  .close {
    background-color: #ff5f57;
  }

  .min {
    background-color: #febc2d;
  }

  .max {
    background-color: #28c940;
  }

  .right {
    width: 65px;
  }

  @media only screen and (max-width: 450px) {
    .right {
      display: none;
    }
  }
</style>
