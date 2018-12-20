// http://rm.elidev.info/api/v1
/* eslint-disable */
const APIHOST = 'http://rm.elidev.info/api/'
const API_VERSION = 'v1/'
const API_CONFIG = APIHOST + API_VERSION
export const API_URL = {
  'LOGIN': API_CONFIG + 'users/login',
  'DB_CONNECTIONS': API_CONFIG + 'database/connections',
  'REFRESH_TOKEN': API_CONFIG + 'users/refresh_token',
  'LOGOUT': API_CONFIG + 'users/logout',
  'USER': API_CONFIG + 'users/current',
  'GET_PROJECT': API_CONFIG + 'projects',
  'PROJECT_TAGS': API_CONFIG + 'projects/',
  'USER_ROLES': API_CONFIG + 'roles',
  'GET_USER': API_CONFIG + 'users',
  'GET_USER_PROJECTS': API_CONFIG + 'users/',
  'GET_PROJ_MEMBER_INFO': API_CONFIG + 'projects/',
  'GET_PROJ_MEMBER_MULTI_INFO': API_CONFIG + 'multi/projects',
  'GET_PROJ_MEMBER_ISSUES': API_CONFIG + 'projects/',
  'GET_USER_DAYOFF': API_CONFIG + 'users/day-off',
  'GET_NOTIF': API_CONFIG + 'notifications',
  'GET_USER_FILTER': API_CONFIG + 'filter-fields/members',
  'CURRENT_USER': API_CONFIG + 'users/current',
  'GET_SKILLS': API_CONFIG + 'skills',
  'GET_USER_DETAIL': API_CONFIG + 'users/',
  'GET_SAVE_FILTER' : API_CONFIG + 'filters-stored/',
  'GET_DAY_OFF': API_CONFIG + 'settings',
  'UPDATE_DAY_OFF': API_CONFIG + 'settings/days_off/',
  'CREATE_DAY_OFF': API_CONFIG + 'settings/days_off',
  'DELETE_DAY_OFF': API_CONFIG + 'settings/days_off/',
  'CREATE_USER_DAY_OFF': API_CONFIG + 'users/day-off' ,
  'DELETE_USER_DAY_OFF': API_CONFIG + 'users/day-off',
  'GET_DIAGRAM': API_CONFIG + 'users/diagrams/',
  'GET_NOTIFY_LIST': API_CONFIG + 'notifications',
  'IS_READ_NOTIFICATION': API_CONFIG + 'notifications',
  'PROJECT_MEMBERS': API_CONFIG + 'projects/$project_id/members',
  'USER_PROJECTS': API_CONFIG + 'users/$user_id/projects',
}

export const APP_CONFIG = {
  'client_id': '1',
  'client_secret': '4c7f6f8fa93d59c45502c0ae8c4a95b',
  'grant_type': 'rm_validate'
}

export function paraGen (options, url) {
  let result = ''

  for (let key in options) {
    if (options[key]) {
      result += '&' + key + '=' + options[key]
    }
  }
  result = '?' + result.substring(result.indexOf('&') + 1)
  result = result.replace(' ', '%20')
  return url + result
}

export default API_URL
