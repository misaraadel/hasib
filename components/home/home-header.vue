<template>
<nav class="w-full absolute top-0 left-0 z-50 pt-7">
<div class="container w-full flex lg:justify-between md:justify-center sm:justify-center justify-center items-center content-center">
   <nuxt-link to="/">
      <img
      src="/img/logo.svg"
      class="w-24 h-24 object-contain"
      :alt="$t(`home.title`)" />
   </nuxt-link>

   <ul class="navbar-nav flex items-center content-center">
      <template v-for="navLink in navLinks">
         <li class="ml-6" :key="navLink.code">
            <a :href="`#${navLink.link}`" class="text-base font-bold text-dark hover:text-primary">
               {{ navLink.title }}
            </a>
         </li>
      </template>
   </ul>

   <call-action />
</div>
</nav>
</template>

<script>
export default {
data() {
   return {
      navLinks: [
         {
            code: '1',
            title: 'الرئيسية',
            link: 'Intro',
         },{
            code: '2',
            title: 'عن حاسب',
            link: 'About'
         },{
            code: '3',
            title: 'خدمات حاسب',
            link: 'Services'
         },{
            code: '4',
            title: 'باقات حاسب',
            link: 'Packages'
         }
      ]
   }
}
}
</script>

<style lang="scss">
@media (max-width: 999px) {
   nav{
      z-index: 99999 !important;

      .navbar-nav{
         width: 100%;
         position: fixed;
         bottom: 0;
         left: 0;
         padding: 10px 0px;
         background: linear-gradient(90deg , #045224 , #09C957);
         box-shadow: 0px 0px 10px rgba($color: #045224 , $alpha: .2);

         li{
            width: calc(100% / 4);
            display: flex;
            justify-content: center;
            align-items:  center;
            align-content: center;
            margin: 0px !important;

            a{
               width: 100%;
               text-align: center;
               justify-content: center;
               align-items: center;
               flex-direction: column;
               font-size: 14px !important;
               color: #fff;

               &:hover{
                  color: #fff;
               }
            }
         }
      }

      .call-to-action{
         display: none;
      }
   }
}
</style>
