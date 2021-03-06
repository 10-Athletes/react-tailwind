// environment.js
const prod = {
    url: {
      BASE_URL: 'https://jwt10.herokuapp.com/'
    }
  };
  const dev = {
   url: {
    BASE_URL: 'http://localhost:3002/'
   }
  };
  export const config = process.env.NODE_ENV === 'development' ? dev : prod;
  