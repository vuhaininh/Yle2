import reduxApi, {transformers} from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";
import "isomorphic-fetch";
import {SELECT_FIRST_AUDIO} from '../actions';
const APP_ID = '7d027e13';
const APP_KEY = '88e86f19ddfcb0ee4f0a996fc74d8658';
const MEDIA_TYPE = 'audio';
const CORS_URL = `http://cors-anywhere.herokuapp.com/`; // Yle api has problem with CORS to fetch data.
const YLE_URL = `https://external.api.yle.fi/v1/programs/`;
export default reduxApi({
    audios: {
      url: `${CORS_URL}${YLE_URL}items.json?q=:term&mediaobject=${MEDIA_TYPE}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      broadcast: [SELECT_FIRST_AUDIO]
    }
}).use("fetch",adapterFetch(fetch));
