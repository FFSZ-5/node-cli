export const responseFormatter = (req: any, res: any, next: any) => {
  res.sendResponse = (data: any) => {
    // 格式化响应数据
    let responseData = {
      success: true,
      data: data,
      message: "",
    };
    // 如果data是Error类型，则认为是失败的响应
    if (data instanceof Error) {
      responseData = {
        success: false,
        data: null,
        message: data?.message,
      };
    }
    res.send(responseData);
  };
  next();
};
