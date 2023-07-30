//Accepts a base64-encoded, gzip-compressed JSON string and returns a parsed JSON object.
import * as zlib from "zlib";
function decompress(str) {
  var compressed = new Buffer(str, "base64");
  var decompressed = zlib.gunzipSync(compressed);
  return JSON.parse(decompressed);
}
