/*
 * @Author: Zhuyuhan
 * @Date: 2020-07-22 11:39:42
 * @Last Modified by: Zhuyuhan
 * @Last Modified time: 2020-07-22 12:28:34
 */
import axios from "axios";

/**
 * http://175.24.57.96:90/consumer/etc/getAll
 * 查询所有etc
 */
export async function getAllEtc() {
  var res = await axios.get("/consumer/etc/getAll");
  return res.data;
}

/**
 * http://175.24.57.96:90/consumer/etc/getByState/{state}
 * 按状态查询etc 1为待审核 2为审核通过
 */

export async function getByState(state) {
  var res = await axios.get(`/consumer/etc/getByState/${state}`);
  return res.data;
}

/**
 * http://175.24.57.96:90/consumer/etc/updateState
 * 审核通过，更新etc状态
 *
 */
export async function updateState(ETC) {
  var res = await axios.get("/consumer/etc/updateState", {
    params: {
      car: ETC.car,
    },
  });
  return res.data;
}
