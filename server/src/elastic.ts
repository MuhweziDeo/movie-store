import {Client} from '@elastic/elasticsearch';

import { ELASTIC_PASSWORD, ELASTIC_CLOUD_ID, ELASTIC_USERNAME } from './config';

export const elasticClient = new Client({
    cloud: { id: ELASTIC_CLOUD_ID},
    auth: { username: ELASTIC_USERNAME, password: ELASTIC_PASSWORD}
})

// console.log(elasticClient.info().then(console.log).catch((e) => {
//     console.log(e.body);
// }));