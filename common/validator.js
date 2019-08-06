/**
 * 验证邮箱地址
 *
 * @param   {String}  email  邮箱字符串
 * @return  {Boolean}           
 */
function isEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email)
}