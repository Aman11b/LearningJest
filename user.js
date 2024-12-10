const fetchData=require('./api');

function getUserData(userId){
    const data=fetchData();
    return `User ${userId}:${data}`;
}

module.exports=getUserData;