import API from '../../../api';

class LandsApi extends API {
  show = params =>
    this.httpClient()
      .get(`lands/${params.id}`, { params })
      .then(response => response)
      .catch(err => {
        throw err.response;
      });
}

export default new LandsApi('lands');
