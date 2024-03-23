//api统一管理
import requests from "./request";

//三级联动
export const reCategoryList = () => requests({ url: "/api/product/getBaseCategoryList", method:'get' });
