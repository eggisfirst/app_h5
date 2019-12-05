import { http } from "./http";

export const employeeSales = params => {
  return http({ url: params });
};

export const getCityByDealerBoss = params => {
  return http({ url: params });
};
