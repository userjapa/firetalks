'use strict';

import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import angularCookies from 'angular-cookies'
import angularfire from 'angularfire'
import run from './config/run'
import router from './config/routes'
import loginCtrl from './controller/login.controller'
import loginServ from './service/login.service'
import talkCtrl from './controller/talk.controller'
import talkServ from './service/talk.service'

export default angular.module('Main', ['ui.router', 'firebase', 'ngCookies'])
    .config(router)
    .run(run)
    .controller('LoginCtrl', loginCtrl)
    .service('LoginServ', loginServ)
    .controller('TalkCtrl', talkCtrl)
    .service('TalkServ', talkServ)