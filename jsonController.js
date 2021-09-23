const fs = require("fs");
const emoji = require("node-emoji");
const jsonController = (req, res) => {
  let start = Date.now();
  // let finalResult = "";
  let { id, characters } = req.body;
  fs.readFile("./customer.json", "utf8", (err, jsonObj) => {
    if (err) {
      res.send("error occured while reading json", err);
    } else {
      try {
        let data = JSON.parse(jsonObj);
        if (data.hasOwnProperty(id)) {
          let end = Date.now();
          console.log(toJson);
          return res.send(
            " The data is already available" +
              ` <br/> <h1>ur request took about ${
                end - start
              }milliSeconds to response </h1> `
          );
        } else {
          let toJson = {};
          let userData = characters.match(/[a-z]/gi);
          for (let i = 0; i < userData.length; i++) {
            toJson[`${i}`] = userData[i];
          }
          let newdata = {
            [`${id}`]: {
              id: `${id}`,
              characters: toJson,
            },
          };
          let readdata = { ...data, ...newdata };
          let stringify = JSON.stringify(readdata, null, 2);
          fs.writeFileSync("./customer.json", stringify);
        }
        let end = Date.now();
        res
          .status(200)
          .send(
            "data updated successfully" +
              `<br/> <h1>ur request took about ${
                end - start
              } milliSeconds to response </h1>` +
              `<br/><h2> char entered ${characters}</h2> `
          );
      } catch (error) {
        res.send(error);
        console.log(error);
      }
    }
  });
};
module.exports = jsonController;
// function emojiReplacer(userChar) {
//   fs.readFile("./emoji.json", "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const emojiSelected = JSON.parse(data);
//       let cachedValues = [];
//       let cachedKeys = [];
//       for (let i in userChar) {
//         if (emojiSelected.hasOwnProperty(userChar[i].toLowerCase())) {
//           for (let l = 0; l <= 26; l++) {
//             let userCharEqual =
//               userChar[i].toLowerCase() == Object.keys(emojiSelected)[l];
//             if (userCharEqual) {
//               cachedValues.push(Object.values(emojiSelected)[l]);
//               cachedKeys.push(userChar[i]);
//             }
//           }
//         }
//       }
//       if (cachedValues.length == 2) {
//         let replaced = userChar
//           .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//           .replace(cachedKeys[1], emoji.get(cachedValues[1]));
//         console.log(replaced + ` userChar length is ${cachedValues.length}`);
//       } else {
//         if (cachedValues.length == 3) {
//           let replaced = userChar
//             .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//             .replace(cachedKeys[1], emoji.get(cachedValues[1]))
//             .replace(cachedKeys[2], emoji.get(cachedValues[2]));
//           console.log(replaced + ` userChar length is ${cachedValues.length}`);
//         } else {
//           if (cachedValues.length == 4) {
//             let replaced = userChar
//               .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//               .replace(cachedKeys[1], emoji.get(cachedValues[1]))
//               .replace(cachedKeys[2], emoji.get(cachedValues[2]))
//               .replace(cachedKeys[3], emoji.get(cachedValues[3]));
//             console.log(
//               replaced + ` userChar length is ${cachedValues.length}`
//             );
//           } else {
//             if (cachedValues.length == 5) {
//               let replaced = userChar
//                 .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//                 .replace(cachedKeys[1], emoji.get(cachedValues[1]))
//                 .replace(cachedKeys[2], emoji.get(cachedValues[2]))
//                 .replace(cachedKeys[3], emoji.get(cachedValues[3]))
//                 .replace(cachedKeys[4], emoji.get(cachedValues[4]));
//               console.log(
//                 replaced + ` userChar length is ${cachedValues.length}`
//               );
//             } else {
//               if (cachedValues.length == 6) {
//                 let replaced = userChar
//                   .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//                   .replace(cachedKeys[1], emoji.get(cachedValues[1]))
//                   .replace(cachedKeys[2], emoji.get(cachedValues[2]))
//                   .replace(cachedKeys[3], emoji.get(cachedValues[3]))
//                   .replace(cachedKeys[4], emoji.get(cachedValues[4]))
//                   .replace(cachedKeys[5], emoji.get(cachedValues[5]));
//                 console.log(
//                   replaced + ` userChar length is ${cachedValues.length}`
//                 );
//               } else {
//                 if (cachedValues.length == 7) {
//                   let replaced = userChar
//                     .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//                     .replace(cachedKeys[1], emoji.get(cachedValues[1]))
//                     .replace(cachedKeys[2], emoji.get(cachedValues[2]))
//                     .replace(cachedKeys[3], emoji.get(cachedValues[3]))
//                     .replace(cachedKeys[4], emoji.get(cachedValues[4]))
//                     .replace(cachedKeys[5], emoji.get(cachedValues[5]))
//                     .replace(cachedKeys[6], emoji.get(cachedValues[6]));
//                   console.log(
//                     replaced + ` userChar length is ${cachedValues.length}`
//                   );
//                 } else {
//                   if (cachedValues.length == 8) {
//                     let replaced = userChar
//                       .replace(cachedKeys[0], emoji.get(cachedValues[0]))
//                       .replace(cachedKeys[1], emoji.get(cachedValues[1]))
//                       .replace(cachedKeys[2], emoji.get(cachedValues[2]))
//                       .replace(cachedKeys[3], emoji.get(cachedValues[3]))
//                       .replace(cachedKeys[4], emoji.get(cachedValues[4]))
//                       .replace(cachedKeys[5], emoji.get(cachedValues[5]))
//                       .replace(cachedKeys[6], emoji.get(cachedValues[6]))
//                       .replace(cachedKeys[7], emoji.get(cachedValues[7]));
//                     finalResult +=
//                       replaced + ` characters length is ${cachedValues.length}`;
//                     console.log(finalResult);
//                   } else {
//                     console.log(
//                       "not in range!  plzz enter string with  userChar ranging b/n (2-7)"
//                     );
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//       //console.log(cachedValues);
//       // console.log(cachedKeys);
//     }
//   });
// }
