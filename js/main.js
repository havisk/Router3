import $ from 'jquery';
import _ from 'underscore';

import './ajax_setup';

var appElement = document.querySelector('.app');

var router = new Router(appElement);
router.start();

window.router = router;

console.log('Hello, World');
