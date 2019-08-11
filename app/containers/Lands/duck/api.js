import API from '../../../api';

class LandsApi extends API {
  index = params =>
    this.httpClient()
      .get(`addresses/${params.id}/${this.className}`, { params })
      .then(response => response)
      .catch(err => {
        throw err.response;
      });

  show = params =>
    this.httpClient()
      .get(`lands/${params.id}`, { params })
      .then(response => response)
      .catch(err => {
        throw err.response;
      });
}

export default new LandsApi('lands');
