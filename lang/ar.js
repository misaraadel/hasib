export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      app: {
        title: `حاسب `,
        description:  'حاسب للخدمات الإدارية والإستشارات',
        dir: `rtl`,
        ar: `عربي`,
        en: `English`
      },

      input: {
        gender: `اللقب`,
        mr: `السيد`,
        ms: `السيدة`,
        name: `الاسم`,
        mobile: `رقم الجوال`,
        email: `الإيميل`,
        country: `الدولة`,
        city: `المدينة`,
        code: `الكود`,
        desc: `وصف مُختصر`,
        service: `الصف الدراسي`,
        register: `تسجيل`,
        done: 'تم التسجيل، سوف يتواصل معك فريقنا قريبًا.'
      },

      v: {
        notvalid: `غير صحيح.`,
        required: `حقل إلزامي.`,
        email: `الإيميل غير صحيح.`,
        number: `رقم صحيح فقط.`
      },

      home: {
        title: `حاسب`,
      },
    })
  })
}
