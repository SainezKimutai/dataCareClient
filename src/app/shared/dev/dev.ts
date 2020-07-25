import { HttpHeaders } from '@angular/common/http';

export let secrete = 'secreteDev';
// export let secrete = 'secreteProd';

// Define header
export let header = new HttpHeaders().set(
    'token', `${sessionStorage.getItem('loggedUserToken')}`
  ).set( 'Access-Control-Allow-Origin', '*').set( 'user', `${sessionStorage.getItem('loggedUserID')}`);



// Update Header
export const updateHeader = () => {
  return new Promise((resolve, reject) => {
    header = new HttpHeaders().set(
      'token', `${sessionStorage.getItem('loggedUserToken')}`
    ).set( 'Access-Control-Allow-Origin', '*').set( 'user', `${sessionStorage.getItem('loggedUserID')}`);
    resolve();
  });
};


// ip address pointing the server

export const dev = {
    connect: 'http://localhost:3000/',
    fileConnect: 'http://localhost:3000/',
    secrete: 'secreteDev'
};


// export const dev = {
//   connect: 'http://167.172.26.3:3000/',
//   fileConnect: 'http://167.172.26.3:3000/',
//   secrete: 'secreteProd'
// } ;



export const preauthheader = new HttpHeaders().set('secrete', secrete);



