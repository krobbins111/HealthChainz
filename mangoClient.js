const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = "mango2018"
const collectionName = "bills"

const data = {'data' : 'hello, world'} //set func to retrieve bill info

//function getData(name, patientData)
MongoClient.connect(url, function(err, client) {
	let col = client.db(dbName).collection(collectionName)

	col.insert(data)

	client.close()
})

