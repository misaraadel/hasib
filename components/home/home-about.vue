<template>
<u-animate-container class="about overflow-hidden w-full bg-white relative z-40" id="About">
<div class="container">
 <u-animate name="fadeInLeft" animateClass="animated" class="heading overflow-hidden mx-auto mb-24 relative">
  <h4 class="text-xl leading-9 mx-auto font-bold text-secondary relative z-10 mb-5">
   مميزات حاسب
  </h4>

  <h5 class="text-dark text-4xl font-bold">
   لماذا تختار حاسب ؟
  </h5>
 </u-animate>

 <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-32 gap-10 pb-28">
  <template v-for="benfit in benfits">
   <u-animate name="fadeInUp" animateClass="animated" class="box w-full text-center" :key="benfit.code">
    <img
     :src="`/img/${benfit.img}.svg`" 
     class="w-24 h-24 object-contain mx-auto mb-7" 
     :alt="`${benfit.title}`" />

     <h4 class="text-2xl leading-10 font-bold text-dark mb-6">
     {{ benfit.title }}
     </h4> 

     <p class="text-base font-normal text-dark">
     {{ benfit.desc }}
     </p>
   </u-animate>
  </template>
 </div>

 <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-28 gap-10">
  <u-animate name="fadeInRight" animateClass="animated">
   <img
    src="/img/about.jpg"
    class="w-full h-96 relative z-10 object-cover about-img object-center"
    :alt="$t(`app.title`)" />
  </u-animate>

  <u-animate name="fadeInLeft" animateClass="animated">
   <div class="w-max relative overflow-hidden">
    <h4 class="text-xl w-max pl-4 leading-9 mb-5 font-bold text-secondary headingStyle">
     من نحن
    </h4>

    <h3 class="text-4xl font-bold leading-10 text-dark">
     تعرف على حاسب
    </h3>
   </div>

   <p class="my-7 text-dark text-base font-normal">
    تنظيم إجراء التسويات الجردية وإقفال الحسابات الختامية وعرض التقارير والقوائم المالية، وإعداد التقارير المالية الشهرية والربع سنوية للوقوف على وضع الشركة وتقييمها من فترة إلى أخرى
    وعلى فترات متباعدة لمعرفة المزيد
   </p>

   <ul class="check-list mb-5">
    <template v-for="list in aboutList">
     <li class="relative pr-9 text-base font-normal text-secondary z-10 mb-3" :key="list.code">
      {{ list.desc }}
     </li>
    </template>
   </ul>

   <call-action />
  </u-animate>
 </div>

 <u-animate name="shape" animateClass="animated">
  <img
   src="/img/about_pattern.svg"
   class="w-full h-full pointer-events-none object-center object-contain absolute top-0 left-0 z-0"
   :alt="$t(`app.title`)" />
 </u-animate>
</div>
</u-animate-container>
</template>

<script>
export default {
data(){
return{
  benfits:[
  {
    code: '1',
    img: 'team',
    title: 'فريق عمل متميز',
    desc: 'نمتلك نخبة من المحاسبين المختصين وخبراء المحاسبة في المملكة '
  },{
    code: '2',
    img: 'document',
    title: 'باقات محاسبية متنوعة',
    desc: 'أفضل الباقات المحاسبية التي تغطي كافة الأعمال المحاسبية المتنوعة'
  },{
    code: '3',
    img: 'agent',
    title: 'دعم فني متواصل',
    desc: 'لا نتوقف عند تقديم الخدمة فقط بل نحن مستمرون معكم لما بعد ذلك'
  }
  ],
  aboutList: [
  {
    code: '1',
    desc: 'نعمل لأجل إتزان مالي مناسب لك ولشركتك',
  },{
    code: '2',
    desc: 'متمرسون في أعمال المحاسبة والتخطيط',
  },{
    code: '3',
    desc: 'كوادر مدربة للإستشارات المختلفة',
  }
  ]
}
}
}
</script>

<style lang="scss">
.about{
.box{
  transition: all .4s linear;

  &:hover{
  transform: translateY(-10px);

  h4{
    color: var(--secondary);
  }
  }
}
.about-img{
  border-radius: 300px;
}

.headingStyle::after{
  width: 71%;
  top: calc(21% - 0.5px);
  left: 0%;
}
}
@media (max-width: 999px) {
  .about{
    .about-img{
      border-radius: 40px;
    }
  }
}
</style>