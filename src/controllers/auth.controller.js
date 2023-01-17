//se instalo npm i jsonwebtoken
//PASO 2
const jwt = require('jsonwebtoken');
const AuthService = require('../services/auth.services');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await AuthService.login(email, password);
    //las respuesta trae isValid: true/false
    if(response.isValid){
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id
      }
      
      //firmamos el nuevo token
              //dat--palabra reservada-algoritmo de codificacion
      const token = jwt.sign(data, 'Laura Marano', {algorithm: 'HS512', expiresIn: '1m'});
      data.token = token;
      console.log(data);
      res.json(data);
    }else{
      res.status(401).json({message: 'Credenciales invalidas'});
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}
module.exports = { userLogin};