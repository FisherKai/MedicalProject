import ajax from './ajax';

export const login = async (username, password) => ajax('/user/login', { username, password }, 'POST');
export const register = async (username, password) => ajax('/user/register', { username, password }, 'POST');
export const getAllUser = async () => ajax('/index/getUser', {}, 'GET')