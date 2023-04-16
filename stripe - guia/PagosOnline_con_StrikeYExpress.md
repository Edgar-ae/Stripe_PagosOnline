# Pagos Online con Strike y Express

Este proyecto es de el canal Fazt en YouTube y nos sirve para hacer pagos online usando Strike con un Servidor llamado Express. [Fazt video youtube](https://youtu.be/o9eij8FEvuA?list=PLKP3VSziSreOV5KR4FYsNfMUoSQ8jZ0Rt)

## Capturas de referancia

![image](./img/)

## Informacion importante

- Utilize un **entorno virtual** (venv)

- Utilice **express-handlebars**. y este es una librería útil para construir aplicaciones web dinámicas con Node.js y Express, ya que te permite crear vistas HTML reutilizables y mantener la separación de preocupaciones en tu código. (es una librería de plantillas). (tube problemas, solo me funciono la verson 3.0.2)



 ### bibiografia

[link]()

## Linea de tienpo

### vitualizamos

>1. virtualizamos con `venv`

Habrimos el cmd y nos vamos a la ruta de nuesto proyecto

    cd /ruta/a/mi/proyecto

Creamos el entorno virtual

    python -m venv venv

Y luego lo activamos

    venv\Scripts\activate.bat

### Creación del servidor con Express

>2. creamos un proyecto de nodejs haci que lo iniciamos `npm init -y`

>3. Ahora insralaremos el modulo de express con `npm i express` es para tener un sevidor (Express)

>4. Y luego la libreria o mudulo de express-handlebars. Es para el manejo de las plantillas. Instalamos con `npm install express-handlebars@3.0.2` instalaremos exclusivamente la versión 3.0.2 por que con la version reciente hay problemas de compatibilidad.

>4. Creamos una carpeta src y dentro creamos un index.js (**`PROJECT/src/index.js`**).

>5. empezamos con las bases del servidor (**`PROJECT/src/index.js`**).

```js
const express = require('express');

//initlalizations
const app = express();

//start server
app.listen(3000, () => {
    console.log('server on port', 3000);
});
```
> 6. Veremos que ya esta funcuionando con `node src/index.js`. Ahora solo faltan las vistas

> 6. Ahora crearemos la estructura de nuestro servidor

primero creamos la carpeta **views** y dentro un archivo **index.hbs** (**`PROJECT/src/views/index.hbs`**)

Luego dentro de **views** creamos las siguientes carpetas:

**partials** (**`PROJECT/crs/views/partials`**)

y **layouts**, tambien dentro layouts un **main.hbs** este seria el layout de /views/index.js (**`PROJECT/crs/views/layouts/main.hbs`**)

> 7. hecho esto, en (**`PROJECT/crs/index.js`**) haremos lo siguiente:

```js

```









> 6. creamos una vista con express-handlebars

```js
const express = require('express');
const expbhs = require('express-handlebars');

//initlalizations
const app = express();

//Settings
app.engine('.hbs', expbhs({

}));

//start server
app.listen(3000, () => {
    console.log('server on port', 3000);
});
```
> 7. Hoara crearemos una carpeta llamada `views` para que node sepa donde estan mis archivos. para eso creamos en **`index.js`** lo siguiente en //settings

```js
//equerimos
const path = require('path');

//settings
app.set('views', path.join(__dirname, 'views'));
```
>8. ahora creamos las carpetas `layouts` y `partials` en la carpera `views`. Esto vendria a ser nuesto motor de plantillas

>9. Luego ceamos un archivo llamado `index.hbs` en la carpeta `views`

>10. Seguidamente le daremos a index.hgs un layout para ello creaemos `main.hbs` en la capeta `layouts`

>11. luego en `index,js` agegamos el dafault main

```js
//Settings
app.engine('.hbs', expbhs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    layoutsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
```

>12. Hora vermos como subir datos a nuestro sevidor. Y para ello haremos lo siguiente en `index.js` en //middleware

```js
//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
```
>13. Hora crearemos las rutas del servidor crearemos la carpeta `routes` en la carpeta `src` y dentro de `routes` creamos `index.js`

>14. Hoar haremos lo siguiente en `src/index.js` en //Routes

```js
//Routes
app.use(require('./routes/index.js'));
```

>15. Seguidamente para poder usar archivos css y imagenes entre otros crearemos una carpeta llamada public `src/public`

>16. Ahora en `src/index.js` haremos lo siguiente en //Static files

```js
//Static files
app.use(express.staic(path.join(__dirname, 'public')));
```

>17. Ahoar haremos los requerimientos en `routes/index,js`

```js
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;
```

## Desarrollo del proyecto

- Lo primero que hice es crear el servidor con Express