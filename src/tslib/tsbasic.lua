-- typescript基础类型方法的重新实现

-- Array 方法实现
Array = {}

--- 数组映射
---@param tbl table 数组
---@param callback function 回调函数 (value, index, table) -> any
---@return table 新数组
function Array.map(tbl, callback)
    local newTbl = {}
    for i = 1, #tbl do
        newTbl[i] = callback(tbl[i], i, tbl)
    end
    return newTbl
end

--- 数组过滤
---@param tbl table 数组
---@param callback function 回调函数 (value, index, table) -> boolean
---@return table 新数组
function Array.filter(tbl, callback)
    local newTbl = {}
    for i = 1, #tbl do
        if callback(tbl[i], i, tbl) then
            table.insert(newTbl, tbl[i])
        end
    end
    return newTbl
end

--- 数组归约
---@param tbl table 数组
---@param callback function 回调函数 (accumulator, currentValue, index, table) -> any
---@param initialValue any? 初始值
---@return any 结果
function Array.reduce(tbl, callback, initialValue)
    local accumulator = initialValue or tbl[1]
    local startIndex = initialValue and 1 or 2
    
    for i = startIndex, #tbl do
        accumulator = callback(accumulator, tbl[i], i, tbl)
    end
    
    return accumulator
end

--- 数组遍历
---@param tbl table 数组
---@param callback function 回调函数 (value, index, table)
function Array.forEach(tbl, callback)
    for i = 1, #tbl do
        callback(tbl[i], i, tbl)
    end
end

--- 查找元素
---@param tbl table 数组
---@param callback function 回调函数 (value, index, table) -> boolean
---@return any|nil 找到的元素
function Array.find(tbl, callback)
    for i = 1, #tbl do
        if callback(tbl[i], i, tbl) then
            return tbl[i]
        end
    end
    return nil
end

--- 检查是否至少有一个元素满足条件
---@param tbl table 数组
---@param callback function 回调函数 (value, index, table) -> boolean
---@return boolean 结果
function Array.some(tbl, callback)
    for i = 1, #tbl do
        if callback(tbl[i], i, tbl) then
            return true
        end
    end
    return false
end

--- 检查是否所有元素满足条件
---@param tbl table 数组
---@param callback function 回调函数 (value, index, table) -> boolean
---@return boolean 结果
function Array.every(tbl, callback)
    for i = 1, #tbl do
        if not callback(tbl[i], i, tbl) then
            return false
        end
    end
    return true
end

--- 检查是否包含元素
---@param tbl table 数组
---@param value any 要查找的值
---@return boolean 是否包含
function Array.includes(tbl, value)
    for i = 1, #tbl do
        if tbl[i] == value then
            return true
        end
    end
    return false
end

--- 连接数组
---@param tbl table 数组
---@param ... any 要连接的元素或数组
---@return table 新数组
function Array.concat(tbl, ...)
    local newTbl = {}
    for i = 1, #tbl do
        table.insert(newTbl, tbl[i])
    end
    
    local args = {...}
    for _, arg in ipairs(args) do
        if type(arg) == "table" then
            for j = 1, #arg do
                table.insert(newTbl, arg[j])
            end
        else
            table.insert(newTbl, arg)
        end
    end
    
    return newTbl
end

--- 数组切片
---@param tbl table 数组
---@param start integer? 起始索引
---@param finish integer? 结束索引
---@return table 新数组
function Array.slice(tbl, start, finish)
    start = start or 1
    finish = finish or #tbl
    
    if start < 0 then start = #tbl + start + 1 end
    if finish < 0 then finish = #tbl + finish + 1 end
    
    local newTbl = {}
    for i = start, finish do
        table.insert(newTbl, tbl[i])
    end
    return newTbl
end

--- 查找元素索引
---@param tbl table 数组
---@param value any 要查找的值
---@param fromIndex integer? 起始索引
---@return integer|nil 索引位置
function Array.indexOf(tbl, value, fromIndex)
    fromIndex = fromIndex or 1
    for i = fromIndex, #tbl do
        if tbl[i] == value then
            return i
        end
    end
    return nil
