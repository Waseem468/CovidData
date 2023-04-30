const {MongoClient}=require("mongodb");

const url="mongodb+srv://covidStat:covid123@cluster0.ubzters.mongodb.net/?retryWrites=true&w=majority" + "/covidtally"

const client=new MongoClient(url);
const database='covid'

async function dbcollection()
{
    let result=await client.connect();
    let db=result.db(database);
    return db.collection("covidtally");

}
module.exports=dbcollection;
