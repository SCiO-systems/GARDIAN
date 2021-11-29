import axios from 'axios';

export default class ResultsService {

    getResults() {
        return axios.get('assets/demo/data/main.json').then(res => res.data);
        console.log(res => res.data);
    }

}
