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

## Instrucciones

### Agregar nuevo evento

Para agregar un nuevo evento, se debe dirigir a data/events.js. En este documento debera agregar al **final** para cada uno de los idiomas un nuevo componente al arreglo, indicando:

* Fecha siguiendo el siguiente formato -> Año-Mes-Dia Hora(horario militar).
* Titulo del evento.
* Dirección de la imagen
* Información sobre el evento.
* Lugar donde se hara.
* Link para el formulario de inscripción.

Modificando este documento afectara la ventana eventos y la seccion de eventos en la ventana home.


### Agregar un nuevo colaborador

Si desea agregar un nuevo logo para la sección de colaboradores debera dirigirse a data/home.js. Aqui encontrara para cada uno de los idiomas, distintas categorias. Para agregar un colaborador debe irse a la categorias collaborators de cada idioma y agregar  al final del arreglo los siguientes indicadores:

* Nombre de la institución.
* Path de la imagen  -> todas las imagenes de colaboradores deben estar ubicadas en assets/logos.
* Url de la pagina de la institución.


### Agregar una nueva memoria

Para agregar una memoria debe dirigirse al documento about.js que se encuenta en la carpeta data. Cada idioma tiene categorias, para agregar la memoria debe dirigirse a la sección memory, para agregar  al final del arreglo

* titulo de la memoria
* Dirección del archivo pdf -> Las memorias deben ser guardabas en la carpeta Public/Memorias 

### Agergar nuevo integrante 

Para agregar el nuevo integrante se debe dirigir al archivo .js correspondiente con el nombre de la iniciativa y luego dirigirse al arreglo **team**, aqui debera indicar:

* Nombre del integrante
* Puesto de trabajo
* La dirección de la imagen -> Todas las imagenes que se agreguen deben ir en assets/team
* Descripción

### Crear o cambiar titulos y botones genéricos

Para crear o cambiar un titulo o botones genéricos de la ventana correspondiente, debe dirigirse a los archivos .json para cada idioma y cambiar o crear una nueva lista u opción.


