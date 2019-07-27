/* eslint-disable quotes */
import BaseApi from './BaseApi';
class AddressesApi extends BaseApi {
  getAddressNames = params =>
    this.httpClient()
      .get(`${this.className}/address_names`, { params })
      .then(response => response.data)
      .catch(err => {
        throw err.response;
      });
}

export default new AddressesApi('addresses');
