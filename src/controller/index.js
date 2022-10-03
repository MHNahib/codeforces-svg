const index = (req, res) => {
  res.status(200).send({
    status: true,
    data: {
      dev: "M. H. Nahib",
      description: "Hello World! Enjoy the CODEFORCES RATING SVG 😁",
    },
    message: "OK",
  });
};

module.exports = index;
