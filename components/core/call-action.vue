<template>
<div class="call-to-action flex items-center content-center">
  <a @click="whatsapp()" class="secondary-btn ml-2 cursor-pointer border border-primary text-base text-primary font-bold">
    <img src="/img/whatsapp.svg" class="w-6 h-6 object-contain ml-2" :alt="$t(`home.title`)">
    تواصل واتس
  </a>

  <a @click="callus()" class="primary-btn cursor-pointer relative border border-transparent text-base text-white font-bold">
    <img src="/img/phone.svg" class="w-6 h-6 object-contain ml-2" :alt="$t(`home.title`)">
    اتصل بنا
  </a>
</div>
</template>

<style lang="scss">
.call-to-action{
  .primary-btn,
  .secondary-btn{
    transition: border .4s linear;
    width: 140px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::after{
      content: '';
      position: absolute;
      height: 100%;
      background: linear-gradient(90deg ,#045224 , #09C957 );
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s linear;
    }
  }
  .primary-btn{
    &::after{
      width: 100%;
    }

    img{
      filter: invert(100%) sepia(4%) saturate(16%) hue-rotate(25deg) brightness(104%) contrast(104%);
    }

    &:hover{
      border-color: #045224;
      color: #045224;
      img{
        filter: invert(8%) sepia(99%) saturate(5660%) hue-rotate(157deg) brightness(90%) contrast(97%);
      }
      &::After{
        width: 0%;
      }
    }
  }
  .secondary-btn{
    &::after{
      width: 0%;
    }
    img{
      filter: invert(8%) sepia(99%) saturate(5660%) hue-rotate(157deg) brightness(90%) contrast(97%);
    }

    &:hover{
      color: #fff;
      border: 0px;
      img{
        filter: invert(100%) sepia(4%) saturate(16%) hue-rotate(25deg) brightness(104%) contrast(104%);
      }
      &::after{
        width: 100%;
      }
    }
  }
}
</style>
