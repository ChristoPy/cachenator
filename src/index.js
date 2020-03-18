module.exports = (() => {

    const MILLISECONDS_IN_A_DAY = 86400000;
    
    const $data = {};
    let $cacheName = '';
    
    
    return class Cachenator {
        constructor(name) {
            $data[name] = {};
            $cacheName = name;
        }
    
        set(key, value, timeToLive = MILLISECONDS_IN_A_DAY) {
            if ($data[$cacheName][key]) {
                clearTimeout($data[$cacheName][key].timer);
            }
            $data[$cacheName][key] = {
                timer: setTimeout(() => delete $data[$cacheName][key], timeToLive),
                value,
            };
        }
    
        get(key) {
            const cachedData = $data[$cacheName][key];
            if (cachedData) {
                return cachedData.value;
            }
            return null;
        }
    
        get name() {
            return $cacheName;
        }
    }
    
})();
