<template>
	<div>
    <footer class="w-full pt-20 relative z-20">
      <div class="container">
        <div class="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-16 pb-12">
          <div class="lg:col-start-1 lg:col-end-3">
            <img
              src="/img/footer_logo.svg"
              class="w-24 h-24 object-contain"
              :alt="$t(`home.title`)" />

            <p class="text-base font-normal text-white opacity-80 my-9">
              يمكنك الإعتماد علينا لضبط الأداء المالي والإداري
              للشركة ورفع كفاءة العمل وتنمية رأس
              المال البشري
            </p>

            <ul class="social-media flex content-center items-center">
              <template v-for="social in socails">
                <li class="ml-2" :key="social.img">
                  <a
                    :href="`${social.link}`"
                    target="_blank"
                    class="bg-white relative z-30 w-9 h-9 bg-opacity-20 social-icon overflow-hidden flex justify-center items-center content-center"
                  >
                    <img
                      :src="`/img/${social.img}.svg`"
                      class="w-1/2 h-1/2 relative z-30 object-contain"
                      :alt="`${social.alt}`" />
                  </a>

                </li>
              </template>
            </ul>
          </div>

          <div class="lg:col-start-3 lg:col-end-4">
            <h4 class="footerHead text-white pr-9 relative z-20 text-xl font-bold mb-9">
              أقسام الموقع    
            </h4>

            <ul>
              <template v-for="navLink in navLinks">
                <li class="mb-5" :key="navLink.code">
                  <a :href="`#${navLink.link}`" class="font-normal text-base leading-8 opacity-80 hover:opacity-100 text-white">
                    {{ navLink.title }}
                  </a>
                </li>
              </template>
            </ul>
          </div>

          <div class="lg:col-start-4 lg:col-end-6">
            <h4 class="footerHead text-white pr-9 relative z-20 text-xl font-bold mb-9">
              تواصل معنا
            </h4>
            <div class="w-full flex mb-3">
              <img src="/img/incoming.svg" class="w-8 h-8 object-contain ml-5" :alt="$t(`app.title`)" />

              <div>
                <h4 class="text-base text-white opacity-80 mb-1 font-normal">
                  أرقام الهاتف
                </h4>

                <a href="#" class="text-lg text-white font-bold ml-2">
                  +96659771221
                </a>

                <a href="#" class="text-lg text-white font-bold ml-2">
                  96658541511
                </a>
              </div>
            </div>

            <div class="w-full flex mb-3">
              <img src="/img/sms.svg" class="w-8 h-8 object-contain ml-5" :alt="$t(`app.title`)" />

              <div>
                <h4 class="text-base text-white opacity-80 mb-1 font-normal">
                  البريد الالكتروني
                </h4>

                <a href="#" class="text-lg text-white font-bold ml-2">
                  support@haseb.sa
                </a>
              </div>
            </div>

            <div class="w-full flex">
              <img src="/img/location.svg" class="w-8 h-8 object-contain ml-5" :alt="$t(`app.title`)" />

              <div>
                <h4 class="text-base text-white opacity-80 mb-1 font-normal">
                الموقع الجغرافي
                </h4>

                <a href="#" class="text-lg text-white font-bold">
                  الرياض , حي الروضة , شارع حاسب الإقليمي العام
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="py-3 copyrights border-t border-solid border-white border-opacity-10 flex items-center content-center justify-between">
          <p class="text-base copyrights-data text-white font-normal">
            جميع الحقوق محفوظة لموقع حاسب @

            {{ new Date().getFullYear() }}
          </p>

          <a href="https://prameg.net" target="_blank" class="flex items-center content-center">
            <p class="mx-4 text-white font-normal text-base">
            صُنع في برامج
            </p>

            <img src="/img/paramg.svg" class="w-8 h-8 object-contain" alt="" />
          </a>
        </div>
      </div>
    </footer>
	</div>
</template>

<script>
export default {
  data() {
    return {
      footerData: 'فنحن نسخر خبراتنا ومواردنا لتوفير أفضل الاختيارات وابتكار أفضل الحلول لتيسير أداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على ذهن صاف وقلب مطمئن',
      socailMedia: 'تابعنا على',

      socails: [
        {
          img: 'facebook',
          link: 'https://facebook.com',
          alt: 'صفحة قوافل الإيمان علي الفيس'
        },{
          img: 'twitter',
          link: 'https://twitter.com',
          alt: 'صفحة قوافل الإيمان علي تويتر'
        },{
          img: 'instagram',
          link: 'https://instagram.com',
          alt: 'صفحة قوافل الإيمان علي انستجرام'
        },{
          img: 'youtube',
          link: 'https://youtube.com',
          alt: 'صفحة قوافل الإيمان علي يوتيوب'
        },
      ],
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
footer{
  background: linear-gradient(90deg , #045224 , #09C957);

  &::After{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/img/footer_pattern.svg') left/cover no-repeat;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .social-media{
    .social-icon{
      border-radius: 50%;
      transition: all .5s linear;

      &::After{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #045224;
        transform: scale(0);
        transition: all .5s linear;
      }

      &:hover{
        &::After{
          transform: scale(1);
        }
      }
    }
  }
  .footerHead{
    &::after{
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      background: url('/img/arrow.svg') center/contain no-repeat;
      right: 0;
      top: calc(50% - 12px);
    }
  }
}


@media (max-width: 800px) {
  .copyrights {
    padding-bottom: 63px;
    flex-direction: column;
    justify-content: center;

    .copyrights-data {
      margin-bottom: 15px;
    }
  }
}


</style>
