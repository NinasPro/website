
export default ({
    "en":{
        carousels: [
            {'title': 'Welcome','subtitle': 'Empoderamos a niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas','image': 'banner-img-1.png'},
            {'title': 'Curso Virtual 2021','subtitle': 'El 10 de Abril comenzará el curso anual de programación competitiva para niñas en modalidad online. ¡Postula para participar, escoge tu sede más cercana!','image': 'banner-img-3.png'}
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
        news:[
            {'title':'Titulo 1', 'type':'is-info', 'text':'Ver noticia completa', 'path':'/enconstruccion/'},
            {'title':'Titulo 2', 'type':'is-info', 'text':'Ver noticia completa', 'path':'/enconstruccion/'},
            {'title':'Titulo 3', 'type':'is-info', 'text':'Ver noticia completa', 'path':'/enconstruccion/'},
        ],
        collaborators : [
            {'name':'uandes','image':'logos/uandes.png', 'url':"https://www.uandes.cl/"},
            {'name':'fcfm','image':'logos/fcfm.png', 'url':"http://ingenieria.uchile.cl/"},
            {'name':'udec','image':'logos/udec.png', 'url':"https://www.udec.cl/pexterno/"},
            {'name':'imfd','image':'logos/imfd.png', 'url':"https://imfd.cl/"},
            {'name':'technovation','image':'logos/technovation.png', 'url':"https://technovation.cl/"},
            {'name':'oci','image':'logos/oci.png', 'url':"https://www.olimpiada-informatica.cl/"},
            {'name':'fintual','image':'logos/fintual.png', 'url':"https://fintual.cl/"},
            {'name':'cornershop','image':'logos/cornershop.png', 'url':"https://cornershopapp.com/es-cl/"},
        ]
    },
    "es":{
        carousels: [
            {
                'title': 'Conoce a Niñas Pro',
                'subtitle': 'Empoderamos a niñas y adolescentes a través de la enseñanza de programación e Inspiramos vocaciones científicas y tecnológicas',
                'image': 'banner-img-1.png',
                'action': 'Involúcrate',
                'link': '/voluntariado'
            },
            {
                'title': 'Curso Virtual 2021',
                'subtitle': 'El 10 de Abril comenzó el curso anual de pensamiento computacional y programación competitiva para niñas en modalidad online.',
                'image': 'banner-img-3.png',
                'action': 'Próximas Actividades',
                'link': '/eventos'
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
                'image':'sororidad.jpg',
                'path':'/potencia/',
                'description':'Cursos de nivel avanzado para potenciar las habilidades de las niñas que ya programan.'
            },
        ],
        information:[
            {
                'type':'left',
                'image':'inspired.jpg',
                'titulo':'Nuestra historia',
                'text':'Niñas Pro nace el 2016 como una actividad universitaria de un grupo de estudiantes mujeres \
                        de la FCFM para aumentar el interés de niñas por la programación. \r Hoy estamos constuidas como \
                        una asociación sin fines de lucro y somos una red de más de 80 voluntarias distribuidas en varias \
                        regiones del país.',
                'boton':'Conoce más',
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
                'value': '1000'
            },
            {
                'name': 'Horas Programando',
                'value': '1 Millón'
            },
            {
                'name': 'Sedes',
                'value': '4'
            },
            {
                'name': 'Voluntaries',
                'value': '80'
            }
        ]
    }
})