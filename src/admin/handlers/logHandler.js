const {
    createLogger,
    format,
    transports
  } = require("winston");
  const wlogger = createLogger({
    transports: [
    //   new transports.MongoDB({
    //     db: process.env.ENV.MONGODB_URI,
    //     level: 'silly',
    //     options: {
    //       useUnifiedTopology: true
    //     }
    //   }),
      new transports.File({
        filename: `${process.env.ENV}/error.log`,
        level: "error",
        format: format.combine(format.timestamp(), format.json())
      }),
      new transports.File({
        filename: `${process.env.ENV}/info.log`,
        level: "info",
        format: format.combine(format.timestamp(), format.json())
      }),
      new transports.File({
        filename: `${process.env.ENV}/warn.log`,
        level: "warn",
        format: format.combine(format.timestamp(), format.json())
      }),
      new transports.File({
        filename: `${process.env.ENV}/debug.log`,
        level: "debug",
        format: format.combine(format.timestamp(), format.json())
      }),
    ]
  });
  module.exports = wlogger;