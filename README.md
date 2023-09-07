# back
 back for NEXTIA

Instrucciones para la inicializacion:
nota: la base de datos esta construida en mysql
para iniciar el backend ejecutar la query para la creacion de la base de datos
posterior a eso comprobar que los datos de acceso estan correctos
ejecutar el comando npm run dev

primero verificar que la api trabaja de manera correcta
para iniciar el frontend solo ejecutar el comando en consola npm run dev 



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
      