import $ from 'jquery';

//FUNCIÓN PARA SUBIR IMAGENES
const mstyles = ':root{--bgim:url("https://d35aaqx5ub95lt.cloudfront.net/images/star-pattern.svg")}.hd{background:var(--bgim),linear-gradient(to bottom,var(--bg9),var(--bg10))}';        
$('head').append(`<style>${mstyles}</style> `);
$('.lpx').html('<img width="600" height="400" alt="Dios es bueno" src="https://i.postimg.cc/W1LZ2Try/Dios-Es-Bueno.webp"/>');
