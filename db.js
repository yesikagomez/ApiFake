/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");

module.exports = () => {
  const data = { 
      "usuario": [
        {
          "id": 1,
          "Nombrecompleto": "Isabel Montoya",
          "correo": "yesika.go@hotmail.com",
          "contrasenna": "123456"
        }
      ],
      "formElements": [
        {
          "displayName": "hello",
          "type": "password",
          "required": false,
          "id": "dp3EwFR"
        },
        {
          "displayName": "titulo",
          "type": "text",
          "required": false,
          "value": "",
          "id": "sj0JxVG"
        },
        {
          "displayName": "titulo",
          "type": "textarea",
          "required": false,
          "value": "",
          "id": "9-rcNFc"
    
        }
      ],
      "Formulario": [
        {
          "id": "1",
          "name":"Registro",
          "NameCreate": "Isabel Montoya"
        }
      ]
    }
  };
  return data;
