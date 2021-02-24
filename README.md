# website-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Add new event

Para agregar un nuevo evento, se debe dirigir a data/events.js. En este documento debera agregar al **final** para cada uno de los idiomas un nuevo componente al arreglo, indicando:

* Fecha siguiendo el siguiente formato -> Año-Mes-Dia Hora(horario militar).
* Titulo del evento.
* Información sobre el evento.
* Lugar donde se hara.
* Link para el formulario de inscripción.

Modificando este documento afectara la ventana eventos y la seccion de eventos en la ventana home.


### Add new logo collaborator

Si desea agregar un nuevo logo para la sección de colaboradores debera dirigirse a data/home.js. Aqui encontrara para cada uno de los idiomas, distintas categorias. Para agregar un colaborador debe irse a la categorias collaborators de cada idioma y agregar  al final del arreglo los siguientes indicadores>

* Nombre de la institución.
* Path de la imagen  -> todas las imagenes de colaboradores deben estar ubicadas en assets/logos.
* Url de la pagina de la institución.


### Add new memory

Para agregar una memoria debe dirigirse al documento about.js que se encuenta en la carpeta data. Cada idioma tiene categorias, para agregar la memoria debe dirigirse a la sección memory, para agregar  al final del arreglo

* titulo de la memoria
* Dirección del archivo pdf -> Las memorias deben ser guardabas en la carpeta Public/Memorias 

