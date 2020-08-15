/**
 * stroage的封装, sessionStroage 会话存储
 * */
const STORAGE_KEY = 'mall';

export default {
  /**
   * setItem(key,val) 添加设置新值
   * setItem(key,val) 当key为已存在的key时,覆盖原来key对应的值
   * setItem(key,val, module_name) 当key为新值,module_name为原来key值,会在原来key的值内新增key对应的值
   * */
  setItem(key, value, module_name) {
    if (module_name) {
      let _val = this.getItem(module_name);
      _val[key] = value;
      this.setItem(module_name, _val);
    } else {
      let _val = this.getStroage();
      _val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(_val));
    }
  },

  // 获取值
  getItem(key, module_name) {
    if (module_name) {
      let _val = this.getItem(module_name);
      if (_val) return  _val[key];
    }
    return this.getStroage()[key];
  },

  // 获取session内的指定key下的全部数据
  getStroage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  // 清空某一个数据
  clear(key, module_name) {
    let _val = this.getStroage();
    if (module_name) {
      if (!_val[module_name]) return;
      delete _val[module_name][key];
    } else {
      delete _val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(_val));
  }
}