end

--- 数组转字符串
---@param tbl table 数组
---@param separator string? 分隔符
---@return string 字符串
function Array.join(tbl, separator)
    separator = separator or ","
    local result = ""
    for i = 1, #tbl do
        if i > 1 then
            result = result .. separator
        end
        result = result .. tostring(tbl[i])
    end
    return result
end

--- 数组反转
---@param tbl table 数组
---@return table 新数组
function Array.reverse(tbl)
    local newTbl = {}
    for i = #tbl, 1, -1 do
        table.insert(newTbl, tbl[i])
    end
    return newTbl
end

--- 数组排序
---@param tbl table 数组
---@param compare function? 比较函数 (a, b) -> boolean
---@return table 排序后的数组
function Array.sort(tbl, compare)
    if compare then
        table.sort(tbl, function(a, b) 
            return compare(a, b) 
        end)
    else
        table.sort(tbl)
    end
    return tbl
end

--- 填充数组
---@param tbl table 数组
---@param value any 填充值
---@param start integer? 起始索引
---@param finish integer? 结束索引
---@return table 填充后的数组
function Array.fill(tbl, value, start, finish)
    start = start or 1
    finish = finish or #tbl
    
    if start < 0 then start = #tbl + start + 1 end
    if finish < 0 then finish = #tbl + finish + 1 end
    
    for i = start, finish do
        tbl[i] = value
    end
    return tbl
end

--- 添加元素到数组末尾
---@param tbl table 数组
---@param ... any 要添加的元素
---@return integer 新数组长度
function Array.push(tbl, ...)
    local args = {...}
    for _, value in ipairs(args) do
        table.insert(tbl, value)
    end
    return #tbl
end

--- 移除数组最后一个元素
---@param tbl table 数组
---@return any 被移除的元素
function Array.pop(tbl)
    return table.remove(tbl)
end

--- 移除数组第一个元素
---@param tbl table 数组
---@return any 被移除的元素
function Array.shift(tbl)
    return table.remove(tbl, 1)
end

--- 添加元素到数组开头
---@param tbl table 数组
---@param ... any 要添加的元素
---@return integer 新数组长度
function Array.unshift(tbl, ...)
    local args = {...}
    for i = #args, 1, -1 do
        table.insert(tbl, 1, args[i])
    end
    return #tbl
end

--- 删除或替换数组元素
---@param tbl table 数组
---@param start integer 起始索引
---@param deleteCount integer? 删除数量
---@param ... any? 要插入的元素
---@return table 被删除的元素
function Array.splice(tbl, start, deleteCount, ...)
    start = start < 0 and #tbl + start + 1 or start
    deleteCount = deleteCount or #tbl - start + 1
    
    local deleted = {}
    for i = start, start + deleteCount - 1 do
        if i <= #tbl then
            table.insert(deleted, tbl[i])
            tbl[i] = nil
        end
    end
    
    -- 插入新元素
    local insertValues = {...}
    if #insertValues > 0 then
        for i = #insertValues, 1, -1 do
            table.insert(tbl, start, insertValues[i])
        end
    end
    
    -- 压缩表
    local j = 1
    for i = 1, #tbl do
        if tbl[i] ~= nil then
            tbl[j] = tbl[i]
            j = j + 1
        end
    end
    for i = j, #tbl do
        tbl[i] = nil
    end
    
    return deleted
end

-- String 方法实现
String = {}

--- 获取指定位置的字符
---@param str string 字符串
---@param index integer 索引
---@return string 字符
function String.charAt(str, index)
    return string.sub(str, index, index)
end

--- 获取指定位置字符的编码
---@param str string 字符串
---@param index integer 索引
---@return integer 字符编码
function String.charCodeAt(str, index)
    return string.byte(str, index)
end

--- 连接字符串
---@param str string 字符串
---@param ... string 要连接的字符串
---@return string 新字符串
function String.concat(str, ...)
    local args = {...}
    for _, s in ipairs(args) do
        str = str .. s
    end
    return str
end

