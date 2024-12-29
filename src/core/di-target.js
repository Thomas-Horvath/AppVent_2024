class DiTarget {
    inject(instances) {
        for (let key in instances) {
            this[key] = instances[key];
        }
    }
}

export default DiTarget;