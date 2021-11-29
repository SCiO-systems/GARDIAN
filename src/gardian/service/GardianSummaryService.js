import axios from 'axios';

export default class AnalyticsService {

    getAnalytics() {
        return axios.get('assets/demo/data/gardian_analytics.json').then(res => res.data)}
}
