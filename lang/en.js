export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      app: {
        title: `Hasib`,
        description: `Hasib For Administrative Services and Consultancy`,
        dir: `ltr`,
        ar: `عربي`,
        en: `English`
      },

      input: {
        gender: `Gender`,
        mr: `Mr`,
        ms: `Mrs`,
        name: `Name`,
        mobile: `Mobile Number`,
        email: `Email`,
        country: `Country`,
        city: `City`,
        code: `Code`,
        desc: `Description`,
        service: `Classroom`,
        register: `register`,
        done: 'Registered, our team will contact you soon.'
      },

      nav: {
        home: `Home`,
        about:'About School',
        services: `School Services`,
        platform: `Platform`,
        prices: `Prices`,
        contact: `Contact US`
      },

      home: {
        intro_title: 'Intro Title',
         
        header: {
          title_slide_1: 'Almadinah International School',
          desc_slide_1: 'Providing continuous care for learners by employing their highest abilities and personal capabilities and refining their talents.  By following the best international standards in education to become effective and influential citizens.',
          title_slide_2: 'Almadinah International School',
          desc_slide_2: 'Providing continuous care for learners by employing their highest abilities and personal capabilities and refining their talents.  By following the best international standards in education to become effective and influential citizens.',
        },

        about: {
          about_title_sec: 'about school',
          about_desc_sec: ' Learn about Al-Madina International Schools in brief ',
          general_box_span_desc_1 :  'We harness our expertise and resources ',
          general_box_desc_1 : 'to provide the best choices and create the best solutions to facilitate the learning process for the teacher and the learner, so that the time is optimally utilized and the efforts of the students are not wasted in what is not beneficial.. It is a hard process that requires continuous effort, it is a message we are committed to.' ,
          general_box_span_desc_2: ' For the sake of better opportunities',
          general_box_desc_2: ' for our students, a strategic alliance was made with the Saudi British Center for Education and Development to raise the efficiency of learning and achievement, and to improve the level of the English language, which is the backbone of the study, as well as developing the capabilities of our teachers with foreign expertise and international cadres that would raise the level of our students and give them better opportunities.',
          box_title_1: 'Vision',
          box_desc_1: 'Pioneering in building a knowledge society in a renewable and changing world.',
          box_title_2: 'Mission' ,
          box_desc_2: ' To provide continuous service to learners by employing their highest abilities, personal capabilities.'
        },

        features: {
          title: ' School Services',
          sub_title: 'Almadinah International School Services  ',
          academic: 'Qualified faculty staff and administrators ',
          teacher: 'Experienced trainers and consultants to improve the educational level.',
          check: 'Follow-up  teachers performance f with international observation tools.',
          test: 'Assess  students performance through international tests MAP' ,
          book: 'Distinctive Curriculum in  Arabic and the Holy Quran according to the Ministry of Education.',
          class: 'Teaching French and computer STARTING from kindergarten',
          laptop: 'Laboratories equipped for science and computer.',
          basketball: 'Safe playgrounds for students.',
          projector: 'All classes are provided with projectors. And Montessori program (centres) for kindergarten and the first grade.',
          reading: 'Appling latest educational strategies, through  American curriculum(PEARSON REILIZE ), ',
          quran: 'Memorizing a whole part of Holy Quran in the preliminary stage and for the grade section',
          value: 'Mindstorms Robotic  program for the grade section ,and for kindergarten stage'
        },

        banner: {
          banner_title: 'A Systematic curriculum and non- curriculum activities that serve the educational',
          banner_desc: '. Process, the most prominent of which is the value program and Allam be Alqalam program build the students personalities , Teaching science through STEM and applying  Mental Math program in addition to listening & speaking in English, and Arabic language programs for Arabic calligraphy and declamation ',
        },

        platform: {
          title: 'Our platforms',
          sub_title: ' Multiple platforms for managing the e-learning process',
          platform_title_1: ' Guardian platform',
          platform_desc_1: 'Providing continuous care for learners by employing their highest abilities and personal capabilities',
          platform_title_2: ' e-learning platform',
          platform_desc_2: ' Providing continuous care for learners by employing their highest abilities and personal capabilities',
          platform_title_3: 'Teachers and management platform',
          platform_desc_3: 'Providing continuous care for learners by employing their highest abilities and personal capabilities'
        },

        prices: {
          title: 'School fees',
          sub_title: ' Find out about the schools fees list',
          prices_title_1: 'Kg1, Kg2, Kg3',
          prices_count_1: '10800 RAS',
          prices_descount_1: ' Discount for first 100 students',
          prices_title_2: 'Grades 1-3 ',
          prices_count_2: '12000 RAS',
          prices_descount_2: ' Discount for first 100 students',
          prices_title_3: 'Boys and girls',
          prices_count_3: '13800 RAS',
          prices_descount_3: ' Discount for first 100 students',
          prices_title_4: 'Grades 4-9 girls only',
          prices_count_4: '14400 RAS',
          prices_descount_4: ' Discount for first 100 students',
        },

        contact: {
          title: 'Contact us',
          sub_title: ' If you have any farther queries , do not hesitate to Contact us',
          phone_title: 'For communication',
          location_title: ' Our geographical location',
          location_map: ' Riyadh, Al-Rabwah District, Abqaiq Street',
          request_title: 'Admission Form',
          request_desc: 'Submit  your kids  application',
        }

      },

      footer: {
        description: 'Providing continuous care for learners by employing their highest abilities and personal capabilities and refining their talents.  By following the best international standards in education to become effective and influential citizens.' ,
        copyrights: 'All rights reserved to Al-Madinah International Schools @ 2021' ,
        website_category: 'Site Sections',
        important_links: 'Important links',
        electronic_platform: 'e-learning platform',
        parentis_platform: 'Guardian platform',
        teachers_platform: 'Teachers and management platform',
        applications: ' Our apps',
      },

    })
  })
}
