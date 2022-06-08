const fs = require("fs");

try {
  fs.unlinkSync("./delete test.txt");
  console.log("successfully deleted delete test.txt");
} 
catch (error)
 {
  console.log(error);
}

const tr = fs.readFileSync("./read test.txt", "utf-8");
console.log(tr);

var soya = "\n Append i am Jaya Vishwakarma.";

fs.appendFile("append CONTENT test.txt", soya, "utf8", function (err) {
  if (err) throw err;
  console.log("soya is appended to file successfully.");
});

let create = "create file";
fs.writeFileSync("create test.txt", create, "utf8");

fs.renameSync("rename test.txt", "new.txt");
console.log("File Renamed.");