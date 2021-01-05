const structDatas = [
    { handler: 'http', endpoint: 'http://localhost:3000/path', method: 'ALL' },
    { handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
    { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST' }
];
console.table(structDatas);