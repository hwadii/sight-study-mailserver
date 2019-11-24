const mailjet = require("node-mailjet").connect(
  "0cfcb70e5789a15691fd433c4d75fc00",
  "283db4b296ba835850b9fe6fd4ac8383"
);
module.exports.sendMail = function(email, name, score) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "sightstudyapp@gmail.com",
          Name: "Sight Study"
        },
        To: [
          {
            Email: email
          }
        ],
        Subject: `Résultats de ${name}`,
        HTMLPart: `Le patient ${name} vient d'obtenir le score de <b>${score}</b>.`
      }
    ]
  });
  return request;
}
