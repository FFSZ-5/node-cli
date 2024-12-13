import db from "../db/index";

export const login = async (req: any, res: any, next: any) => {
  const data = await (await db?.find?.("users"))?.toArray?.();
  res.sendResponse(data);
};
export const regUser = (req: any, res: any) => {
  console.log("lfsz3", req.body.a);

  res.sendResponse("reguser");
};
