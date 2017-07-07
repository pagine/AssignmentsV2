import mongoose from 'mongoose';
import config from 'config'

let obj = config.get('mongodb');
let connectionString = `mongodb://${obj.user}:${obj.password}@${obj.host}:${obj.port}/${obj.db}`;

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
}); 

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

export default mongoose;
