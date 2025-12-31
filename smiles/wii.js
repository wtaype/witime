
import $ from 'jquery';
import { savels, getls} from './widev.js';

// INFORMACIÓN DEL APP 
export let app = 'WiTime'
export let lanzamiento = 2024;
export let autor = '@wilder.taype';
export let link = 'https://wtaype.github.io/';
export let version = 'v16';

/** ACTUALIZACIÓN PRINCIPAL ONE DEV [START](1)
git add . ; git commit -m "Actualizacion Principal v16.10.11" ; git push origin main

// Actualizar main luego esto, pero si es mucho, solo esto. (2)
git tag v16 -m "Version v16" ; git push origin v16

// En caso de emergencia, para actualizar el Tag existente. (3)
git tag -d v16 ; git tag v16 -m "Version v16 actualizada" ; git push origin v37 --force
 ACTUALIZACION TAG[END] */ 

