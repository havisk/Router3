import	$ from 'jquery';

const APP_ID = 'KZubsuaEP5mWngRddElnioU22ok9OskFZazZsHeu';
const API_KEY = 'lHBHuvBoNoPpDNxNgHg5Akjey5zLNJswmL7wgAI8';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});