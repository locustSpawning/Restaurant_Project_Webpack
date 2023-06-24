import _ from 'lodash';

console.log('whaaat?');

function component() {
    const element = document.createElement('div');
    const Home = document.createElement('button');
  
     // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    Home.innerHTML = (['Home']);
  
    return Home;
  }
  
  document.body.appendChild(component());