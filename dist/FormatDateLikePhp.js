"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormatDateLikePhp = function (format, date) {
    if (!date || date === '') {
        date = new Date();
    }
    else if (typeof ('date') !== 'object') {
        date = new Date(date.replace(/-/g, '/')); // attempt to convert string to date object
    }
    var string = '';
    var mo = date.getMonth(); // month (0-11)
    var m1 = mo + 1; // month (1-12)
    var dow = date.getDay(); // day of week (0-6)
    var d = date.getDate(); // day of the month (1-31)
    var y = date.getFullYear(); // 1999 or 2003
    var h = date.getHours(); // hour (0-23)
    var mi = date.getMinutes(); // minute (0-59)
    var s = date.getSeconds(); // seconds (0-59)
    for (var i = 0, len = format.length; i < len; i++) {
        switch (format[i]) {
            case 'j': // Day of the month without leading zeros  (1 to 31)
                string += d;
                break;
            case 'd': // Day of the month, 2 digits with leading zeros (01 to 31)
                string += (d < 10) ? "0".concat(d) : d;
                break;
            case 'l': // (lowercase 'L') A full textual representation of the day of the week
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                string += days[dow];
                break;
            case 'w': // Numeric representation of the day of the week (0=Sunday,1=Monday,...6=Saturday)
                string += dow;
                break;
            case 'D': // A textual representation of a day, three letters
                days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
                string += days[dow];
                break;
            case 'm': // Numeric representation of a month, with leading zeros (01 to 12)
                string += (m1 < 10) ? "0".concat(m1) : m1;
                break;
            case 'n': // Numeric representation of a month, without leading zeros (1 to 12)
                string += m1;
                break;
            case 'F': // A full textual representation of a month, such as January or March
                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                string += months[mo];
                break;
            case 'M': // A short textual representation of a month, three letters (Jan - Dec)
                months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                string += months[mo];
                break;
            case 'Y': // A full numeric representation of a year, 4 digits (1999 OR 2003)
                string += y;
                break;
            case 'y': // A two digit representation of a year (99 OR 03)
                string += y.toString().slice(-2);
                break;
            case 'H': // 24-hour format of an hour with leading zeros (00 to 23)
                string += (h < 10) ? "0".concat(h) : h;
                break;
            case 'g': // 12-hour format of an hour without leading zeros (1 to 12)
                var hour = (h === 0) ? 12 : h;
                string += (hour > 12) ? hour - 12 : hour;
                break;
            case 'h': // 12-hour format of an hour with leading zeros (01 to 12)
                hour = (h === 0) ? 12 : h;
                hour = (hour > 12) ? hour - 12 : hour;
                string += (hour < 10) ? "0".concat(hour) : hour;
                break;
            case 'a': // Lowercase Ante meridiem and Post meridiem (am or pm)
                string += (h < 12) ? 'am' : 'pm';
                break;
            case 'i': // Minutes with leading zeros (00 to 59)
                string += (mi < 10) ? "0".concat(mi) : mi;
                break;
            case 's': // Seconds, with leading zeros (00 to 59)
                string += (s < 10) ? "0".concat(s) : s;
                break;
            case 'c': // ISO 8601 date (eg: 2012-11-20T18:05:54.944Z)
                string += date.toISOString();
                break;
            default:
                string += format[i];
        }
    }
    return string;
};
exports.default = FormatDateLikePhp;
