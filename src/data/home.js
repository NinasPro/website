
export default ({
    "en":{
        carousels: [
            {
                'title': '2023 Annual Workshop',
                'subtitle': 'The annual computational thinking and competitive programming course for girls begins on April 22. You can choose between online or hybrid format.',
                'image': 'banner/banner-img-1.png',
                'join_message': '¡Apply!',
                'join_link': 'https://forms.gle/iJkPPoX6Mfvqcr8D9',
                'type': 'router-link'
            },
            {
                'title': 'Volunteering',
                'subtitle': 'We empower girls through teaching them to code and inspiring them to explore scientific and technological areas.',
                'image': 'banner/banner-img-1.png',
                'action': 'Get involved in volunteering',
                'link': '/voluntariado',
                'type': 'router-link'
            }
        ],
        projectsHome:[
            {
                'title':'Inspiring Activities', 
                'type':'is-info', 
                'image':'lamarr.jpg', 
                'path':'/incentiva/', 
                'description':'Talks by Mujeres Pro and introduction workshops to new technologies to motivate learning.'
            },
            {
                'title':'Programming Annual Workshop',
                'type':'is-primary',
                'image':'laschicaspueden.jpg',
                'path':'/empodera/',
                'description':'Computational thinking and competitive programming course in Python or C++ for high school girls.'
            },
            {
                'title':'Competitive Programming',
                'type':'is-warning',
                'image':'ninastic.jpg',
                'path':'/incentiva/',
                'description':'Classes and mentoring to train to participate in School Programming Competitions.'
            },
            {
                'title':'Arduino Quest',
                'type':'is-success',
                'image':'rosalind.jpeg',
                'path':'/potencia/',
                'description':'Challenge carried out together with the Millennium Institute Fundational Research on Data to develop projects with Arduino.'
            },
        ],
        information:[
            {
                'type':'left',
                'image':'inspired.jpg',
                'titulo':'About Us',
                'text':'Niñas Pro began in 2016 as a university activity carried out by a group of female students from the \
                Faculty of Physical Sciences and Mathematics of the University of Chile to increase the interest of girls in \
                programming. Today we are constituted as a non-profit association and we are a network of more than 80 \
                volunteers distributed in various regions of the country with the support of different universities and \
                companies interested in reducing the gender gap in STEM.',
                'boton':'Our history',
                'Path':'/somos/'
            },
            {
                'type':'right',
                'image':'django-girls.jpg',
                'titulo':'Niñas Pro Headquarters and Volunteering',
                'text':'We want all the girls in Chile to experience science and technology free of gender stereotypes. \
                If you want to help us reach more girls, you can apply to join the volunteer program or to create a branch \
                in your region. You can also contribute with donations.',
                'boton':'More Information',
                'Path':'/voluntariado/'
            },
        ],
        metrics: [
            {
                'name': 'Girls',
                'value': '1820'
            },
            {
                'name': 'Programming Hours',
                'value': '+23K'
            },
            {
                'name': 'Headquarters',
                'value': '5'
            },
            {
                'name': 'Volunteers',
                'value': '62'
            }
        ]
    },
    "es":{
        carousels: [
            {
                'title': 'Curso Anual 2023',
                'subtitle': 'El 22 de Abril comienza el curso anual de pensamiento computacional y programación competitiva para niñas. Tú eliges entre formato onlina o híbrido.',
                'image': 'banner/banner-img-1.png',
                'action': '¿En qué consiste?',
                'join_message': '¡Inscríbete!',
                'join_link': 'https://forms.gle/iJkPPoX6Mfvqcr8D9',
                'type': 'router-link'
            },
            {
                'title': 'Voluntariado en Niñas Pro',
                'subtitle': 'Empoderamos a niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas. \
                Tu también puedes ayudar realizando un voluntariado.',
                'image': 'banner/banner-img-1.png',
                'action': '¡Postula!',
                'link': '/voluntariado',
                'type': 'router-link'
            }
        ],
        projectsHome:[
            {
                'title':'Actividades Inspiradoras',
                'type':'is-warning',
                'image':'ninastic.jpg',
                'path':'/incentiva/',
                'description':'Charlas de Mujeres Pro y talleres de introducción a nuevas tecnologías para motivar el aprendizaje.'
            },
            {
                'title':'Curso Anual de Programación',
                'type':'is-primary',
                'image':'laschicaspueden.jpg',
                'path':'/empodera/',
                'description':'Curso de programación en Python o C++ para desarrollar nuevas habilidades.'
            },
            {
                'title':'Programación Competitiva', 
                'type':'is-info', 
                'image':'lamarr.jpg', 
                'path':'/inspira/', 
                'description':'Clases y mentorías para entrenar para participar en Competencias de Programación Escolar.'
            },
            {
                'title':'Arduino Quest',
                'type':'is-success',
                'image':'rosalind.jpeg',
                'path':'/potencia/',
                'description':'Desafío realizado junto al Instituto Milenio Fundamentos de los Datos para desarrollar proyectos con Arduino.'
            },
        ],
        information:[
            {
                'type':'left',
                'image':'inspired.jpg',
                'titulo':'Quiénes Somos',
                'text':'Niñas Pro comenzó el 2016 como una actividad universitaria realizada por un grupo de estudiantes mujeres \
                        de la Facultad de ciencias físicas y matemáticas de la Universidad de Chile para aumentar el interés de niñas \
                        por la programación.  Hoy estamos constituidas como una asociación sin fines de lucro y somos una red de más de \
                        80 voluntarias distribuidas en varias regiones del país con el apoyo de diferentes universidades y empresas \
                        interesadas en disminuir la brecha de género en STEM.',
                'boton':'Nuestra Historia',
                'Path':'/somos/'
            },
            {
                'type':'right',
                'image':'django-girls.jpg',
                'titulo':'Sedes Niñas Pro y Voluntariado',
                'text':'Queremos que todas las niñas de Chile vivan la ciencia y la tecnología libres de estereotipos de género. \
                Si quieres ayudarnos a llegar a más niñas puedes postular para unirte al voluntariado o para crear una sede en \
                tu región. También puedes aportar con donaciones.',
                'boton':'Mas información',
                'Path':'/voluntariado/'
            },
        ],
        metrics: [
            {
                'name': 'Niñas',
                'value': '1820'
            },
            {
                'name': 'Horas Programando',
                'value': '+23K'
            },
            {
                'name': 'Sedes',
                'value': '5'
            },
            {
                'name': 'Voluntaries',
                'value': '62'
            }
        ]
    }
})