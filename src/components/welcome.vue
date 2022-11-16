<template>
    <h1 class="welcome-header">WELCOME SUMMONER</h1>
    <div class="welcome-underline"></div>

    <div class="content">
      <img src="/src/assets/images/t1logowhite.png" alt="">
      <div class="content-text">
        <h1>TOGETHER AS 1</h1>
        <p>Rooted in our legacy of raising trophies and inspired by our passion for victory,
          we are Together as 1.
        </p>
      </div>
    </div>
      
    <div class="slider">

    </div>
</template>

<style>

.welcome-header {
  font-size: 50px;
  margin-left: 4%;
  margin-bottom: 0px;
}

.welcome-underline {
  background-color: #bd0624;
  height: 25px;
  width: 504px;
  margin-left: 4%;
}

.content {
  margin-top: 50px;
  background-color: #bd0624;
  width: 100%;
  display: flex;
  justify-content: center;
}

.content img {
  height: 40%;
  width: 40%;
  margin: 45px 0px 45px;
}
.content-text {
  margin: 26px 10px 0px 25px;
  width: 400px;
}
.content-text h1{
  font-size: 3em;
  margin: 0px;
}
.content-text p{
  font-size: 1.2em;
  margin: 0px;
}
.slider {
  width: 100%;
  height: 500px;
  background: url(/src/assets/images/gumayushi.jpg);
  margin: 0px auto;
  animation: slide 20s infinite;

}
@keyframes slide {
  25% {background: url(/src/assets/images/onershi.jpg);}
  50% {background: url(/src/assets/images/zeushi.jpg);}
  75% {background: url(/src/assets/images/keriashi.jpg);}
  100% {background: url(/src/assets/images/gumayushi.jpg);}
}
</style>
