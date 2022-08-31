
export default ({
    "en":{
        carousels: [
            {'title': 'Welcome','subtitle': 'Empoderamos a niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas','image': 'banner-img-1.png'},
        ],
        projectsHome:[
            {'title':'Empower Initiative','type':'is-danger','image':'laschicaspueden.jpg', 'path':'/empodera/','description':'Curso Anual de Programación Competitiva en C++'},
            {'title':'Initiative Inspires', 'type':'is-info', 'image':'lamarr.jpg', 'path':'/inspira/', 'description':'Charla de Mujeres Pro y creación de Role Models'},
            {'title':'Incentive Initiative', 'type':'is-warning' ,'image':'ninastic.jpg', 'path':'/incentiva/','description':'Talleres Introductorios de Programación'},
            {'title':'Initiative Power', 'type':'is-success', 'image':'sororidad.jpg', 'path':'/potencia/', 'description':'Cursos Avanzados de Programación'},
        ],
        information:[
            {'type':'left', 'image':'inspired.jpg', 'text':'Si tienes menos de 18 años. Diviértete, aprende y conecta con otras Niñas Pro como tú.', 'titulo':'¡Participa!', 'boton':'Ver proximas actividades', 'Path':'/voluntariado/'},
            {'type':'right', 'image':'django-girls.jpg', 'text':'Si quieres ayudarnos. Participa del voluntariado o ayúdanos a llegar a mas niñas a traves de donaciones.', 'titulo':'¡Involúcrate!', 'boton':'Mas información' ,'Path':'/proyectos/'},
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
                'value': '4'
            },
            {
                'name': 'Voluntaries',
                'value': '82'
            }
        ]

    },
    "es":{
        carousels: [
            {
                'title': 'Conoce a Niñas Pro',
                'subtitle': 'Empoderamos a niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas',
                'image': 'banner/banner-img-1.png',
                'action': 'Involúcrate',
                'link': '/voluntariado',
                'type': 'router-link'
            },
            {
                'title': 'Curso Virtual 2022',
                'subtitle': 'El 23 de Abril comienza el curso anual de pensamiento computacional y programación competitiva para niñas en modalidad online.',
                'image': 'banner/banner-img-3.png',
                'action': '¿En qué consiste?',
                'link': '/empodera',
                'join_message': 'Inscríbete!',
                'join_link': 'https://bit.ly/postulacion2022ninaspro',
                'type': 'router-link'
            }
        ],
        projectsHome:[
            {
                'title':'Iniciativa Inspira', 
                'type':'is-info', 
                'image':'lamarr.jpg', 
                'path':'/inspira/', 
                'description':'Charlas de Mujeres Pro y actividades de visibilización para crear modelos de rol.'
            },
            {
                'title':'Iniciativa Incentiva',
                'type':'is-warning',
                'image':'ninastic.jpg',
                'path':'/incentiva/',
                'description':'Talleres introductorios de 2 a 6 horas para motivar a las niñas a seguir aprendiendo.'
            },
            {
                'title':'Iniciativa Empodera',
                'type':'is-danger',
                'image':'laschicaspueden.jpg',
                'path':'/empodera/',
                'description':'Realizamos cursos anuales de programación para desarrollar nuevas habilidades.'
            },
            {
                'title':'Iniciativa Potencia',
                'type':'is-success',
                'image':'rosalind.jpeg',
                'path':'/potencia/',
                'description':'Cursos de nivel avanzado para potenciar las habilidades de las niñas que ya programan.'
            },
        ],
        information:[
            {
                'type':'left',
                'image':'inspired.jpg',
                'titulo':'Quiénes Somos',
                'text':'Niñas Pro nace el 2016 como una actividad universitaria de un grupo de estudiantes mujeres \
                        de la FCFM para aumentar el interés de niñas por la programación. \r Hoy estamos constuidas como \
                        una asociación sin fines de lucro y somos una red de más de 80 voluntarias distribuidas en varias \
                        regiones del país.',
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
                'value': '4'
            },
            {
                'name': 'Voluntaries',
                'value': '82'
            }
        ]
    }
})