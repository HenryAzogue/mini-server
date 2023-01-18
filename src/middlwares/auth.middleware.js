const jwt = require('jsonwebtoken');
require('dotenv').config();

//vamos a validar el Token
const authMiddleware = (req, res, next) =>{//next, para que vaya al siguiente middleware
  //cambiar el nombre de una propiedad destructurada con :
  let {authorization: token} = req.headers; //el token se envia en los header de la peticion
  token = token.replace('Bearer ', '');//retirar el nombre Bearer para que sea legible el token

  console.log(token);
            //token--palabra Clave---algoritmo de codificacion
  const decode = jwt.verify(
    token, 
    process.env.JWT_SECRET, 
    {algorithms: 'HS512'},//decodificamos 
    (err, decode)=>{
      if(err){
        res.status(400).json(
          {
            error: 'Invalid token', 
            message: 'El token es incorrecto, intenta verificarlo nuevamente'
          }
          );
      }else {
        console.log(decode);
        next();
      }
    }
    );
  //console.log(decode);
  //next();
}

//si es valido, tiene acceso a la ruta


//si no es valido, de regreso al login 


module.exports = authMiddleware;