--- 检查是否以指定字符串结尾
---@param str string 字符串
---@param searchString string 要查找的字符串
---@param length integer? 长度
---@return boolean 是否以指定字符串结尾
function String.endsWith(str, searchString, length)
    length = length or #str
    local endStr = string.sub(str, length - #searchString + 1, length)
    return endStr == searchString
end

--- 检查是否包含子字符串
---@param str string 字符串
---@param searchString string 要查找的字符串
---@param position integer? 起始位置
---@return boolean 是否包含
function String.includes(str, searchString, position)
    position = position or 1
    return string.find(str, searchString, position, true) ~= nil
end

--- 查找子字符串位置
---@param str string 字符串
---@param searchString string 要查找的字符串
---@param fromIndex integer? 起始位置
---@return integer|nil 位置索引
function String.indexOf(str, searchString, fromIndex)
    fromIndex = fromIndex or 1
    local start = string.find(str, searchString, fromIndex, true)
    return start
end

--- 从后往前查找子字符串位置
---@param str string 字符串
---@param searchString string 要查找的字符串
---@param fromIndex integer? 起始位置
---@return integer|nil 位置索引
function String.lastIndexOf(str, searchString, fromIndex)
    fromIndex = fromIndex or #str
    local lastIndex = nil
    local start = 1
    
    while true do
        start = string.find(str, searchString, start, true)
        if not start or start > fromIndex then
            break
        end
        lastIndex = start
        start = start + 1
    end
    
    return lastIndex
end

--- 匹配正则表达式
---@param str string 字符串
---@param pattern string 正则表达式
---@return string|nil 匹配结果
function String.match(str, pattern)
    return string.match(str, pattern)
end

--- 填充字符串到指定长度
---@param str string 字符串
---@param targetLength integer 目标长度
---@param padString string? 填充字符串
---@return string 新字符串
function String.padEnd(str, targetLength, padString)
    padString = padString or " "
    local currentLength = #str
    if currentLength >= targetLength then
        return str
    end
    
    local padLength = targetLength - currentLength
    local pad = string.rep(padString, math.ceil(padLength / #padString))
    return str .. string.sub(pad, 1, padLength)
end

--- 填充字符串到指定长度（开头）
---@param str string 字符串
---@param targetLength integer 目标长度
---@param padString string? 填充字符串
---@return string 新字符串
function String.padStart(str, targetLength, padString)
    padString = padString or " "
    local currentLength = #str
    if currentLength >= targetLength then
        return str
    end
    
    local padLength = targetLength - currentLength
    local pad = string.rep(padString, math.ceil(padLength / #padString))
    return string.sub(pad, 1, padLength) .. str
end

--- 重复字符串
---@param str string 字符串
---@param count integer 重复次数
---@return string 新字符串
function String.rep(str, count)
    return string.rep(str, count)
end

--- 替换子字符串
---@param str string 字符串
---@param searchValue string 要替换的字符串
---@param replaceValue string 替换字符串
---@return string 新字符串
function String.replace(str, searchValue, replaceValue)
    return string.gsub(str, searchValue, replaceValue)
end

--- 搜索子字符串位置
---@param str string 字符串
---@param pattern string 正则表达式
---@return integer|nil 位置索引
function String.search(str, pattern)
    local start = string.find(str, pattern)
    return start
end

--- 截取子字符串
---@param str string 字符串
---@param startIndex integer 起始索引
---@param endIndex integer? 结束索引
---@return string 子字符串
function String.slice(str, startIndex, endIndex)
    endIndex = endIndex or #str
    return string.sub(str, startIndex, endIndex)
end

--- 分割字符串
---@param str string 字符串
---@param separator string? 分隔符
---@param limit integer? 分割数量限制
---@return table 分割后的数组
function String.split(str, separator, limit)
    separator = separator or ""
    local result = {}
    local pattern = separator == "" and "." or string.format("[^%s]+", separator)
    
    for match in string.gmatch(str, pattern) do
        table.insert(result, match)
        if limit and #result >= limit then
            break
        end
    end
    
    return result
end

--- 检查是否以指定字符串开头
---@param str string 字符串
---@param searchString string 要查找的字符串
---@param position integer? 起始位置
---@return boolean 是否以指定字符串开头
function String.startsWith(str, searchString, position)
    position = position or 1
    local startStr = string.sub(str, position, position + #searchString - 1)
    return startStr == searchString
end

--- 截取子字符串
---@param str string 字符串
---@param startIndex integer 起始索引
---@param endIndex integer? 结束索引
---@return string 子字符串
function String.substring(str, startIndex, endIndex)
    endIndex = endIndex or #str
    return string.sub(str, startIndex, endIndex)
end

--- 转换为小写
---@param str string 字符串
---@return string 小写字符串
function String.toLowerCase(str)
    return string.lower(str)
end

--- 转换为大写
---@param str string 字符串
---@return string 大写字符串
function String.toUpperCase(str)
    return string.upper(str)
end

--- 去除首尾空白
---@param str string 字符串
---@return string 新字符串
function String.trim(str)
    return string.gsub(str, "^%s*(.-)%s*$", "%1")
end

--- 去除尾部空白
---@param str string 字符串
---@return string 新字符串
function String.trimEnd(str)
    return string.gsub(str, "%s*$", "")
end

--- 去除首部空白
---@param str string 字符串
---@return string 新字符串
function String.trimStart(str)
    return string.gsub(str, "^%s*", "")
end

-- Number 方法实现
Number = {}

--- 转换为指数表示法
---@param num number 数字
---@param fractionDigits integer? 小数位数
---@return string 字符串
function Number.toExponential(num, fractionDigits)
    fractionDigits = fractionDigits or 0
    return string.format("%." .. fractionDigits .. "e", num)
end

--- 转换为固定小数位数
---@param num number 数字
---@param fractionDigits integer? 小数位数
---@return string 字符串
function Number.toFixed(num, fractionDigits)
    fractionDigits = fractionDigits or 0
    return string.format("%." .. fractionDigits .. "f", num)
end

--- 转换为本地化字符串
---@param num number 数字
---@param locales string? 本地化设置
---@param options table? 选项
---@return string 字符串
function Number.toLocaleString(num, locales, options)
    -- 简单实现，忽略本地化设置
    return tostring(num)
end

--- 转换为指定精度
---@param num number 数字
---@param precision integer? 精度
---@return string 字符串
function Number.toPrecision(num, precision)
    precision = precision or 6
    return string.format("%." .. precision .. "g", num)
end

--- 转换为字符串
---@param num number 数字
---@param radix integer? 进制
---@return string 字符串
function Number.toString(num, radix)
    radix = radix or 10
    if radix == 10 then
        return tostring(num)
    end
    -- 简单实现，只支持10进制
    return "Unsupported radix"
end

-- Object 方法实现
Object = {}

--- 检查对象是否拥有指定属性
---@param obj table 对象
---@param prop string 属性名
---@return boolean 是否拥有
function Object.hasOwnProperty(obj, prop)
    return obj[prop] ~= nil
end

--- 检查对象是否是另一个对象的原型
---@param obj table 对象
---@param prototype table 原型
---@return boolean 是否是原型
function Object.isPrototypeOf(obj, prototype)
    -- 简单实现，Lua 没有原型链
    return false
end

--- 检查属性是否可枚举
---@param obj table 对象
---@param prop string 属性名
---@return boolean 是否可枚举
function Object.propertyIsEnumerable(obj, prop)
    -- Lua 没有属性枚举概念
    return true
end

--- 转换为本地化字符串
---@param obj table 对象
---@return string 字符串
function Object.toLocaleString(obj)
    return tostring(obj)
end

--- 转换为字符串
---@param obj table 对象
---@return string 字符串
function Object.toString(obj)
    return tostring(obj)
end

--- 获取原始值
---@param obj table 对象
---@return any 原始值
function Object.valueOf(obj)
    return obj
end

-- 导出所有类型
return {
    Array = Array,
    String = String,
    Number = Number,
    Object = Object
}