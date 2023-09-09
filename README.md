# back
 back for NEXTIA

 IMPORTANTEEEEEEE
 para la creacion de la base de datos agregue un archivo scripCrator.sql en la raiz del proyecto
 este crea la base de datos tal cual la utilize yo, se encuentra tanto en el proyecto frontend
 como en el backend

Instrucciones para la inicializacion:
nota: la base de datos esta construida en mysql
para iniciar el backend ejecutar la query para la creacion de la base de datos
posterior a eso comprobar que los datos de acceso estan correctos
ejecutar el comando npm run dev

primero verificar que la api trabaja de manera correcta
para iniciar el frontend solo ejecutar el comando en consola npm run dev 

despues de comenzar con la ejecucion del proyecto dar click en el link de la 
barra arriba a la derecha "Registro"crear un usuario, este iniciara sesion 
de manera automatica

posterior a esto ir a departamentos en el boton de la barra superior y 
registrar uno nuevo en el boton de debajo a la izquierda, es necesario 
tener departamentos registrados para poder crear una invitacion

ahora se puede crear una invitacion dando click de igual manera en su 
respectivo boton en la barra superior para ir a donde podremos visalizar nuestras 
invitaciones de igual manera abajo a la izquierda habra un boton para
poder hacer un registro, esto desplegara una notificacion donde visualizaremos 
nuestro codigo QR

el codigo QR esta hecho con la api QR de google por lo que es prefectamente 
compatible con el scaner de android y lens

para cerrar sesion da click en tu nombre en la barra superior y se desplegara 
un pequeño menu, haz click en cerrar sesion



Documentacion:

Lo primero que se hizo para comenzar el proyecto fue la instalacion de las dependencias 
que considere que serian las principales en usarse en el desarrollo del proyecto dichas fueron:

frontend:
nextauth para simplificar el inicio de sesion entre otras cosas
redux para el manejo de estados estaticos
sweetalert2 uso de alertas sencillas
tailwind libreria de estilos css para agilizar el diseño
axios


nota: para el uso de los QR se usara la api de google para la creacion de los mismo, aunque podra
ser cambiada con facilidad por otra api de la preferencia de la consultoria si en algun momento se requiriese

backend:
jsonwebtokens creacion de tokens para empaquetar la informacion de sesion para el frontend
nodemon dependencia de desarrollo
uuidv4 creacion de ids para los usuarios entre otras cosas

paso 2
    conexiones:
        En este paso se realizaron las conexiones del backend con la base de datos y 
        del frontend con la api

paso3 
    una ves creada las conexiones con la base de datos y del frontend con la api procedo a 
    la creacion de una branch donde se hara la configuraicon del forntend para el inicio de sesion
    usando las tecnologias next-auth y jasonWenTokens en frontend y backend respectivamente
      
Paso 4 
    se configuro redux-toolkit

paso 5 
    se configuro el inicio de sesion ademas de las 3 tablas que se usaran para el pryect users, departamentos, invitaciones y sus triggers 

paso 6 
    se configuro el inicio de sesion y se hicieron las rutas para el proyecto
    con sus respectivas vistas

paso 7
    se hizo la funcionalidad de las paginas

paso 8 
    se procedio a detallar en mayor medida algunos estilos para finalizar






