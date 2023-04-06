import Axios from 'axios';

const apiRequest = (payload) => {
  console.log(payload);
  let config = {
    method: payload.method,
    url: `${process.env.REACT_APP_API_URL}${payload.url}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`,
    },
    data: payload.data,
  };

  return Axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export default apiRequest;
