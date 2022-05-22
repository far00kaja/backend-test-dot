const redis = require("redis");
//connect to redis
const client = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);
client.connect();
client.on("connect", function () {
  console.log("Redis Connected!");
});

client.on("error", function (err) {
  console.log("Error! : ", err.code);
});

// client.set("framework", "ReactJS");
// client.set("framework", "ReactJS", function (err, reply) {
//   console.log(err);
//   console.log(reply); // OK
// });
// client.setEx("contoh", 1, "ini adalah contoh", function (err, rep) {
//   console.log(err);
//   console.log(rep);
// });
// client.get("framework", function (err, reply) {
//   console.log(reply); // ReactJS
// });
module.exports=client