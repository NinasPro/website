/* This document containst the data corresponding to Volunteer view  */

export default ({
    "en":{
        /* Here is the information corresponding to the volunteerProfile.vue component. */ 
        profileData : [
            {'id':'1','text':'Creen que es justo y necesario promover las ciencias y la tecnología en niñas y mujeres jóvenes para disminuir la brecha de género en STEAM.'},
            {'id':'2','text':'Quieren ser parte del cambio e impactar en las nuevas generaciones.'},
            {'id':'3','text':'Tienen un gran sentido de responsabilidad para cumplir los compromisos adquiridos.'},
            {'id':'4','text':'Buscan integrarse a una comunidad sorora e integrada por personas que creen en la equidad de género.'},
            {'id':'5','text':'Quieren aprender cosas nuevas y desarrollar sus habilidades trabajando en proyectos con impacto social.'},
        ],
        /* Here is the information corresponding to the volunteerDo.vue component. */ 
        doData: [
            {
                'title':'Voluntariado Permanente',
                'image':'ninastic.jpg',
                'lista':[
                    'Forman parte de un equipo de trabajo dentro de la organización.',
                    'Planifican y gestionan proyectos.',
                    'Representan a la organización.',
                    'Ejecutan proyectos internos, proyectos educativos o de difusión de las STEAM.'
                ]
            },
            {
                'title':'Tutorías y Mentorías',
                'image':'ninastic.jpg',
                'lista':[
                    'Guían actividades educativas en base al material que entrega la organización.',
                    'Resuelven dudas de las niñas y mujeres que participan en los talleres.',
                    'Entregan feedback al equipo de Niñas Pro para mejorar las actividades.'
                ]
            },
            {
                'title':'Mujeres Pro',
                'image':'ninastic.jpg',
                'lista':[
                    'Realizan charlas sobre su trabajo, sus estudios y su experiencia como mujeres en STEM.',
                    'Participan en conversatorios o paneles junto a otras mujeres Pro.',
                    'Responden preguntas de las asistentes.'
                ]
            }
        ],
        projects: [
            {'title':'Proyecto 1', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
            {'title':'Proyecto 2', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
            {'title':'Proyecto 3', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
            {'title':'Proyecto 4', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
        ],
        /* Here is the information corresponding to the Testimony.vue component. But if you want to add a new section, Volunteer.vue must also be modified in the testimonials part */ 
        testimony: [
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-info'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-warning'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-success'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-info'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-warning'},
        ]
    },
    "es":{
        /* Here is the information corresponding to the volunteerProfile.vue component. */ 
        profileData : [
            {'id':'1','text':'Creen que es justo y necesario promover las ciencias y la tecnología en niñas y mujeres jóvenes para disminuir la brecha de género en STEAM.'},
            {'id':'2','text':'Quieren ser parte del cambio e impactar en las nuevas generaciones.'},
            {'id':'3','text':'Tienen un gran sentido de responsabilidad para cumplir los compromisos adquiridos.'},
            {'id':'4','text':'Buscan integrarse a una comunidad sorora e integrada por personas que creen en la equidad de género.'},
            {'id':'5','text':'Quieren aprender cosas nuevas y desarrollar sus habilidades trabajando en proyectos con impacto social.'},
        ],
        /* Here is the information corresponding to the volunteerDo.vue component. */ 
        doData: [
            {
                'title':'Voluntariado Permanente',
                'image':'ninastic.jpg',
                'lista':[
                    'Forman parte de un equipo de trabajo dentro de la organización.',
                    'Planifican y gestionan proyectos.',
                    'Representan a la organización.',
                    'Ejecutan proyectos internos, proyectos educativos o de difusión de las STEAM.'
                ]
            },
            {
                'title':'Tutorías y Mentorías',
                'image':'ninastic.jpg',
                'lista':[
                    'Guían actividades educativas en base al material que entrega la organización.',
                    'Resuelven dudas de las niñas y mujeres que participan en los talleres.',
                    'Entregan feedback al equipo de Niñas Pro para mejorar las actividades.'
                ]
            },
            {
                'title':'Mujeres Pro',
                'image':'ninastic.jpg',
                'lista':[
                    'Realizan charlas sobre su trabajo, sus estudios y su experiencia como mujeres en STEM.',
                    'Participan en conversatorios o paneles junto a otras mujeres Pro.',
                    'Responden preguntas de las asistentes.'
                ]
            }
        ],
        projects: [
            {'title':'Proyecto 1', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
            {'title':'Proyecto 2', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
            {'title':'Proyecto 3', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
            {'title':'Proyecto 4', 'type':'is-danger', 'text':'Postula', 'path':'/enconstruccion/'},
        ],
        /* Here is the information corresponding to the Testimony.vue component. But if you want to add a new section, Volunteer.vue must also be modified in the testimonials part */ 
        testimony: [
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-info'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-primary'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-success'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-info'},
            {'name':'Jane Doe','title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris','type':'is-primary'},
        ]
    }
})