/**
 * 将 Date 格式化为 yyyy-MM-dd
 *
 * @param   {Date}  date  时间对象
 * @return  {String}      时间字符串
 */
function formatDate(date) {
    return date.getFullYear() + '-' +
        ('00' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2)
}

/**
 * 将 Date 格式化为 yyyy-MM-dd HH:ii:ss
 *
 * @param   {Date}  date  时间对象
 * @return  {String}      时间字符串
 */
function formateTime(date) {
    return formatDate(date) + ' ' +
        ('00' + date.getHours()).slice(-2) + ':' +
        ('00' + date.getMinutes()).slice(-2) + ':' +
        ('00' + date.getSeconds()).slice(-2)
}

function addDay(n) {
    var now = new Date()
    return new Date(now.getTime() + (Number.parseInt(n) * (24 * 60 * 60 * 1000)))
}

function getDayName(d) {
    const weekDayMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return weekDayMap[d.getDay()]
}