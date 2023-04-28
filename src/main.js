import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import bootstrap from '/node_modules/bootstrap/scss/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
library.add(faInstagram, faLinkedinIn, faFacebookF, faTwitter, faComment)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
