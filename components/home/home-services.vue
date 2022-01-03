<template>
<u-animate-container class="services w-full pt-28 bg-white relative overflow-hidden" id="Services">
 <u-animate name="fadeInLeft" animateClass="animated" class="heading overflow-hidden mx-auto mb-24 relative">
  <h4 class="text-xl leading-9 mx-auto font-bold text-secondary relative z-10 mb-5">
   خدمات حاسب
  </h4>

  <h5 class="text-dark text-4xl font-bold">
   خدمات حاسب المميزة
  </h5>
 </u-animate>

 <div class="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-11">
  <template v-for="service in services">
   <u-animate name="fadeInUp" animateClass="animated" class="box py-9 relative px-1 z-20 text-center" :key="service.code">
    <img
     :src="`/img/${service.img}.svg`"
     class="w-48 h-48 object-contain mx-auto"
     :alt="`${service.title}`" />

    <h4 class="text-2xl leading-10 font-bold text-dark mt-11 mb-6">
     {{ service.title }}
    </h4>

    <p class="text-base font-normal px-5 text-dark">
     {{ service.desc }}
    </p>
    
    <span class="top-border border-shape top-0 left-0 absolute z-0"></span>
    <span class="left-border border-shape bottom-0 left-0 absolute z-0"></span>
    <span class="bottom-border border-shape absolute bottom-0 right-0 z-0"></span>
    <span class="right-border border-shape right-0 top-0 absolute z-0"></span>
   </u-animate>
  </template>
 </div>
</u-animate-container>
</template>

<script>
export default {
 data(){
  return{
   services: [
    {
     code: '1',
     img: 'establishment',
     title: 'تأسيس أنظمة الحسابات',
     desc: ' الحسابات هي عصب الشركة الذي يضبط سير العمل ويوجه طاقة موارد الشركة نحو منفعة الشركة دون ...'
    },{
     code: '2',
     img: 'remotly',
     title: 'الزيارات والعمل عن بعد',
     desc: 'فريق إحترافي متمكن لتنظيم الحسابات والدفاتر وتقديم العون للنهوض بالشركة ورفع كفاءة النظام ...'
    },{
     code: '3',
     img: 'tax',
     title: 'الضريبة والزكاة والدخل',
     desc: 'إعداد اإلقرارات الضريبية الشهرية والربع سنوية وإقرارات الزكاة والدخل'
    },{
     code: '4',
     img: 'list_money',
     title: 'إعداد القوائم المالية',
     desc: ' تنظيم إجراء التسويات الجردية وإقفال الحسابات الختامية … وعرض التقارير والقوائم المالية، وإعداد'
    },{
     code: '5',
     img: 'monitor_financial',
     title: 'مراقبة الأداء المالي',
     desc: ' اكتشاف االنحرافات المالية التي تساعد اإلدارة العليا ... والمسؤولين في الشركة التخاذ القرارات'
    },{
     code: '6',
     img: 'final_accounts',
     title: 'الحسابات الختامية',
     desc: 'إعداد الحسابات الختامية ووضع الأسس المحاسبية طبقا للمعايير الدولية'
    },{
     code: '7',
     img: 'supplier_accounts',
     title: 'حسابات العملاء والموردين',
     desc: 'متابعة دورية مستمرة لحسابات العمالء والموردين بالتعاون مع فريق عمل الشركة'
    },{
     code: '8',
     img: 'inventory_accounts',
     title: 'حسابات المخزون',
     desc: 'إعداد تقارير أولية عن حسابات المخزون حسب نشاط الشركة أو أي حسابات شقيقة'
    },{
     code: '9',
     img: 'financial_planning',
     title: 'التخطيط المالي والموازنة التقديرية',
     desc: 'وضع خطة مالية وموازنة تقديرية للنهوض بالشركة بما يتماشى مع إمكانيات الشركة لرفع حجم المبيعات'
    }
   ]
  }
 }
}
</script>

<style lang="scss">
 .services{
  .box{
   box-shadow: 0px 0px 1px rgba($color: #09C957, $alpha: .1);
   transition: all .3s linear;

   .border-shape{
    background-color: rgba($color: #09C957, $alpha: .1);
    
    &.top-border , &.bottom-border{
     width: 0%;
     height: 1px;
    }

    &.left-border , &.right-border{
     width: 1px;
     height: 0%;
    }
    &.right-border{
     transition: all .2s linear;
    }
    &.bottom-border{
     transition: all .4s linear;
    }

    &.left-border {
    transition: all .6s linear;
    }
   }

   &:hover{
   box-shadow: 0px 0px 1px rgba($color: #09C957, $alpha: 0.0);
    transform: translateY(-10px);
    h4{
     color: var(--primary);
    }
    .border-shape {
     &.top-border , &.bottom-border{
      width: 100%;
     }
     &.left-border , &.right-border{
      height: 100%;
     }
    }
   }
  }
 }
</style>