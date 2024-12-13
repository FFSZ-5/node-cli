import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { responseFormatter } from "./utils/response";
import userRouter from "./router/user";

const init = async () => {
  const app = express();
  //跨域配置
  app.use(responseFormatter);
  // 解析application/x-www-form-urlencoded数据格式
  app.use(bodyParser.urlencoded({ extended: true }));

  // 解析json数据格式
  app.use(bodyParser.json());

  //解析 text/plain 数据格式
  app.use(bodyParser.text());
  app.use(cors());
  app.use(express.json());
  app.use(express.static("public"));
  //解析表单数据:application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));
  app.use("/api", userRouter);
  app.listen(3007, () => {
    console.log("lfsz", "start 3007");
  });
};

init();
