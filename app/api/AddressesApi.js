/* eslint-disable quotes */
import BaseApi from './BaseApi';
export default class AddressesApi extends BaseApi {
  getAddressNames = params =>
    this.httpClient()
      .get(`${this.className}/address_names`, { params })
      .then(response => response.data)
      .catch(err => {
        throw err.response;
      });
}
