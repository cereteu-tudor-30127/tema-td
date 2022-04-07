var api = require("./api").app;
var hamming = require("./hamming");

api.put("/message", function (request, response) {
  var bits = request.body.bits;

  var decoded = hamming.decode(bits);
  if (decoded.errorCorrected) {
    response.json("One error corrected on positon" + decoded.errorPosition);
  }
  response.json("Message received without errors");
});

api.listen(3000, function () {
  console.log("Server running on port 3000");
});

function disortBit(bits, index) {
  bits[index] = (bits[index] + 1) % 2;
  return bits;
}
