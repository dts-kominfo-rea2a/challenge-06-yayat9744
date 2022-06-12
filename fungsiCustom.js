// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let data = [];
  fs.readFile(file1, "utf-8", (err, data1) => {
    if (err) return fnCallback(err);
    data.push(pemisahKata(JSON.parse(data1)));
    fs.readFile(file2, "utf-8", (err, data2) => {
      if (err) return fnCallback(err);
      data.push(pemisahKata(JSON.parse(data2)[0]));
      fs.readFile(file3, "utf-8", (err, data3) => {
        if (err) return fnCallback(err);
        data.push(pemisahKata(JSON.parse(data3)[0].data));
        fnCallback(null, data);
      });
    });
  });
};
const pemisahKata = (data) => {
  let _data = data.message.split(" ");
  return _data[1];
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
