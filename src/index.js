import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import utils from './js/utils';

$('#uppercase-form').submit( (e) => {
    e.preventDefault();

    let text = $('#text-to-uppercase').val();

    $('.result').text('Your uppercased text is: ' + utils.toUppercase(text));
} );