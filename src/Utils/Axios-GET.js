/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import axios from "./Axios";

// const axios = require('axios');

axios.get('http://webcode.me')
  .then(resp => {
    console.log(resp.data);
  }) 

