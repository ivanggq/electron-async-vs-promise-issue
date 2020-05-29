const { app } = require('electron');

const f1 = async () => {
    throw 'oops';
}

const f2 = () => {
    return new Promise((_, reject) => {
        reject('oops');
    });
}

const f3 = async () => {
    return new Promise((_, reject) => {
        reject('oops');
    });
}

setTimeout(() => {
    f1().catch((error) => {
        console.log('1 caught', error);
    });
}, 1000);

setTimeout(() => {
    f2().catch((error) => {
        console.log('2 caught', error);
    });
}, 2000);

setTimeout(() => {
    f3().catch((error) => {
        console.log('3 caught', error);
    });
}, 3000);

setTimeout(() => app.exit(), 4000);
