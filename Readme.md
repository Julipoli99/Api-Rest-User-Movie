###                 CRUD API REST ALKEMY                ###

Iniciar Proyecto:
No cuenta con Frontend por lo que es necesario utilizarlo con un Rest Client como Postman u otros.

### BASE DE DATOS ###
Tiene una base de datos almacenada en la nube con su servidor de AlwaysData.com

Si es de manera local, se debe ingresar los ids del personaje y la pelicula con la que se relaciona en la tabla "personaje_pelicula" que almacenará la informacion de las relaciones entre Personaje y Pelicula.

###     ENDPOINTS      ###

https://rest-api-alkemy.herokuapp.com/v1/api/           RUTA DE HEROKU


https://localhost:3000/v1/api/          RUTA LOCAL

### Usuario ###
https://localhost:3000/v1/api/register      (POST)
Los campos a completar para el registro son Nombre, Apellido y Email

https://localhost:3000/v1/api/login         (POST)
Una vez registrado se almacena en la base de datos y para loguearse se debera pasar el Nombre, Apellido y el Email, no cuenta con password por lo que el identificador es el Email.
Si todo sale bien se le entregará un token que tiene una duracion de 10 minutos, dicho token le permitirá acceder a los subsiguientes endpoints

***Para ingresar el token se debe ir a la seccion de "headers" en Key escribir Authorization y en value escribir "Bearer" seguido del token otorgado.***


### Personajes ###
https://localhost:3000/v1/api/characters     (GET)
Muestra todos los personajes que estan almacenados en la base de datos, si no hay ninguno devolvera un 404 diciendo que no se encuentran personajes almacenados, para crearlos se debe ingresar a la ruta de creacion.

https://localhost:3000/v1/api/characters/add    (POST)
Crea al personaje pasandole los datos
{
    "Nombre": el nombre,
    "Imagen": la imagen,
    "Edad": la edad,
    "Peso": el peso,
    "Historia": su historia
}

Si todo sale bien se almacenará en la base de datos


https://localhost:3000/v1/api/characters/:id     (GET)
Muestra por id al personaje



https://localhost:3000/v1/api/characters/:id/update    (PUT)
Edita al personaje por id

{
    "Nombre": el nombre,
    "Imagen": la imagen,
    "Edad": la edad,
    "Peso": el peso,
    "Historia": su historia
}

No es necesario aclarar todos los campos, si se olvida de ingresar un campo se guardara el valor existente que estaba antes de su edicion


https://localhost:3000/v1/api/characters/:id/delete    (DELETE)
Elimina al personaje por id


### Peliculas ###
https://localhost:3000/v1/api/movies        (GET)
Muestra todos las peliculas que estan almacenados en la base de datos, si no hay ninguno devolvera un 404 diciendo que no se encuentran peliculas almacenadas, para crearlos se debe ingresar a la ruta de creacion.


https://localhost:3000/v1/api/movies/new        (POST)
Crea la pelicula pasandole los datos
{
    "Titulo" = "el titulo",
    "Imagen" = "la imagen",
    "FechaCreacion" = "la fecha",
    "Calificacion" = "calificacion 1 al 10",
    "id_genero" = "el id del genero"
}


https://localhost:3000/v1/api/movies/:id        (GET)
Muestra la pelicula por id


https://localhost:3000/v1/api/movies/:id/update     (PUT)
{
    "Titulo" = "el titulo",
    "Imagen" = "la imagen",
    "FechaCreacion" = "la fecha",
    "Calificacion" = "calificacion 1 al 10",
    "id_genero" = "el id del genero"
}

No es necesario aclarar todos los campos, si se olvida de ingresar un campo se guardara el valor existente que estaba antes de su edicion



https://localhost:3000/v1/api/movies/:id/remove     (DELETE)
Elimina la pelicula por id


*** EN LAS RUTAS ACLARADAS ANTERIORMENTE MENOS EN LAS DE USUARIO, SE DEBE PASAR EL TOKEN GENERADO EN LA RUTA DE LOGIN, SE HACE EN CADA CONSULTA INGRESANDO EN HEADERS, KEY = Authorization, VALUE = Bearer + token. ***
