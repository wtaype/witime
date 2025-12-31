
import $ from 'jquery';
import { savels, getls} from './widev.js';

// INFORMACIÓN DEL APP 
export let app = 'WiTime'
export let lanzamiento = 2024;
export let autor = '@wilder.taype';
export let link = 'https://wtaype.github.io/';
export let version = 'v18';

/** ACTUALIZACIÓN PRINCIPAL ONE DEV [START](1)
git add . ; git commit -m "Actualizacion Principal v18.10.12" ; git push origin main

// Actualizar main luego esto, pero si es mucho, solo esto. (2)
git tag v18 -m "Version v18" ; git push origin v18

// En caso de emergencia, para actualizar el Tag existente. (3)
git tag -d v18 ; git tag v18 -m "Version v18 actualizada" ; git push origin v37 --force
 ACTUALIZACION TAG[END] */ 

