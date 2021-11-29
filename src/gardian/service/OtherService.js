import axios from 'axios';

export default class FilterService {

    getFilter() {
        return axios.get('assets/demo/data/main.json').then(res => res.data);
    }

}
