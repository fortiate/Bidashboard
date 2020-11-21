const redis = require("redis");
const client = redis.createClient({
  port:48379,
  host:'0.0.0.0'
});
 
// client.on("error", function(error) {
//   console.error(error);
// });
// client.on("connect", function() {
//   console.log("You are now connected");

// });
  client.set("name", "kasturi", redis.print);
let name=client.get("name", redis.print);
console.log(name)