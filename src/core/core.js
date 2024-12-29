import config from '../config.js';
import DiTarget from './di-target.js';

let instances = {};



export function getInstance(classRef) {
    let key = classRef.prototype.constructor.name;
    if (!(key in instances)) {
        instances[key] = new classRef(config);
        if (instances[key] instanceof DiTarget) {
            let injection = {};
            for(let x in classRef.requires) {
                injection[x] = getInstance(classRef.requires[x]);
            }
            instances[key].inject(injection);
        }
    }
    return instances[key];

}