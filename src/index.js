import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import './App.css';
// import AppTalha from './App-talha';
// import AppMishkat from './App-mishkat';
// import App from './App_first_from_ninja_tuto';
// import App from './App_initial_props';
// import App from './App_props_with_list';
// import App from './App_functional_component';
// import App from './App_conditional_rendering';
// import App from './formData/App_add';
// import App from './addData/App_add';
import App from './deleteData/App';



import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AppTalha />, document.getElementById('root-talha'));
// ReactDOM.render(<AppMishkat />, document.getElementById('root-mishkat'));

serviceWorker.unregister();
