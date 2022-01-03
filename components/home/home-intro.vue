<template>
<u-animate-container class="header overflow-hidden w-full lg:pt-52 md:pt-36 sm:pt-36 pt-36 pb-20 bg-white relative z-40" id="Intro">
<div class="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-0 md:gap-5 sm:gap-5 gap-5">
  <u-animate name="fadeInRight" animateClass="animated" class="w-full lg:pl-52 md:p-0 p-0 h-full flex  relative z-40 flex-col justify-center">
    <h4 class="text-xl w-max pl-4 leading-9 font-bold text-secondary relative headingStyle">
      حاسب خيارك الأمثل
    </h4>
    
    <h3 class="text-dark text-4xl font-bold mt-5 mb-7">
      حاسب للخدمات الإدارية والإستشارات
    </h3>

    <p class="text-base lg:w-3/4 md:w-full sm:w-full w-full font-normal text-dark mb-7">
      يمكنك الإعتماد علينا لضبط الأداء المالي والإداري
      للشركة ورفع كفاءة العمل وتنمية رأس
      المال البشري
    </p>

    <call-action />
  </u-animate>

  <u-animate name="fadeInUp" animateClass="animated">
    <img
      src="/img/header.svg"
      class="w-full h-96  relative z-40 object-contain object-left"
      :alt="$t(`app.title`)" />
  </u-animate>

  <u-animate name="shape" animateClass="animated">
    <img
      src="/img/header_pattern.svg"
      class="w-full h-full pointer-events-none object-center object-contain absolute top-0 left-0 z-0"
      :alt="$t(`app.title`)" />
  </u-animate>
</div>
</u-animate-container>
</template>