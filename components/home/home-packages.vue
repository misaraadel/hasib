<template>
<u-animate-container class="packages w-full py-28 bg-white relative overflow-hidden" id="Packages">
 <u-animate name="fadeInLeft" animateClass="animated" class="heading overflow-hidden mx-auto mb-24 relative">
  <h4 class="text-xl leading-9 mx-auto font-bold text-secondary relative z-10 mb-5">
   باقات حاسب
  </h4>

  <h5 class="text-dark text-4xl font-bold">
   باقات حاسب المتطورة
  </h5>
 </u-animate>
 
 <div class="container">
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
   <template v-for="SinglePackage in packages">
    <u-animate name="fadeInUp" animateClass="animated" class="box flex flex-col justify-between pb-6 border w-full h-full border-solid bg-white relative overflow-hidden" :key="SinglePackage.code">
     <div class="content">
      <div class="head-box w-full text-center py-14 px-11 relative">
       <h4 class="text-white mb-4 font-bold text-2xl leading-10">
        {{ SinglePackage.title }}
       </h4>

       <p class="text-base font-normal text-white opacity-70">
        {{ SinglePackage.desc }}
       </p> 
      </div>

      <div class="list w-full h-full py-10 px-5">
       <ul class="check-list">
        <template v-for="list in SinglePackage.lists">
         <li class="relative pr-9 text-base font-normal text-dark z-10 mb-3" :key="list.code">
          {{ list.data }}
         </li>
        </template>
       </ul>
      </div>
     </div>

     <a @click="whatsapp()" class="secondary-btn mx-auto h-12 flex justify-center relative z-20 items-center content-center cursor-pointer text-base text-white font-bold">
      <img src="/img/arrow.svg" class="w-6 h-6 object-contain ml-2" :alt="$t(`home.title`)">
      طلب الباقة
     </a>
    </u-animate>
   </template>
  </div>
 </div>
</u-animate-container>
</template>

<script>
export default {
 data(){
  return{
   packages:[
    {
     code: '1',
     title: 'باقة محاسب عن بعد',
     desc: 'وصف بسيط عن الباقة يظهر هنا للتعبير',
     lists:[
      {
       code: '1',
       data: 'تولي مسئولية الدفاتر المحاسبية',
      },{
       code: '2',
       data: 'إعداد التقارير الضريبية',
      },{
       code: '3',
       data: 'تقديم المشورة بحسب حجم الشركة وحجم المبيعات',
      }
     ]
    },{
     code: '1',
     title: 'الباقة المتقدمة',
     desc: 'وصف بسيط عن الباقة يظهر هنا للتعبير',
     lists:[
      {
       code: '1',
       data: 'إعداد التقارير المالية',
      },{
       code: '2',
       data: 'إقرارات القيمة المضافة',
      },{
       code: '3',
       data: 'الفاتورة الإلكترونية',
      }
     ]
    },{
     code: '1',
     title: 'الباقة الشاملة',
     desc: 'وصف بسيط عن الباقة يظهر هنا للتعبير',
     lists:[
      {
       code: '1',
       data: 'إعداد القوائم المالية والتقارير المالية',
      },{
       code: '2',
       data: 'إعداد التقارير الضريبية الشهرية والربع سنوية',
      },{
       code: '3',
       data: 'إعداد الإقرارات الزكوية',
      },{
       code: '4',
       data: 'عمل مسودة الميزانية وإبداء الرأي المالي',
      },{
       code: '5',
       data: 'إعداد الموازنات التقديرية للمؤسسة',
      },{
       code: '6',
       data: 'إعداد وتبويب الدفاتر المسندية',
      },{
       code: '7',
       data: 'وضع نظام مالي بجميع حركات العمل داخل الشركة',
      }
     ]
    }
   ]
  }
 }
}
</script>

<style lang="scss">
.packages{
 .box{
  border-radius: 30px;
  box-shadow: 0px 0px 40px rgba($color: #045224 , $alpha: .04);
  border-color: transparent;
  transition: all .3s linear;

  .head-box{
   background: linear-gradient(90deg ,#045224 , #09C957 );

   &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/img/package_box_pattern.svg') center/contain no-repeat;
    top: 0;
    left: 0;
    z-index: 1;
   }
  }

  .secondary-btn{ 
   width: calc(100% - 40px);
   border-radius: 25px !important;
   overflow: hidden;

   &::after , &::before{
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    z-index: -1;
    transition: all .4s linear;
   }
   &::after{
    width: 100% !important;
    left: 0;
    background: linear-gradient(90deg  ,#045224 , #09C957 );
   }
   &::before{
    width: 0%;
    right: 0;
    background: linear-gradient(90deg , #214565 , #63238D);
   }
  }

  
  &:hover{
   border-color: #63238D;
   transform: translateY(-10px);
   .head-box{
    background: linear-gradient(180deg , #214565 , #63238D);
   }
   .check-list{
    li{
     &::After{
      filter: invert(18%) sepia(24%) saturate(5950%) hue-rotate(261deg) brightness(96%) contrast(100%);
     }
    }
   }
   .secondary-btn{
    &::After {
     width: 0% !important;
    }

    &::before{
     width: 100% !important;
    }
   }
  }
 }
}
</style>