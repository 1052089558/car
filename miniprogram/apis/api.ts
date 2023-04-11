import fly from '../common/js/request';
const api = {
   getLogin: (data) => fly.post('/app/login', data),
};

export default api;
