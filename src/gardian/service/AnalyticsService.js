import axios from 'axios';

export default class MetadataService {

    getMetadata() {
        return axios.get('assets/demo/data/gardian_pub_metadata.json').then(res => res.data.metadata)}
}
