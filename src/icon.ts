import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, 
  faXmark, 
  faCircleUser, faEnvelope, faEyeSlash, faEye } 
  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export const vueIcons =()=> {
  library.add(faBars, faXmark, faCircleUser, faEnvelope, faEyeSlash, faEye)
}

export const vueComp =  FontAwesomeIcon