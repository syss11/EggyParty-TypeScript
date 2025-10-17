---@meta EggyAPI

---@alias Fixed number

---@class Vector3
---@field x Fixed
---@field y Fixed
---@field z Fixed
---@field pitch Fixed
---@field yaw Fixed
---@operator add(Vector3): Vector3
---@operator sub(Vector3): Vector3
---@operator mul(Vector3): Vector3
---@operator div(Vector3): Vector3
---@operator unm: Vector3
---@operator add(Fixed): Vector3
---@operator sub(Fixed): Vector3
---@operator mul(Fixed): Vector3
---@operator div(Fixed): Vector3
Vector3 = {}

---向量设置pitch/yaw
---@param pitch Fixed
---@param yaw Fixed
function Vector3:set_pitch_yaw(pitch, yaw) end

---向量长度
---@return Fixed
function Vector3:length() end

---返回单位向量
---@return Fixed
function Vector3:getUnit() end

---返回绝对值向量
---@return Fixed
function Vector3:getAbsoluteVector() end

---向量归一化，返回长度
---@return Fixed
function Vector3:normalize() end

---点积
---@param rhs Vector3
---@return Fixed
function Vector3:dot(rhs) end

---叉积
---@param rhs Vector3
---@return Vector3
function Vector3:cross(rhs) end

---@class Quaternion
---@field x Fixed
---@field y Fixed
---@field z Fixed
---@field w Fixed
---@field yaw Fixed
---@field pitch Fixed
---@field roll Fixed
---@field euler Vector3
---@operator mul(Vector3): Vector3
---@operator mul(Quaternion): Quaternion
Quaternion = {}

---四元数求逆
function Quaternion:inverse() end

---旋转一个向量
---@param v Vector3
---@return Vector3
function Quaternion:apply(v) end

---dict 相关API，请使用dict()函数创建
---@class dict
---@overload fun(): dict
dict = {}

---设置健值
---@param key any
---@param value any
function dict:set(key, value) end

---获取值
---@param key any
---@return any
function dict:get(key) end

---获取键值列表
---@return any[]
function dict:keyvalues() end

---获取键列表
---@return any[]
function dict:keys() end

---获取值列表
---@return any[]
function dict:values() end

---数学库
---@class math
math = {}

---圆周率
---@type Fixed
math.pi = nil

---自然对数的底
---@type Fixed
math.e = nil

---最大固定点数值
---@type Fixed
math.maxval = nil

---最小固定点数值
---@type Fixed
math.minval = nil

---固定点数0
---@type Fixed
math.zero = nil

---固定点数1
---@type Fixed
math.one = nil

---固定点数-1
---@type Fixed
math.neg_one = nil

---转换为整数
---@param x Fixed
---@return integer
function math.tointeger(x) end

---转换为实数（固定点数）
---@param x Fixed
---@return Fixed
function math.toreal(x) end

---转换为固定点数
---@param x integer
---@return Fixed
function math.tofixed(x) end

---检查是否为有限数
---@param x Fixed
---@return boolean
function math.isfinite(x) end

---正弦函数
---@param x Fixed
---@return Fixed
function math.sin(x) end

---余弦函数
---@param x Fixed
---@return Fixed
function math.cos(x) end

---正切函数
---@param x Fixed
---@return Fixed
function math.tan(x) end

---反正弦函数
---@param x Fixed
---@return Fixed
function math.asin(x) end

---反余弦函数
---@param x Fixed
---@return Fixed
function math.acos(x) end

---反正切函数
---@param x Fixed
---@return Fixed
function math.atan(x) end

---两个参数的反正切函数
---@param y Fixed
---@param x Fixed
---@return Fixed
function math.atan2(y, x) end

---平方根
---@param x Fixed
---@return Fixed
function math.sqrt(x) end

---自然对数
---@param x Fixed
---@return Fixed
function math.log(x) end

---以2为底的对数
---@param x Fixed
---@return Fixed
function math.log2(x) end

---以10为底的对数
---@param x Fixed
---@return Fixed
function math.log10(x) end

---计算ln(1+x)
---@param x Fixed
---@return Fixed
function math.log1p(x) end

---指数函数
---@param x Fixed
---@return Fixed
function math.exp(x) end

---2的幂
---@param x Fixed
---@return Fixed
function math.exp2(x) end

---取模
---@param x Fixed
---@param y Fixed
---@return Fixed
function math.fmod(x, y) end

---幂函数
---@param x Fixed
---@param y Fixed
---@return Fixed
function math.pow(x, y) end

---四舍五入
---@param x Fixed
---@return Fixed
function math.round(x) end

---向上取整
---@param x Fixed
---@return Fixed
function math.ceil(x) end

---向下取整
---@param x Fixed
---@return Fixed
function math.floor(x) end

---截断
---@param x Fixed
---@return Fixed
function math.trunc(x) end

---最小值
---@param a Fixed
---@param b Fixed
---@return Fixed
function math.min(a, b) end

---最大值
---@param a Fixed
---@param b Fixed
---@return Fixed
function math.max(a, b) end

---绝对值
---@param a Fixed
---@return Fixed
function math.abs(a) end

---浮点数绝对值
---@param x Fixed
---@return Fixed
function math.fabs(x) end

---限制值在指定范围内
---@param x Fixed
---@param min Fixed
---@param max Fixed
---@return Fixed
function math.clamp(x, min, max) end

---比较两个数是否近似相等（误差在0.001内）
---@param a Fixed
---@param b Fixed
---@return boolean
function math.equal001(a, b) end

---弧度转角度
---@param rad Fixed
---@return Fixed
function math.rad_to_deg(rad) end

---角度转弧度
---@param deg Fixed
---@return Fixed
function math.deg_to_rad(deg) end

---创建Vector3对象
---@param x Fixed?
---@param y Fixed?
---@param z Fixed?
---@return Vector3
function math.Vector3(x, y, z) end

---创建Quaternion对象，弧度制
---@param pitch Fixed
---@param yaw Fixed
---@param roll Fixed
---@return Quaternion
function math.Quaternion(pitch, yaw, roll) end

---@alias AbilityKey integer 技能编号

---@alias AbilityPointerType integer 技能指示器类型

---@alias AbilitySlot integer 技能槽位

---@alias Achievement integer 自定义成就

---@alias AnimKey integer 动画编号

---@alias Archive integer 自定义存档

---@alias BattleShopKey integer 商店

---@alias CameraShakeType integer 屏幕震动类型

---@alias CampID integer 阵营ID

---@alias CharacterKey LifeEntityKey 角色编号

---@alias Color integer 颜色

---@alias CreatureKey LifeEntityKey 生物编号

---@alias CustomTriggerSpaceID UnitID 触发区域ID

---@alias CustomTriggerSpaceKey UnitKey 触发区域编号

---@class Damage
Damage = {}

---@alias DamageSchema integer 伤害方案

---@class Decoration: Unit
Decoration = {}

---@alias DecorationKey UnitKey 装饰物编号

---@alias E3DLayer string 场景UI实例

---@alias E3DLayerKey integer 场景UI预设

---@alias EBagSlot ENode UI物品槽位节点

---@alias EButton ENode UI按钮节点

---@alias EEffectNode ENode UI动效节点

---@alias EImage ENode UI图片节点

---@alias EInputField ENode UI输入节点

---@alias ELabel ENode UI文本节点

---@alias ENode string UI节点

---@alias EProgressbar ENode UI进度条节点

---@alias EmojiKey integer 气泡表情编号

---@alias EquipmentID UnitID 物品ID

---@alias EquipmentKey integer 物品编号

---@alias EquipmentSlot integer 物品槽位

---@alias FontKey integer 字体key

---@alias ImageKey integer 图片编号

---@alias InteractBtnID integer 交互按钮编号

---@class JointAssistant: JointAssistantComp, Unit
JointAssistant = {}

---@alias JointAssistantType integer 关节类型

---@alias LevelKey string 关卡编号

---@alias LifeEntityKey UnitKey 生命体编号

---@alias ModifierKey integer 效果编号

---@alias MontageKey string 剧情动画编号

---@alias ObstacleID UnitID 组件ID

---@alias ObstacleKey UnitKey 组件编号

---@alias PaintArea integer 染色区域

---@alias PathID UnitID 路径ID

---@alias PathPointID UnitID 路点ID

---@alias RoleID integer 玩家ID

---@alias SfxID integer 特效ID

---@alias SfxKey integer 特效编号

---@alias SkyBoxBackground integer 天空盒背景

---@alias SoundID integer 音效ID

---@alias SoundKey integer 音效编号

---@class Timer
Timer = {}

---@alias Timestamp integer 时间戳

---@alias TriggerSpaceKey UnitKey 逻辑体编号

---@alias UgcCommodity integer 道具

---@alias UgcGoods string 商品

---@class UnitGroup: Unit
UnitGroup = {}

---@alias UnitGroupKey UnitKey 组件组编号

---@alias UnitID integer 单位ID

---@alias UnitKey integer 单位编号

---@class Enums
Enums = {}

---@enum Enums.AIBasicCommand AI基础命令类型
Enums.AIBasicCommand = {
	JUMP = 1,  ---跳跃
	ROLL = 2,  ---滚动
	RUSH = 3,  ---前扑
	LIFT = 4,  ---举起
	ABILITY = 5,  ---使用道具/技能
	MOVE = 6,  ---移动
}

---@enum Enums.ArchiveType 存档类型
Enums.ArchiveType = {
	Bool = 'Bool',  ---布尔值
	ConfigTable = 'ConfigTable',  ---多维表
	Fixed = 'Fixed',  ---定点数
	Int = 'Int',  ---整型
	Str = 'Str',  ---字符串
	Timestamp = 'Timestamp',  ---时间戳
}

---@enum Enums.BindType 绑定类型
Enums.BindType = {
	BIND_TYPE_DEFAULT = 0,  ---BIND_TYPE_DEFAULT
	BIND_TYPE_TRANSLATE = 1,  ---BIND_TYPE_TRANSLATE
	BIND_TYPE_ROTATE = 2,  ---BIND_TYPE_ROTATE
	BIND_TYPE_TRANSLATE_ROTATE = 3,  ---BIND_TYPE_TRANSLATE_ROTATE
	BIND_TYPE_SCALE = 4,  ---BIND_TYPE_SCALE
	BIND_TYPE_TRANSLATE_SCALE = 5,  ---BIND_TYPE_TRANSLATE_SCALE
	BIND_TYPE_ROTATE_SCALE = 6,  ---BIND_TYPE_ROTATE_SCALE
	BIND_TYPE_ALL = 7,  ---BIND_TYPE_ALL
}

---@enum Enums.BuffState 状态
Enums.BuffState = {
	BUFF_FORBID_JUMP = 1,  ---禁止跳跃
	BUFF_FORBID_RUSH = 2,  ---禁止飞扑
	BUFF_FORBID_LIFT = 4,  ---禁止抓举
	BUFF_FORBID_ROLL = 8,  ---禁止滚动
	BUFF_FORBID_MOVE = 16,  ---禁止移动
	BUFF_FORBID_CONTROL = 32,  ---无法控制
	BUFF_SILENT = 64,  ---沉默
}

---@enum Enums.CameraBindMode 相机绑定模式
Enums.CameraBindMode = {
	DEFAULT = 0,  ---DEFAULT
	BIND = 1,  ---BIND
	TRACK = 2,  ---TRACK
}

---@enum Enums.CameraProjectionType 相机投影类型
Enums.CameraProjectionType = {
	PERSPECTIVE = 0,  ---透视
	ORTHOGRAPHIC = 1,  ---正交
}

---@enum Enums.CameraPropertyType 相机属性预设
Enums.CameraPropertyType = {
	TRACK_MODE_PITCH = 0,  ---追踪-俯仰角
	TRACK_MODE_YAW = 1,  ---追踪-偏航角
	BIND_MODE_OFFSET_X = 2,  ---固定-X轴偏移
	BIND_MODE_OFFSET_Y = 3,  ---固定-Y轴偏移
	BIND_MODE_OFFSET_Z = 4,  ---固定-Z轴偏移
	BIND_MODE_PITCH = 5,  ---固定-俯仰角
	BIND_MODE_YAW = 6,  ---固定-偏航角
	DIST = 7,  ---相机距离
	FOV = 8,  ---视场角
	PITCH_MAX = 9,  ---最大俯仰角
	PITCH_MIN = 10,  ---最小俯仰角
	OBSERVER_HEIGHT = 11,  ---相机高度
	HORIZONTAL_OFFSET = 12,  ---水平偏移
	PITCH = 15,  ---俯仰角
	YAW = 16,  ---偏航角
	OFFSET_X = 17,  ---X轴偏移
	OFFSET_Y = 18,  ---Y轴偏移
	OFFSET_Z = 19,  ---Z轴偏移
	ROLL = 20,  ---滚动角
}

---@enum Enums.CampRelationType 阵营关系类型
Enums.CampRelationType = {
	ENEMY = 1,  ---敌方
	FRIEND = 2,  ---友方
	NEUTRAL = 4,  ---中立
}

---@enum Enums.CollisionLimitType 碰撞限制枚举
Enums.CollisionLimitType = {
	SELF_COUNT = 1,  ---自身触发次数
	SELF_INTERVAL = 2,  ---自身触发间隔
	SAME_UNIT_COUNT = 3,  ---同目标触发次数
	SAME_UNIT_INTERVAL = 4,  ---同目标触发间隔
}

---@enum Enums.ColorPaintAreaType 染色区域
Enums.ColorPaintAreaType = {
	AREA_1 = 1,  ---染色区域1
	AREA_2 = 2,  ---染色区域2
	AREA_3 = 3,  ---染色区域3
	AREA_4 = 4,  ---染色区域4
}

---@enum Enums.DirectionType 方向枚举
Enums.DirectionType = {
	FORWARD = 3,  ---前
	BACK = 4,  ---后
	UP = 5,  ---上
	DOWN = 6,  ---下
	LEFT = 7,  ---左
	RIGHT = 8,  ---右
}

---@enum Enums.EquipmentSlotType 物品槽位类型
Enums.EquipmentSlotType = {
	EQUIPPED = 1,  ---装配槽位
	BACKPACK = 2,  ---背包槽位
}

---@enum Enums.EquipmentType 物品类型
Enums.EquipmentType = {
	BASIC = 0,  ---基础物品
	WEAPON = 1,  ---武器物品
}

---@enum Enums.GameResult 游戏结局
Enums.GameResult = {
	LOSE = 0,  ---失败
	WIN = 1,  ---胜利
	GAMING = 2,  ---游戏中
}

---@enum Enums.InteractBtnType 交互按钮类型
Enums.InteractBtnType = {
	OFFICIAL = 1,  ---官方互动
	STORY = 101,  ---剧情对话
	SHOP = 201,  ---物品商店
	UNIT_START = 301,  ---家具互动-开始
	UNIT_STOP = 302,  ---家具互动-停止
	UNIT_DOING = 304,  ---家具互动-进行中
	MOTOR_START = 401,  ---运动器-开始
	MOTOR_PAUSE = 402,  ---运动器-暂停
	MOTOR_BACK = 404,  ---运动器-返程
	EXPRESSION_START = 501,  ---表现器-开始
	EXPRESSION_STOP = 502,  ---表现器-停止
	CUSTOM = 601,  ---自定义
	PASSWORD = 801,  ---密码锁
}

---@enum Enums.JointAssistantKey 关节预设编号
Enums.JointAssistantKey = {
	SPRING = 3400000,  ---SPRING
	ROPE = 3400001,  ---ROPE
	SLIDER = 3400002,  ---SLIDER
	HINGE = 3400003,  ---HINGE
	BALL_SOCKET = 3400004,  ---BALL_SOCKET
	D6 = 3400005,  ---D6
	FIXED = 3400006,  ---FIXED
}

---@enum Enums.ModelSocket 部位
Enums.ModelSocket = {
	socket_abdomen = 'socket_abdomen',  ---腹部
	socket_belly = 'socket_belly',  ---鱼腹
	socket_body = 'socket_body',  ---身体
	socket_calf_l = 'socket_calf_l',  ---左小腿
	socket_calf_r = 'socket_calf_r',  ---右小腿
	socket_chest = 'socket_chest',  ---胸部
	socket_claw_l = 'socket_claw_l',  ---左钳
	socket_claw_r = 'socket_claw_r',  ---右钳
	socket_eye_l = 'socket_eye_l',  ---左眼
	socket_eye_r = 'socket_eye_r',  ---右眼
	socket_fin_back = 'socket_fin_back',  ---背后鳍
	socket_fin_dorsal = 'socket_fin_dorsal',  ---背鳍
	socket_fin_l = 'socket_fin_l',  ---左鳍
	socket_fin_lb = 'socket_fin_lb',  ---左后鳍
	socket_fin_r = 'socket_fin_r',  ---右鳍
	socket_fin_rb = 'socket_fin_rb',  ---右后鳍
	socket_fin_tail = 'socket_fin_tail',  ---尾鳍
	socket_fin_ventral = 'socket_fin_ventral',  ---腹鳍
	socket_fin_ventral_l = 'socket_fin_ventral_l',  ---左腹鳍
	socket_fin_ventral_r = 'socket_fin_ventral_r',  ---右腹鳍
	socket_foot_l = 'socket_foot_l',  ---左脚
	socket_foot_lb = 'socket_foot_lb',  ---左后脚
	socket_foot_lf = 'socket_foot_lf',  ---左前脚
	socket_foot_lm = 'socket_foot_lm',  ---左中脚
	socket_foot_r = 'socket_foot_r',  ---右脚
	socket_foot_rb = 'socket_foot_rb',  ---右后脚
	socket_foot_rf = 'socket_foot_rf',  ---右前脚
	socket_foot_rm = 'socket_foot_rm',  ---右中脚
	socket_forearm_l = 'socket_forearm_l',  ---左臂
	socket_forearm_r = 'socket_forearm_r',  ---右臂
	socket_hand_l = 'socket_hand_l',  ---左手
	socket_hand_r = 'socket_hand_r',  ---右手
	socket_head = 'socket_head',  ---头部
	socket_lowerarm_l = 'socket_lowerarm_l',  ---左小臂
	socket_lowerarm_r = 'socket_lowerarm_r',  ---右小臂
	socket_lowerlimb_lb = 'socket_lowerlimb_lb',  ---左后下肢
	socket_lowerlimb_lf = 'socket_lowerlimb_lf',  ---左前下肢
	socket_lowerlimb_rb = 'socket_lowerlimb_rb',  ---右后下肢
	socket_lowerlimb_rf = 'socket_lowerlimb_rf',  ---右前下肢
	socket_mouth = 'socket_mouth',  ---鱼嘴
	socket_origin = 'socket_origin',  ---底面中心点
	socket_tail = 'socket_tail',  ---尾巴
	socket_tail_end = 'socket_tail_end',  ---尾巴末端
	socket_thigh_l = 'socket_thigh_l',  ---左大腿
	socket_thigh_r = 'socket_thigh_r',  ---右大腿
	socket_torso_b = 'socket_torso_b',  ---躯干后部
	socket_torso_f = 'socket_torso_f',  ---躯干前部
	socket_upperarm_l = 'socket_upperarm_l',  ---左大臂
	socket_upperarm_r = 'socket_upperarm_r',  ---右大臂
	socket_upperlimb_lb = 'socket_upperlimb_lb',  ---左后上肢
	socket_upperlimb_lf = 'socket_upperlimb_lf',  ---左前上肢
	socket_upperlimb_rb = 'socket_upperlimb_rb',  ---右后上肢
	socket_upperlimb_rf = 'socket_upperlimb_rf',  ---右前上肢
	socket_weapon_l = 'socket_weapon_l',  ---左手武器
	socket_weapon_r = 'socket_weapon_r',  ---右手武器
}

---@enum Enums.MoveMode AI移动模式
Enums.MoveMode = {
	DIRECT = 0,  ---直线运动
	PATHFIND = 1,  ---避障运动
}

---@enum Enums.PatrolType AI巡逻类型
Enums.PatrolType = {
	ONE_WAY = 0,  ---一次性
	LOOP = 1,  ---巡逻
	BACK_AND_FORTH = 2,  ---往返
}

---@enum Enums.RigidBodyType 物理类型
Enums.RigidBodyType = {
	STATIC = 0,  ---静态
	KINEMATIC = 1,  ---运动学
	DYNAMIC = 2,  ---受外力
}

---@enum Enums.SkyBoxGradualType 天空盒渐变类型
Enums.SkyBoxGradualType = {
	NORMAL = 0,  ---无过渡
	GRADUAL_CHANGE = 1,  ---渐变
	FAULT_STYLE = 2,  ---故障风格
	BURN_STYLE = 3,  ---燃效效果
}

---@enum Enums.TriggerSpaceEventType 触发区域类型
Enums.TriggerSpaceEventType = {
	ENTER = 1,  ---进入
	LEAVE = 4,  ---离开
}

---@enum Enums.UnitType 单位类型
Enums.UnitType = {
	CREATURE = 4,  ---生物
	CUSTOMTRIGGERSPACE = 8,  ---触发区域
	CHARACTER = 128,  ---角色
	OBSTACLE = 256,  ---组件
	TRIGGERSPACE = 512,  ---逻辑体
	DECORATION = 1024,  ---装饰物
	EQUIPMENT = 32768,  ---物品
}

---@enum Enums.ValueType 值类型
Enums.ValueType = {
	AIBasicCommand = 'AIBasicCommand',  ---AI基础命令类型
	Ability = 'Ability',  ---技能
	AbilityIndex = 'AbilityIndex',  ---技能槽位(内部)
	AbilityKey = 'AbilityKey',  ---技能编号
	AbilityPointerType = 'AbilityPointerType',  ---技能指示器类型
	AbilitySlot = 'AbilitySlot',  ---技能槽位
	Achievement = 'Achievement',  ---自定义成就
	Actor = 'Actor',  ---Actor
	AnimKey = 'AnimKey',  ---动画编号
	Archive = 'Archive',  ---自定义存档
	ArchiveType = 'ArchiveType',  ---存档类型
	BattleShopKey = 'BattleShopKey',  ---商店
	BindType = 'BindType',  ---绑定类型
	Bool = 'Bool',  ---布尔值
	BuffState = 'BuffState',  ---状态
	CameraBindMode = 'CameraBindMode',  ---相机绑定模式
	CameraProjectionType = 'CameraProjectionType',  ---相机投影类型
	CameraPropertyType = 'CameraPropertyType',  ---相机属性预设
	CameraShakeType = 'CameraShakeType',  ---屏幕震动类型
	Camp = 'Camp',  ---阵营
	CampID = 'CampID',  ---阵营ID
	CampRelationType = 'CampRelationType',  ---阵营关系类型
	Character = 'Character',  ---角色
	CharacterID = 'CharacterID',  ---角色ID
	CharacterKey = 'CharacterKey',  ---角色编号
	CollisionLimitType = 'CollisionLimitType',  ---碰撞限制枚举
	Color = 'Color',  ---颜色
	ConfigTable = 'ConfigTable',  ---多维表
	Creature = 'Creature',  ---生物
	CreatureID = 'CreatureID',  ---生物ID
	CreatureKey = 'CreatureKey',  ---生物编号
	CustomTriggerSpace = 'CustomTriggerSpace',  ---触发区域
	CustomTriggerSpaceID = 'CustomTriggerSpaceID',  ---触发区域ID
	CustomTriggerSpaceKey = 'CustomTriggerSpaceKey',  ---触发区域编号
	Damage = 'Damage',  ---伤害
	DamageSchema = 'DamageSchema',  ---伤害方案
	Decoration = 'Decoration',  ---装饰物
	DecorationKey = 'DecorationKey',  ---装饰物编号
	DirectionType = 'DirectionType',  ---方向枚举
	E3DLayer = 'E3DLayer',  ---场景UI实例
	E3DLayerKey = 'E3DLayerKey',  ---场景UI预设
	EBagSlot = 'EBagSlot',  ---UI物品槽位节点
	EButton = 'EButton',  ---UI按钮节点
	ECanvas = 'ECanvas',  ---UI画布节点
	EEffectNode = 'EEffectNode',  ---UI动效节点
	EImage = 'EImage',  ---UI图片节点
	EInputField = 'EInputField',  ---UI输入节点
	ELabel = 'ELabel',  ---UI文本节点
	ENode = 'ENode',  ---UI节点
	EProgressbar = 'EProgressbar',  ---UI进度条节点
	EmojiKey = 'EmojiKey',  ---气泡表情编号
	Equipment = 'Equipment',  ---物品
	EquipmentID = 'EquipmentID',  ---物品ID
	EquipmentKey = 'EquipmentKey',  ---物品编号
	EquipmentSlot = 'EquipmentSlot',  ---物品槽位
	EquipmentSlotType = 'EquipmentSlotType',  ---物品槽位类型
	EquipmentType = 'EquipmentType',  ---物品类型
	FaceExpressionKey = 'FaceExpressionKey',  ---面部表情编号
	FashionKey = 'FashionKey',  ---时装编号
	Fixed = 'Fixed',  ---定点数
	FontKey = 'FontKey',  ---字体key
	GameResult = 'GameResult',  ---游戏结局
	ImageKey = 'ImageKey',  ---图片编号
	Int = 'Int',  ---整型
	InteractBtnID = 'InteractBtnID',  ---交互按钮编号
	InteractBtnType = 'InteractBtnType',  ---交互按钮类型
	JointAssistant = 'JointAssistant',  ---关节
	JointAssistantKey = 'JointAssistantKey',  ---关节预设编号
	JointAssistantType = 'JointAssistantType',  ---关节类型
	LevelKey = 'LevelKey',  ---关卡编号
	LifeEntity = 'LifeEntity',  ---生命体
	LifeEntityKey = 'LifeEntityKey',  ---生命体编号
	ListAIBasicCommand = 'ListAIBasicCommand',  ---AI基础命令类型列表
	ListAbility = 'ListAbility',  ---技能列表
	ListAbilityIndex = 'ListAbilityIndex',  ---技能槽位(内部)列表
	ListAbilityKey = 'ListAbilityKey',  ---技能编号列表
	ListAbilityPointerType = 'ListAbilityPointerType',  ---技能指示器类型列表
	ListAbilitySlot = 'ListAbilitySlot',  ---技能槽位列表
	ListAchievement = 'ListAchievement',  ---自定义成就列表
	ListActor = 'ListActor',  ---Actor列表
	ListAnimKey = 'ListAnimKey',  ---动画编号列表
	ListArchive = 'ListArchive',  ---自定义存档列表
	ListArchiveType = 'ListArchiveType',  ---存档类型列表
	ListBattleShopKey = 'ListBattleShopKey',  ---商店列表
	ListBindType = 'ListBindType',  ---绑定类型列表
	ListBool = 'ListBool',  ---布尔值列表
	ListBuffState = 'ListBuffState',  ---状态列表
	ListCameraBindMode = 'ListCameraBindMode',  ---相机绑定模式列表
	ListCameraProjectionType = 'ListCameraProjectionType',  ---相机投影类型列表
	ListCameraPropertyType = 'ListCameraPropertyType',  ---相机属性预设列表
	ListCameraShakeType = 'ListCameraShakeType',  ---屏幕震动类型列表
	ListCamp = 'ListCamp',  ---阵营列表
	ListCampID = 'ListCampID',  ---阵营ID列表
	ListCampRelationType = 'ListCampRelationType',  ---阵营关系类型列表
	ListCharacter = 'ListCharacter',  ---角色列表
	ListCharacterID = 'ListCharacterID',  ---角色ID列表
	ListCharacterKey = 'ListCharacterKey',  ---角色编号列表
	ListCollisionLimitType = 'ListCollisionLimitType',  ---碰撞限制枚举列表
	ListColor = 'ListColor',  ---颜色列表
	ListConfigTable = 'ListConfigTable',  ---多维表列表
	ListCreature = 'ListCreature',  ---生物列表
	ListCreatureID = 'ListCreatureID',  ---生物ID列表
	ListCreatureKey = 'ListCreatureKey',  ---生物编号列表
	ListCustomTriggerSpace = 'ListCustomTriggerSpace',  ---触发区域列表
	ListCustomTriggerSpaceID = 'ListCustomTriggerSpaceID',  ---触发区域ID列表
	ListCustomTriggerSpaceKey = 'ListCustomTriggerSpaceKey',  ---触发区域编号列表
	ListDamageSchema = 'ListDamageSchema',  ---伤害方案列表
	ListDecoration = 'ListDecoration',  ---装饰物列表
	ListDecorationKey = 'ListDecorationKey',  ---装饰物编号列表
	ListDirectionType = 'ListDirectionType',  ---方向枚举列表
	ListE3DLayer = 'ListE3DLayer',  ---场景UI实例列表
	ListE3DLayerKey = 'ListE3DLayerKey',  ---场景UI预设列表
	ListEBagSlot = 'ListEBagSlot',  ---UI物品槽位节点列表
	ListEButton = 'ListEButton',  ---UI按钮节点列表
	ListECanvas = 'ListECanvas',  ---UI画布节点列表
	ListEEffectNode = 'ListEEffectNode',  ---UI动效节点列表
	ListEImage = 'ListEImage',  ---UI图片节点列表
	ListEInputField = 'ListEInputField',  ---UI输入节点列表
	ListELabel = 'ListELabel',  ---UI文本节点列表
	ListENode = 'ListENode',  ---UI节点列表
	ListEProgressbar = 'ListEProgressbar',  ---UI进度条节点列表
	ListEmojiKey = 'ListEmojiKey',  ---气泡表情编号列表
	ListEquipment = 'ListEquipment',  ---物品列表
	ListEquipmentID = 'ListEquipmentID',  ---物品ID列表
	ListEquipmentKey = 'ListEquipmentKey',  ---物品编号列表
	ListEquipmentSlot = 'ListEquipmentSlot',  ---物品槽位列表
	ListEquipmentSlotType = 'ListEquipmentSlotType',  ---物品槽位类型列表
	ListEquipmentType = 'ListEquipmentType',  ---物品类型列表
	ListFaceExpressionKey = 'ListFaceExpressionKey',  ---面部表情编号列表
	ListFashionKey = 'ListFashionKey',  ---时装编号列表
	ListFixed = 'ListFixed',  ---定点数列表
	ListFontKey = 'ListFontKey',  ---字体key列表
	ListGameResult = 'ListGameResult',  ---游戏结局列表
	ListImageKey = 'ListImageKey',  ---图片编号列表
	ListInt = 'ListInt',  ---整型列表
	ListInteractBtnID = 'ListInteractBtnID',  ---交互按钮编号列表
	ListInteractBtnType = 'ListInteractBtnType',  ---交互按钮类型列表
	ListJointAssistant = 'ListJointAssistant',  ---关节列表
	ListJointAssistantKey = 'ListJointAssistantKey',  ---关节预设编号列表
	ListJointAssistantType = 'ListJointAssistantType',  ---关节类型列表
	ListLevelKey = 'ListLevelKey',  ---关卡编号列表
	ListLifeEntity = 'ListLifeEntity',  ---生命体列表
	ListLifeEntityKey = 'ListLifeEntityKey',  ---生命体编号列表
	ListModelSocket = 'ListModelSocket',  ---部位列表
	ListModifier = 'ListModifier',  ---效果列表
	ListModifierKey = 'ListModifierKey',  ---效果编号列表
	ListMontageKey = 'ListMontageKey',  ---剧情动画编号列表
	ListMoveMode = 'ListMoveMode',  ---AI移动模式列表
	ListObstacle = 'ListObstacle',  ---组件列表
	ListObstacleID = 'ListObstacleID',  ---组件ID列表
	ListObstacleKey = 'ListObstacleKey',  ---组件编号列表
	ListPaintArea = 'ListPaintArea',  ---染色区域列表
	ListPathID = 'ListPathID',  ---路径ID列表
	ListPathPointID = 'ListPathPointID',  ---路点ID列表
	ListPatrolType = 'ListPatrolType',  ---AI巡逻类型列表
	ListQuaternion = 'ListQuaternion',  ---四元数列表
	ListRigidBodyType = 'ListRigidBodyType',  ---物理类型列表
	ListRole = 'ListRole',  ---玩家列表
	ListRoleID = 'ListRoleID',  ---玩家ID列表
	ListSfxID = 'ListSfxID',  ---特效ID列表
	ListSfxKey = 'ListSfxKey',  ---特效编号列表
	ListSkyBoxBackground = 'ListSkyBoxBackground',  ---天空盒背景列表
	ListSkyBoxGradualType = 'ListSkyBoxGradualType',  ---天空盒渐变类型列表
	ListSoundID = 'ListSoundID',  ---音效ID列表
	ListSoundKey = 'ListSoundKey',  ---音效编号列表
	ListStr = 'ListStr',  ---字符串列表
	ListTimer = 'ListTimer',  ---计时器列表
	ListTimestamp = 'ListTimestamp',  ---时间戳列表
	ListTrigger = 'ListTrigger',  ---触发器列表
	ListTriggerSpace = 'ListTriggerSpace',  ---逻辑体列表
	ListTriggerSpaceEventType = 'ListTriggerSpaceEventType',  ---触发区域类型列表
	ListTriggerSpaceID = 'ListTriggerSpaceID',  ---逻辑体ID列表
	ListTriggerSpaceKey = 'ListTriggerSpaceKey',  ---逻辑体编号列表
	ListUgcCommodity = 'ListUgcCommodity',  ---道具列表
	ListUgcGoods = 'ListUgcGoods',  ---商品列表
	ListUnit = 'ListUnit',  ---单位列表
	ListUnitGroup = 'ListUnitGroup',  ---物理组件组列表
	ListUnitGroupKey = 'ListUnitGroupKey',  ---组件组编号列表
	ListUnitID = 'ListUnitID',  ---单位ID列表
	ListUnitKey = 'ListUnitKey',  ---单位编号列表
	ListUnitType = 'ListUnitType',  ---单位类型列表
	ListValueType = 'ListValueType',  ---值类型列表
	ListVector3 = 'ListVector3',  ---向量列表
	ListWindFieldShapeType = 'ListWindFieldShapeType',  ---风场形状列表
	ModelSocket = 'ModelSocket',  ---部位
	Modifier = 'Modifier',  ---效果
	ModifierKey = 'ModifierKey',  ---效果编号
	MontageKey = 'MontageKey',  ---剧情动画编号
	MoveMode = 'MoveMode',  ---AI移动模式
	Obstacle = 'Obstacle',  ---组件
	ObstacleID = 'ObstacleID',  ---组件ID
	ObstacleKey = 'ObstacleKey',  ---组件编号
	PaintArea = 'PaintArea',  ---染色区域
	PathID = 'PathID',  ---路径ID
	PathPointID = 'PathPointID',  ---路点ID
	PatrolType = 'PatrolType',  ---AI巡逻类型
	Quaternion = 'Quaternion',  ---四元数
	RigidBodyType = 'RigidBodyType',  ---物理类型
	Role = 'Role',  ---玩家
	RoleID = 'RoleID',  ---玩家ID
	SfxID = 'SfxID',  ---特效ID
	SfxKey = 'SfxKey',  ---特效编号
	SkyBoxBackground = 'SkyBoxBackground',  ---天空盒背景
	SkyBoxGradualType = 'SkyBoxGradualType',  ---天空盒渐变类型
	SoundID = 'SoundID',  ---音效ID
	SoundKey = 'SoundKey',  ---音效编号
	Str = 'Str',  ---字符串
	Timer = 'Timer',  ---计时器
	Timestamp = 'Timestamp',  ---时间戳
	Trigger = 'Trigger',  ---触发器
	TriggerSpace = 'TriggerSpace',  ---逻辑体
	TriggerSpaceEventType = 'TriggerSpaceEventType',  ---触发区域类型
	TriggerSpaceID = 'TriggerSpaceID',  ---逻辑体ID
	TriggerSpaceKey = 'TriggerSpaceKey',  ---逻辑体编号
	UgcCommodity = 'UgcCommodity',  ---道具
	UgcGoods = 'UgcGoods',  ---商品
	Unit = 'Unit',  ---单位
	UnitGroup = 'UnitGroup',  ---物理组件组
	UnitGroupKey = 'UnitGroupKey',  ---组件组编号
	UnitID = 'UnitID',  ---单位ID
	UnitKey = 'UnitKey',  ---单位编号
	UnitType = 'UnitType',  ---单位类型
	ValueType = 'ValueType',  ---值类型
	Vector3 = 'Vector3',  ---向量
	WindFieldShapeType = 'WindFieldShapeType',  ---风场形状
}

---@enum Enums.WindFieldShapeType 风场形状
Enums.WindFieldShapeType = {
	CONICAL = 0,  ---锥形
	SECTOR = 1,  ---扇形
	WAVE = 2,  ---波浪形
}

---@class GlobalAPI
GlobalAPI = {}

---添加击杀播报
---@param _kill_char Character 击杀角色
---@param _dead_char Character 死亡角色
---@param _duration Fixed 持续时间
function GlobalAPI.add_kill_broadcast(_kill_char, _dead_char, _duration) end

---改变色彩滤镜
---@param _hue Fixed 色相
---@param _brightness Fixed 明度
---@param _saturation Fixed 饱和度
---@param _contrast Fixed 对比度
---@param _amount Fixed 整体偏色程度
---@param _mid_tones Color 中灰偏色
---@param _mid_tones_power Fixed 中灰偏色程度
---@param _shadows Color 暗部偏色
---@param _shadows_power Fixed 暗部偏色程度
---@param _highlight Color 亮部偏色
---@param _highlight_power Fixed 亮部偏色程度
---@param _duration Fixed 变换时长
function GlobalAPI.change_render_color(_hue, _brightness, _saturation, _contrast, _amount, _mid_tones, _mid_tones_power, _shadows, _shadows_power, _highlight, _highlight_power, _duration) end

---Debug窗口打印日志
---@param _content string 内容
function GlobalAPI.debug(_content) end

---销毁特效
---@param _sfx_id SfxID 特效ID
---@param _fade_out boolean? 是否淡出
function GlobalAPI.destroy_sfx(_sfx_id, _fade_out) end

---Debug窗口打印错误日志
---@param _content string 内容
function GlobalAPI.error(_content) end

---获取向量投影
---@param _vec Vector3 向量
---@param _direction Vector3 投影方向
---@return Vector3 投影后向量
function GlobalAPI.get_vector_projection(_vec, _direction) end

---是否含有子字符串
---@param _str1 string 父字符串
---@param _str2 string 子字符串
---@return boolean 布尔值
function GlobalAPI.has_sub_str(_str1, _str2) end

---判断对象是否为空
---@param _obj Unit? 对象
---@return boolean 是否为空
function GlobalAPI.is_none(_obj) end

---判断对象是否为空
---@param _obj Unit? 对象
---@return boolean 是否不为空
function GlobalAPI.is_not_none(_obj) end

---去除特效的音效
---@param _sfx_id SfxID 特效ID
function GlobalAPI.mute_sfx_sound(_sfx_id) end

---修改直接光参数
---@param _param_dict table 切换参数
---@param _duration Fixed 持续时间
function GlobalAPI.set_direct_light(_param_dict, _duration) end

---改变色彩滤镜
---@param _hue Fixed 色相
---@param _brightness Fixed 明度
---@param _saturation Fixed 饱和度
---@param _contrast Fixed 对比度
---@param _amount Fixed 整体偏色程度
---@param _mid_tones Color 中灰偏色
---@param _mid_tones_power Fixed 中灰偏色程度
---@param _shadows Color 暗部偏色
---@param _shadows_power Fixed 暗部偏色程度
---@param _highlight Color 亮部偏色
---@param _highlight_power Fixed 亮部偏色程度
---@param _duration Fixed 变换时长
function GlobalAPI.set_render_color(_hue, _brightness, _saturation, _contrast, _amount, _mid_tones, _mid_tones_power, _shadows, _shadows_power, _highlight, _highlight_power, _duration) end

---设置特效旋转
---@param _sfx_id SfxID 特效ID
---@param _orientation Quaternion 旋转
function GlobalAPI.set_sfx_orientation(_sfx_id, _orientation) end

---设置特效坐标
---@param _sfx_id SfxID 特效ID
---@param _pos Vector3 位置
function GlobalAPI.set_sfx_position(_sfx_id, _pos) end

---设置特效播放速率
---@param _sfx_id SfxID 特效ID
---@param _rate Fixed 播放速率
function GlobalAPI.set_sfx_rate(_sfx_id, _rate) end

---设置特效缩放
---@param _sfx_id SfxID 特效ID
---@param _scale Vector3 缩放
function GlobalAPI.set_sfx_scale(_sfx_id, _scale) end

---设置特效是否可见
---@param _sfx_id SfxID 特效ID
---@param _visible boolean 是否可见
function GlobalAPI.set_sfx_visible(_sfx_id, _visible) end

---改变天空盒贴图
---@param _texture_key SkyBoxBackground 天空盒背景
---@param _change_type Enums.SkyBoxGradualType 切换方式
---@param _duration Fixed 持续时间
function GlobalAPI.set_skybox_texture(_texture_key, _change_type, _duration) end

---改变天空雾效
---@param _param_dict table 切换参数
---@param _duration Fixed 变换时长
function GlobalAPI.set_skyfog(_param_dict, _duration) end

---跑马灯信息
---@param _content string? 字符串
function GlobalAPI.show_message_marquee(_content) end

---游戏内飘字信息
---@param _content string 字符串
---@param _duration Fixed? 时长
function GlobalAPI.show_tips(_content, _duration) end

---是否含有子字符串
---@param _str1 string 父字符串
---@param _str2 string 子字符串
---@return boolean 布尔值
function GlobalAPI.str_contain(_str1, _str2) end

---是否含有子字符串
---@param _str1 string 父字符串
---@param _str2 string 子字符串
---@return boolean 布尔值
function GlobalAPI.str_contains(_str1, _str2) end

---字符串转颜色
---@param _color_str string 字符串
---@return Color 颜色
function GlobalAPI.str_to_color(_color_str) end

---Debug窗口打印警告日志
---@param _content string 内容
function GlobalAPI.warning(_content) end

---@class Ability: Actor, AttrComp, KVBase, TriggerSystem
Ability = {}

---技能激活冷却
---@deprecated
---@see Ability.enter_cd
function Ability.ability_active_cd() end

---修改技能作用半径
---@param _delta_affect_radius Fixed 修改技能作用半径
---@deprecated
---@see Ability.change_affect_radius
function Ability.ability_api_change_affect_radius(_delta_affect_radius) end

---修改技能作用宽度
---@param _delta_affect_width Fixed 修改技能作用宽度
---@deprecated
---@see Ability.change_affect_width
function Ability.ability_api_change_affect_width(_delta_affect_width) end

---修改技能施法距离
---@param _delta_level Fixed 修改技能施法距离
---@deprecated
---@see Ability.change_max_release_distance
function Ability.ability_api_change_max_release_distance(_delta_level) end

---降级技能等级
---@param _delta_level integer 降低的技能等级
---@deprecated
---@see Ability.downgrade_ability_level
function Ability.ability_api_decrease_ability_level(_delta_level) end

---获取技能的等级
---@return integer 技能等级
---@deprecated
---@see Ability.get_ability_level
function Ability.ability_api_get_ability_level() end

---获取技能的最大等级
---@return integer 技能最大等级
---@deprecated
---@see Ability.get_ability_max_level
function Ability.ability_api_get_ability_max_level() end

---获取技能的作用半径
---@return Fixed 施法距离
---@deprecated
---@see Ability.get_affect_radius
function Ability.ability_api_get_affect_radius() end

---获取技能的作用宽度
---@return Fixed 施法距离
---@deprecated
---@see Ability.get_affect_width
function Ability.ability_api_get_affect_width() end

---获取技能的施法距离
---@return Fixed 施法距离
---@deprecated
---@see Ability.get_max_release_distance
function Ability.ability_api_get_max_release_distance() end

---增加技能等级
---@param _delta_level integer 增加的技能等级
---@deprecated
---@see Ability.upgrade_ability_level
function Ability.ability_api_increase_ability_level(_delta_level) end

---设置技能等级
---@param _new_level integer 技能等级
---@deprecated
---@see Ability.set_ability_level
function Ability.ability_api_set_ability_level(_new_level) end

---设置技能最大等级
---@param _new_max_level integer 技能最大等级
---@deprecated
---@see Ability.set_ability_max_level
function Ability.ability_api_set_ability_max_level(_new_max_level) end

---设置技能的作用半径
---@param _new_affect_radius Fixed 作用半径
---@deprecated
---@see Ability.set_affect_radius
function Ability.ability_api_set_affect_radius(_new_affect_radius) end

---设置技能的作用宽度
---@param _new_affect_width Fixed 作用宽度
---@deprecated
---@see Ability.set_affect_width
function Ability.ability_api_set_affect_width(_new_affect_width) end

---设置技能的施法距离
---@param _new_max_release_distance Fixed 施法距离
---@deprecated
---@see Ability.set_max_release_distance
function Ability.ability_api_set_max_release_distance(_new_max_release_distance) end

---技能给单位添加状态
---@param _unit Unit 对象
---@param _state_id Enums.BuffState 状态
function Ability.add_state_to_target(_unit, _state_id) end

---技能开始释放
---@param _dir_info Vector3? 方向
---@param _target_point Vector3? 坐标点
---@param _target_unit Unit? 目标单位
function Ability.begin_cast(_dir_info, _target_point, _target_unit) end

---打断蓄力
function Ability.break_accumulate() end

---打断技能施法
function Ability.break_cast() end

---修改技能作用半径
---@param _delta_affect_radius Fixed 修改技能作用半径
function Ability.change_affect_radius(_delta_affect_radius) end

---修改技能作用宽度
---@param _delta_affect_width Fixed 修改技能作用宽度
function Ability.change_affect_width(_delta_affect_width) end

---修改技能施法距离
---@param _delta_level Fixed 修改技能施法距离
function Ability.change_max_release_distance(_delta_level) end

---降级技能等级
---@param _delta_level integer 降低的技能等级
function Ability.downgrade_ability_level(_delta_level) end

---技能激活冷却
function Ability.enter_cd() end

---获取技能可以作用的角色列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return Character[] 可以影响的角色列表
---@deprecated
---@see Ability.get_affect_character_list
function Ability.get_ability_can_affect_character_list_v2(_height, _use_fixed_release_point) end

---获取技能可以作用的生物列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return Creature[] 可以影响的生物列表
---@deprecated
---@see Ability.get_affect_creature_list
function Ability.get_ability_can_affect_creature_list_v2(_height, _use_fixed_release_point) end

---获取技能可以作用的生命体列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return LifeEntity[] 可以影响的生命体列表
---@deprecated
---@see Ability.get_affect_lifeentity_list
function Ability.get_ability_can_affect_life_entity_list_v2(_height, _use_fixed_release_point) end

---获取技能可以作用的组件列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return Obstacle[] 可以影响的组件列表
---@deprecated
---@see Ability.get_affect_obstacle_list
function Ability.get_ability_can_affect_obstacle_list_v2(_height, _use_fixed_release_point) end

---获取技能所在槽位
---@return AbilitySlot 技能槽位
---@deprecated
---@see Ability.get_ability_slot
function Ability.get_ability_index() end

---获取技能的等级
---@return integer 技能等级
function Ability.get_ability_level() end

---获取技能的最大等级
---@return integer 技能最大等级
function Ability.get_ability_max_level() end

---获取技能所在槽位
---@return AbilitySlot 技能槽位
function Ability.get_ability_slot() end

---获取技能蓄力百分比
---@return Fixed 技能蓄力百分比
function Ability.get_accumulate_ratio() end

---获取技能可以作用的角色列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return Character[] 可以影响的角色列表
function Ability.get_affect_character_list(_height, _use_fixed_release_point) end

---获取技能可以作用的生物列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return Creature[] 可以影响的生物列表
function Ability.get_affect_creature_list(_height, _use_fixed_release_point) end

---获取技能可以作用的生命体列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return LifeEntity[] 可以影响的生命体列表
function Ability.get_affect_lifeentity_list(_height, _use_fixed_release_point) end

---获取技能可以作用的组件列表
---@param _height Fixed 高度差
---@param _use_fixed_release_point boolean? 施法点是否固定
---@return Obstacle[] 可以影响的组件列表
function Ability.get_affect_obstacle_list(_height, _use_fixed_release_point) end

---获取技能的作用半径
---@return Fixed 施法距离
function Ability.get_affect_radius() end

---获取技能的作用宽度
---@return Fixed 施法距离
function Ability.get_affect_width() end

---获取技能冷却时间
---@return Fixed 技能冷却时间
function Ability.get_cd_time() end

---获取技能充能时间
---@return Fixed 充能时间
function Ability.get_charge_time() end

---获取技能当前使用次数
---@return integer 使用次数
function Ability.get_cur_release_num() end

---获取技能描述
---@return string 技能描述
function Ability.get_desc() end

---技能是否在冷却中
---@return boolean 剩余冷却时间
---@deprecated
---@see Ability.is_in_cd
function Ability.get_is_in_cd() end

---技能是否在充能中
---@return boolean 剩余冷却时间
---@deprecated
---@see Ability.is_in_charge
function Ability.get_is_in_charge() end

---获取技能编号
---@return AbilityKey 技能编号
function Ability.get_key() end

---获取技能剩余冷却时间
---@return Fixed 剩余冷却时间
function Ability.get_left_cd_time() end

---获取技能剩余充能时间
---@return Fixed 剩余充能时间
function Ability.get_left_charge_time() end

---获取技能锁定目标
---@return LifeEntity 获取技能锁定目标
function Ability.get_lock_target() end

---获取技能锁定角色
---@return Character 角色
function Ability.get_lock_target_char() end

---获取技能锁定生物
---@return Creature 生物
function Ability.get_lock_target_creature() end

---获取技能的施法距离
---@return Fixed 施法距离
function Ability.get_max_release_distance() end

---获取技能最大使用次数
---@return integer 最大使用次数
function Ability.get_max_release_num() end

---获取技能名称
---@return string 技能名称
function Ability.get_name() end

---获取技能拥有者
---@return LifeEntity 技能拥有者
function Ability.get_owner() end

---获取技能拥有角色
---@return Unit 角色
function Ability.get_owner_character() end

---获取技能拥有生物
---@return Unit 生物
function Ability.get_owner_creature() end

---获取拥有技能的物品
---@return Equipment 技能拥有者
function Ability.get_owner_equipment() end

---获取技能拥有者
---@return LifeEntity 技能拥有者
---@deprecated
---@see Ability.get_owner
function Ability.get_owner_unit() end

---获取技能指示器类型
---@return AbilityPointerType 指示器类型
function Ability.get_pointer_type() end

---获取技能释放方向
---@return Vector3 方向
---@deprecated
---@see Ability.get_release_direction
function Ability.get_release_dir() end

---获取技能释放方向
---@return Vector3 方向
function Ability.get_release_direction() end

---获取技能复数释放方向
---@return Vector3[] 方向
function Ability.get_release_direction_list() end

---获取技能释放坐标点
---@return Vector3 坐标点
function Ability.get_release_point() end

---获取技能复数释放坐标点
---@return Vector3[] 坐标点
function Ability.get_release_point_list() end

---技能是否在冷却中
---@return boolean 剩余冷却时间
function Ability.is_in_cd() end

---技能是否在充能中
---@return boolean 剩余冷却时间
function Ability.is_in_charge() end

---播放倒计时ui效果
---@param _time Fixed 持续时间
function Ability.play_countdown_ui(_time) end

---技能给单位移除状态
---@param _unit Unit 对象
---@param _state_id Enums.BuffState 状态
function Ability.remove_state_to_target(_unit, _state_id) end

---设置技能等级
---@param _new_level integer 技能等级
function Ability.set_ability_level(_new_level) end

---设置技能最大等级
---@param _new_max_level integer 技能最大等级
function Ability.set_ability_max_level(_new_max_level) end

---设置技能的作用半径
---@param _new_affect_radius Fixed 作用半径
function Ability.set_affect_radius(_new_affect_radius) end

---设置技能的作用宽度
---@param _new_affect_width Fixed 作用宽度
function Ability.set_affect_width(_new_affect_width) end

---设置技能当前使用次数
---@param _release_num integer 使用次数
function Ability.set_cur_release_num(_release_num) end

---设置技能剩余冷却
---@param _cd_time Fixed 冷却时间
function Ability.set_left_cd_time(_cd_time) end

---设置技能剩余充能
---@param _cd_time Fixed 充能时间
function Ability.set_left_charge_time(_cd_time) end

---设置技能的施法距离
---@param _new_max_release_distance Fixed 施法距离
function Ability.set_max_release_distance(_new_max_release_distance) end

---设置技能最大使用次数
---@param _release_num_max integer 最大使用次数
function Ability.set_max_release_num(_release_num_max) end

---增加技能等级
---@param _delta_level integer 增加的技能等级
function Ability.upgrade_ability_level(_delta_level) end

---@class AbilityComp
AbilityComp = {}

---添加向技能槽位添加UGC技能能
---@param _ability_index AbilitySlot 技能槽位
---@param _ability_id AbilityKey 技能编号
---@param _kv_args table? 自定义参数值
---@param _kv_types table? 自定义参数类型
---@return Ability 添加上的技能
function AbilityComp.add_ability_to_slot(_ability_index, _ability_id, _kv_args, _kv_types) end

---添加道具技能
---@param _ability_id AbilityKey 技能编号
---@param _kv_args table? 自定义参数值
---@param _kv_types table? 自定义参数类型
---@return Ability 添加上的技能
---@deprecated
---@see AbilityComp.add_prop_ability
function AbilityComp.add_item_ability_with_check(_ability_id, _kv_args, _kv_types) end

---添加道具技能
---@param _ability_id AbilityKey 技能编号
---@param _kv_args table? 自定义参数值
---@param _kv_types table? 自定义参数类型
---@return Ability 添加上的技能
function AbilityComp.add_prop_ability(_ability_id, _kv_args, _kv_types) end

---打断技能蓄力
function AbilityComp.break_ability_accumulate() end

---控制角色对目标方向释放指定槽位技能
---@param _direction Vector3 方向
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
function AbilityComp.cast_ability_by_ability_slot_and_direction(_direction, _ability_slot, _duration) end

---控制角色对目标坐标释放指定槽位技能
---@param _position Vector3 坐标
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
function AbilityComp.cast_ability_by_ability_slot_and_position(_position, _ability_slot, _duration) end

---控制角色对目标单位释放指定槽位技能
---@param _target LifeEntity 目标
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
function AbilityComp.cast_ability_by_ability_slot_and_target(_target, _ability_slot, _duration) end

---控制角色对指定方向执行释放指定预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _direction Vector3 方向
---@param _ability_slot AbilitySlot? 技能槽位
function AbilityComp.cast_ability_by_direction(_ability_key, _duration, _direction, _ability_slot) end

---控制角色对指定坐标执行释放预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _position Vector3 坐标
---@param _ability_slot AbilitySlot? 技能槽位
function AbilityComp.cast_ability_by_position(_ability_key, _duration, _position, _ability_slot) end

---控制角色对指定目标执行释放指定预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _target LifeEntity 目标
---@param _ability_slot AbilitySlot? 技能槽位
function AbilityComp.cast_ability_by_target(_ability_key, _duration, _target, _ability_slot) end

---销毁技能
---@param _ability Ability 技能对象
---@return boolean 是否成功移除
function AbilityComp.destroy_ability(_ability) end

---获取单位所有技能
---@return Ability[] 技能对象
function AbilityComp.get_abilities() end

---获取对应槽位技能
---@param _ability_slot AbilitySlot 技能槽位
---@return Ability 技能对象
function AbilityComp.get_ability_by_slot(_ability_slot) end

---获取单位所有技能
---@return Ability[] 技能列表
function AbilityComp.get_ability_list() end

---获取道具技能
---@return Ability 技能对象
function AbilityComp.get_prop_ability() end

---打断技能施法
function AbilityComp.interrupt_ability() end

---移除槽位上的技能
---@param _ability_slot AbilitySlot 技能槽位
---@return boolean 是否成功移除
function AbilityComp.remove_ability(_ability_slot) end

---根据技能编号移除技能
---@param _ability_key AbilityKey 技能编号
---@return boolean 是否成功移除
function AbilityComp.remove_ability_by_key(_ability_key) end

---移除道具技能
---@return boolean 是否成功移除
function AbilityComp.remove_prop_ability() end

---重置指定槽位技能CD
---@param _ability_index AbilitySlot 技能槽位
function AbilityComp.reset_ability_cd(_ability_index) end

---设置是否能在载具上使用用技能
---@param _enable boolean 是否能用技能
function AbilityComp.set_ability_enabled_on_vehicle(_enable) end

---替换技能槽位(UGC槽位)
---@param _ability Ability 技能对象
---@param _ability_index AbilitySlot 技能槽位
---@return Ability 被替换的旧技能
function AbilityComp.set_ability_to_slot(_ability, _ability_index) end

---@class Actor: KVBase, TriggerSystem
Actor = {}

---获取单位ID
---@return UnitID 单位ID
function Actor.get_id() end

---@class AttrComp
AttrComp = {}

---改变属性的额外固定值(复杂模式)
---@param _key string 属性名
---@param _value Fixed 额外固定值
function AttrComp.change_attr_bonus_fixed(_key, _value) end

---改变属性的倍率值(复杂模式)
---@param _key string 属性名
---@param _value Fixed 倍率值
function AttrComp.change_attr_ratio_fixed(_key, _value) end

---改变属性的基础值(复杂模式)
---@param _key string 属性名
---@param _value Fixed 基础值
function AttrComp.change_attr_raw_fixed(_key, _value) end

---获取属性的基础加成值(复杂模式)
---@param _key string 属性名
---@return Fixed 基础加成值
function AttrComp.get_attr_base_extra_fixed(_key) end

---获取属性的额外固定值(复杂模式)
---@param _key string 属性名
---@return Fixed 额外固定值
function AttrComp.get_attr_bonus_fixed(_key) end

---获取属性
---@param _value_type Enums.ValueType 值类型
---@param _key string 属性名
---@return any 属性值
function AttrComp.get_attr_by_type(_value_type, _key) end

---获取属性的倍率值(复杂模式)
---@param _key string 属性名
---@return Fixed 倍率值
function AttrComp.get_attr_ratio_fixed(_key) end

---获取属性的基础值(复杂模式)
---@param _key string 属性名
---@return Fixed 基础值
function AttrComp.get_attr_raw_fixed(_key) end

---设置属性的额外固定值(复杂模式)
---@param _key string 属性名
---@param _value Fixed 额外固定值
function AttrComp.set_attr_bonus_fixed(_key, _value) end

---设置属性
---@param _value_type Enums.ValueType 值类型
---@param _key string 属性名
---@param _val any 属性值
function AttrComp.set_attr_by_type(_value_type, _key, _val) end

---设置属性的倍率值(复杂模式)
---@param _key string 属性名
---@param _value Fixed 倍率值
function AttrComp.set_attr_ratio_fixed(_key, _value) end

---设置属性的基础值(复杂模式)
---@param _key string 属性名
---@param _value Fixed 基础值
function AttrComp.set_attr_raw_fixed(_key, _value) end

---@class BuffStateComp
BuffStateComp = {}

---添加状态
---@param _state_id Enums.BuffState 状态
function BuffStateComp.add_state(_state_id) end

---清除状态
---@param _state_id Enums.BuffState 状态
function BuffStateComp.clear_state(_state_id) end

---获取限制状态计数
---@param _state_id Enums.BuffState 状态
---@return integer 状态计数
function BuffStateComp.get_state_count(_state_id) end

---获取所有限制状态
---@return Enums.BuffState[] 状态列表
function BuffStateComp.get_state_list() end

---移除状态
---@param _state_id Enums.BuffState 状态
function BuffStateComp.remove_state(_state_id) end

---@class Camp: AttrComp, KVBase
Camp = {}

---改变阵营积分
---@param _add_score integer 变化积分
function Camp.change_camp_score(_add_score) end

---获取阵营内玩家列表
---@return Role[] 玩家列表
---@deprecated
---@see Camp.get_roles
function Camp.get_camp_role_list() end

---获取阵营积分
---@return integer 积分
function Camp.get_camp_score() end

---获取阵营名称
---@return string 名称
function Camp.get_name() end

---获取阵营内玩家列表
---@return Role[] 玩家列表
function Camp.get_roles() end

---设置阵营积分
---@param _score integer 积分
function Camp.set_camp_score(_score) end

---@class Character: LifeEntity
Character = {}

---改变角色预设
---@param _c_key CharacterKey 角色预设
---@param _reset_prop boolean 重置属性
---@param _reset_trigger_system boolean 重置蛋码
---@param _reset_model boolean 重置外观
---@deprecated
---@see Character.set_character_prefab
function Character.change_character_prefab(_c_key, _reset_prop, _reset_trigger_system, _reset_model) end

---根据生物设置模型
---@param _creature Creature 生物
---@param _include_custom_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体尺寸
---@deprecated
---@see LifeEntity.set_model_by_creature
function Character.change_model_by_creature(_creature, _include_custom_model, _inherit_scale, _inherit_capsule_size) end

---命令角色抓举
---@deprecated
---@see Character.lift
function Character.cmd_lift() end

---命令角色移动到坐标点
---@param _target_pos Vector3 坐标点
---@param _duration Fixed 持续时间
---@deprecated
---@see Character.start_move_to_pos
function Character.cmd_move_to_pos(_target_pos, _duration) end

---命令角色前扑
---@deprecated
---@see Character.fling_rush
function Character.cmd_rush() end

---销毁效果
---@param _modifier Modifier 效果对象
---@deprecated
---@see ModifierComp.destroy_modifier
function Character.destroy_buff(_modifier) end

---开关角色靶向移动
---@param _enable boolean 开关
---@deprecated
---@see Character.set_aim_move_enabled
function Character.enable_aim_move_mode(_enable) end

---命令角色前扑
function Character.fling_rush() end

---获取技能点
---@return integer 技能点
function Character.get_ability_point() end

---获取单位效果
---@param _modifier_id ModifierKey 效果ID
---@return Modifier 效果对象
---@deprecated
---@see ModifierComp.get_modifier_by_modifier_key
function Character.get_buff(_modifier_id) end

---获取单位所有效果
---@return Modifier[] 效果
---@deprecated
---@see ModifierComp.get_modifiers
function Character.get_buffs() end

---获取控制角色的玩家
---@return Role 玩家
---@deprecated
---@see Character.get_ctrl_role
function Character.get_camp_role() end

---获取控制角色的玩家
---@return Role 玩家
function Character.get_ctrl_role() end

---获取朝向
---@return Vector3 方向
---@deprecated
---@see LifeEntity.get_direction
function Character.get_face_dir() end

---增加技能点
---@param _increase integer 技能点
function Character.increase_ability_point(_increase) end

---是否正在强制位移
---@return boolean 布尔
---@deprecated
---@see CharacterComp.is_forced_moving
function Character.is_forced_moving() end

---生命体是否进入魂蛋模式
---@return boolean 是否处于魂蛋模式
---@deprecated
---@see LifeEntity.is_ghost_mode
function Character.is_ghost_mode() end

---是否拥有指定编号的效果
---@param _modifier_key ModifierKey 效果编号
---@return boolean 是否拥有
---@deprecated
---@see ModifierComp.has_modifier_by_key
function Character.is_have_buff_with_id(_modifier_key) end

---命令角色跳跃
---@deprecated
---@see LifeEntity.jump
function Character.jump() end

---命令角色抓举
function Character.lift() end

---还原模型变化
---@deprecated
---@see LifeEntity.reset_model
function Character.recover_model() end

---还原角色指定外观部位变化
---@param _model_socket Enums.ModelSocket 外观部位
---@deprecated
---@see Character.reset_target_socket_model
function Character.recover_target_socket_model(_model_socket) end

---移除效果
---@param _modifier_id ModifierKey 效果编号
---@deprecated
---@see ModifierComp.remove_modifier_by_key
function Character.remove_buff(_modifier_id) end

---还原角色指定外观部位变化
---@param _model_socket Enums.ModelSocket 外观部位
function Character.reset_target_socket_model(_model_socket) end

---开关角色靶向移动
---@param _enable boolean 开关
function Character.set_aim_move_enabled(_enable) end

---开关角色靶向移动
---@param _enable boolean 开关
---@deprecated
---@see Character.set_aim_move_enabled
function Character.set_aim_move_mode(_enable) end

---设置角色配音是否生效
---@param _enabled boolean 是否启用
---@deprecated
---@see Character.set_voice_enabled
function Character.set_character_act_voice_enabled(_enabled) end

---改变角色预设
---@param _c_key CharacterKey 角色预设
---@param _reset_prop boolean 重置属性
---@param _reset_trigger_system boolean 重置蛋码
---@param _reset_model boolean 重置外观
function Character.set_character_prefab(_c_key, _reset_prop, _reset_trigger_system, _reset_model) end

---设置质量条是否显示
---@param _visible boolean 是否显示
---@deprecated
---@see LifeEntity.set_mass_bar_visible
function Character.set_mass_bar_visible(_visible) end

---设置角色配音是否生效
---@param _enabled boolean 是否启用
function Character.set_voice_enabled(_enabled) end

---开始强制位移
---@param _vel Vector3 移动速度
---@param _duration Fixed 持续时间
---@param _enable_phy boolean? 是否保留物理
---@deprecated
---@see CharacterComp.start_forced_move
function Character.start_forced_move(_vel, _duration, _enable_phy) end

---命令角色移动到坐标点
---@param _target_pos Vector3 坐标点
---@param _duration Fixed 持续时间
function Character.start_move_to_pos(_target_pos, _duration) end

---退出当前强制位移
---@deprecated
---@see CharacterComp.stop_forced_move
function Character.stop_forced_move() end

---生命体尝试下载具
---@deprecated
---@see LifeEntity.try_exit_vehicle
function Character.try_exit_ugcvehicle() end

---生命体尝试下载具
---@deprecated
---@see LifeEntity.try_exit_vehicle
function Character.try_exit_vehicle() end

---@class CharacterComp
CharacterComp = {}

---获取缩放倍率
---@return Fixed 缩放倍率
function CharacterComp.get_scale_ratio() end

---是否正在强制位移
---@return boolean 布尔
function CharacterComp.is_forced_moving() end

---设置朝向
---@param _face_dir Vector3 方向
---@deprecated
---@see LifeEntity.set_direction
function CharacterComp.set_face_dir(_face_dir) end

---开始强制位移
---@param _vel Vector3 移动速度
---@param _duration Fixed 持续时间
---@param _enable_phy boolean? 是否保留物理
function CharacterComp.start_forced_move(_vel, _duration, _enable_phy) end

---退出当前强制位移
function CharacterComp.stop_forced_move() end

---@class Creature: LifeEntity, OwnerComp
Creature = {}

---根据生物设置模型
---@param _creature Creature 生物
---@param _include_custom_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体尺寸
---@deprecated
---@see LifeEntity.set_model_by_creature
function Creature.change_model_by_creature(_creature, _include_custom_model, _inherit_scale, _inherit_capsule_size) end

---命令生物移动
---@param _direction Vector3 方向
---@param _t Fixed 时间
function Creature.force_start_move(_direction, _t) end

---命令生物停止移动
function Creature.force_stop_move() end

---获取朝向
---@return Vector3 方向
---@deprecated
---@see LifeEntity.get_direction
function Creature.get_face_dir() end

---获取生命体是否可拖动
---@return boolean 可拖动
---@deprecated
---@see LifeEntity.is_draggable
function Creature.is_drag_enable() end

---获取生命体是否可点击
---@return boolean 可点击
---@deprecated
---@see LifeEntity.is_touchable
function Creature.is_touch_enable() end

---还原模型变化
---@deprecated
---@see LifeEntity.reset_model
function Creature.recover_model() end

---还原生物指定外观部位变化
---@param _model_socket Enums.ModelSocket 外观部位
---@deprecated
---@see Creature.reset_target_socket_model
function Creature.recover_target_socket_model(_model_socket) end

---还原生物指定外观部位变化
---@param _model_socket Enums.ModelSocket 外观部位
function Creature.reset_target_socket_model(_model_socket) end

---设置生物是否可拖动
---@param _enable boolean 是否可拖动
---@deprecated
---@see Creature.set_draggable
function Creature.set_drag_enable(_enable) end

---设置生物是否可拖动
---@param _enable boolean 是否可拖动
function Creature.set_draggable(_enable) end

---设置质量条是否显示
---@param _visible boolean 是否显示
---@deprecated
---@see LifeEntity.set_mass_bar_visible
function Creature.set_mass_bar_visible(_visible) end

---设置生物的显示名称
---@param _name string 显示名称
function Creature.set_name(_name) end

---设置生物是否显示名称
---@param _visible boolean 是否显示名称
function Creature.set_name_visible(_visible) end

---设置生物是否可点击
---@param _enable boolean 是否可点击
---@deprecated
---@see Creature.set_touchable
function Creature.set_touch_enable(_enable) end

---设置生物是否可点击
---@param _enable boolean 是否可点击
function Creature.set_touchable(_enable) end

---@class CustomTriggerSpace: ExprDeviceComp, OwnerComp, SceneUI, Unit, UnitInteractVolumeComp
CustomTriggerSpace = {}

---获取触发区域内的随机坐标
---@return Vector3 坐标
function CustomTriggerSpace.random_point() end

---@class DisplayComp
DisplayComp = {}

---添加绑定模型
---@param _model_id UnitKey 单位编号
---@param _socket Enums.ModelSocket 挂点
---@param _offset Vector3? 偏移
---@param _rot Quaternion? 旋转
---@param _scale Vector3? 缩放
---@return string 绑定ID
function DisplayComp.bind_model(_model_id, _socket, _offset, _rot, _scale) end

---添加绑定模型
---@param _unit Unit 单位
---@param _socket Enums.ModelSocket 挂点
---@param _offset Vector3? 偏移
---@param _rot Quaternion? 旋转
---@return string 绑定ID
function DisplayComp.bind_model_by_unit(_unit, _socket, _offset, _rot) end

---播放全身动画
---@param _anim_id AnimKey 动画编号
---@param _start_time Fixed? 开始时间
---@param _play_time Fixed? 持续时间
---@param _is_loop boolean? 是否循环
function DisplayComp.play_body_anim_by_id(_anim_id, _start_time, _play_time, _is_loop) end

---播放上半身动画
---@param _anim_id AnimKey 动画编号
---@param _start_time Fixed? 开始时间
---@param _play_time Fixed? 持续时间
---@param _is_loop boolean? 是否循环
function DisplayComp.play_upper_anim_by_id(_anim_id, _start_time, _play_time, _is_loop) end

---移除绑定模型
---@param _bind_id string 绑定ID
---@deprecated
---@see DisplayComp.unbind_model
function DisplayComp.remove_bind_model(_bind_id) end

---设置播放速率
---@param _anim_rate Fixed 播放速率
function DisplayComp.set_anim_rate(_anim_rate) end

---停止播放动画
function DisplayComp.stop_anim() end

---停止播放全身动画
function DisplayComp.stop_play_body_anim() end

---停止播放全身动画）
---@param _anim_id AnimKey 动画编号
function DisplayComp.stop_play_body_anim_by_id(_anim_id) end

---停止播放全身动画）
---@param _anim_id AnimKey 动画编号
---@deprecated
---@see DisplayComp.stop_play_body_anim_by_id
function DisplayComp.stop_play_body_anim_with_id(_anim_id) end

---停止播放上半身动画
function DisplayComp.stop_play_upper_anim() end

---停止播放上半身动画
---@param _anim_id AnimKey 动画编号
function DisplayComp.stop_play_upper_anim_by_id(_anim_id) end

---停止播放上半身动画
---@param _anim_id AnimKey 动画编号
---@deprecated
---@see DisplayComp.stop_play_upper_anim_by_id
function DisplayComp.stop_play_upper_anim_with_id(_anim_id) end

---添加绑定模型
---@param _model_id UnitKey 单位编号
---@param _socket Enums.ModelSocket 挂点
---@param _offset Vector3? 偏移
---@param _rot Quaternion? 旋转
---@param _scale Vector3? 缩放
---@return string 绑定ID
---@deprecated
---@see DisplayComp.bind_model
function DisplayComp.ugc_add_bind_model(_model_id, _socket, _offset, _rot, _scale) end

---移除绑定模型
---@param _bind_id string 绑定ID
function DisplayComp.unbind_model(_bind_id) end

---@class Equipment: KVBase, OwnerComp, TriggerSystem
Equipment = {}

---获取物品能否丢弃
---@return boolean 能否丢弃
function Equipment.can_drop() end

---增加/减少物品当前堆叠数
---@param _num integer 堆叠数
function Equipment.change_current_stack_size(_num) end

---增加/减少物品最大堆叠数
---@param _num integer 堆叠数
function Equipment.change_max_stack_size(_num) end

---删除物品
function Equipment.destroy_equipment() end

---物品被丢弃
function Equipment.drop() end

---获取物品当前堆叠层数
---@return integer 当前堆叠层数
function Equipment.get_current_stack_num() end

---获取物品描述
---@return string 物品描述
function Equipment.get_desc() end

---获取物品的抵押价格
---@param _res_type string 货币类型
---@return integer 卖价
---@deprecated
---@see Equipment.get_price
function Equipment.get_economic_value(_res_type) end

---获取物品所在槽位
---@return EquipmentSlot 槽位
function Equipment.get_equipment_slot() end

---获取物品的物品类型
---@return Enums.EquipmentType 物品类型
function Equipment.get_equipment_type() end

---获取物品的物品编号
---@return EquipmentKey 物品编号
function Equipment.get_key() end

---获取物品最大堆叠层数
---@return integer 最大堆叠层数
function Equipment.get_max_stack_num() end

---获取物品名称
---@return string 物品名称
function Equipment.get_name() end

---获取持有物品的角色
---@return Character 角色
function Equipment.get_owner_character() end

---获取持有物品的生物
---@return Creature 生物
function Equipment.get_owner_creature() end

---获取物品位置
---@return Vector3 物品位置
function Equipment.get_position() end

---获取物品的抵押价格
---@param _res_type string 货币类型
---@return integer 卖价
function Equipment.get_price(_res_type) end

---获取物品所在槽位类型
---@return Enums.EquipmentSlotType 槽位类型
function Equipment.get_slot_type() end

---获取物品单位
---@return Obstacle 物品单位
function Equipment.get_unit() end

---物品是否被持有
---@return boolean 是否被持有
function Equipment.has_owner() end

---获取物品是否自动拾取
---@return boolean 是否自动拾取
function Equipment.is_auto_picking() end

---获取物品是否自动使用
---@return boolean 是否自动使用
function Equipment.is_auto_using() end

---移动物品到指定槽位
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot integer 槽位
function Equipment.move_to_slot(_slot_type, _slot) end

---设置枪械自动瞄准
---@param _is_auto_aim boolean 是否自动瞄准
---@deprecated
---@see Equipment.set_auto_aim_enabled
function Equipment.set_auto_aim(_is_auto_aim) end

---设置枪械自动瞄准
---@param _is_auto_aim boolean 是否自动瞄准
function Equipment.set_auto_aim_enabled(_is_auto_aim) end

---设置枪械自动开火
---@param _is_auto_fire boolean 是否自动开火
---@deprecated
---@see Equipment.set_auto_fire_enabled
function Equipment.set_auto_fire(_is_auto_fire) end

---设置枪械自动开火
---@param _is_auto_fire boolean 是否自动开火
function Equipment.set_auto_fire_enabled(_is_auto_fire) end

---设置物品充能无消耗
---@param _is_free boolean 是否无消耗
function Equipment.set_charge_cost_free(_is_free) end

---设置物品当前堆叠数
---@param _num integer 堆叠数
function Equipment.set_current_stack_num(_num) end

---设置物品的描述
---@param _desc string 描述
function Equipment.set_desc(_desc) end

---设置物品能否丢弃
---@param _droppable boolean 能否丢弃
function Equipment.set_droppable(_droppable) end

---设置物品的抵押价格
---@param _res_type string 货币类型
---@param _price integer 卖价
---@deprecated
---@see Equipment.set_price
function Equipment.set_economic_value(_res_type, _price) end

---设置物品的图标
---@param _icon_key ImageKey 图标
function Equipment.set_icon(_icon_key) end

---设置物品最大堆叠数
---@param _num integer 堆叠数
function Equipment.set_max_stack_num(_num) end

---设置物品的名称
---@param _name string 名称
function Equipment.set_name(_name) end

---设置物品的抵押价格
---@param _res_type string 货币类型
---@param _price integer 卖价
function Equipment.set_price(_res_type, _price) end

---设置物品能否出售
---@param _saleable boolean 能否出售
function Equipment.set_saleable(_saleable) end

---设置物品能否使用
---@param _usable boolean 能否使用
function Equipment.set_usable(_usable) end

---使物品开始充能
function Equipment.start_charge() end

---@class EquipmentComp
EquipmentComp = {}

---清除单位物品格选中状态
function EquipmentComp.clear_selected_equipment_slot() end

---消耗物品
---@param _equipment_key EquipmentKey 物品编号
---@param _consume_num integer 消耗数量
function EquipmentComp.consume_equipment(_equipment_key, _consume_num) end

---创建物品到指定类型槽位
---@param _key EquipmentKey 物品编号
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return Equipment 创建的物品
function EquipmentComp.create_equipment_to_slot(_key, _slot_type) end

---获取身上的物品
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot_index integer 槽位索引
---@return Equipment 物品
function EquipmentComp.get_equipment_by_slot(_slot_type, _slot_index) end

---获取角色/生物持有的物品预设列表
---@param _equipment_key EquipmentKey 物品类型
---@param _exclude_equipped boolean? 不搜索物品栏
---@param _exclude_bag boolean? 不搜索背包栏
---@return Equipment[] 物品列表
function EquipmentComp.get_equipment_list(_equipment_key, _exclude_equipped, _exclude_bag) end

---获取持有的物品列表
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return Equipment[] 物品
---@deprecated
---@see EquipmentComp.get_equipment_list_by_slot_type
function EquipmentComp.get_equipment_list_by_slot(_slot_type) end

---获取持有的物品列表
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return Equipment[] 物品
function EquipmentComp.get_equipment_list_by_slot_type(_slot_type) end

---获取最大可持有的物品数量
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return integer 数量
function EquipmentComp.get_equipment_max_count(_slot_type) end

---获取最大可持有的物品数量
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return integer 数量
---@deprecated
---@see EquipmentComp.get_equipment_max_count
function EquipmentComp.get_equipment_max_num_by_slot(_slot_type) end

---获取当前选中的物品
---@return Equipment 物品
function EquipmentComp.get_selected_equipment() end

---设置单位选中物品格
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot_index integer 槽位索引
function EquipmentComp.select_equipment_slot(_slot_type, _slot_index) end

---修改最大可持有的物品数量
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot_num integer 数量
function EquipmentComp.set_equipment_max_count(_slot_type, _slot_num) end

---设置单位选中物品格
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot_index integer 槽位索引
---@deprecated
---@see EquipmentComp.select_equipment_slot
function EquipmentComp.set_selected_equipment_slot(_slot_type, _slot_index) end

---@class ExprDeviceComp
ExprDeviceComp = {}

---通过名称禁用表现器
---@param _name string 名称
function ExprDeviceComp.disable_expr_device_by_name(_name) end

---通过名称激活表现器
---@param _name string 名称
function ExprDeviceComp.enable_expr_device_by_name(_name) end

---@class GameAPI
GameAPI = {}

---获取技能预设描述
---@param _ability_id AbilityKey 技能编号
---@return string 技能描述
function GameAPI.ability_prefab_get_desc(_ability_id) end

---获取技能预设名称
---@param _ability_id AbilityKey 技能编号
---@return string 技能名称
function GameAPI.ability_prefab_get_name(_ability_id) end

---获取技能预设的属性
---@param _value_type Enums.ValueType 值类型
---@param _key AbilityKey 技能编号
---@param _prop string 名称
---@return any 属性值
function GameAPI.ability_prefab_get_prop_by_type(_value_type, _key, _prop) end

---技能预设是否存在自定义值
---@param _ability_key AbilityKey 技能编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.ability_prefab_has_kv(_ability_key, _prop) end

---新增路点
---@param _path_id PathID 路径
---@param _index integer 路点索引
---@param _point_id PathPointID 路点
function GameAPI.add_pathpoint(_path_id, _index, _point_id) end

---新增路点
---@param _path_id PathID 路径
---@param _index integer 路点索引
---@param _point_id PathPointID 路点
---@deprecated
---@see GameAPI.add_pathpoint
function GameAPI.add_road_point(_path_id, _index, _point_id) end

---创建一个固定风场单位
---@param _pos Vector3 位置
---@param _wind_type Enums.WindFieldShapeType 形状
---@param _wind_range Fixed 范围
---@param _duration Fixed 持续时间
function GameAPI.create_constant_wind_field(_pos, _wind_type, _wind_range, _duration) end

---创建一个生物
---@param _u_key UnitKey 单位编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale_ratio Fixed 缩放大小
---@param _role Role? 所属玩家
---@return Creature 创建出的生物
function GameAPI.create_creature_fixed_scale(_u_key, _pos, _rotation, _scale_ratio, _role) end

---创建一个触发区域
---@param _u_key CustomTriggerSpaceKey 触发区域编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale Vector3 缩放
---@param _role Role? 所属玩家
---@return CustomTriggerSpace 创建出的触发区域
function GameAPI.create_customtriggerspace(_u_key, _pos, _rotation, _scale, _role) end

---创建一个装饰物
---@param _u_key DecorationKey 单位编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale Vector3 缩放
---@param _parent Unit? 绑定对象
---@return Decoration 创建的装饰物
function GameAPI.create_decoration(_u_key, _pos, _rotation, _scale, _parent) end

---创建物品到坐标点
---@param _equipment_eid EquipmentKey 物品编号
---@param _pos Vector3 位置
---@return Equipment 物品
function GameAPI.create_equipment(_equipment_eid, _pos) end

---创建物品到坐标点
---@param _equipment_eid EquipmentKey 物品编号
---@param _pos Vector3 位置
---@return Equipment 物品
---@deprecated
---@see GameAPI.create_equipment
function GameAPI.create_equipment_in_scene(_equipment_eid, _pos) end

---创建关节助手
---@param _unit_key Enums.JointAssistantKey 关节助手类型
---@param _unit1 Unit 连接主体
---@param _unit2 Unit 连接目标
---@return JointAssistant 创建出的关节助手
function GameAPI.create_joint_assistant(_unit_key, _unit1, _unit2) end

---创建一个生命体
---@param _unit_key UnitKey 单位编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale_ratio Fixed 缩放大小
---@param _role Role? 所属玩家
---@return LifeEntity 创建出的生命体
function GameAPI.create_life_entity(_unit_key, _pos, _rotation, _scale_ratio, _role) end

---创建一个组件
---@param _u_key UnitKey 组件编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale Vector3 缩放
---@param _role Role? 所属玩家
---@return Obstacle 创建的组件
function GameAPI.create_obstacle(_u_key, _pos, _rotation, _scale, _role) end

---创建场景界面到坐标点
---@param _layer_key E3DLayerKey 场景界面预设编号
---@param _pos Vector3 坐标点
---@param _duration Fixed? 持续事件
---@return E3DLayer 场景界面
function GameAPI.create_scene_ui_at_point(_layer_key, _pos, _duration) end

---播放特效并绑定
---@param _sfx_key SfxKey 特效编号
---@param _unit Unit 起点单位
---@param _socket_name Enums.ModelSocket 起点节点
---@param _scale Fixed 缩放
---@param _duration Fixed 持续时间
---@param _bind_type Enums.BindType 绑定方式
---@return SfxID 特效ID
function GameAPI.create_sfx_with_socket(_sfx_key, _unit, _socket_name, _scale, _duration, _bind_type) end

---播放特效并绑定
---@param _sfx_key SfxKey 特效编号
---@param _unit Unit 起点单位
---@param _socket_name Enums.ModelSocket 起点节点
---@param _offset Vector3 偏移
---@param _rot Quaternion 旋转
---@param _scale Fixed 缩放
---@param _duration Fixed 持续时间
---@param _bind_type Enums.BindType 绑定方式
---@return SfxID 特效ID
function GameAPI.create_sfx_with_socket_offset(_sfx_key, _unit, _socket_name, _offset, _rot, _scale, _duration, _bind_type) end

---创建一个逻辑体
---@param _u_key TriggerSpaceKey 逻辑体编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale Vector3 缩放
---@param _role Role? 所属玩家
---@return TriggerSpace 创建的逻辑体
function GameAPI.create_triggerspace(_u_key, _pos, _rotation, _scale, _role) end

---创建一个组件组
---@param _unit_group_id UnitGroupKey 单位编号
---@param _pos Vector3 位置
---@param _root_quaternion Quaternion 旋转
---@param _role Role? 所属玩家
---@return UnitGroup 创建出的单位
function GameAPI.create_unit_group(_unit_group_id, _pos, _root_quaternion, _role) end

---创建缩放单位
---@param _u_key UnitKey 单位编号
---@param _pos Vector3 位置
---@param _rotation Quaternion 旋转
---@param _scale Vector3 缩放
---@return Unit 创建出的单位
function GameAPI.create_unit_with_scale(_u_key, _pos, _rotation, _scale) end

---获取生物预设的自定义值
---@param _value_type Enums.ValueType 值类型
---@param _key CreatureKey 生物编号
---@param _prop string 名称
---@return any 自定义值
function GameAPI.creature_prefab_get_kv_by_type(_value_type, _key, _prop) end

---获取生物预设的属性
---@param _value_type Enums.ValueType 值类型
---@param _key CreatureKey 生物编号
---@param _prop string 名称
---@return any 属性值
function GameAPI.creature_prefab_get_prop_by_type(_value_type, _key, _prop) end

---生物预设是否存在自定义值
---@param _unit_key CreatureKey 生物编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.creature_prefab_has_kv(_unit_key, _prop) end

---获取触发区域预设的自定义值
---@param _value_type Enums.ValueType 值类型
---@param _key CustomTriggerSpaceKey 逻辑体编号
---@param _prop string 名称
---@return any 自定义值
function GameAPI.customtriggerspace_prefab_get_kv_by_type(_value_type, _key, _prop) end

---获取触发区域预设的属性
---@param _value_type Enums.ValueType 值类型
---@param _key CustomTriggerSpaceKey 逻辑体编号
---@param _prop string 名称
---@return any 属性值
function GameAPI.customtriggerspace_prefab_get_prop_by_type(_value_type, _key, _prop) end

---触发区域预设是否存在自定义值
---@param _key CustomTriggerSpaceKey 触发区域编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.customtriggerspace_prefab_has_kv(_key, _prop) end

---造成伤害
---@param _dst LifeEntity 目标单位
---@param _dmg Fixed 伤害
---@param _src Unit? 伤害来源
---@param _schema DamageSchema? 伤害类型
---@param _data table? 参数
function GameAPI.deal_damage(_dst, _dmg, _src, _schema, _data) end

---删除路点
---@param _path_id PathID 路径
---@param _index integer 路点索引
---@deprecated
---@see GameAPI.remove_pathpoint
function GameAPI.del_road_point(_path_id, _index) end

---销毁场景界面
---@param _layer E3DLayer 场景界面
function GameAPI.destroy_scene_ui(_layer) end

---删除单位
---@param _unit Unit 单位
function GameAPI.destroy_unit(_unit) end

---销毁单位
---@param _unit Unit 单位
---@param _destroy_children boolean? 是否销毁子组件
function GameAPI.destroy_unit_with_children(_unit, _destroy_children) end

---设置单位与预设是否能发生碰撞
---@param _unit Unit 单位
---@param _unit_eid UnitKey 单位编号
---@param _enable boolean 是否碰撞
function GameAPI.enable_collision_between_unit_and_prefab(_unit, _unit_eid, _enable) end

---设置两个单位是否能碰撞
---@param _unit_1 Unit 单位1
---@param _unit_2 Unit 单位2
---@param _enable boolean 是否碰撞
function GameAPI.enable_collision_between_units(_unit_1, _unit_2, _enable) end

---物品预设是否存在自定义值
---@param _equipment_key EquipmentKey 物品编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.equipment_prefab_has_kv(_equipment_key, _prop) end

---创建一个组件组
---@param _unit_group_id UnitGroupKey 单位编号
---@param _pos Vector3 位置
---@param _root_quaternion Quaternion 旋转
---@param _role Role? 所属玩家
---@return UnitGroup 创建出的单位
---@deprecated
---@see GameAPI.create_unit_group
function GameAPI.game_api_create_unit_group(_unit_group_id, _pos, _root_quaternion, _role) end

---游戏结束
function GameAPI.game_end() end

---获取技能预设描述
---@param _ability_id AbilityKey 技能编号
---@return string 技能描述
---@deprecated
---@see GameAPI.ability_prefab_get_desc
function GameAPI.get_ability_prefab_desc(_ability_id) end

---获取技能预设名称
---@param _ability_id AbilityKey 技能编号
---@return string 技能名称
---@deprecated
---@see GameAPI.ability_prefab_get_name
function GameAPI.get_ability_prefab_name(_ability_id) end

---获取成就目标进度
---@param _event_id Achievement 成就
---@return integer 成就进度
---@deprecated
---@see GameAPI.get_achievement_target
function GameAPI.get_achieve_target_count(_event_id) end

---获取成就目标进度
---@param _event_id Achievement 成就
---@return integer 成就进度
function GameAPI.get_achievement_target(_event_id) end

---获取所有阵营
---@return Camp[] 阵营列表
function GameAPI.get_all_camps() end

---获取物品商店中的所有物品编号
---@param _battle_shop_key BattleShopKey 物品商店编号
---@return EquipmentKey[] 物品编号列表
function GameAPI.get_all_equipment_keys_in_shop(_battle_shop_key) end

---获取所有在线玩家
---@return Role[] 玩家列表
function GameAPI.get_all_online_roles() end

---获取所有玩家
---@return Role[] 玩家
function GameAPI.get_all_roles() end

---获取游戏中所有有效玩家
---@return Role[] 玩家列表
---@deprecated
---@see GameAPI.get_all_valid_roles
function GameAPI.get_all_roles_in_game() end

---获取游戏中所有有效玩家
---@return Role[] 玩家列表
function GameAPI.get_all_valid_roles() end

---获取阵营
---@param _camp_id CampID 阵营ID
---@return Camp 阵营
function GameAPI.get_camp(_camp_id) end

---获取阵营关系
---@param _camp1 Camp 阵营
---@param _camp2 Camp 阵营
---@return Enums.CampRelationType 阵营关系
function GameAPI.get_camp_relation(_camp1, _camp2) end

---获取矩形区域内的角色
---@param _center Vector3 中心点
---@param _length Fixed 长
---@param _height Fixed 高
---@param _width Fixed 宽
---@return Character[] 角色列表
function GameAPI.get_characters_in_aabb(_center, _length, _height, _width) end

---获取圆柱区域内的角色
---@param _bottom_center Vector3 底部中心
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return Character[] 角色列表
function GameAPI.get_characters_in_cylinder(_bottom_center, _radius, _height) end

---获取圆形区域内的角色
---@param _center Vector3 中心点
---@param _radius Fixed 半径
---@return Character[] 角色列表
function GameAPI.get_characters_in_sphere(_center, _radius) end

---获取指定编号的逻辑体列表
---@param _creature_key CreatureKey 生物编号
---@return Creature[] 生物列表
function GameAPI.get_creatures_by_key(_creature_key) end

---获取矩形区域内的生物
---@param _center Vector3 中心点
---@param _length Fixed 长
---@param _height Fixed 高
---@param _width Fixed 宽
---@return Creature[] 角色列表
function GameAPI.get_creatures_in_aabb(_center, _length, _height, _width) end

---获取圆环区域内的生物
---@param _center Vector3 中心点
---@param _radius1 Fixed 内径
---@param _radius2 Fixed 外径
---@param _height Fixed 高度
---@return Creature[] 生物列表
function GameAPI.get_creatures_in_annulus(_center, _radius1, _radius2, _height) end

---获取圆柱区域内的生物
---@param _bottom_center Vector3 底部中心
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return Creature[] 生物列表
function GameAPI.get_creatures_in_cylinder(_bottom_center, _radius, _height) end

---获取扇形区域内的生物
---@param _center Vector3 起始点
---@param _face_dir Fixed 角度朝向
---@param _central_angle Fixed 广角
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return Creature[] 生物列表
function GameAPI.get_creatures_in_sector(_center, _face_dir, _central_angle, _radius, _height) end

---获取圆形区域内的生物
---@param _center Vector3 中心点
---@param _radius Fixed 半径
---@return Creature[] 生物列表
function GameAPI.get_creatures_in_sphere(_center, _radius) end

---获取射线检测到的触发区域
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return CustomTriggerSpace 触发区域
---@deprecated
---@see GameAPI.get_first_customtriggerspace_in_raycast
function GameAPI.get_customtriggerspace_in_raycast(_start_pos, _end_pos) end

---获取指定预设的触发区域列表
---@param _key CustomTriggerSpaceKey 触发区域编号
---@return CustomTriggerSpace[] 触发区域列表
function GameAPI.get_customtriggerspaces_by_key(_key) end

---获取射线检测到的触发区域列表
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return CustomTriggerSpace[] 触发区域列表
function GameAPI.get_customtriggerspaces_in_raycast(_start_pos, _end_pos) end

---获取时间戳转化后的日期数
---@param _timestamp Timestamp 时间戳
---@return integer 日
function GameAPI.get_day(_timestamp) end

---获取环境时间
---@return Fixed 当前环境时刻
function GameAPI.get_env_time() end

---获取环境时间流逝速率
---@return Fixed 流逝速率
function GameAPI.get_env_time_ratio() end

---获取环境时间是否自动流逝
---@return boolean 是否自动流逝
function GameAPI.get_env_time_running_enabled() end

---根据索引获取UI节点的子UI节点
---@param _node ENode UI节点
---@param _index integer 索引
---@return ENode 子UI节点
function GameAPI.get_eui_child_by_index(_node, _index) end

---根据名字获取UI节点的子UI节点
---@param _node ENode UI节点
---@param _name string 名字
---@return ENode 子UI节点
function GameAPI.get_eui_child_by_name(_node, _name) end

---获取UI节点的所有子UI节点
---@param _node ENode UI节点
---@return ENode[] 子UI节点列表
function GameAPI.get_eui_children(_node) end

---获取UI节点的子UI节点数量
---@param _node ENode UI节点
---@return integer 数量
function GameAPI.get_eui_children_count(_node) end

---获取场景界面中的控件
---@param _layer E3DLayer 场景界面
---@param _node_id ENode 界面节点
---@return ENode 场景界面节点
function GameAPI.get_eui_node_at_scene_ui(_layer, _node_id) end

---获取射线检测到的触发区域
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return CustomTriggerSpace 触发区域
function GameAPI.get_first_customtriggerspace_in_raycast(_start_pos, _end_pos) end

---获取付费商品信息列表
---@return GoodsInfo[] goods_list 商品信息列表
---
---@class GoodsInfo
---@field goods_id UgcGoods 商品ID
---@field name string 商品名称
---@field commodity_infos CommodityInfo[] 商品项列表
---
---@alias CommodityInfo {[1]: UgcCommodity, [2]: integer}  {商品项目ID, 道具数量}
function GameAPI.get_goods_list() end

---获取时间戳转化后的小时数
---@param _timestamp Timestamp 时间戳
---@return integer 时
function GameAPI.get_hour(_timestamp) end

---获取组件上的所有关节
---@param _unit Unit 目标单位
---@return JointAssistant[] 关节列表
function GameAPI.get_joint_assistants(_unit) end

---获取矩形区域内的生命体
---@param _center Vector3 中心点
---@param _length Fixed 长
---@param _height Fixed 高
---@param _width Fixed 宽
---@return LifeEntity[] 生命体列表
---@deprecated
---@see GameAPI.get_lifeentities_in_aabb
function GameAPI.get_life_entities_in_aabb(_center, _length, _height, _width) end

---获取圆柱区域内的生命体
---@param _bottom_center Vector3 底部中心
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return LifeEntity[] 生命体列表
---@deprecated
---@see GameAPI.get_lifeentities_in_cylinder
function GameAPI.get_life_entities_in_cylinder(_bottom_center, _radius, _height) end

---获取圆形区域内的生命体
---@param _center Vector3 中心点
---@param _radius Fixed 半径
---@return LifeEntity[] 生命体列表
---@deprecated
---@see GameAPI.get_lifeentities_in_sphere
function GameAPI.get_life_entities_in_sphere(_center, _radius) end

---获取矩形区域内的生命体
---@param _center Vector3 中心点
---@param _length Fixed 长
---@param _height Fixed 高
---@param _width Fixed 宽
---@return LifeEntity[] 生命体列表
function GameAPI.get_lifeentities_in_aabb(_center, _length, _height, _width) end

---获取圆柱区域内的生命体
---@param _bottom_center Vector3 底部中心
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return LifeEntity[] 生命体列表
function GameAPI.get_lifeentities_in_cylinder(_bottom_center, _radius, _height) end

---获取圆形区域内的生命体
---@param _center Vector3 中心点
---@param _radius Fixed 半径
---@return LifeEntity[] 生命体列表
function GameAPI.get_lifeentities_in_sphere(_center, _radius) end

---获取地图当前评分
---@return Fixed 当前评分
---@deprecated
---@see GameAPI.get_map_rating_score
function GameAPI.get_map_appreciate_score() end

---获取所有地图角色
---@return Character[] 角色列表
function GameAPI.get_map_characters() end

---获取地图当前评分
---@return Fixed 当前评分
function GameAPI.get_map_rating_score() end

---获取环境时间
---@return Fixed 当前环境时刻
---@deprecated
---@see GameAPI.get_env_time
function GameAPI.get_map_time() end

---获取环境时间流逝速率
---@return Fixed 流逝速率
---@deprecated
---@see GameAPI.get_env_time_ratio
function GameAPI.get_map_time_ratio() end

---获取环境时间是否自动流逝
---@return boolean 是否自动流逝
---@deprecated
---@see GameAPI.get_env_time_running_enabled
function GameAPI.get_map_time_running_enabled() end

---获取时间戳转化后的分钟数
---@param _timestamp Timestamp 时间戳
---@return integer 分
function GameAPI.get_minute(_timestamp) end

---获取效果预设描述
---@param _modifier_key ModifierKey 效果编号
---@return string 效果描述
---@deprecated
---@see GameAPI.modifier_prefab_get_desc
function GameAPI.get_modifier_prefab_desc(_modifier_key) end

---获取效果预设名称
---@param _modifier_key ModifierKey 效果编号
---@return string 效果名称
---@deprecated
---@see GameAPI.modifier_prefab_get_name
function GameAPI.get_modifier_prefab_name(_modifier_key) end

---获取动画时长
---@param _montage_id MontageKey 剧情动画编号
---@return Fixed 时长
function GameAPI.get_montage_duration(_montage_id) end

---获取时间戳转化后的月份数
---@param _timestamp Timestamp 时间戳
---@return integer 月
function GameAPI.get_month(_timestamp) end

---获取射线检测到的组件
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return Obstacle 组件
function GameAPI.get_obstacle_by_raycast(_start_pos, _end_pos) end

---获取射线检测到的组件
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return Obstacle 组件
---@deprecated
---@see GameAPI.get_obstacle_by_raycast
function GameAPI.get_obstacle_in_raycast(_start_pos, _end_pos) end

---获取指定编号的组件列表
---@param _key ObstacleKey 组件编号
---@return Obstacle[] 组件列表
function GameAPI.get_obstacles_by_key(_key) end

---获取射线检测到的组件列表
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return Obstacle[] 组件列表
function GameAPI.get_obstacles_by_raycast(_start_pos, _end_pos) end

---获取矩形区域内的组件
---@param _center Vector3 中心点
---@param _length Fixed 长
---@param _height Fixed 高
---@param _width Fixed 宽
---@return Obstacle[] 角色列表
function GameAPI.get_obstacles_in_aabb(_center, _length, _height, _width) end

---获取圆环区域内的组件
---@param _center Vector3 中心点
---@param _radius1 Fixed 内径
---@param _radius2 Fixed 外径
---@param _height Fixed 高度
---@return Obstacle[] 组件列表
function GameAPI.get_obstacles_in_annulus(_center, _radius1, _radius2, _height) end

---获取圆柱区域内的组件
---@param _bottom_center Vector3 底部中心
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return Obstacle[] 组件列表
function GameAPI.get_obstacles_in_cylinder(_bottom_center, _radius, _height) end

---获取射线检测到的组件列表
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@return Obstacle[] 组件列表
---@deprecated
---@see GameAPI.get_obstacles_by_raycast
function GameAPI.get_obstacles_in_raycast(_start_pos, _end_pos) end

---获取扇形区域内的组件
---@param _center Vector3 起始点
---@param _face_dir Fixed 角度朝向
---@param _central_angle Fixed 广角
---@param _radius Fixed 半径
---@param _height Fixed 高度
---@return Obstacle[] 组件列表
function GameAPI.get_obstacles_in_sector(_center, _face_dir, _central_angle, _radius, _height) end

---获取圆形区域内的组件
---@param _center Vector3 中心点
---@param _radius Fixed 半径
---@return Obstacle[] 组件列表
function GameAPI.get_obstacles_in_sphere(_center, _radius) end

---获取路点坐标
---@param _point_id PathPointID 路点
---@return Vector3 坐标
function GameAPI.get_pathpoint_by_id(_point_id) end

---获取路径中的路点向量
---@param _path_id PathID 路径
---@param _index integer 路点索引
---@return Vector3 向量
function GameAPI.get_pathpoint_by_index(_path_id, _index) end

---获取随机颜色
---@return Color 颜色
---@deprecated
---@see GameAPI.random_color
function GameAPI.get_random_color() end

---获取路径中的路点向量
---@param _path_id PathID 路径
---@param _index integer 路点索引
---@return Vector3 向量
---@deprecated
---@see GameAPI.get_pathpoint_by_index
function GameAPI.get_road_point_vector3(_path_id, _index) end

---获取路点坐标
---@param _point_id PathPointID 路点
---@return Vector3 坐标
---@deprecated
---@see GameAPI.get_pathpoint_by_id
function GameAPI.get_roadpoint_position(_point_id) end

---获取路点坐标
---@param _point_id PathPointID 路点
---@return Vector3 坐标
---@deprecated
---@see GameAPI.get_pathpoint_by_id
function GameAPI.get_roadpoint_position_vector3(_point_id) end

---玩家ID获取玩家
---@param _role_id RoleID 玩家ID
---@return Role 玩家
function GameAPI.get_role(_role_id) end

---获取玩家亲密度
---@param _role_1 Role 玩家1
---@param _role_2 Role 玩家2
---@return integer 亲密度
---@deprecated
---@see GameAPI.get_role_friendship_value
function GameAPI.get_role_friendship_level(_role_1, _role_2) end

---获取玩家亲密度
---@param _role_1 Role 玩家1
---@param _role_2 Role 玩家2
---@return integer 亲密度
function GameAPI.get_role_friendship_value(_role_1, _role_2) end

---获取时间戳转化后的秒数
---@param _timestamp Timestamp 时间戳
---@return integer 秒
function GameAPI.get_second(_timestamp) end

---获取当前时间戳
---@return Timestamp 时间戳
function GameAPI.get_timestamp() end

---获取时间戳
---@param _year integer 年
---@param _month integer 月
---@param _day integer 日
---@param _hour integer 时
---@param _minute integer 分
---@param _second integer 秒
---@return Timestamp 时间戳
function GameAPI.get_timestamp_by_time(_year, _month, _day, _hour, _minute, _second) end

---获取时间戳秒差
---@param _timestamp_1 Timestamp 时间戳1
---@param _timestamp_2 Timestamp 时间戳2
---@return integer 秒差
function GameAPI.get_timestamp_diff(_timestamp_1, _timestamp_2) end

---获取指定编号的逻辑体列表
---@param _key TriggerSpaceKey 逻辑体编号
---@return TriggerSpace[] 逻辑体列表
function GameAPI.get_triggerspaces_by_key(_key) end

---获取单位
---@param _unit_id UnitID 单位ID
---@return Unit 单位
function GameAPI.get_unit(_unit_id) end

---获取组件上的所有关节
---@param _unit Unit 目标单位
---@return JointAssistant[] 关节列表
---@deprecated
---@see GameAPI.get_joint_assistants
function GameAPI.get_unit_all_joint_assistant(_unit) end

---获取单位ID
---@param _name string 单位名称
---@return UnitID 单位ID
function GameAPI.get_unit_id_by_name(_name) end

---获取路径向量数组
---@param _path_id PathID 路径
---@return Vector3[] 向量数组
---@deprecated
---@see GameAPI.get_vector3s_from_path
function GameAPI.get_vector3_from_path(_path_id) end

---获取路径向量数组
---@param _path_id PathID 路径
---@return Vector3[] 向量数组
---@deprecated
---@see GameAPI.get_vector3s_from_path
function GameAPI.get_vector3_list_from_road(_path_id) end

---获取路径向量数组
---@param _path_id PathID 路径
---@return Vector3[] 向量数组
function GameAPI.get_vector3s_from_path(_path_id) end

---获取时间戳转化后的星期数
---@param _timestamp Timestamp 时间戳
---@return integer 星期
function GameAPI.get_weekday(_timestamp) end

---获取时间戳转化后的年数
---@param _timestamp Timestamp 时间戳
---@return integer 年
function GameAPI.get_year(_timestamp) end

---是否有全局变量
---@param _var_name string 变量名称
---@return boolean 是否含有全局变量
function GameAPI.has_global_kv(_var_name) end

---是否有全局变量
---@param _var_name string 变量名称
---@return boolean 是否含有全局变量
---@deprecated
---@see GameAPI.has_global_kv
function GameAPI.has_var(_var_name) end

---是否开启存档
---@return boolean 是否开启
function GameAPI.is_archives_enabled() end

---坐标点是否在触发区域内
---@param _point Vector3 坐标点
---@param _custom_trigger_space CustomTriggerSpace 触发区域
---@return boolean 布尔
---@deprecated
---@see GameAPI.is_point_in_customtriggerspace
function GameAPI.is_point_in_custom_trigger_space(_point, _custom_trigger_space) end

---坐标点是否在触发区域内
---@param _point Vector3 坐标点
---@param _custom_trigger_space CustomTriggerSpace 触发区域
---@return boolean 布尔
---@deprecated
---@see GameAPI.is_point_in_customtriggerspace
function GameAPI.is_point_in_custom_trigger_spaces(_point, _custom_trigger_space) end

---坐标点是否在触发区域内
---@param _point Vector3 坐标点
---@param _custom_trigger_space CustomTriggerSpace 触发区域
---@return boolean 布尔
function GameAPI.is_point_in_customtriggerspace(_point, _custom_trigger_space) end

---跳转关卡
---@param _level_key LevelKey 关卡编号
function GameAPI.load_level(_level_key) end

---获取效果预设描述
---@param _modifier_key ModifierKey 效果编号
---@return string 效果描述
function GameAPI.modifier_prefab_get_desc(_modifier_key) end

---获取效果预设名称
---@param _modifier_key ModifierKey 效果编号
---@return string 效果名称
function GameAPI.modifier_prefab_get_name(_modifier_key) end

---获取效果预设的属性
---@param _value_type Enums.ValueType 值类型
---@param _key ModifierKey 效果编号
---@param _prop string 名称
---@return any 属性值
function GameAPI.modifier_prefab_get_prop_by_type(_value_type, _key, _prop) end

---效果预设是否存在自定义值
---@param _modifier_key ModifierKey 效果编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.modifier_prefab_has_kv(_modifier_key, _prop) end

---获取组件预设的自定义值
---@param _value_type Enums.ValueType 值类型
---@param _key ObstacleKey 组件编号
---@param _prop string 名称
---@return any 自定义值
function GameAPI.obstacle_prefab_get_kv_by_type(_value_type, _key, _prop) end

---获取组件预设的属性
---@param _value_type Enums.ValueType 值类型
---@param _key ObstacleKey 组件编号
---@param _prop string 名称
---@return any 属性值
function GameAPI.obstacle_prefab_get_prop_by_type(_value_type, _key, _prop) end

---组件预设是否存在自定义值
---@param _key ObstacleKey 组件编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.obstacle_prefab_has_kv(_key, _prop) end

---单位开始播放3d音效
---@param _position Vector3 发声位置
---@param _sound_key SoundKey 声音编号
---@param _duration Fixed? 持续时间
---@param _volume Fixed? 音量
---@return SoundID 音效ID
function GameAPI.play_3d_sound(_position, _sound_key, _duration, _volume) end

---播放特效
---@param _sfx_key SfxKey 特效编号
---@param _pos Vector3 位置
---@param _rot Quaternion 旋转
---@param _scale Fixed 缩放
---@param _duration Fixed? 持续时间
---@param _rate Fixed? 播放速率
---@param _with_sound boolean? 是否播放音效
---@return SfxID 特效ID
function GameAPI.play_sfx_by_key(_sfx_key, _pos, _rot, _scale, _duration, _rate, _with_sound) end

---随机整数
---@param _min_value integer 最小值
---@param _max_value integer 最大值
---@return integer 整数
---@deprecated
---@see GameAPI.random_int
function GameAPI.randint(_min_value, _max_value) end

---获取随机颜色
---@return Color 颜色
function GameAPI.random_color() end

---随机整数
---@param _min_value integer 最小值
---@param _max_value integer 最大值
---@return integer 整数
function GameAPI.random_int(_min_value, _max_value) end

---查询射线检测到的单位碰撞信息
---@param _start_pos Vector3 起始点
---@param _end_pos Vector3 终点
---@param _include_unit_types Enums.UnitType[] 包含的单位类型
---@param _raycast_handler function 碰撞回调
function GameAPI.raycast_unit(_start_pos, _end_pos, _include_unit_types, _raycast_handler) end

---删除路点
---@param _path_id PathID 路径
---@param _index integer 路点索引
function GameAPI.remove_pathpoint(_path_id, _index) end

---设置所有场景界面显示状态
---@param _role Role 玩家
---@param _visible boolean 点击关闭属性
function GameAPI.set_all_scene_ui_visible(_role, _visible) end

---设置单位与预设是否能发生碰撞
---@param _unit Unit 单位
---@param _unit_eid UnitKey 单位编号
---@param _enable boolean 是否碰撞
---@deprecated
---@see GameAPI.enable_collision_between_unit_and_prefab
function GameAPI.set_enable_collide_unit_and_prefab(_unit, _unit_eid, _enable) end

---设置两个单位是否能碰撞
---@param _unit_1 Unit 单位1
---@param _unit_2 Unit 单位2
---@param _enable boolean 是否碰撞
---@deprecated
---@see GameAPI.enable_collision_between_units
function GameAPI.set_enable_collide_with_units(_unit_1, _unit_2, _enable) end

---设置环境时间
---@param _target_time Fixed 目标时刻
---@param _duration Fixed 过渡时间
---@param _direction boolean 是否正向
function GameAPI.set_env_time(_target_time, _duration, _direction) end

---设置环境时间流逝速度
---@param _time_ratio Fixed 流逝速度
function GameAPI.set_env_time_ratio(_time_ratio) end

---设置环境时间是否自动流逝
---@param _enabled boolean 是否自动流逝
function GameAPI.set_env_time_running_enabled(_enabled) end

---设置物品商店物品剩余库存
---@param _battle_shop_key BattleShopKey 物品商店编号
---@param _equipment_key EquipmentKey 物品编号
---@param _cur_stock_count integer 剩余库存
---@deprecated
---@see GameAPI.set_equipment_remaining_stock_count
function GameAPI.set_equipment_current_stock_num(_battle_shop_key, _equipment_key, _cur_stock_count) end

---设置物品商店物品最大库存
---@param _battle_shop_key BattleShopKey 物品商店编号
---@param _equipment_key EquipmentKey 物品编号
---@param _max_stock_count integer 最大库存
function GameAPI.set_equipment_max_stock_count(_battle_shop_key, _equipment_key, _max_stock_count) end

---设置物品商店物品最大库存
---@param _battle_shop_key BattleShopKey 物品商店编号
---@param _equipment_key EquipmentKey 物品编号
---@param _max_stock_count integer 最大库存
---@deprecated
---@see GameAPI.set_equipment_max_stock_count
function GameAPI.set_equipment_max_stock_num(_battle_shop_key, _equipment_key, _max_stock_count) end

---设置物品商店物品剩余库存
---@param _battle_shop_key BattleShopKey 物品商店编号
---@param _equipment_key EquipmentKey 物品编号
---@param _cur_stock_count integer 剩余库存
function GameAPI.set_equipment_remaining_stock_count(_battle_shop_key, _equipment_key, _cur_stock_count) end

---设置全局风场开关
---@param _bool_value boolean 是否开启
function GameAPI.set_global_wind_enabled(_bool_value) end

---设置全局风场方向力
---@param _x_value Fixed X方向力
---@param _y_value Fixed Y方向力
function GameAPI.set_global_wind_force(_x_value, _y_value) end

---设置全局风场频率
---@param _fixed_value Fixed 频率
function GameAPI.set_global_wind_frequency(_fixed_value) end

---设置生命体存活场景边界大小
---@param _x Fixed 矩形边界长度
---@param _y Fixed 矩形边界高度
---@param _z Fixed 矩形边界宽度
function GameAPI.set_life_entity_survival_scene_boundary(_x, _y, _z) end

---设置环境时间
---@param _target_time Fixed 目标时刻
---@param _duration Fixed 过渡时间
---@param _direction boolean 是否正向
---@deprecated
---@see GameAPI.set_env_time
function GameAPI.set_map_time(_target_time, _duration, _direction) end

---设置环境时间流逝速度
---@param _time_ratio Fixed 流逝速度
---@deprecated
---@see GameAPI.set_env_time_ratio
function GameAPI.set_map_time_ratio(_time_ratio) end

---设置环境时间是否自动流逝
---@param _enabled boolean 是否自动流逝
---@deprecated
---@see GameAPI.set_env_time_running_enabled
function GameAPI.set_map_time_running_enabled(_enabled) end

---设置场景界面位置
---@param _role Role 玩家
---@param _layer E3DLayer 场景界面
---@param _position Vector3 坐标点
function GameAPI.set_scene_ui_position(_role, _layer, _position) end

---设置场景界面的显隐
---@param _layer E3DLayer 场景界面
---@param _role Role 玩家
---@param _visible boolean 显隐
function GameAPI.set_scene_ui_visible(_layer, _role, _visible) end

---设置组件存活场景边界大小
---@param _x Fixed 矩形边界长度
---@param _y Fixed 矩形边界高度
---@param _z Fixed 矩形边界宽度
function GameAPI.set_unit_survival_scene_boundary(_x, _y, _z) end

---停止播放音效
---@param _assigned_id SoundID 音效ID
function GameAPI.stop_sound(_assigned_id) end

---获取时间戳转化后的星期数
---@param _timestamp Timestamp 时间戳
---@return integer 星期
---@deprecated
---@see GameAPI.get_weekday
function GameAPI.timestame_to_weekday(_timestamp) end

---获取逻辑体预设的自定义值
---@param _value_type Enums.ValueType 值类型
---@param _key TriggerSpaceKey 逻辑体编号
---@param _prop string 名称
---@return any 自定义值
function GameAPI.triggerspace_prefab_get_kv_by_type(_value_type, _key, _prop) end

---获取逻辑体预设的属性
---@param _value_type Enums.ValueType 值类型
---@param _key TriggerSpaceKey 逻辑体编号
---@param _prop string 名称
---@return any 属性值
function GameAPI.triggerspace_prefab_get_prop_by_type(_value_type, _key, _prop) end

---逻辑体预设是否存在自定义值
---@param _key TriggerSpaceKey 逻辑体编号
---@param _prop string 名称
---@return boolean 是否存在
function GameAPI.triggerspace_prefab_has_kv(_key, _prop) end

---@class ItemBox: DisplayComp, ExprDeviceComp, SceneUI
ItemBox = {}

---添加道具箱刷新技能
---@param _ability_key AbilityKey 技能编号
---@param _weight integer 权重
function ItemBox.add_ability(_ability_key, _weight) end

---添加物品箱刷新预设
---@param _key EquipmentKey 物品编号
---@param _weight integer 权重
function ItemBox.add_equipment(_key, _weight) end

---移除道具箱刷新技能
---@param _ability_key AbilityKey 技能编号
function ItemBox.remove_ability(_ability_key) end

---移除物品箱刷新预设
---@param _key EquipmentKey 物品编号
function ItemBox.remove_equipment(_key) end

---@class JointAssistantComp
JointAssistantComp = {}

---获取关节组件主体
---@return Character 关节组件主体
---@deprecated
---@see JointAssistantComp.get_joint_assistant_primary_obstacle
function JointAssistantComp.get_joint_assistant_object1_obstacle() end

---获取关节组件目标
---@return Character 关节组件目标
---@deprecated
---@see JointAssistantComp.get_joint_assistant_target_obstacle
function JointAssistantComp.get_joint_assistant_object2_obstacle() end

---获取关节组件主体
---@return Character 关节组件主体
function JointAssistantComp.get_joint_assistant_primary_obstacle() end

---获取关节组件目标
---@return Character 关节组件目标
function JointAssistantComp.get_joint_assistant_target_obstacle() end

---获取关节组件类型
---@return JointAssistantType 关节类型
function JointAssistantComp.get_joint_assistant_type() end

---设置关节组件的启用状态
---@param _enable boolean 开关
function JointAssistantComp.set_joint_assistant_enabled(_enable) end

---设置关节组件可见性
---@param _visible boolean 可见性
function JointAssistantComp.set_joint_assistant_visible(_visible) end

---@class JumpComp
JumpComp = {}

---获取多段跳剩余冷却
---@return Fixed 冷却时间
---@deprecated
---@see JumpComp.get_multi_jump_remaining_cooldown
function JumpComp.get_multi_jump_current_cooldown() end

---获取多段跳剩余冷却
---@return Fixed 冷却时间
function JumpComp.get_multi_jump_remaining_cooldown() end

---是否位于地面
---@return boolean 是否位于地面
function JumpComp.is_on_ground() end

---设置多段跳剩余冷却
---@param _cd Fixed 冷却时间
---@deprecated
---@see JumpComp.set_multi_jump_remaining_cooldown
function JumpComp.set_multi_jump_current_cooldown(_cd) end

---设置多段跳剩余冷却
---@param _cd Fixed 冷却时间
function JumpComp.set_multi_jump_remaining_cooldown(_cd) end

---@class KVBase
KVBase = {}

---添加标签
---@param _tag string 标签
function KVBase.add_tag(_tag) end

---清空自定义值
function KVBase.clear_kv() end

---清空标签
function KVBase.clear_tag() end

---移除标签
---@param _tag string 标签
---@deprecated
---@see KVBase.remove_tag
function KVBase.delete_tag(_tag) end

---获取公告板文本内容
---@return string 公告板内容
---@deprecated
---@see Obstacle.get_billboard_text
function KVBase.get_billboard_content() end

---获取公告板文本字体大小
---@return integer 公告板字体大小
---@deprecated
---@see Obstacle.get_billboard_font_size
function KVBase.get_billboard_font_size() end

---获取自定义值
---@param _value_type Enums.ValueType 值类型
---@param _key string 名称
---@return any 自定义值
function KVBase.get_kv_by_type(_value_type, _key) end

---是否有自定义值
---@param _key string 名称
---@return boolean 是否有自定义值
function KVBase.has_kv(_key) end

---是否含有标签
---@param _tag string 标签名
---@return boolean 是否有标签
function KVBase.has_tag(_tag) end

---移除自定义值
---@param _key string 名称
function KVBase.remove_kv(_key) end

---移除标签
---@param _tag string 标签
function KVBase.remove_tag(_tag) end

---设置公告板文本内容
---@param _content string 文本内容
---@deprecated
---@see Obstacle.set_billboard_text
function KVBase.set_billboard_content(_content) end

---设置公告板文本颜色
---@param _color Color 文本颜色
---@param _gradient_color_1 Color? 渐变色1
---@param _gradient_color_2 Color? 渐变色2
---@param _gradient_color_3 Color? 渐变色3
---@param _gradient_color_4 Color? 渐变色4
---@deprecated
---@see Obstacle.set_billboard_text_color
function KVBase.set_billboard_font_color(_color, _gradient_color_1, _gradient_color_2, _gradient_color_3, _gradient_color_4) end

---设置公告板文本字体大小
---@param _font_size integer 字体大小
---@deprecated
---@see Obstacle.set_billboard_font_size
function KVBase.set_billboard_font_size(_font_size) end

---设置公告板文本颜色
---@param _color Color 文本颜色
---@param _gradient_color_1 Color? 渐变色1
---@param _gradient_color_2 Color? 渐变色2
---@param _gradient_color_3 Color? 渐变色3
---@param _gradient_color_4 Color? 渐变色4
---@deprecated
---@see Obstacle.set_billboard_text_color
function KVBase.set_billboard_text_color(_color, _gradient_color_1, _gradient_color_2, _gradient_color_3, _gradient_color_4) end

---设置自定义值
---@param _value_type Enums.ValueType 值类型
---@param _key string 名称
---@param _val any 自定义值
function KVBase.set_kv_by_type(_value_type, _key, _val) end

---添加标签
---@param _tag string 标签
---@deprecated
---@see KVBase.add_tag
function KVBase.set_tag(_tag) end

---@class LevelComp
LevelComp = {}

---获得经验
---@param _killed_exp Fixed 经验值
function LevelComp.gain_exp(_killed_exp) end

---获取当前经验值
---@return Fixed 经验值
function LevelComp.get_exp() end

---获取击杀经验点
---@return Fixed 击杀经验值
function LevelComp.get_killed_exp() end

---获得当前等级
---@return integer 当前等级
function LevelComp.get_level() end

---升级
function LevelComp.level_up() end

---设置击杀经验点
---@param _killed_exp Fixed 击杀经验值
function LevelComp.set_killed_exp(_killed_exp) end

---@class LifeComp
LifeComp = {}

---生物是否可以复活
---@return boolean 是否可以复活
function LifeComp.can_reborn() end

---改变健康值
---@param _value Fixed 改变健康值
function LifeComp.change_hp(_value) end

---使生物死亡
---@param _dmg_unit Unit? 伤害来源
function LifeComp.die(_dmg_unit) end

---获取健康值
---@return Fixed 健康值
function LifeComp.get_hp() end

---获取最大健康值
---@return Fixed 最大健康值
function LifeComp.get_hp_max() end

---获取当前命数
---@return integer 当前命数
function LifeComp.get_life() end

---获取最大命数
---@return integer 当前命数
function LifeComp.get_life_max() end

---是否处于死亡状态
---@return boolean 处于死亡
function LifeComp.is_die_status() end

---是否无限复活
---@return boolean 是否无限复活
function LifeComp.is_infinite_reborn() end

---使生物复活
---@param _immediate boolean? 立即复活
function LifeComp.reborn(_immediate) end

---设置自动复活
---@param _auto_reborn boolean 是否自动复活
---@deprecated
---@see LifeComp.set_auto_reborn_enabled
function LifeComp.set_auto_reborn(_auto_reborn) end

---设置自动复活
---@param _auto_reborn boolean 是否自动复活
---@deprecated
---@see LifeComp.set_auto_reborn_enabled
function LifeComp.set_auto_reborn_enable(_auto_reborn) end

---设置自动复活
---@param _auto_reborn boolean 是否自动复活
function LifeComp.set_auto_reborn_enabled(_auto_reborn) end

---设置最大健康值
---@param _value Fixed 最大健康值
function LifeComp.set_hp_max(_value) end

---设置无限复活
---@param _enable_reborn boolean 是否无限复活
---@deprecated
---@see LifeComp.set_infinite_reborn_enabled
function LifeComp.set_infinite_reborn(_enable_reborn) end

---设置无限复活
---@param _enable_reborn boolean 是否无限复活
---@deprecated
---@see LifeComp.set_infinite_reborn_enabled
function LifeComp.set_infinite_reborn_enable(_enable_reborn) end

---设置无限复活
---@param _enable_reborn boolean 是否无限复活
function LifeComp.set_infinite_reborn_enabled(_enable_reborn) end

---改变当前命数
---@param _value integer 当前命数
---@deprecated
---@see LifeComp.set_life_count
function LifeComp.set_life(_value) end

---改变当前命数
---@param _value integer 当前命数
function LifeComp.set_life_count(_value) end

---改变最大命数
---@param _value integer 最大命数
function LifeComp.set_life_max(_value) end

---设置是否原地复活
---@param _reborn_in_place boolean 是否原地复活
---@param _reset_camera boolean 是否重置相机
function LifeComp.set_reborn_in_place(_reborn_in_place, _reset_camera) end

---设置复活时间
---@param _reborn_time Fixed 复活时间
function LifeComp.set_reborn_time(_reborn_time) end

---@class LifeEntity: AbilityComp, AttrComp, BuffStateComp, CharacterComp, DisplayComp, EquipmentComp, JumpComp, LevelComp, LifeComp, LiftComp, LiftedComp, ModifierComp, MoveStatusComp, RollComp, RushComp, SceneUI, Unit, UnitInteractVolumeComp
LifeEntity = {}

---控制AI执行警戒命令
---@param _tagert_pos Vector3 目标
---@param _target_dir Vector3 朝向
---@param _dalay_time Fixed 延迟
---@param _reject_time Fixed 厌恶时间
---@param _move_mode Enums.MoveMode 移动方式
function LifeEntity.ai_command_alert(_tagert_pos, _target_dir, _dalay_time, _reject_time, _move_mode) end

---控制AI执行追击行为(技能)
---@param _target LifeEntity 目标
---@param _chase_range Fixed 追击范围
---@param _reject_time Fixed 厌恶时间
---@param _action_distance Fixed 反应距离
---@param _ability_key AbilityKey 反应行为
---@param _move_mode Enums.MoveMode 移动方式
---@param _action_count integer 追击次数
function LifeEntity.ai_command_chase_with_ability(_target, _chase_range, _reject_time, _action_distance, _ability_key, _move_mode, _action_count) end

---控制AI执行追击行为(命令)
---@param _target LifeEntity 目标
---@param _chase_range Fixed 追击范围
---@param _reject_time Fixed 厌恶时间
---@param _action_distance Fixed 反应距离
---@param _action_mode Enums.AIBasicCommand 反应行为
---@param _move_mode Enums.MoveMode 移动方式
---@param _action_count integer 追击次数
function LifeEntity.ai_command_chase_with_action(_target, _chase_range, _reject_time, _action_distance, _action_mode, _move_mode, _action_count) end

---控制AI执行追击行为(物品)
---@param _target LifeEntity 目标
---@param _chase_range Fixed 追击范围
---@param _reject_time Fixed 厌恶时间
---@param _action_distance Fixed 反应距离
---@param _equipment_key EquipmentKey 反应行为
---@param _move_mode Enums.MoveMode 移动方式
---@param _action_count integer 追击次数
function LifeEntity.ai_command_chase_with_equipment(_target, _chase_range, _reject_time, _action_distance, _equipment_key, _move_mode, _action_count) end

---控制AI执行跟随命令
---@param _target_unit Character 目标
---@param _follow_dis Fixed 距离
---@param _tolerate_dis Fixed 容忍距离
---@param _reject_time Fixed 厌恶时间
---@param _move_mode Enums.MoveMode 移动方式
function LifeEntity.ai_command_follow(_target_unit, _follow_dis, _tolerate_dis, _reject_time, _move_mode) end

---控制AI执行模仿命令
---@param _target_unit Character 目标
---@param _delay Fixed 延迟
---@param _disable_actions Enums.AIBasicCommand[] 屏蔽操作
function LifeEntity.ai_command_imitate(_target_unit, _delay, _disable_actions) end

---控制AI跳跃
function LifeEntity.ai_command_jump() end

---控制AI举起/扔下/投掷
function LifeEntity.ai_command_lift() end

---控制AI执行巡逻命令
---@param _waypoint Vector3[] 路径
---@param _reject_time Fixed 厌恶时间
---@param _round_mode Enums.PatrolType 往返模式
---@param _move_mode Enums.MoveMode 移动方式
---@deprecated
---@see LifeEntity.ai_command_patrol
function LifeEntity.ai_command_nav(_waypoint, _reject_time, _round_mode, _move_mode) end

---控制AI执行巡逻命令
---@param _waypoint Vector3[] 路径
---@param _reject_time Fixed 厌恶时间
---@param _round_mode Enums.PatrolType 往返模式
---@param _move_mode Enums.MoveMode 移动方式
function LifeEntity.ai_command_patrol(_waypoint, _reject_time, _round_mode, _move_mode) end

---控制AI拾取物品
---@param _target_equipment Equipment 拾取物品
---@param _move_mode Enums.MoveMode 移动方式
---@param _reject_time Fixed 厌恶时间
function LifeEntity.ai_command_pick_up_equipment(_target_equipment, _move_mode, _reject_time) end

---控制AI滚动
function LifeEntity.ai_command_roll() end

---控制AI前扑
function LifeEntity.ai_command_rush() end

---控制AI单位移动
---@param _direction Vector3 方向
---@param _t Fixed 时间
function LifeEntity.ai_command_start_move(_direction, _t) end

---控制AI执行高优先级寻路命令
---@param _target_position Vector3[] 坐标
---@param _duration Fixed? 持续时间
---@param _threshold Fixed? 距离阈值
function LifeEntity.ai_command_start_move_high_priority(_target_position, _duration, _threshold) end

---控制AI单位停止移动
---@param _duration Fixed 时间
function LifeEntity.ai_command_stop_move(_duration) end

---根据角色设置模型
---@param _character Character 角色
---@param _include_ugc_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体尺寸
---@deprecated
---@see LifeEntity.set_model_by_character
function LifeEntity.change_model_by_character(_character, _include_ugc_model, _inherit_scale, _inherit_capsule_size) end

---根据生物设置模型
---@param _creature Creature 生物
---@param _include_custom_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体尺寸
---@deprecated
---@see LifeEntity.set_model_by_creature
function LifeEntity.change_model_by_creature(_creature, _include_custom_model, _inherit_scale, _inherit_capsule_size) end

---根据生物预设设置模型
---@param _creature_key CreatureKey 生物编号
---@param _include_custom_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体
---@deprecated
---@see LifeEntity.set_model_by_creature_key
function LifeEntity.change_model_by_creature_key(_creature_key, _include_custom_model, _inherit_scale, _inherit_capsule_size) end

---获取朝向
---@return Vector3 方向
function LifeEntity.get_direction() end

---获取朝向
---@return Vector3 方向
---@deprecated
---@see LifeEntity.get_direction
function LifeEntity.get_face_dir() end

---获取朝向
---@return Vector3 方向
---@deprecated
---@see LifeEntity.get_direction
function LifeEntity.get_face_direction() end

---获取生命体大力击倒阈值
function LifeEntity.get_hard_punch_threshold() end

---获取生命体血条宽度缩放
---@return Fixed 宽度缩放
function LifeEntity.get_hpbar_scale_x() end

---获取生命体血条高度缩放
---@return Fixed 高度缩放
function LifeEntity.get_hpbar_scale_y() end

---获取指定生命体当前抓举的生命体
---@return LifeEntity 被抓举的生命体
function LifeEntity.get_lifted_lifeentity() end

---获取指定生命体当前抓举的组件
---@return Obstacle 被抓举的组件
function LifeEntity.get_lifted_obstacle() end

---获取生命体控制玩家
---@return Role 控制玩家
function LifeEntity.get_owner() end

---获取生命体击倒阈值
function LifeEntity.get_punch_threshold() end

---获取生命体是否可拖动
---@return boolean 可拖动
---@deprecated
---@see LifeEntity.is_draggable
function LifeEntity.is_drag_enable() end

---获取生命体是否可拖动
---@return boolean 可拖动
function LifeEntity.is_draggable() end

---生命体是否进入魂蛋模式
---@return boolean 是否处于魂蛋模式
function LifeEntity.is_ghost_mode() end

---生命体是否在跳跃中
---@return boolean 是否在跳跃中
function LifeEntity.is_jumping() end

---生命体是否在移动中
---@return boolean 是否在移动中
function LifeEntity.is_moving() end

---生命体是否在飞扑中
---@return boolean 是否在飞扑中
function LifeEntity.is_rushing() end

---获取生命体是否可点击
---@return boolean 可点击
---@deprecated
---@see LifeEntity.is_touchable
function LifeEntity.is_touch_enable() end

---获取生命体是否可点击
---@return boolean 可点击
function LifeEntity.is_touchable() end

---命令角色跳跃
function LifeEntity.jump() end

---发送气泡表情
---@param _emoji_key EmojiKey 表情
---@param _show_time Fixed 持续时间
---@param _offset Vector3 偏移
---@deprecated
---@see Unit.play_emoji_with_offset
function LifeEntity.play_emoji_with_offset(_emoji_key, _show_time, _offset) end

---播放面部表情
---@param _emoji_key EmojiKey 表情
---@param _show_time Fixed 持续时间
---@deprecated
---@see LifeEntity.play_face_expression
function LifeEntity.play_face_emoji(_emoji_key, _show_time) end

---播放面部表情
---@param _emoji_key EmojiKey 表情
---@param _show_time Fixed 持续时间
function LifeEntity.play_face_expression(_emoji_key, _show_time) end

---还原模型变化
---@deprecated
---@see LifeEntity.reset_model
function LifeEntity.recover_model() end

---还原模型变化
function LifeEntity.reset_model() end

---设置寻路阈值
---@param _threshold Fixed 距离
function LifeEntity.set_ai_move_threshold(_threshold) end

---设置朝向
---@param _face_dir Vector3 方向
function LifeEntity.set_direction(_face_dir) end

---设置朝向
---@param _face_dir Vector3 方向
---@deprecated
---@see LifeEntity.set_direction
function LifeEntity.set_face_dir(_face_dir) end

---设置朝向
---@param _face_dir Vector3 方向
---@deprecated
---@see LifeEntity.set_direction
function LifeEntity.set_face_direction(_face_dir) end

---设置生命体大力击倒阈值
---@param _punch_threshold Fixed 击倒阈值
function LifeEntity.set_hard_punch_threshold(_punch_threshold) end

---设置生命体血条缩放
---@param _hpbar_scale_x Fixed 宽度缩放
---@param _hpbar_scale_y Fixed 高度缩放
function LifeEntity.set_hpbar_scale(_hpbar_scale_x, _hpbar_scale_y) end

---设置质量条是否显示
---@param _visible boolean 是否显示
function LifeEntity.set_mass_bar_visible(_visible) end

---根据角色设置模型
---@param _character Character 角色
---@param _include_ugc_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体尺寸
function LifeEntity.set_model_by_character(_character, _include_ugc_model, _inherit_scale, _inherit_capsule_size) end

---根据生物设置模型
---@param _creature Creature 生物
---@param _include_custom_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体尺寸
function LifeEntity.set_model_by_creature(_creature, _include_custom_model, _inherit_scale, _inherit_capsule_size) end

---根据生物预设设置模型
---@param _creature_key CreatureKey 生物编号
---@param _include_custom_model boolean? 是否包含自定义形象
---@param _inherit_scale boolean? 是否继承缩放
---@param _inherit_capsule_size boolean? 是否继承胶囊体
function LifeEntity.set_model_by_creature_key(_creature_key, _include_custom_model, _inherit_scale, _inherit_capsule_size) end

---设置生命体击倒阈值
---@param _punch_threshold Fixed 击倒阈值
function LifeEntity.set_punch_threshold(_punch_threshold) end

---设置搜敌集火目标
---@param _target LifeEntity 目标
function LifeEntity.set_search_enemy_focus_target(_target) end

---设置搜敌优先级值by标签
---@param _tag string 标签
---@param _priority integer 优先级
function LifeEntity.set_search_enemy_priority_value_by_tag(_tag, _priority) end

---设置搜敌优先级值by单位实体
---@param _unit LifeEntity 单位实体
---@param _priority integer 优先级
function LifeEntity.set_search_enemy_priority_value_by_unit(_unit, _priority) end

---设置搜敌优先级值by预设编号
---@param _unit_key CreatureKey 预设编号
---@param _priority integer 优先级
function LifeEntity.set_search_enemy_priority_value_by_unit_key(_unit_key, _priority) end

---设置搜敌优先级值by单位类型
---@param _unit_prefab_type Enums.UnitType 单位类型
---@param _priority integer 优先级
function LifeEntity.set_search_enemy_priority_value_by_unit_type(_unit_prefab_type, _priority) end

---发送气泡信息
---@param _show_msg string 气泡信息
---@param _show_time Fixed 持续时间
---@param _max_dis Fixed? 隐藏距离
---@param _offset Vector3? 偏移
---@deprecated
---@see Unit.show_bubble_msg
function LifeEntity.show_bubble_msg_with_offset(_show_msg, _show_time, _max_dis, _offset) end

---激活AI
function LifeEntity.start_ai() end

---命令生命体移动
---@param _direction Vector3 移动方向
---@param _duration Fixed 持续时间
function LifeEntity.start_move_by_direction(_direction, _duration) end

---命令生命体移动到坐标点
---@param _target_pos Vector3 目标点
---@param _duration Fixed 持续时间
---@param _threshold Fixed 容错距离
function LifeEntity.start_move_to_pos_with_threshold(_target_pos, _duration, _threshold) end

---暂停AI
function LifeEntity.stop_ai() end

---交换物品槽位
---@param _equipment Equipment 物品
---@param _slot_type Enums.EquipmentSlotType? 槽位类型
---@param _slot EquipmentSlot? 槽位
function LifeEntity.swap_equipment_slot(_equipment, _slot_type, _slot) end

---生命体尝试下载具
function LifeEntity.try_exit_vehicle() end

---@class LiftComp
LiftComp = {}

---获取举起冷却时间
---@return Fixed 定点数
---@deprecated
---@see LiftComp.get_lift_cooldown
function LiftComp.get_lift_cd() end

---获取举起冷却时间
---@return Fixed 定点数
function LiftComp.get_lift_cooldown() end

---获取举起剩余冷却时间
---@return Fixed 定点数
---@deprecated
---@see LiftComp.get_lift_remaining_cooldown
function LiftComp.get_lift_left_cd() end

---获取举起剩余冷却时间
---@return Fixed 定点数
function LiftComp.get_lift_remaining_cooldown() end

---是否处于抓举状态
---@return boolean 抓举
function LiftComp.is_lift_status() end

---举起单位
---@param _unit Unit 被抓举单位
function LiftComp.lift_unit(_unit) end

---设置举起冷却时间
---@param _cd_time Fixed 时间
---@deprecated
---@see LiftComp.set_lift_cooldown
function LiftComp.set_lift_cd(_cd_time) end

---设置举起冷却时间
---@param _cd_time Fixed 时间
function LiftComp.set_lift_cooldown(_cd_time) end

---设置举起剩余冷却时间
---@param _time Fixed 时间
---@deprecated
---@see LiftComp.set_lift_remaining_cooldown
function LiftComp.set_lift_left_cd(_time) end

---设置举起剩余冷却时间
---@param _time Fixed 时间
function LiftComp.set_lift_remaining_cooldown(_time) end

---@class LiftedComp
LiftedComp = {}

---获取是否可抓举
---@return boolean 是否可抓举
---@deprecated
---@see LiftedComp.is_lifted_enabled
function LiftedComp.is_lifted_enable() end

---获取是否可抓举
---@return boolean 是否可抓举
function LiftedComp.is_lifted_enabled() end

---是否处于被抓举
---@return boolean 被抓举
function LiftedComp.is_lifted_status() end

---设置自定义投掷力量
---@param _force Fixed 力量
function LiftedComp.set_custom_thrown_force(_force) end

---设置是否自定义投掷力量
---@param _enable boolean 是否自定义
function LiftedComp.set_custom_thrown_force_enabled(_enable) end

---设置是否自定义投掷力量
---@param _enable boolean 是否自定义
---@deprecated
---@see LiftedComp.set_custom_thrown_force_enabled
function LiftedComp.set_is_use_custom_thrown_force(_enable) end

---设置是否可抓举
---@param _enable boolean 是否可被抓举
---@deprecated
---@see LiftedComp.set_lifted_enabled
function LiftedComp.set_lifted_enable(_enable) end

---设置是否可抓举
---@param _enable boolean 是否可被抓举
function LiftedComp.set_lifted_enabled(_enable) end

---@class LuaAPI
LuaAPI = {}

---延迟调用函数（按帧数）
---@param _interval integer 间隔帧数
---@param _callback function 回调
function LuaAPI.call_delay_frame(_interval, _callback) end

---延迟调用函数（按时间）
---@param _interval Fixed 间隔时间（秒）
---@param _callback function 回调
function LuaAPI.call_delay_time(_interval, _callback) end

---执行所有已添加并行任务
function LuaAPI.dispatch_flush() end

---初始化并行数
---@param _count integer 并行数
function LuaAPI.dispatch_init(_count) end

---添加并行任务
---@param _i integer 线程ID
---@param _name string 函数名
---@param _args table 参数
---@return integer 任务ID
function LuaAPI.dispatch_queue(_i, _name, _args) end

---启用开发者模式
---@return boolean 是否启用成功
function LuaAPI.enable_developer_mode() end

---启用错误中断模式
---@param _enable boolean 是否启用
function LuaAPI.enable_error_interruption_mode(_enable) end

---获取子部件列表（慢）
---@param _obj Unit 单位
---@return string[] 组件名称列表
function LuaAPI.get_component_list(_obj) end

---获取当前单位
---@return Unit 当前单位
function LuaAPI.get_current_unit() end

---获取并行数
---@return integer 并行数
function LuaAPI.get_dispatch_count() end

---获取全局变量
---@param _var_name string 变量名
---@return any 变量
function LuaAPI.get_global_var(_var_name) end

---获得单位的ID
---@param _unit Unit 单位
---@return integer 单位ID
function LuaAPI.get_unit_id(_unit) end

---获取变量类型
---@param _value any 变量
---@return string 类型
function LuaAPI.get_value_type(_value) end

---注册全局自定义事件监听
---@param _event_name string 自定义事件名
---@param _callback function 回调
---@return integer 注册ID
function LuaAPI.global_register_custom_event(_event_name, _callback) end

---注册全局触发器
---@param _event_desc any[] 事件名及注册参数
---@param _callback function 回调
---@return integer 注册ID
function LuaAPI.global_register_trigger_event(_event_desc, _callback) end

---发送全局自定义事件
---@param _event_name string 自定义事件名
---@param _data table 附带参数
function LuaAPI.global_send_custom_event(_event_name, _data) end

---注销全局自定义事件监听
---@param _id integer 注册ID
function LuaAPI.global_unregister_custom_event(_id) end

---注销全局触发器
---@param _id integer 注册ID
function LuaAPI.global_unregister_trigger_event(_id) end

---是否含有指定子部件
---@param _object Unit 单位
---@param _name string 组件名
---@return boolean 是否含有指定子组件
function LuaAPI.has_component(_object, _name) end

---输出日志
---@param _content string 日志内容
function LuaAPI.log(_content) end

---查询UI单位（慢）
---@param _name string 名字
---@return ENode UI名称
function LuaAPI.query_ui_node(_name) end

---批量查询UI单位（慢）
---@param _name_list string[] 名字列表
---@return ENode[] UI名称列表
function LuaAPI.query_ui_nodes(_name_list) end

---查询组件单位（慢）
---@param _name string 名字
---@return Unit 组件
function LuaAPI.query_unit(_name) end

---批量查询单位（按名称）
---@param _name_list string[] 名字列表
---@return Unit[] 组件列表
function LuaAPI.query_units(_name_list) end

---批量查询单位（按类型、预设）
---@param _unit_type Enums.UnitType 单位类型
---@param _unit_eid integer 预设ID
---@return Unit[] 组件
function LuaAPI.query_units_by_type(_unit_type, _unit_eid) end

---生成随机数
---@return integer 随机数
function LuaAPI.rand() end

---启用死循环检测
---@param _enable boolean 启用
---@param _max_instruction_count integer 最大指令数限制
---@return boolean 是否启用成功
function LuaAPI.set_deadloop_check_enabled(_enable, _max_instruction_count) end

---设置Tick回调
---@param _pre_handler function? 帧前回调
---@param _post_handler function? 帧后回调
function LuaAPI.set_tick_handler(_pre_handler, _post_handler) end

---注册单位创建回调
---@param _unit_type Enums.UnitType 单位类型
---@param _unit_eid integer 预设ID
---@param _callback function 回调
function LuaAPI.unit_register_creation_handler(_unit_type, _unit_eid, _callback) end

---注册单位自定义事件监听
---@param _unit Unit 单位
---@param _event_name string 自定义事件名
---@param _callback function 回调
---@return integer 注册ID
function LuaAPI.unit_register_custom_event(_unit, _event_name, _callback) end

---注册单位触发器
---@param _unit Unit 单位
---@param _event_desc any[] 事件名及注册参数
---@param _callback function 回调
---@return integer 触发器ID
function LuaAPI.unit_register_trigger_event(_unit, _event_desc, _callback) end

---发送单位自定义事件
---@param _unit Unit 单位
---@param _event_name string 自定义事件名
---@param _data table 附带参数
function LuaAPI.unit_send_custom_event(_unit, _event_name, _data) end

---注销单位创建回调
---@param _unit_type Enums.UnitType 单位类型
---@param _unit_eid integer 预设ID
function LuaAPI.unit_unregister_creation_handler(_unit_type, _unit_eid) end

---注销单位自定义事件监听
---@param _unit Unit 单位
---@param _id integer 注册ID
function LuaAPI.unit_unregister_custom_event(_unit, _id) end

---注销单位触发器
---@param _unit Unit 单位
---@param _id integer 注册ID
function LuaAPI.unit_unregister_trigger_event(_unit, _id) end

---@class Modifier: Actor
Modifier = {}

---增加效果的持续时间
---@param _add_time Fixed 增加时间
function Modifier.add_duration(_add_time) end

---增加效果层数
---@param _stack_count_add integer 层数
function Modifier.add_stack_count(_stack_count_add) end

---获取效果描述
---@return string 效果描述
function Modifier.get_desc() end

---获得效果编号
---@return ModifierKey 效果编号
function Modifier.get_key() end

---获取效果的最大层数
---@return string 层数
function Modifier.get_max_stack_count() end

---获取效果名称
---@return string 效果名称
function Modifier.get_name() end

---获取所属技能
---@return Ability 所属技能
function Modifier.get_owner_ability() end

---获取效果携带角色
---@return Character 角色
function Modifier.get_owner_character() end

---获取效果携带生物
---@return Creature 生物
function Modifier.get_owner_creature() end

---获取携带效果的生命体
---@return LifeEntity 生命体
function Modifier.get_owner_life_entity() end

---获取效果携带者
---@return Unit 效果携带者
function Modifier.get_owner_unit() end

---获取效果释放者
---@return Unit 效果释放者
function Modifier.get_releaser_unit() end

---获取效果剩余持续时间
---@return Fixed 剩余持续时间
function Modifier.get_remain_duration() end

---获取效果剩余持续时间
---@return Fixed 剩余持续时间
---@deprecated
---@see Modifier.get_remain_duration
function Modifier.get_remain_time() end

---获取效果当前层数
---@return string 层数
function Modifier.get_stack_count() end

---设置效果剩余时间
---@param _remain_duration Fixed 剩余持续时间
function Modifier.set_remain_duration(_remain_duration) end

---设置效果剩余时间
---@param _remain_duration Fixed 剩余持续时间
---@deprecated
---@see Modifier.set_remain_duration
function Modifier.set_remain_time(_remain_duration) end

---设置效果层数
---@param _stack_count_add integer 层数
function Modifier.set_stack_count(_stack_count_add) end

---@class ModifierComp
ModifierComp = {}

---添加效果
---@param _modifier_id ModifierKey 效果编号
---@return Modifier 是否添加成功
function ModifierComp.add_modifier(_modifier_id) end

---添加效果
---@param _modifier_id ModifierKey 效果编号
---@param _params_dict table 额外参数
---@return Modifier 效果对象
function ModifierComp.add_modifier_by_key(_modifier_id, _params_dict) end

---销毁效果
---@param _modifier Modifier 效果对象
---@deprecated
---@see ModifierComp.destroy_modifier
function ModifierComp.destroy_buff(_modifier) end

---销毁效果
---@param _modifier Modifier 效果对象
function ModifierComp.destroy_modifier(_modifier) end

---获取单位效果
---@param _modifier_id ModifierKey 效果ID
---@return Modifier 效果对象
---@deprecated
---@see ModifierComp.get_modifier_by_modifier_key
function ModifierComp.get_buff(_modifier_id) end

---获取单位所有效果
---@return Modifier[] 效果
---@deprecated
---@see ModifierComp.get_modifiers
function ModifierComp.get_buffs() end

---获取单位效果
---@param _modifier_id ModifierKey 效果ID
---@return Modifier 效果对象
function ModifierComp.get_modifier_by_modifier_key(_modifier_id) end

---获取单位所有效果
---@return Modifier[] 效果
function ModifierComp.get_modifiers() end

---是否拥有指定编号的效果
---@param _modifier_key ModifierKey 效果编号
---@return boolean 是否拥有
function ModifierComp.has_modifier_by_key(_modifier_key) end

---移除效果
---@param _modifier_id ModifierKey 效果编号
---@deprecated
---@see ModifierComp.remove_modifier_by_key
function ModifierComp.remove_buff(_modifier_id) end

---移除效果
---@param _modifier_id ModifierKey 效果编号
function ModifierComp.remove_modifier_by_key(_modifier_id) end

---移除效果
---@param _modifier_id ModifierKey 效果编号
---@deprecated
---@see ModifierComp.remove_modifier_by_key
function ModifierComp.remove_modifier_by_modifier_key(_modifier_id) end

---@class MoveStatusComp
MoveStatusComp = {}

---是否滚动
---@return boolean 布尔
function MoveStatusComp.is_fling_status() end

---是否失控
---@return boolean 布尔
function MoveStatusComp.is_lost_control_status() end

---开始锁定面向目标
---@param _target_unit Unit 锁定对象
---@param _time Fixed? 持续时间
function MoveStatusComp.start_face_lock_target(_target_unit, _time) end

---结束锁定面向目标
function MoveStatusComp.stop_face_lock_target() end

---@class Obstacle: DisplayComp, ExprDeviceComp, LiftedComp, OwnerComp, SceneUI, Unit, UnitInteractVolumeComp
Obstacle = {}

---获取公告板文本字体大小
---@return integer 公告板字体大小
function Obstacle.get_billboard_font_size() end

---获取公告板文本内容
---@return string 公告板内容
function Obstacle.get_billboard_text() end

---返回绑定的物品
---@return Equipment 物品
function Obstacle.get_bound_equipment() end

---获取牌数(对象只能为麻将/扑克)
---@return integer 牌数
function Obstacle.get_chess_rank() end

---获取组件是否可拖动
---@return boolean 是否可拖动
---@deprecated
---@see Obstacle.is_draggable
function Obstacle.is_drag_enable() end

---获取组件是否可拖动
---@return boolean 是否可拖动
function Obstacle.is_draggable() end

---获取组件是否可点击
---@return boolean 是否可点击
---@deprecated
---@see Obstacle.is_touchable
function Obstacle.is_touch_enable() end

---获取组件是否可点击
---@return boolean 是否可点击
function Obstacle.is_touchable() end

---重置组件碰撞限制
---@param _limit_type Enums.CollisionLimitType 碰撞限制类型
function Obstacle.reset_collision_limit(_limit_type) end

---设置公告板文本字体大小
---@param _font_size integer 字体大小
function Obstacle.set_billboard_font_size(_font_size) end

---设置公告板文本内容
---@param _content string 文本内容
function Obstacle.set_billboard_text(_content) end

---设置公告板文本颜色
---@param _color Color 文本颜色
---@param _gradient_color_1 Color? 渐变色1
---@param _gradient_color_2 Color? 渐变色2
---@param _gradient_color_3 Color? 渐变色3
---@param _gradient_color_4 Color? 渐变色4
function Obstacle.set_billboard_text_color(_color, _gradient_color_1, _gradient_color_2, _gradient_color_3, _gradient_color_4) end

---设置组件碰撞次数限制
---@param _limit_type Enums.CollisionLimitType 碰撞限制类型
---@param _value integer 值
function Obstacle.set_collision_count_limit(_limit_type, _value) end

---设置组件碰撞间隔限制
---@param _limit_type Enums.CollisionLimitType 碰撞限制类型
---@param _value Fixed 值
function Obstacle.set_collision_interval_limit(_limit_type, _value) end

---设置组件碰撞次数限制
---@param _limit_type Enums.CollisionLimitType 碰撞限制类型
---@param _value integer 值
---@deprecated
---@see Obstacle.set_collision_count_limit
function Obstacle.set_collision_limit_count(_limit_type, _value) end

---设置组件碰撞间隔限制
---@param _limit_type Enums.CollisionLimitType 碰撞限制类型
---@param _value Fixed 值
---@deprecated
---@see Obstacle.set_collision_interval_limit
function Obstacle.set_collision_limit_interval(_limit_type, _value) end

---设置组件是否可拖动
---@param _enabled boolean 是否可拖动
---@deprecated
---@see Obstacle.set_draggable
function Obstacle.set_drag_enable(_enabled) end

---设置组件是否可拖动
---@param _enabled boolean 是否可拖动
function Obstacle.set_draggable(_enabled) end

---设置场景排行榜分数
---@param _role Role 玩家
---@param _score integer 分数
function Obstacle.set_ranklist_score(_role, _score) end

---设置场景排行榜分数
---@param _role Role 玩家
---@param _score integer 分数
---@deprecated
---@see Obstacle.set_ranklist_score
function Obstacle.set_ranklist_score_by_role(_role, _score) end

---@class OwnerComp
OwnerComp = {}

---修改所属玩家
---@param _role Role 所属玩家
function OwnerComp.change_owner(_role) end

---获取所属玩家
---@return Role 所属玩家
function OwnerComp.get_owner_role() end

---@class Role: AttrComp, KVBase
Role = {}

---增加成就进度
---@param _event_id Achievement 成就
---@param _add_count integer 成就进度
---@deprecated
---@see Role.add_achievement_progress
function Role.add_achieve_count(_event_id, _add_count) end

---增加成就进度
---@param _event_id Achievement 成就
---@param _add_count integer 成就进度
function Role.add_achievement_progress(_event_id, _add_count) end

---增加玩家积分
---@param _add_score integer 积分
function Role.add_score(_add_score) end

---消耗玩家指定数量道具
---@param _commodity_id UgcCommodity 道具
---@param _num integer 数量
function Role.consume_commodity(_commodity_id, _num) end

---消耗玩家指定数量道具
---@param _commodity_id UgcCommodity 道具
---@param _num integer 数量
---@deprecated
---@see Role.consume_commodity
function Role.consume_ugc_commodity(_commodity_id, _num) end

---关闭单位菲尼尔效果
---@param _unit Unit 单位
function Role.disable_unit_fresnel(_unit) end

---关闭单位蒙版
---@param _unit Unit 单位
function Role.disable_unit_mask(_unit) end

---关闭单位描边
---@param _unit Unit 单位
function Role.disable_unit_outline(_unit) end

---玩家进入观战
---@param _camp_limit boolean? 是否限制阵营观战
---@param _exit_visible boolean? 是否支持手动退出
function Role.enter_watch_mode(_camp_limit, _exit_visible) end

---玩家退出观战
function Role.exit_watch_mode() end

---玩家游戏失败
---@deprecated
---@see Role.lose
function Role.game_lose() end

---玩家游戏失败并显示失败界面
function Role.game_lose_and_show_result_panel() end

---玩家游戏胜利并显示胜利界面
function Role.game_win_and_show_result_panel() end

---获取成就进度
---@param _event_id Achievement 成就
---@return integer 成就进度
---@deprecated
---@see Role.get_achievement_progress
function Role.get_achieve_count(_event_id) end

---获取成就进度
---@param _event_id Achievement 成就
---@return integer 成就进度
function Role.get_achievement_progress(_event_id) end

---获取存档值
---@param _archive_type Enums.ArchiveType 存档类型
---@param _key Archive 存档
---@return any 存档值
function Role.get_archive_by_type(_archive_type, _key) end

---获取玩家相机的朝向(需要开启玩家相机旋转同步)
---@return Vector3 相机朝向
---@deprecated
---@see Role.get_camera_direction
function Role.get_camera_dir() end

---获取玩家相机的朝向(需要开启玩家相机旋转同步)
---@return Vector3 相机朝向
function Role.get_camera_direction() end

---获取玩家相机的旋转(需要开启玩家相机旋转同步)
---@return Quaternion 相机旋转
function Role.get_camera_rotation() end

---获取玩家阵营
---@return Camp 阵营
function Role.get_camp() end

---玩家拥有道具数量
---@param _commodity_id UgcCommodity 道具
---@return integer 拥有道具数量
function Role.get_commodity_count(_commodity_id) end

---获取控制单位
---@return Character 单位
function Role.get_ctrl_unit() end

---获取玩家游戏结果
---@return Enums.GameResult 游戏结局
function Role.get_game_result() end

---获取玩家头像
---@return ImageKey 玩家头像
function Role.get_head_icon() end

---获取玩家昵称
---@return string 名字
function Role.get_name() end

---获取玩家ID
---@return RoleID 玩家ID
function Role.get_roleid() end

---获取玩家积分
---@return integer 积分
function Role.get_score() end

---玩家拥有道具数量
---@param _commodity_id UgcCommodity 道具
---@return integer 拥有道具数量
---@deprecated
---@see Role.get_commodity_count
function Role.get_ugc_commodity_num(_commodity_id) end

---获取语音音量
---@return Fixed 语音音量
function Role.get_voice_volume() end

---玩家是否拥有道具
---@param _commodity_id UgcCommodity 道具
---@return boolean 是否拥有道具
function Role.has_commodity(_commodity_id) end

---玩家是否记录过存档
---@return boolean 是否记录过存档
function Role.has_saved_archive() end

---玩家是否拥有道具
---@param _commodity_id UgcCommodity 道具
---@return boolean 是否拥有道具
---@deprecated
---@see Role.has_commodity
function Role.has_ugc_commodity(_commodity_id) end

---成就是否完成
---@param _event_id Achievement 成就
---@return boolean 是否完成
---@deprecated
---@see Role.is_achievement_completed
function Role.is_achieve_finish(_event_id) end

---成就是否完成
---@param _event_id Achievement 成就
---@return boolean 是否完成
function Role.is_achievement_completed(_event_id) end

---是否是乐园会员
---@return boolean 是否是乐园会员
function Role.is_gallery_vip() end

---玩家是否失败
---@return boolean 玩家是否失败
---@deprecated
---@see Role.is_lost
function Role.is_lose() end

---玩家是否失败
---@return boolean 玩家是否失败
---@deprecated
---@see Role.is_lost
function Role.is_losed() end

---玩家是否失败
---@return boolean 玩家是否失败
---@deprecated
---@see Role.is_lost
function Role.is_loss() end

---玩家是否失败
---@return boolean 玩家是否失败
function Role.is_lost() end

---是否收藏本地图
---@return boolean 是否收藏
function Role.is_map_favorited() end

---是否点赞本地图
---@return boolean 是否点赞
function Role.is_map_liked() end

---玩家是否在线
---@return boolean 是否在线
function Role.is_online() end

---是否是派对手册进阶会员
---@return boolean 是否是派对手册进阶会员
function Role.is_pass_premium_vip() end

---玩家是否失败
---@return boolean 玩家是否失败
---@deprecated
---@see Role.is_lost
function Role.is_role_lose() end

---玩家是否胜利
---@return boolean 玩家是否胜利
---@deprecated
---@see Role.is_won
function Role.is_role_win() end

---玩家是否订阅地图作者
---@return boolean 是否订阅
function Role.is_subscribed_map_author() end

---玩家进入观战
---@return boolean 是否处于观战模式
function Role.is_watch_mode() end

---玩家是否胜利
---@return boolean 玩家是否胜利
---@deprecated
---@see Role.is_won
function Role.is_win() end

---玩家是否胜利
---@return boolean 玩家是否胜利
function Role.is_won() end

---设置是否开启玩家相机旋转同步
---@param _enabled boolean 是否同步
---@deprecated
---@see Role.set_camera_rotation_sync_enabled
function Role.listen_camera_rotation(_enabled) end

---设置监听陀螺仪信息
---@param _enabled boolean 是否监听
---@deprecated
---@see Role.set_gyroscope_sync_enabled
function Role.listen_gyroscope_info(_enabled) end

---发起进入关卡投票
---@param _level_key LevelKey 关卡编号
---@deprecated
---@see Role.start_level_vote
function Role.load_level_by_voting(_level_key) end

---玩家游戏失败
function Role.lose() end

---暂停玩家相机运动
function Role.pause_camera_motor() end

---玩家播放2D音效
---@param _event_id SoundID 音效ID
---@param _duration Fixed 持续时间
---@param _volume Fixed 音量
---@param _speed Fixed 播放速度
---@return SoundID 音效ID
function Role.play_2d_sound_with_params(_event_id, _duration, _volume, _speed) end

---播放广告
---@param _success_event string 成功事件
---@param _fail_event string 失败事件
---@param _ad_tag string? 广告标签
---@param _success_data table? 成功附带参数
---@param _fail_data table? 失败附带参数
function Role.play_advertisement_with_event(_success_event, _fail_event, _ad_tag, _success_data, _fail_data) end

---播放指定剧情动画
---@param _montage_key MontageKey 剧情动画编号
---@param _start_time Fixed 起始时间
---@param _play_to_end boolean 是否播完
---@param _play_time Fixed 播放时长
function Role.play_montage(_montage_key, _start_time, _play_to_end, _play_time) end

---播放指定剧情动画
---@param _montage_key MontageKey 剧情动画编号
---@param _start_time Fixed 起始时间
---@param _play_to_end boolean 是否播完
---@param _play_time Fixed 播放时长
---@deprecated
---@see Role.play_montage
function Role.play_montage_by_id(_montage_key, _start_time, _play_to_end, _play_time) end

---播放屏幕特效
---@param _sfx_key SfxKey 特效编号
---@param _duration Fixed? 持续时间
---@param _rate Fixed? 播放速率
---@return SfxID 特效ID
function Role.play_screen_sfx(_sfx_key, _duration, _rate) end

---播放界面动效
---@param _effect_node EEffectNode UI动效
---@deprecated
---@see Role.play_ui_effect
function Role.play_ui_animation_effect(_effect_node) end

---播放界面动效
---@param _effect_node EEffectNode UI动效
function Role.play_ui_effect(_effect_node) end

---重置界面动画
---@param _node ENode UI节点
function Role.reset_animation(_node) end

---重置玩家相机
---@param _reset_angle boolean? 重置相机角度
---@param _reset_bind boolean? 重置相机模式
---@param _reset_point boolean? 重置相机相对于焦点的位置
---@param _reset_prop_pitch boolean? 重置俯仰角范围
function Role.reset_camera(_reset_angle, _reset_bind, _reset_point, _reset_prop_pitch) end

---恢复玩家相机运动
function Role.resume_camera_motor() end

---发送埋点数据变化
---@param _track_data_key string 埋点key
---@param _change_num integer 数据变化
function Role.send_track_data_change(_track_data_key, _change_num) end

---发送埋点数据变化
---@param _track_data_key string 埋点key
---@param _change_num integer 数据变化
---@deprecated
---@see Role.send_track_data_change
function Role.send_track_data_log(_track_data_key, _change_num) end

---发送UI自定义消息
---@param _event_name string 自定义事件名
---@param _data table 附带参数
function Role.send_ui_custom_event(_event_name, _data) end

---设置成就进度
---@param _event_id Achievement 成就
---@param _count integer 成就进度
---@deprecated
---@see Role.set_achievement_progress
function Role.set_achieve_count(_event_id, _count) end

---设置成就进度
---@param _event_id Achievement 成就
---@param _count integer 成就进度
function Role.set_achievement_progress(_event_id, _count) end

---设置存档值
---@param _archive_type Enums.ArchiveType 存档类型
---@param _key Archive 存档
---@param _val any 存档值
function Role.set_archive_by_type(_archive_type, _key, _val) end

---设置存档点坐标
---@param _position Vector3 坐标
---@param _priority integer 复活优先级
---@param _direction Vector3 朝向
function Role.set_archive_point(_position, _priority, _direction) end

---设置物品格关联生命体
---@param _bag_slot EBagSlot UI物品格
---@param _life_entity LifeEntity 生命体
---@deprecated
---@see Role.set_bagslot_related_lifeentity
function Role.set_bagslot_related_life_entity(_bag_slot, _life_entity) end

---设置物品格关联生命体
---@param _bag_slot EBagSlot UI物品格
---@param _life_entity LifeEntity 生命体
function Role.set_bagslot_related_lifeentity(_bag_slot, _life_entity) end

---设置玩家商店显示
---@param _battle_shop_id BattleShopKey 商店
---@param _visible boolean 显示/隐藏
function Role.set_battle_shop_visible(_battle_shop_id, _visible) end

---玩家设置暗角
---@param _enable boolean 启用
---@param _strength Fixed 强度
---@param _color Color 颜色
function Role.set_blind_corner(_enable, _strength, _color) end

---设置按钮控件的状态
---@param _button EButton UI按钮
---@param _enabled boolean 状态
function Role.set_button_enabled(_button, _enabled) end

---设置UI按钮节点文字字号
---@param _key EButton UI按钮节点
---@param _font_size Fixed 字号
function Role.set_button_font_size(_key, _font_size) end

---设置UI按钮节点常态图片
---@param _button EButton UI按钮节点
---@param _image_key ImageKey 图片
function Role.set_button_normal_image(_button, _image_key) end

---设置UI按钮节点按下图片
---@param _button EButton UI按钮节点
---@param _image_key ImageKey 图片
function Role.set_button_pressed_image(_button, _image_key) end

---设置UI按钮节点文本
---@param _button EButton UI按钮节点
---@param _text string 文本
function Role.set_button_text(_button, _text) end

---设置UI按钮节点文字颜色
---@param _button EButton UI按钮节点
---@param _text_color Color 颜色
function Role.set_button_text_color(_button, _text_color) end

---设置玩家相机的模式
---@param _mode Enums.CameraBindMode 模式
function Role.set_camera_bind_mode(_mode) end

---设置玩家相机是否可拖动
---@param _draggable boolean 可拖动
function Role.set_camera_draggable(_draggable) end

---设置玩家陀螺仪控制镜头
---@param _is_control boolean 陀螺仪控制
function Role.set_camera_gyroscope_control_enabled(_is_control) end

---设置玩家相机的绑定坐标
---@param _pos Vector3 点
function Role.set_camera_lock_position(_pos) end

---设置玩家相机的投影类型
---@param _projection_type Enums.CameraProjectionType 投影类型
function Role.set_camera_projection_type(_projection_type) end

---设置玩家相机的属性
---@param _property Enums.CameraPropertyType 属性
---@param _value Fixed 值
function Role.set_camera_property(_property, _value) end

---设置玩家相机面向指定朝向
---@param _target_dir Vector3 目标方向
---@param _duration Fixed 用时
function Role.set_camera_rotation_by_direction(_target_dir, _duration) end

---设置是否开启玩家相机旋转同步
---@param _enabled boolean 是否同步
function Role.set_camera_rotation_sync_enabled(_enabled) end

---设置付费道具商店可见性
---@param _visible boolean 可见性
function Role.set_goods_panel_visible(_visible) end

---设置玩家陀螺仪控制组件
---@param _is_control boolean 是否由陀螺仪控制
---@param _unit Unit 单位
function Role.set_gyroscope_control_unit(_is_control, _unit) end

---设置监听陀螺仪信息
---@param _enabled boolean 是否监听
function Role.set_gyroscope_sync_enabled(_enabled) end

---设置UI图片颜色
---@param _image EImage UI图片节点
---@param _image_color Color 颜色
---@param _transition_time Fixed 变化时间
function Role.set_image_color(_image, _image_color, _transition_time) end

---设置UI图片节点图片
---@param _image EImage UI图片节点
---@param _image_key ImageKey 图片
---@param _reset_size boolean? 是否重置大小
function Role.set_image_texture_by_key_with_auto_resize(_image, _image_key, _reset_size) end

---设置UI图片节点图片
---@param _image EImage UI图片节点
---@param _image_path string 图片
---@param _reset_size boolean? 是否重置大小
function Role.set_image_texture_with_auto_resize(_image, _image_path, _reset_size) end

---设置UI图片节点图片
---@param _image EImage UI图片节点
---@param _image_key ImageKey 图片
---@param _reset_size boolean? 是否重置大小
---@deprecated
---@see Role.set_image_texture_by_key_with_auto_resize
function Role.set_image_texture_with_size(_image, _image_key, _reset_size) end

---设置UI输入节点文本
---@param _input_field EInputField UI输入节点
---@param _text string 文本
function Role.set_input_field_text(_input_field, _text) end

---设置UI文本节点背景颜色
---@param _label ELabel UI文本节点
---@param _color Color 颜色
---@param _transition_time Fixed 变化时间
function Role.set_label_background_color(_label, _color, _transition_time) end

---设置UI文本节点背景不透明度
---@param _label ELabel UI文本节点
---@param _opacity Fixed 不透明度
---@param _transition_time Fixed 变化时间
function Role.set_label_background_opacity(_label, _opacity, _transition_time) end

---设置UI文本节点的字体颜色
---@param _label ELabel UI文本节点
---@param _color Color 颜色
---@param _transition_time Fixed 变化时间
function Role.set_label_color(_label, _color, _transition_time) end

---设置UI文本节点的描边是否开启
---@param _label ELabel UI文本节点
---@param _enable boolean 是否开启描边
---@deprecated
---@see Role.set_label_outline_enabled
function Role.set_label_enable_outline(_label, _enable) end

---设置UI文本节点的阴影是否开启
---@param _label ELabel UI文本节点
---@param _enable boolean 是否开启阴影
---@deprecated
---@see Role.set_label_shadow_enabled
function Role.set_label_enable_shadow(_label, _enable) end

---设置UI文本节点字体
---@param _label ELabel UI文本节点
---@param _font_key FontKey 字体key
function Role.set_label_font(_label, _font_key) end

---设置UI文本节点的字体大小
---@param _label ELabel UI文本节点
---@param _font_size integer 字号
---@param _transition_time Fixed 变化时间
function Role.set_label_font_size(_label, _font_size, _transition_time) end

---设置UI文本节点的描边颜色
---@param _label ELabel UI文本节点
---@param _color Color 描边颜色
function Role.set_label_outline_color(_label, _color) end

---设置UI文本节点的描边是否开启
---@param _label ELabel UI文本节点
---@param _enable boolean 是否开启描边
function Role.set_label_outline_enabled(_label, _enable) end

---设置UI文本节点的描边不透明度
---@param _label ELabel UI文本节点
---@param _opacity Fixed 描边不透明度
function Role.set_label_outline_opacity(_label, _opacity) end

---设置UI文本节点的描边大小
---@param _label ELabel UI文本节点
---@param _width Fixed 描边大小
function Role.set_label_outline_width(_label, _width) end

---设置UI文本节点的阴影颜色
---@param _label ELabel UI文本节点
---@param _color Color 阴影颜色
function Role.set_label_shadow_color(_label, _color) end

---设置UI文本节点的阴影是否开启
---@param _label ELabel UI文本节点
---@param _enable boolean 是否开启阴影
function Role.set_label_shadow_enabled(_label, _enable) end

---设置UI文本节点的阴影x偏移
---@param _label ELabel UI文本节点
---@param _offset Fixed x方向偏移
function Role.set_label_shadow_x_offset(_label, _offset) end

---设置UI文本节点的阴影y偏移
---@param _label ELabel UI文本节点
---@param _offset Fixed y方向偏移
function Role.set_label_shadow_y_offset(_label, _offset) end

---设置UI文本节点的文本
---@param _label ELabel UI文本节点
---@param _text string 文本
function Role.set_label_text(_label, _text) end

---设置是否开启玩家相机旋转同步
---@param _enabled boolean 是否同步
---@deprecated
---@see Role.set_camera_rotation_sync_enabled
function Role.set_listen_camera_rotation(_enabled) end

---设置玩家昵称可见性
---@param _visible boolean 是否可见
function Role.set_name_visible(_visible) end

---设置玩家昵称可见性
---@param _visible boolean 是否可见
---@deprecated
---@see Role.set_name_visible
function Role.set_nickname_visible(_visible) end

---设置UI节点交互开关
---@param _node ENode UI节点
---@param _touch_enabled boolean 交互开关
function Role.set_node_touch_enabled(_node, _touch_enabled) end

---设置UI节点可见性
---@param _node ENode UI节点
---@param _visible boolean 可见性
function Role.set_node_visible(_node, _visible) end

---设置UI进度条节点进度
---@param _progress_bar EProgressbar UI进度条节点
---@param _current integer 进度
function Role.set_progressbar_current(_progress_bar, _current) end

---设置UI进度条节点最大进度
---@param _progress_bar EProgressbar UI进度条节点
---@param _max integer 最大进度
function Role.set_progressbar_max(_progress_bar, _max) end

---设置UI进度条最小进度
---@param _key EProgressbar 进度条节点
---@param _min integer 最小进度
function Role.set_progressbar_min(_key, _min) end

---设置UI进度条节点过渡
---@param _progress_bar EProgressbar UI进度条节点
---@param _current integer 进度
---@param _transition_time Fixed 过渡时间
function Role.set_progressbar_transition(_progress_bar, _current, _transition_time) end

---设置玩家阵营
---@param _camp Camp 阵营
---@deprecated
---@see Role.set_role_camp
function Role.set_role_camp(_camp) end

---设置玩家控制开启/关闭
---@param _enable boolean 开启/关闭
---@deprecated
---@see Role.set_role_ctrl_enabled
function Role.set_role_ctrl(_enable) end

---设置玩家控制开启/关闭
---@param _enable boolean 开启/关闭
function Role.set_role_ctrl_enabled(_enable) end

---设置玩家积分
---@param _score integer 积分
function Role.set_score(_score) end

---设置付费道具商店可见性
---@param _visible boolean 可见性
---@deprecated
---@see Role.set_goods_panel_visible
function Role.set_ugc_goods_panel_visible(_visible) end

---设置UI节点不透明度
---@param _node ENode UI节点
---@param _opacity Fixed 不透明度
function Role.set_ui_opacity(_node, _opacity) end

---设置单位菲尼尔效果
---@param _unit Unit 单位
---@param _fresnel_scale Fixed 菲尼尔系数
---@param _color Color 颜色
---@param _intensity integer 强度
function Role.set_unit_fresnel(_unit, _fresnel_scale, _color, _intensity) end

---设置单位菲尼尔效果
---@param _unit Unit 单位
---@param _fresnel_scale Fixed 菲尼尔系数
---@param _color Color 颜色
---@param _intensity integer 强度
---@param _duration Fixed 用时
function Role.set_unit_fresnel_gradual(_unit, _fresnel_scale, _color, _intensity, _duration) end

---设置单位蒙版
---@param _unit Unit 单位
---@param _color Color 颜色
function Role.set_unit_mask(_unit, _color) end

---设置单位描边
---@param _unit Unit 单位
---@param _width integer 粗细
---@param _color Color 颜色
function Role.set_unit_outline(_unit, _width, _color) end

---设置单位穿透显示
---@param _unit Unit 单位
---@param _enabled boolean 是否穿透显示
---@deprecated
---@see Role.set_unit_see_through_enabled
function Role.set_unit_see_through(_unit, _enabled) end

---设置单位穿透显示
---@param _unit Unit 单位
---@param _enabled boolean 是否穿透显示
function Role.set_unit_see_through_enabled(_unit, _enabled) end

---设置单位对玩家可见性
---@param _unit Unit 单位
---@param _is_visible boolean 是否显示
function Role.set_unit_visible(_unit, _is_visible) end

---设置是否开启语音音量同步
---@param _enabled boolean 是否同步
function Role.set_voice_volume_sync_enabled(_enabled) end

---设置玩家屏幕震动
---@param _shake_type CameraShakeType 震动方向
---@param _shake_max_amplitude Fixed 震幅
---@param _shake_time Fixed 震动时间
---@param _shake_source Unit 震源
---@param _shake_frequency Fixed 频率
---@param _shake_time_decay Fixed 时间衰减
---@param _shake_effect_scope Fixed 生效范围
---@param _shake_undamped_scope Fixed 不衰减范围
---@param _shake_distance_decay Fixed 距离衰减
function Role.shake_camera(_shake_type, _shake_max_amplitude, _shake_time, _shake_source, _shake_frequency, _shake_time_decay, _shake_effect_scope, _shake_undamped_scope, _shake_distance_decay) end

---设置玩家的背包界面显隐
---@param _visible boolean 是否显示
function Role.show_bag_panel(_visible) end

---玩家显示指定商品购买界面
---@param _raw_goods_id UgcGoods 商品
---@param _show_time Fixed 显示时间
function Role.show_goods_purchase_panel(_raw_goods_id, _show_time) end

---显示点赞界面
---@deprecated
---@see Role.show_like_panel
function Role.show_like_interact_ui() end

---显示点赞界面
function Role.show_like_panel() end

---玩家显示飘字信息
---@param _content string 字符串
---@param _duration Fixed? 时长
function Role.show_tips(_content, _duration) end

---玩家显示指定商品购买界面
---@param _raw_goods_id UgcGoods 商品
---@param _show_time Fixed 显示时间
---@deprecated
---@see Role.show_goods_purchase_panel
function Role.show_ugc_good_purchase_panel(_raw_goods_id, _show_time) end

---显示玩家决战技选择界面
---@param _keep_time integer 时间
function Role.show_ultimate_ability_panel(_keep_time) end

---跳过剧情动画
---@param _has_black_screen boolean 是否有跳过黑幕
function Role.skip_current_montage(_has_black_screen) end

---发起进入关卡投票
---@param _level_key LevelKey 关卡编号
function Role.start_level_vote(_level_key) end

---开始手机震动
---@param _vibrate_type integer 震动模式
---@param _vibrate_count integer 震动次数
---@param _vibrate_interval Fixed 震动间隔
function Role.start_vibration(_vibrate_type, _vibrate_count, _vibrate_interval) end

---对指定单位停止2D声音
---@param _sound_instance_id SoundID 音效ID
function Role.stop_2d_sound(_sound_instance_id) end

---停止玩家相机运动
function Role.stop_camera_motor() end

---停止界面动效
---@param _effect_node EEffectNode UI动效
---@deprecated
---@see Role.stop_ui_effect
function Role.stop_ui_animation_effect(_effect_node) end

---停止界面动效
---@param _effect_node EEffectNode UI动效
function Role.stop_ui_effect(_effect_node) end

---UI文本节点解除属性
---@param _label ELabel UI文本节点
function Role.unbind_label_text(_label) end

---为UI进度条节点当前进度解绑属性
---@param _progress_bar EProgressbar UI进度条节点
function Role.unbind_progressbar_current(_progress_bar) end

---UI进度条节点最大进度解绑属性
---@param _progress_bar EProgressbar UI进度条节点
function Role.unbind_progressbar_max(_progress_bar) end

---发起进入关卡投票
---@param _level_key LevelKey 关卡编号
---@deprecated
---@see Role.start_level_vote
function Role.vote_for_switch_level(_level_key) end

---玩家胜利
function Role.win() end

---@class RollComp
RollComp = {}

---获取滚动冷却时间
---@return Fixed 冷却时间
function RollComp.get_roll_cooldown() end

---获取滚动剩余冷却时间
---@return Fixed 剩余冷却时间
---@deprecated
---@see RollComp.get_roll_remaining_cooldown
function RollComp.get_roll_left_cd() end

---获取滚动剩余冷却时间
---@return Fixed 剩余冷却时间
function RollComp.get_roll_remaining_cooldown() end

---设置滚动冷却时间
---@param _time Fixed 时间
function RollComp.set_roll_cooldown(_time) end

---设置滚动剩余冷却时间
---@param _remaining_time Fixed 剩余冷却时间
---@deprecated
---@see RollComp.set_roll_remaining_cooldown
function RollComp.set_roll_left_cd(_remaining_time) end

---设置滚动剩余冷却时间
---@param _remaining_time Fixed 剩余冷却时间
function RollComp.set_roll_remaining_cooldown(_remaining_time) end

---@class RushComp
RushComp = {}

---获取飞扑冷却时间
---@return Fixed 冷却时间
function RushComp.get_rush_cooldown() end

---获取飞扑剩余冷却时间
---@return Fixed 剩余冷却时间
---@deprecated
---@see RushComp.get_rush_remaining_cooldown
function RushComp.get_rush_left_cd() end

---获取飞扑剩余冷却时间
---@return Fixed 剩余冷却时间
function RushComp.get_rush_remaining_cooldown() end

---设置飞扑冷却时间
---@param _time Fixed 时间
function RushComp.set_rush_cooldown(_time) end

---设置飞扑剩余冷却时间
---@param _time Fixed 时间
---@deprecated
---@see RushComp.set_rush_remaining_cooldown
function RushComp.set_rush_left_cd(_time) end

---设置飞扑剩余冷却时间
---@param _time Fixed 时间
function RushComp.set_rush_remaining_cooldown(_time) end

---@class SceneUI
SceneUI = {}

---创建场景界面绑定到单位
---@param _layer_key E3DLayerKey 场景界面预设编号
---@param _socket_name Enums.ModelSocket 绑定位置
---@param _offset_pos Vector3 偏移位置
---@param _duration Fixed? 持续时间
---@param _bind_event boolean? 事件是否指向绑定者
---@param _inherit_visible boolean? 是否跟随组件显隐
---@return E3DLayer 场景界面
function SceneUI.create_scene_ui_bind_unit(_layer_key, _socket_name, _offset_pos, _duration, _bind_event, _inherit_visible) end

---@class TriggerSpace: ExprDeviceComp, OwnerComp, SceneUI, Unit, UnitInteractVolumeComp
TriggerSpace = {}

---获取光源亮度
---@return Fixed 亮度
function TriggerSpace.get_virtual_light_brightness() end

---设置光源亮度
---@param _brightness Fixed 亮度
function TriggerSpace.set_virtual_light_brightness(_brightness) end

---@class TriggerSystem
TriggerSystem = {}

---判断计时器是否存在
---@param _timer Timer 计时器
---@return boolean 是否存在
function TriggerSystem.has_timer(_timer) end

---@class Unit: Actor
Unit = {}

---添加向技能槽位添加UGC技能能
---@param _ability_index AbilitySlot 技能槽位
---@param _ability_id AbilityKey 技能编号
---@param _kv_args table? 自定义参数值
---@param _kv_types table? 自定义参数类型
---@return Ability 添加上的技能
---@deprecated
---@see AbilityComp.add_ability_to_slot
function Unit.add_ability_to_slot(_ability_index, _ability_id, _kv_args, _kv_types) end

---添加圆周运动
---@param _vel Vector3 角速度
---@param _time Fixed 时间
---@param _is_local boolean? 是否局部空间
---@return integer 索引
---@deprecated
---@see Unit.add_circle_motor
function Unit.add_angular_motor(_vel, _time, _is_local) end

---添加子单位
---@param _unit Unit 子单位
function Unit.add_child(_unit) end

---添加圆周运动
---@param _vel Vector3 角速度
---@param _time Fixed 时间
---@param _is_local boolean? 是否局部空间
---@return integer 索引
function Unit.add_circle_motor(_vel, _time, _is_local) end

---添加直线运动
---@param _vel Vector3 线速度
---@param _time Fixed 时间
---@param _is_local boolean? 是否局部空间
---@return integer 索引
function Unit.add_linear_motor(_vel, _time, _is_local) end

---添加环绕运动
---@param _follow_target Unit 环绕目标
---@param _ang_vel Vector3 角速度
---@param _time Fixed 时间
---@param _follow_rotate boolean? 是否跟随旋转
function Unit.add_surround_motor(_follow_target, _ang_vel, _time, _follow_rotate) end

---添加向技能槽位添加UGC技能能
---@param _ability_index AbilitySlot 技能槽位
---@param _ability_id AbilityKey 技能编号
---@param _kv_args table? 自定义参数值
---@param _kv_types table? 自定义参数类型
---@return Ability 添加上的技能
---@deprecated
---@see AbilityComp.add_ability_to_slot
function Unit.add_ugc_skill_to_slot(_ability_index, _ability_id, _kv_args, _kv_types) end

---控制AI执行警戒命令
---@param _tagert_pos Vector3 目标
---@param _target_dir Vector3 朝向
---@param _dalay_time Fixed 延迟
---@param _reject_time Fixed 厌恶时间
---@param _move_mode Enums.MoveMode 移动方式
---@deprecated
---@see LifeEntity.ai_command_alert
function Unit.ai_command_alert(_tagert_pos, _target_dir, _dalay_time, _reject_time, _move_mode) end

---控制AI执行跟随命令
---@param _target_unit Character 目标
---@param _follow_dis Fixed 距离
---@param _tolerate_dis Fixed 容忍距离
---@param _reject_time Fixed 厌恶时间
---@param _move_mode Enums.MoveMode 移动方式
---@deprecated
---@see LifeEntity.ai_command_follow
function Unit.ai_command_follow(_target_unit, _follow_dis, _tolerate_dis, _reject_time, _move_mode) end

---控制AI执行模仿命令
---@param _target_unit Character 目标
---@param _delay Fixed 延迟
---@param _disable_actions Enums.AIBasicCommand[] 屏蔽操作
---@deprecated
---@see LifeEntity.ai_command_imitate
function Unit.ai_command_imitate(_target_unit, _delay, _disable_actions) end

---控制AI跳跃
---@deprecated
---@see LifeEntity.ai_command_jump
function Unit.ai_command_jump() end

---控制AI举起/扔下/投掷
---@deprecated
---@see LifeEntity.ai_command_lift
function Unit.ai_command_lift() end

---控制AI执行巡逻命令
---@param _waypoint Vector3[] 路径
---@param _reject_time Fixed 厌恶时间
---@param _round_mode Enums.PatrolType 往返模式
---@param _move_mode Enums.MoveMode 移动方式
---@deprecated
---@see LifeEntity.ai_command_patrol
function Unit.ai_command_nav(_waypoint, _reject_time, _round_mode, _move_mode) end

---控制AI拾取物品
---@param _target_equipment Equipment 拾取物品
---@param _move_mode Enums.MoveMode 移动方式
---@param _reject_time Fixed 厌恶时间
---@deprecated
---@see LifeEntity.ai_command_pick_up_equipment
function Unit.ai_command_pick_up_equipment(_target_equipment, _move_mode, _reject_time) end

---控制AI滚动
---@deprecated
---@see LifeEntity.ai_command_roll
function Unit.ai_command_roll() end

---控制AI前扑
---@deprecated
---@see LifeEntity.ai_command_rush
function Unit.ai_command_rush() end

---控制AI单位移动
---@param _direction Vector3 方向
---@param _t Fixed 时间
---@deprecated
---@see LifeEntity.ai_command_start_move
function Unit.ai_command_start_move(_direction, _t) end

---控制AI执行高优先级寻路命令
---@param _target_position Vector3[] 坐标
---@param _duration Fixed? 持续时间
---@param _threshold Fixed? 距离阈值
---@deprecated
---@see LifeEntity.ai_command_start_move_high_priority
function Unit.ai_command_start_move_high_priority(_target_position, _duration, _threshold) end

---控制AI单位停止移动
---@param _duration Fixed 时间
---@deprecated
---@see LifeEntity.ai_command_stop_move
function Unit.ai_command_stop_move(_duration) end

---施加力
---@param _force Vector3 力
function Unit.apply_force(_force) end

---施加冲击力
---@param _force Vector3 力
---@param _max_speed Fixed? 击飞最大速度
---@param _force_lost_control boolean? 是否击飞
---@param _lost_ctrl_time Fixed? 击飞失控时间
function Unit.apply_impact_force(_force, _max_speed, _force_lost_control, _lost_ctrl_time) end

---打断技能蓄力
---@deprecated
---@see AbilityComp.break_ability_accumulate
function Unit.break_ability_accumulate() end

---打断技能施法
---@deprecated
---@see AbilityComp.interrupt_ability
function Unit.break_ability_cast() end

---打断技能蓄力
---@deprecated
---@see AbilityComp.break_ability_accumulate
function Unit.break_accumulate_skill() end

---打断技能施法
---@deprecated
---@see AbilityComp.interrupt_ability
function Unit.break_cast_skill() end

---控制角色对目标方向释放指定槽位技能
---@param _direction Vector3 方向
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
---@deprecated
---@see AbilityComp.cast_ability_by_ability_slot_and_direction
function Unit.cast_ability_by_ability_slot_and_direction(_direction, _ability_slot, _duration) end

---控制角色对目标坐标释放指定槽位技能
---@param _position Vector3 坐标
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
---@deprecated
---@see AbilityComp.cast_ability_by_ability_slot_and_position
function Unit.cast_ability_by_ability_slot_and_position(_position, _ability_slot, _duration) end

---控制角色对目标单位释放指定槽位技能
---@param _target LifeEntity 目标
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
---@deprecated
---@see AbilityComp.cast_ability_by_ability_slot_and_target
function Unit.cast_ability_by_ability_slot_and_target(_target, _ability_slot, _duration) end

---控制角色对指定方向执行释放指定预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _direction Vector3 方向
---@param _ability_slot AbilitySlot? 技能槽位
---@deprecated
---@see AbilityComp.cast_ability_by_direction
function Unit.cast_ability_by_direction(_ability_key, _duration, _direction, _ability_slot) end

---控制角色对指定坐标执行释放预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _position Vector3 坐标
---@param _ability_slot AbilitySlot? 技能槽位
---@deprecated
---@see AbilityComp.cast_ability_by_position
function Unit.cast_ability_by_position(_ability_key, _duration, _position, _ability_slot) end

---控制角色对指定目标执行释放指定预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _target LifeEntity 目标
---@param _ability_slot AbilitySlot? 技能槽位
---@deprecated
---@see AbilityComp.cast_ability_by_target
function Unit.cast_ability_by_target(_ability_key, _duration, _target, _ability_slot) end

---改变组件颜色
---@param _paint_area PaintArea 染色区域
---@param _color Color 颜色
---@deprecated
---@see Unit.set_paint_area_color
function Unit.change_comp_color(_paint_area, _color) end

---修改所属玩家
---@param _role Role 所属玩家
---@deprecated
---@see OwnerComp.change_owner
function Unit.change_owner(_role) end

---清除单位物品格选中状态
---@deprecated
---@see EquipmentComp.clear_selected_equipment_slot
function Unit.clear_selected_equipment_slot() end

---停止环绕运动
---@deprecated
---@see Unit.remove_surround_motor
function Unit.del_surround_motor() end

---销毁技能
---@param _ability Ability 技能对象
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.destroy_ability
function Unit.destroy_ability(_ability) end

---销毁技能
---@param _ability Ability 技能对象
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.destroy_ability
function Unit.destroy_skill(_ability) end

---关闭重力影响
function Unit.disable_gravity() end

---禁用单位互动
function Unit.disable_interact() end

---禁用运动器
---@param _index integer 索引
function Unit.disable_motor(_index) end

---开启重力影响
function Unit.enable_gravity() end

---激活单位互动
function Unit.enable_interact() end

---激活运动器
---@param _index integer 索引
function Unit.enable_motor(_index) end

---控制角色对目标方向释放指定槽位技能
---@param _direction Vector3 方向
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
---@deprecated
---@see AbilityComp.cast_ability_by_ability_slot_and_direction
function Unit.execute_ability_by_ability_slot_index_and_dir(_direction, _ability_slot, _duration) end

---控制角色对目标坐标释放指定槽位技能
---@param _position Vector3 坐标
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
---@deprecated
---@see AbilityComp.cast_ability_by_ability_slot_and_position
function Unit.execute_ability_by_ability_slot_index_and_pos(_position, _ability_slot, _duration) end

---控制角色对目标单位释放指定槽位技能
---@param _target LifeEntity 目标
---@param _ability_slot AbilitySlot 技能槽位
---@param _duration Fixed 时间
---@deprecated
---@see AbilityComp.cast_ability_by_ability_slot_and_target
function Unit.execute_ability_by_ability_slot_index_and_target(_target, _ability_slot, _duration) end

---控制角色对指定方向执行释放指定预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _direction Vector3 方向
---@param _ability_slot AbilitySlot? 技能槽位
---@deprecated
---@see AbilityComp.cast_ability_by_direction
function Unit.execute_ability_by_dir(_ability_key, _duration, _direction, _ability_slot) end

---控制角色对指定坐标执行释放预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _position Vector3 坐标
---@param _ability_slot AbilitySlot? 技能槽位
---@deprecated
---@see AbilityComp.cast_ability_by_position
function Unit.execute_ability_by_pos(_ability_key, _duration, _position, _ability_slot) end

---控制角色对指定目标执行释放指定预设技能
---@param _ability_key AbilityKey 技能编号
---@param _duration Fixed 时间
---@param _target LifeEntity 目标
---@param _ability_slot AbilitySlot? 技能槽位
---@deprecated
---@see AbilityComp.cast_ability_by_target
function Unit.execute_ability_by_target(_ability_key, _duration, _target, _ability_slot) end

---获取单位所有技能
---@return Ability[] 技能对象
---@deprecated
---@see AbilityComp.get_abilities
function Unit.get_abilities() end

---获取对应槽位技能
---@param _ability_slot AbilitySlot 技能槽位
---@return Ability 技能对象
---@deprecated
---@see AbilityComp.get_ability_by_slot
function Unit.get_ability_by_slot(_ability_slot) end

---获取对应槽位技能
---@param _ability_slot AbilitySlot 技能槽位
---@return Ability 技能对象
---@deprecated
---@see AbilityComp.get_ability_by_slot
function Unit.get_ability_in_slot(_ability_slot) end

---获取单位角速度
---@return Vector3 角速度
function Unit.get_angular_velocity() end

---获取单位所属阵营
---@return Camp 阵营
function Unit.get_camp() end

---获取单位所属阵营id
---@return CampID 阵营ID
function Unit.get_camp_id() end

---根据单位编号获取子组件
---@param _name string 子单位名称
---@return Unit 单位
function Unit.get_child_by_name(_name) end

---获得所有子触发区域单位
---@return CustomTriggerSpace[] 触发区域列表
function Unit.get_child_customtriggerspaces() end

---获得所有子物理组件单位
---@return Obstacle[] 组件列表
function Unit.get_child_obstacles() end

---获得所有子单位
---@return Unit[] 单位列表
function Unit.get_children() end

---获得所有子触发区域单位
---@return CustomTriggerSpace[] 触发区域列表
---@deprecated
---@see Unit.get_child_customtriggerspaces
function Unit.get_children_customtriggerspace() end

---获得所有子物理组件单位
---@return Obstacle[] 组件列表
---@deprecated
---@see Unit.get_child_obstacles
function Unit.get_children_obstacle() end

---获取触发区域内的随机坐标
---@return Vector3 坐标
---@deprecated
---@see CustomTriggerSpace.random_point
function Unit.get_customtriggerspaces_random_point() end

---获取身上的物品
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot_index integer 槽位索引
---@return Equipment 物品
---@deprecated
---@see EquipmentComp.get_equipment_by_slot
function Unit.get_equipment_by_slot(_slot_type, _slot_index) end

---获取角色/生物持有的物品预设列表
---@param _equipment_key EquipmentKey 物品类型
---@param _exclude_equipped boolean? 不搜索物品栏
---@param _exclude_bag boolean? 不搜索背包栏
---@return Equipment[] 物品列表
---@deprecated
---@see EquipmentComp.get_equipment_list
function Unit.get_equipment_list(_equipment_key, _exclude_equipped, _exclude_bag) end

---获取持有的物品列表
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return Equipment[] 物品
---@deprecated
---@see EquipmentComp.get_equipment_list_by_slot_type
function Unit.get_equipment_list_by_slot(_slot_type) end

---获取最大可持有的物品数量
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@return integer 数量
---@deprecated
---@see EquipmentComp.get_equipment_max_count
function Unit.get_equipment_max_num_by_slot(_slot_type) end

---获取单位编号
---@return UnitKey 单位编号
function Unit.get_key() end

---获取举起冷却时间
---@return Fixed 定点数
---@deprecated
---@see LiftComp.get_lift_cooldown
function Unit.get_lift_cd() end

---获取举起剩余冷却时间
---@return Fixed 定点数
---@deprecated
---@see LiftComp.get_lift_remaining_cooldown
function Unit.get_lift_left_cd() end

---获取单位线速度
---@return Vector3 线速度
function Unit.get_linear_velocity() end

---获取单位本地坐标系下的方向
---@param _direction_type Enums.DirectionType 方向
---@return Vector3 向量
---@deprecated
---@see Unit.get_local_direction
function Unit.get_local_dir(_direction_type) end

---获取单位本地坐标系下的方向
---@param _direction_type Enums.DirectionType 方向
---@return Vector3 向量
function Unit.get_local_direction(_direction_type) end

---获取单位局部偏移位置
---@param _offset Vector3 偏移向量
---@return Vector3 偏移位置
function Unit.get_local_offset_position(_offset) end

---获取单位本地坐标系下的旋转角
---@param _direction_type Enums.DirectionType 方向
---@return Quaternion Quaternion
function Unit.get_local_quaternion(_direction_type) end

---获取单位名称
---@return string 名称
function Unit.get_name() end

---获得单位旋转
---@return Quaternion 旋转
function Unit.get_orientation() end

---获取父单位
---@return Unit 单位
function Unit.get_parent() end

---获取单位坐标
---@return Vector3 坐标
function Unit.get_position() end

---获取受力类型
---@return Enums.RigidBodyType 受力类型
function Unit.get_rigid_body_type() end

---获取单位所属玩家
---@return Role 所属玩家
function Unit.get_role() end

---获取单位所属玩家ID
---@return RoleID 玩家ID
function Unit.get_role_id() end

---获取滚动剩余冷却时间
---@return Fixed 剩余冷却时间
---@deprecated
---@see RollComp.get_roll_remaining_cooldown
function Unit.get_roll_left_cd() end

---获取飞扑剩余冷却时间
---@return Fixed 剩余冷却时间
---@deprecated
---@see RushComp.get_rush_remaining_cooldown
function Unit.get_rush_left_cd() end

---获得单位缩放
---@return Vector3 缩放
function Unit.get_scale() end

---获取当前选中的物品
---@return Equipment 物品
---@deprecated
---@see EquipmentComp.get_selected_equipment
function Unit.get_selected_equipment() end

---获取单位所有技能
---@return Ability[] 技能对象
---@deprecated
---@see AbilityComp.get_abilities
function Unit.get_skills() end

---获取对应槽位技能
---@param _ability_slot AbilitySlot 技能槽位
---@return Ability 技能对象
---@deprecated
---@see AbilityComp.get_ability_by_slot
function Unit.get_ugc_skill(_ability_slot) end

---获取单位类型
---@return Enums.UnitType 单位类型
function Unit.get_unit_type() end

---关闭气泡信息
function Unit.hide_bubble_msg() end

---打断技能施法
---@deprecated
---@see AbilityComp.interrupt_ability
function Unit.interrupt_ability() end

---是否为角色
---@return boolean 单位
function Unit.is_character() end

---是否为生物
---@return boolean 单位
function Unit.is_creature() end

---组件是否为受力物体
---@return boolean 是否为受力物体
function Unit.is_dynamic() end

---是受力物体
---@return boolean 受力物体
function Unit.is_dynamic_body() end

---单位是否在触发区域内
---@param _custom_trigger_space CustomTriggerSpace 触发区域
---@param _consider_mask boolean? 考虑掩码
---@return boolean 布尔
---@deprecated
---@see Unit.is_in_customtriggerspace
function Unit.is_in_custom_trigger_space(_custom_trigger_space, _consider_mask) end

---单位是否在触发区域内
---@param _custom_trigger_space CustomTriggerSpace 触发区域
---@param _consider_mask boolean? 考虑掩码
---@return boolean 布尔
function Unit.is_in_customtriggerspace(_custom_trigger_space, _consider_mask) end

---是动力学物体
---@return boolean 动力学物体
function Unit.is_kinematic_body() end

---单位模型是否可见
---@return boolean 是否隐藏
function Unit.is_model_visible() end

---单位物理是否生效
---@return boolean 是否物理生效
---@deprecated
---@see Unit.is_physics_active
function Unit.is_physic_active() end

---单位物理是否生效
---@return boolean 是否物理生效
---@deprecated
---@see Unit.is_physics_active
function Unit.is_physic_enable() end

---单位物理是否生效
---@return boolean 是否物理生效
function Unit.is_physics_active() end

---是静态物体
---@return boolean 静态物体
function Unit.is_static_body() end

---判断单位是否满足作为技能释放目标的条件
---@param _ability Ability 对应技能
---@return boolean 目标是否满足条件
function Unit.is_valid_ability_target(_ability) end

---单位开始播放3d音效
---@param _sound_key SoundKey 声音编号
---@param _duration Fixed? 持续时间
---@param _volume Fixed? 音量
---@return SoundID 音效ID
function Unit.play_3d_sound(_sound_key, _duration, _volume) end

---单位发送表情
---@param _emoji_key EmojiKey 表情编号
function Unit.play_emoji(_emoji_key) end

---发送气泡表情
---@param _emoji_key EmojiKey 表情
---@param _show_time Fixed 持续时间
---@param _offset Vector3 偏移
function Unit.play_emoji_with_offset(_emoji_key, _show_time, _offset) end

---单位开始播放声音
---@param _event_id SoundKey 声音编号
---@param _vis_dis Fixed 音效传播距离
---@param _sound_attenuation_curve string 衰减曲线
---@return SoundID 音效ID
function Unit.play_sound_with_dis_and_attenuation(_event_id, _vis_dis, _sound_attenuation_curve) end

---移除槽位上的技能
---@param _ability_slot AbilitySlot 技能槽位
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.remove_ability
function Unit.remove_ability(_ability_slot) end

---根据技能编号移除技能
---@param _ability_key AbilityKey 技能编号
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.remove_ability_by_key
function Unit.remove_ability_by_ability_key(_ability_key) end

---根据技能编号移除技能
---@param _ability_key AbilityKey 技能编号
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.remove_ability_by_key
function Unit.remove_ability_by_key(_ability_key) end

---移除槽位上的技能
---@param _ability_slot AbilitySlot 技能槽位
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.remove_ability
function Unit.remove_ability_in_slot(_ability_slot) end

---从父节点移除
function Unit.remove_from_parent() end

---根据技能编号移除技能
---@param _ability_key AbilityKey 技能编号
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.remove_ability_by_key
function Unit.remove_skill_by_skill_key(_ability_key) end

---停止环绕运动
function Unit.remove_surround_motor() end

---移除槽位上的技能
---@param _ability_slot AbilitySlot 技能槽位
---@return boolean 是否成功移除
---@deprecated
---@see AbilityComp.remove_ability
function Unit.remove_ugc_skill_in_slot(_ability_slot) end

---重置指定槽位技能CD
---@param _ability_index AbilitySlot 技能槽位
---@deprecated
---@see AbilityComp.reset_ability_cd
function Unit.reset_ability_cd(_ability_index) end

---重置指定槽位技能CD
---@param _ability_index AbilitySlot 技能槽位
---@deprecated
---@see AbilityComp.reset_ability_cd
function Unit.reset_skill_cd(_ability_index) end

---替换技能槽位(UGC槽位)
---@param _ability Ability 技能对象
---@param _ability_index AbilitySlot 技能槽位
---@return Ability 被替换的旧技能
---@deprecated
---@see AbilityComp.set_ability_to_slot
function Unit.set_ability_to_slot(_ability, _ability_index) end

---设置加速运动初速度并重置
---@param _index integer 索引
---@param _init_vel Vector3 初速度
function Unit.set_acc_motor_init_velocity(_index, _init_vel) end

---改变单位角速度
---@param _vel Vector3 角速度
function Unit.set_angular_velocity(_vel) end

---设置举起冷却时间
---@param _cd_time Fixed 时间
---@deprecated
---@see LiftComp.set_lift_cooldown
function Unit.set_lift_cd(_cd_time) end

---设置举起剩余冷却时间
---@param _time Fixed 时间
---@deprecated
---@see LiftComp.set_lift_remaining_cooldown
function Unit.set_lift_left_cd(_time) end

---设置直线运动速度
---@param _index integer 索引
---@param _vel Vector3 线速度
---@param _is_local boolean? 是否局部空间
function Unit.set_linear_motor_velocity(_index, _vel, _is_local) end

---改变单位线速度
---@param _vel Vector3 线速度
function Unit.set_linear_velocity(_vel) end

---开关镜面反射
---@param _enable boolean 是否启用
function Unit.set_mirror_reflect_enabled(_enable) end

---设置单位物理是否生效
---@param _is_active boolean 是否生效
---@deprecated
---@see Unit.set_physics_active
function Unit.set_model_physic_visible(_is_active) end

---设置单位模型是否可见
---@param _v boolean 是否可见
function Unit.set_model_visible(_v) end

---设置单位旋转
---@param _rot Quaternion 旋转
function Unit.set_orientation(_rot) end

---改变组件颜色
---@param _paint_area PaintArea 染色区域
---@param _color Color 颜色
function Unit.set_paint_area_color(_paint_area, _color) end

---改变组件颜色
---@param _paint_area PaintArea 染色区域
---@param _color Color 颜色
---@deprecated
---@see Unit.set_paint_area_color
function Unit.set_paintarea_color(_paint_area, _color) end

---设置单位物理是否生效
---@param _is_active boolean 是否生效
---@deprecated
---@see Unit.set_physics_active
function Unit.set_physic_enable(_is_active) end

---设置单位物理是否生效
---@param _is_active boolean 是否生效
function Unit.set_physics_active(_is_active) end

---重置单位坐标
---@param _pos Vector3 坐标
function Unit.set_position(_pos) end

---设置滚动剩余冷却时间
---@param _remaining_time Fixed 剩余冷却时间
---@deprecated
---@see RollComp.set_roll_remaining_cooldown
function Unit.set_roll_left_cd(_remaining_time) end

---设置飞扑冷却时间
---@param _time Fixed 时间
---@deprecated
---@see RushComp.set_rush_cooldown
function Unit.set_rush_cd(_time) end

---设置飞扑剩余冷却时间
---@param _time Fixed 时间
---@deprecated
---@see RushComp.set_rush_remaining_cooldown
function Unit.set_rush_left_cd(_time) end

---设置单位选中物品格
---@param _slot_type Enums.EquipmentSlotType 槽位类型
---@param _slot_index integer 槽位索引
---@deprecated
---@see EquipmentComp.select_equipment_slot
function Unit.set_selected_equipment_slot(_slot_type, _slot_index) end

---替换技能槽位(UGC槽位)
---@param _ability Ability 技能对象
---@param _ability_index AbilitySlot 技能槽位
---@return Ability 被替换的旧技能
---@deprecated
---@see AbilityComp.set_ability_to_slot
function Unit.set_skill_to_slot(_ability, _ability_index) end

---设置单位世界空间下的缩放
---@param _scale Vector3 缩放
function Unit.set_world_scale(_scale) end

---发送气泡信息
---@param _show_msg string 气泡信息
---@param _show_time Fixed 持续时间
---@param _max_dis Fixed? 隐藏距离
---@param _offset Vector3? 偏移
function Unit.show_bubble_msg(_show_msg, _show_time, _max_dis, _offset) end

---激活AI
---@deprecated
---@see LifeEntity.start_ai
function Unit.start_ai() end

---暂停AI
---@deprecated
---@see LifeEntity.stop_ai
function Unit.stop_ai() end

---单位停止播放声音
---@param _lres_id SoundID 音效ID
function Unit.stop_sound(_lres_id) end

---使载具往某个方向移动一段时间
---@param _direction Vector3 方向
---@param _duration Fixed 持续时间
---@deprecated
---@see VehicleComp.start_move_by_direction
function Unit.vehicle_start_move(_direction, _duration) end

---使载具停止移动
---@deprecated
---@see VehicleComp.stop_move
function Unit.vehicle_stop_move() end

---@class UnitInteractVolumeComp
UnitInteractVolumeComp = {}

---获取单位互动按钮ID
---@param _interact_index integer 互动索引
---@param _interact_btn_type Enums.InteractBtnType 互动按钮类型
---@return InteractBtnID 互动按钮ID
function UnitInteractVolumeComp.get_interact_id(_interact_index, _interact_btn_type) end

---设置单位互动按钮图标
---@param _interact_id InteractBtnID 互动按钮ID
---@param _icon ImageKey 互动按钮图标
---@deprecated
---@see UnitInteractVolumeComp.set_interact_button_icon
function UnitInteractVolumeComp.set_interact_btn_icon(_interact_id, _icon) end

---设置单位互动按钮文本
---@param _interact_id InteractBtnID 互动按钮ID
---@param _text string 互动按钮文本
---@deprecated
---@see UnitInteractVolumeComp.set_interact_button_text
function UnitInteractVolumeComp.set_interact_btn_name(_interact_id, _text) end

---设置单位互动按钮图标
---@param _interact_id InteractBtnID 互动按钮ID
---@param _icon ImageKey 互动按钮图标
function UnitInteractVolumeComp.set_interact_button_icon(_interact_id, _icon) end

---设置单位互动按钮文本
---@param _interact_id InteractBtnID 互动按钮ID
---@param _text string 互动按钮文本
function UnitInteractVolumeComp.set_interact_button_text(_interact_id, _text) end

---设置单位互动按钮文本
---@param _interact_index integer 互动索引
---@param _text string 互动按钮文本
function UnitInteractVolumeComp.set_interact_button_text_by_index(_interact_index, _text) end

---设置单位互动是否启用
---@param _enable boolean 是否启用
---@deprecated
---@see UnitInteractVolumeComp.set_interact_enabled
function UnitInteractVolumeComp.set_interact_enable(_enable) end

---设置单位互动是否启用(索引)
---@param _interact_index integer 互动索引
---@param _enable boolean 是否启用
---@deprecated
---@see UnitInteractVolumeComp.set_interact_enabled_by_index
function UnitInteractVolumeComp.set_interact_enable_by_index(_interact_index, _enable) end

---设置单位互动是否启用
---@param _enable boolean 是否启用
function UnitInteractVolumeComp.set_interact_enabled(_enable) end

---设置单位互动是否启用(索引)
---@param _interact_index integer 互动索引
---@param _enable boolean 是否启用
function UnitInteractVolumeComp.set_interact_enabled_by_index(_interact_index, _enable) end

---@class VehicleComp
VehicleComp = {}

---载具复位
function VehicleComp.reset() end

---使载具往某个方向移动一段时间
---@param _direction Vector3 方向
---@param _duration Fixed 持续时间
function VehicleComp.start_move_by_direction(_direction, _duration) end

---使载具停止移动
function VehicleComp.stop_move() end

---@class VirtualEquipment
VirtualEquipment = {}

---增加/减少物品当前堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.change_current_stack_size
function VirtualEquipment.add_equipment_current_stack_num(_num) end

---增加/减少物品最大堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.change_max_stack_size
function VirtualEquipment.add_equipment_max_stack_num(_num) end

---获取物品能否丢弃
---@return boolean 能否丢弃
---@deprecated
---@see Equipment.can_drop
function VirtualEquipment.can_drop() end

---增加/减少物品当前堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.change_current_stack_size
function VirtualEquipment.change_current_stack_size(_num) end

---增加/减少物品最大堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.change_max_stack_size
function VirtualEquipment.change_max_stack_size(_num) end

---删除物品
---@deprecated
---@see Equipment.destroy_equipment
function VirtualEquipment.destroy_equipment() end

---获取物品当前堆叠层数
---@return integer 当前堆叠层数
---@deprecated
---@see Equipment.get_current_stack_num
function VirtualEquipment.get_current_stack_num() end

---获取物品描述
---@return string 物品描述
---@deprecated
---@see Equipment.get_desc
function VirtualEquipment.get_desc() end

---获取物品的抵押价格
---@param _res_type string 货币类型
---@return integer 卖价
---@deprecated
---@see Equipment.get_price
function VirtualEquipment.get_economic_value(_res_type) end

---获取物品是否自动拾取
---@return boolean 是否自动拾取
---@deprecated
---@see Equipment.is_auto_picking
function VirtualEquipment.get_equipment_auto_pick() end

---获取物品是否自动使用
---@return boolean 是否自动使用
---@deprecated
---@see Equipment.is_auto_using
function VirtualEquipment.get_equipment_auto_use() end

---获取物品能否丢弃
---@return boolean 能否丢弃
---@deprecated
---@see Equipment.can_drop
function VirtualEquipment.get_equipment_can_drop() end

---获取物品当前堆叠层数
---@return integer 当前堆叠层数
---@deprecated
---@see Equipment.get_current_stack_num
function VirtualEquipment.get_equipment_current_stack_num() end

---获取物品描述
---@return string 物品描述
---@deprecated
---@see Equipment.get_desc
function VirtualEquipment.get_equipment_desc() end

---获取物品的物品编号
---@return EquipmentKey 物品编号
---@deprecated
---@see Equipment.get_key
function VirtualEquipment.get_equipment_key_prefab() end

---获取物品最大堆叠层数
---@return integer 最大堆叠层数
---@deprecated
---@see Equipment.get_max_stack_num
function VirtualEquipment.get_equipment_max_stack_num() end

---获取物品名称
---@return string 物品名称
---@deprecated
---@see Equipment.get_name
function VirtualEquipment.get_equipment_name() end

---获取持有物品的角色
---@return Character 角色
---@deprecated
---@see Equipment.get_owner_character
function VirtualEquipment.get_equipment_owner_character() end

---获取持有物品的生物
---@return Creature 生物
---@deprecated
---@see Equipment.get_owner_creature
function VirtualEquipment.get_equipment_owner_creature() end

---获取物品所在槽位
---@return EquipmentSlot 槽位
---@deprecated
---@see Equipment.get_equipment_slot
function VirtualEquipment.get_equipment_slot() end

---获取物品所在槽位
---@return EquipmentSlot 槽位
---@deprecated
---@see Equipment.get_equipment_slot
function VirtualEquipment.get_equipment_slot_index() end

---获取物品所在槽位类型
---@return Enums.EquipmentSlotType 槽位类型
---@deprecated
---@see Equipment.get_slot_type
function VirtualEquipment.get_equipment_slot_type() end

---获取物品的物品类型
---@return Enums.EquipmentType 物品类型
---@deprecated
---@see Equipment.get_equipment_type
function VirtualEquipment.get_equipment_type() end

---获取物品的物品编号
---@return EquipmentKey 物品编号
---@deprecated
---@see Equipment.get_key
function VirtualEquipment.get_key() end

---获取物品最大堆叠层数
---@return integer 最大堆叠层数
---@deprecated
---@see Equipment.get_max_stack_num
function VirtualEquipment.get_max_stack_num() end

---获取物品名称
---@return string 物品名称
---@deprecated
---@see Equipment.get_name
function VirtualEquipment.get_name() end

---获取持有物品的角色
---@return Character 角色
---@deprecated
---@see Equipment.get_owner_character
function VirtualEquipment.get_owner_character() end

---获取持有物品的生物
---@return Creature 生物
---@deprecated
---@see Equipment.get_owner_creature
function VirtualEquipment.get_owner_creature() end

---获取物品位置
---@return Vector3 物品位置
---@deprecated
---@see Equipment.get_position
function VirtualEquipment.get_position() end

---获取物品所在槽位
---@return EquipmentSlot 槽位
---@deprecated
---@see Equipment.get_equipment_slot
function VirtualEquipment.get_slot_index() end

---获取物品所在槽位类型
---@return Enums.EquipmentSlotType 槽位类型
---@deprecated
---@see Equipment.get_slot_type
function VirtualEquipment.get_slot_type() end

---物品是否被持有
---@return boolean 是否被持有
---@deprecated
---@see Equipment.has_owner
function VirtualEquipment.has_owner() end

---获取物品是否自动拾取
---@return boolean 是否自动拾取
---@deprecated
---@see Equipment.is_auto_picking
function VirtualEquipment.is_auto_pick() end

---获取物品是否自动拾取
---@return boolean 是否自动拾取
---@deprecated
---@see Equipment.is_auto_picking
function VirtualEquipment.is_auto_picking() end

---获取物品是否自动使用
---@return boolean 是否自动使用
---@deprecated
---@see Equipment.is_auto_using
function VirtualEquipment.is_auto_use() end

---获取物品是否自动使用
---@return boolean 是否自动使用
---@deprecated
---@see Equipment.is_auto_using
function VirtualEquipment.is_auto_using() end

---设置物品当前堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.set_current_stack_num
function VirtualEquipment.set_current_stack_num(_num) end

---设置物品的描述
---@param _desc string 描述
---@deprecated
---@see Equipment.set_desc
function VirtualEquipment.set_desc(_desc) end

---设置物品能否丢弃
---@param _droppable boolean 能否丢弃
---@deprecated
---@see Equipment.set_droppable
function VirtualEquipment.set_droppable(_droppable) end

---设置物品的抵押价格
---@param _res_type string 货币类型
---@param _price integer 卖价
---@deprecated
---@see Equipment.set_price
function VirtualEquipment.set_economic_value(_res_type, _price) end

---设置物品当前堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.set_current_stack_num
function VirtualEquipment.set_equipment_current_stack_num(_num) end

---设置物品的描述
---@param _desc string 描述
---@deprecated
---@see Equipment.set_desc
function VirtualEquipment.set_equipment_desc(_desc) end

---设置物品的图标
---@param _icon_key ImageKey 图标
---@deprecated
---@see Equipment.set_icon
function VirtualEquipment.set_equipment_icon(_icon_key) end

---设置物品最大堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.set_max_stack_num
function VirtualEquipment.set_equipment_max_stack_num(_num) end

---设置物品的名称
---@param _name string 名称
---@deprecated
---@see Equipment.set_name
function VirtualEquipment.set_equipment_name(_name) end

---设置物品的图标
---@param _icon_key ImageKey 图标
---@deprecated
---@see Equipment.set_icon
function VirtualEquipment.set_icon(_icon_key) end

---设置物品最大堆叠数
---@param _num integer 堆叠数
---@deprecated
---@see Equipment.set_max_stack_num
function VirtualEquipment.set_max_stack_num(_num) end

---设置物品的名称
---@param _name string 名称
---@deprecated
---@see Equipment.set_name
function VirtualEquipment.set_name(_name) end

---设置物品能否使用
---@param _usable boolean 能否使用
---@deprecated
---@see Equipment.set_usable
function VirtualEquipment.set_usable(_usable) end

---@class EVENT
EVENT = {}

---子弹命中
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
---事件回调参数 target_unit Unit 目标对象
---事件回调参数 dmg Fixed 伤害值
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_BULLET_HIT, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
	print(data.target_unit)
	print(data.dmg)
end)
--]]
EVENT.ABILITY_BULLET_HIT = "ABILITY_BULLET_HIT"

---技能切入
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
---事件回调参数 switch_out_ability Ability 切换前的技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_SWITCH_IN, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
	print(data.switch_out_ability)
end)
--]]
EVENT.ABILITY_SWITCH_IN = "ABILITY_SWITCH_IN"

---技能切出
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
---事件回调参数 switch_in_ability Ability 切换后的技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_SWITCH_OUT, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
	print(data.switch_in_ability)
end)
--]]
EVENT.ABILITY_SWITCH_OUT = "ABILITY_SWITCH_OUT"

---技能蓄力阶段开始
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_ACCUMULATE_BEGIN, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_ACCUMULATE_BEGIN = "ABILITY_ACCUMULATE_BEGIN"

---技能蓄力阶段被打断
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_ACCUMULATE_INTERRUPT, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_ACCUMULATE_INTERRUPT = "ABILITY_ACCUMULATE_INTERRUPT"

---技能蓄力阶段结束
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_ACCUMULATE_END, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_ACCUMULATE_END = "ABILITY_ACCUMULATE_END"

---技能施法阶段开始
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_CAST_BEGIN, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_CAST_BEGIN = "ABILITY_CAST_BEGIN"

---技能施法阶段被打断
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_CAST_BREAK, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_CAST_BREAK = "ABILITY_CAST_BREAK"

---技能施法阶段结束
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_CAST_END, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_CAST_END = "ABILITY_CAST_END"

---技能冷却完成
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_CD_END, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_CD_END = "ABILITY_CD_END"

---技能充能完成
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_CHARGE_END, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_CHARGE_END = "ABILITY_CHARGE_END"

---技能降级
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_DOWNGRADE, }, function(event_name, actor, data)
	print(data.ability)
end)
--]]
EVENT.ABILITY_DOWNGRADE = "ABILITY_DOWNGRADE"

---失去技能
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_REMOVE, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_REMOVE = "ABILITY_REMOVE"

---获得技能
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_ADD, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_ADD = "ABILITY_ADD"

---技能升级
---事件主体 Ability 技能
---事件回调参数 ability Ability 触发技能
---事件回调参数 unit Unit 技能拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.ABILITY_UPGRADE, }, function(event_name, actor, data)
	print(data.ability)
	print(data.unit)
end)
--]]
EVENT.ABILITY_UPGRADE = "ABILITY_UPGRADE"

---阵营积分变化
---事件主体 Global 全局触发器
---事件回调参数 camp Camp 触发阵营
---事件回调参数 old_camp_score integer 得分前积分
---事件回调参数 new_camp_score integer 得分后积分
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_CAMP_SCORE_UPDATE, }, function(event_name, actor, data)
	print(data.camp)
	print(data.old_camp_score)
	print(data.new_camp_score)
end)
--]]
EVENT.ANY_CAMP_SCORE_UPDATE = "ANY_CAMP_SCORE_UPDATE"

---任意触发区域创建
---事件主体 Global 全局触发器
---事件回调参数 unit CustomTriggerSpace 被创建的触发区域
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_CUSTOMTRIGGERSPACE_CREATE, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.ANY_CUSTOMTRIGGERSPACE_CREATE = "ANY_CUSTOMTRIGGERSPACE_CREATE"

---任意触发区域销毁
---事件主体 Global 全局触发器
---事件回调参数 unit CustomTriggerSpace 被销毁的触发区域
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_CUSTOMTRIGGERSPACE_DESTROY, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.ANY_CUSTOMTRIGGERSPACE_DESTROY = "ANY_CUSTOMTRIGGERSPACE_DESTROY"

---任意物品位置发生变化
---事件主体 Global 全局触发器
---事件回调参数 equipment Equipment 触发事件的物品
---事件回调参数 owner LifeEntity 持有者
---事件回调参数 old_slot_type Enums.EquipmentSlotType 旧槽位类型
---事件回调参数 old_index integer 旧槽位索引
---事件回调参数 new_slot_type Enums.EquipmentSlotType 新槽位类型
---事件回调参数 new_index integer 新槽位索引
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_EQUIPMENT_CHANGE_SLOT, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.owner)
	print(data.old_slot_type)
	print(data.old_index)
	print(data.new_slot_type)
	print(data.new_index)
end)
--]]
EVENT.ANY_EQUIPMENT_CHANGE_SLOT = "ANY_EQUIPMENT_CHANGE_SLOT"

---任意物品进出区域事件
---事件主体 Global 全局触发器
---注册参数 _trigger_event_type Enums.TriggerSpaceEventType 触发类型
---注册参数 _customtriggerspace_id CustomTriggerSpaceID 触发区域ID
---事件回调参数 event_unit Equipment 触发物品
---事件回调参数 event_unit_id EquipmentID TRIGGER_EQUIPMENT_ID
---事件回调参数 trigger_event_type Enums.TriggerSpaceEventType 触发类型
---事件回调参数 trigger_zone_id CustomTriggerSpaceID 触发区域ID
---事件回调参数 trigger_zone CustomTriggerSpace 事件触发区域
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_EQUIPMENT_TRIGGER_SPACE, _trigger_event_type, _customtriggerspace_id}, function(event_name, actor, data)
	print(data.event_unit)
	print(data.event_unit_id)
	print(data.trigger_event_type)
	print(data.trigger_zone_id)
	print(data.trigger_zone)
end)
--]]
EVENT.ANY_EQUIPMENT_TRIGGER_SPACE = "ANY_EQUIPMENT_TRIGGER_SPACE"

---任意生命体进出区域事件
---事件主体 Global 全局触发器
---注册参数 _trigger_event_type Enums.TriggerSpaceEventType 触发类型
---注册参数 _trigger_zone_id CustomTriggerSpaceID 触发区域ID
---事件回调参数 event_unit LifeEntity 触发角色/生物
---事件回调参数 event_unit_id UnitID 触发角色/生物ID
---事件回调参数 trigger_event_type Enums.TriggerSpaceEventType 触发类型
---事件回调参数 trigger_zone_id CustomTriggerSpaceID 触发区域ID
---事件回调参数 trigger_zone CustomTriggerSpace 事件触发区域
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_LIFEENTITY_TRIGGER_SPACE, _trigger_event_type, _trigger_zone_id}, function(event_name, actor, data)
	print(data.event_unit)
	print(data.event_unit_id)
	print(data.trigger_event_type)
	print(data.trigger_zone_id)
	print(data.trigger_zone)
end)
--]]
EVENT.ANY_LIFEENTITY_TRIGGER_SPACE = "ANY_LIFEENTITY_TRIGGER_SPACE"

---任意组件创建
---事件主体 Global 全局触发器
---事件回调参数 unit Obstacle 被创建的组件
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_OBSTACLE_CREATE, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.ANY_OBSTACLE_CREATE = "ANY_OBSTACLE_CREATE"

---任意组件销毁
---事件主体 Global 全局触发器
---事件回调参数 unit Obstacle 被销毁的组件
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_OBSTACLE_DESTROY, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.ANY_OBSTACLE_DESTROY = "ANY_OBSTACLE_DESTROY"

---任意组件被举起
---事件主体 Global 全局触发器
---事件回调参数 lift_unit Unit 抓举者
---事件回调参数 lifted_unit Obstacle 被抓举者
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_OBSTACLE_LIFTED_BEGAN, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.ANY_OBSTACLE_LIFTED_BEGAN = "ANY_OBSTACLE_LIFTED_BEGAN"

---任意组件被放下
---事件主体 Global 全局触发器
---事件回调参数 lift_unit Unit 抓举者
---事件回调参数 lifted_unit Obstacle 被抓举者
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_OBSTACLE_LIFTED_ENDED, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.ANY_OBSTACLE_LIFTED_ENDED = "ANY_OBSTACLE_LIFTED_ENDED"

---任意组件进出触发区域
---事件主体 Global 全局触发器
---注册参数 _trigger_event_type Enums.TriggerSpaceEventType 触发类型
---注册参数 _trigger_zone_id CustomTriggerSpaceID 触发区域ID
---事件回调参数 event_unit Obstacle 触发组件
---事件回调参数 event_unit_id ObstacleID 触发组件ID
---事件回调参数 trigger_event_type Enums.TriggerSpaceEventType 触发类型
---事件回调参数 trigger_zone_id CustomTriggerSpaceID 触发区域ID
---事件回调参数 trigger_zone CustomTriggerSpace 事件触发区域
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_OBSTACLE_TRIGGER_SPACE, _trigger_event_type, _trigger_zone_id}, function(event_name, actor, data)
	print(data.event_unit)
	print(data.event_unit_id)
	print(data.trigger_event_type)
	print(data.trigger_zone_id)
	print(data.trigger_zone)
end)
--]]
EVENT.ANY_OBSTACLE_TRIGGER_SPACE = "ANY_OBSTACLE_TRIGGER_SPACE"

---玩家积分变化
---事件主体 Global 全局触发器
---事件回调参数 role Role 触发玩家
---事件回调参数 old_role_score integer 得分前积分
---事件回调参数 new_role_score integer 得分后积分
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_ROLE_SCORE_UPDATE, }, function(event_name, actor, data)
	print(data.role)
	print(data.old_role_score)
	print(data.new_role_score)
end)
--]]
EVENT.ANY_ROLE_SCORE_UPDATE = "ANY_ROLE_SCORE_UPDATE"

---任意逻辑体创建
---事件主体 Global 全局触发器
---事件回调参数 unit TriggerSpace 被创建的逻辑体
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_TRIGGERSPACE_CREATE, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.ANY_TRIGGERSPACE_CREATE = "ANY_TRIGGERSPACE_CREATE"

---任意逻辑体销毁
---事件主体 Global 全局触发器
---事件回调参数 unit TriggerSpace 被销毁的逻辑体
--[[
LuaAPI.global_register_trigger_event({EVENT.ANY_TRIGGERSPACE_DESTROY, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.ANY_TRIGGERSPACE_DESTROY = "ANY_TRIGGERSPACE_DESTROY"

---自定义事件
---事件主体 Default 多类型
---注册参数 _name string 自定义事件
--[[
LuaAPI.global_register_trigger_event({EVENT.CUSTOM_EVENT, _name}, function(event_name, actor, data)
end)
--]]
EVENT.CUSTOM_EVENT = "CUSTOM_EVENT"

---环境时间到达指定时刻
---事件主体 Global 全局触发器
---注册参数 _target_time Fixed TARGET_MAP_TIME
--[[
LuaAPI.global_register_trigger_event({EVENT.ENV_TIME_REACHED, _target_time}, function(event_name, actor, data)
end)
--]]
EVENT.ENV_TIME_REACHED = "ENV_TIME_REACHED"

---游戏结束
---事件主体 Global 全局触发器
--[[
LuaAPI.global_register_trigger_event({EVENT.GAME_END, }, function(event_name, actor, data)
end)
--]]
EVENT.GAME_END = "GAME_END"

---游戏初始化
---事件主体 Global 全局触发器
--[[
LuaAPI.global_register_trigger_event({EVENT.GAME_INIT, }, function(event_name, actor, data)
end)
--]]
EVENT.GAME_INIT = "GAME_INIT"

---进入关卡
---事件主体 Default 多类型
---事件回调参数 level_key LevelKey 当前关卡
--[[
LuaAPI.global_register_trigger_event({EVENT.LEVEL_BEGIN, }, function(event_name, actor, data)
	print(data.level_key)
end)
--]]
EVENT.LEVEL_BEGIN = "LEVEL_BEGIN"

---离开关卡
---事件主体 Default 多类型
---事件回调参数 level_key LevelKey 当前关卡
--[[
LuaAPI.global_register_trigger_event({EVENT.LEVEL_END, }, function(event_name, actor, data)
	print(data.level_key)
end)
--]]
EVENT.LEVEL_END = "LEVEL_END"

---获得效果
---事件主体 Modifier 效果
---事件回调参数 from_unit_id UnitID 效果来源ID
---事件回调参数 modifier Modifier 触发效果
---事件回调参数 unit Unit 效果拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.MODIFIER_OBTAIN, }, function(event_name, actor, data)
	print(data.from_unit_id)
	print(data.modifier)
	print(data.unit)
end)
--]]
EVENT.MODIFIER_OBTAIN = "MODIFIER_OBTAIN"

---覆盖效果
---事件主体 Modifier 效果
---事件回调参数 modifier Modifier 触发效果
---事件回调参数 unit Unit 效果拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.MODIFIER_REOBTAIN, }, function(event_name, actor, data)
	print(data.modifier)
	print(data.unit)
end)
--]]
EVENT.MODIFIER_REOBTAIN = "MODIFIER_REOBTAIN"

---效果层数变化
---事件主体 Modifier 效果
---事件回调参数 stack_count_change integer 变化层数
---事件回调参数 modifier Modifier 触发效果
---事件回调参数 unit Unit 效果拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.MODIFIER_STACK_COUNT_CHANGE, }, function(event_name, actor, data)
	print(data.stack_count_change)
	print(data.modifier)
	print(data.unit)
end)
--]]
EVENT.MODIFIER_STACK_COUNT_CHANGE = "MODIFIER_STACK_COUNT_CHANGE"

---剧情动画开始播放事件
---事件主体 Default 多类型
---事件回调参数 play_role Role 触发角色
---事件回调参数 montage_id MontageKey 触发的剧情动画
--[[
LuaAPI.global_register_trigger_event({EVENT.ON_MONTAGE_BEGIN, }, function(event_name, actor, data)
	print(data.play_role)
	print(data.montage_id)
end)
--]]
EVENT.ON_MONTAGE_BEGIN = "ON_MONTAGE_BEGIN"

---剧情动画结束播放事件
---事件主体 Default 多类型
---事件回调参数 play_role Role 触发角色
---事件回调参数 montage_id MontageKey 触发的剧情动画
--[[
LuaAPI.global_register_trigger_event({EVENT.ON_MONTAGE_END, }, function(event_name, actor, data)
	print(data.play_role)
	print(data.montage_id)
end)
--]]
EVENT.ON_MONTAGE_END = "ON_MONTAGE_END"

---玩家进入拍照
---事件主体 Global 全局触发器
---事件回调参数 role Role 触发玩家
--[[
LuaAPI.global_register_trigger_event({EVENT.ON_PLAYER_ENTER_TAKE_PHOTO, }, function(event_name, actor, data)
	print(data.role)
end)
--]]
EVENT.ON_PLAYER_ENTER_TAKE_PHOTO = "ON_PLAYER_ENTER_TAKE_PHOTO"

---玩家退出拍照
---事件主体 Global 全局触发器
---事件回调参数 role Role 触发玩家
--[[
LuaAPI.global_register_trigger_event({EVENT.ON_PLAYER_LEAVE_TAKE_PHOTO, }, function(event_name, actor, data)
	print(data.role)
end)
--]]
EVENT.ON_PLAYER_LEAVE_TAKE_PHOTO = "ON_PLAYER_LEAVE_TAKE_PHOTO"

---玩家拍照
---事件主体 Global 全局触发器
---事件回调参数 role Role 触发玩家
--[[
LuaAPI.global_register_trigger_event({EVENT.ON_PLAYER_TAKE_PHOTO, }, function(event_name, actor, data)
	print(data.role)
end)
--]]
EVENT.ON_PLAYER_TAKE_PHOTO = "ON_PLAYER_TAKE_PHOTO"

---周期性计时器超时
---事件主体 Default 多类型
---注册参数 _delay Fixed 延时
--[[
LuaAPI.global_register_trigger_event({EVENT.REPEAT_TIMEOUT, _delay}, function(event_name, actor, data)
end)
--]]
EVENT.REPEAT_TIMEOUT = "REPEAT_TIMEOUT"

---天空环境变化
---事件主体 Global 全局触发器
--[[
LuaAPI.global_register_trigger_event({EVENT.ON_SKY_ENV_CHANGE, }, function(event_name, actor, data)
end)
--]]
EVENT.ON_SKY_ENV_CHANGE = "ON_SKY_ENV_CHANGE"

---指定角色选中物品格
---事件主体 Character 角色
---注册参数 _slot_type Enums.EquipmentSlotType 物品格类型
---注册参数 _slot_index integer EQUIPMENT_SLOT_INDEX
---事件回调参数 event_unit Character 触发角色
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT, _slot_type, _slot_index}, function(event_name, actor, data)
	print(data.event_unit)
end)
--]]
EVENT.SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT = "SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT"

---指定生物互动按钮被按下
---事件主体 Creature 生物
---事件回调参数 interact_lifeentity LifeEntity 互动触发者
---事件回调参数 interact_unit Creature 互动目标
---事件回调参数 interact_id InteractBtnID 互动按钮
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_INTERACTED, }, function(event_name, actor, data)
	print(data.interact_lifeentity)
	print(data.interact_unit)
	print(data.interact_id)
end)
--]]
EVENT.SPEC_LIFEENTITY_INTERACTED = "SPEC_LIFEENTITY_INTERACTED"

---指定触发区域销毁
---事件主体 CustomTriggerSpace 触发区域
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_CUSTOMTRIGGERSPACE_DESTROY, }, function(event_name, actor, data)
end)
--]]
EVENT.SPEC_CUSTOMTRIGGERSPACE_DESTROY = "SPEC_CUSTOMTRIGGERSPACE_DESTROY"

---指定物品位置发生变化
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 owner LifeEntity 持有者
---事件回调参数 old_slot_type Enums.EquipmentSlotType 旧槽位类型
---事件回调参数 old_index integer 旧槽位索引
---事件回调参数 new_slot_type Enums.EquipmentSlotType 新槽位类型
---事件回调参数 new_index integer 新槽位索引
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_CHANGE_SLOT, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.owner)
	print(data.old_slot_type)
	print(data.old_index)
	print(data.new_slot_type)
	print(data.new_index)
end)
--]]
EVENT.SPEC_EQUIPMENT_CHANGE_SLOT = "SPEC_EQUIPMENT_CHANGE_SLOT"

---指定物品销毁事件
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_DESTROY, }, function(event_name, actor, data)
	print(data.equipment)
end)
--]]
EVENT.SPEC_EQUIPMENT_DESTROY = "SPEC_EQUIPMENT_DESTROY"

---指定物品进入角色栏位
---事件主体 Equipment 物品
---注册参数 _slot_type Enums.EquipmentSlotType 物品格类型
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 slot_type Enums.EquipmentSlotType 物品格类型
---事件回调参数 owner Character 触发事件的角色
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_ENTER_CHAR_SLOT, _slot_type}, function(event_name, actor, data)
	print(data.equipment)
	print(data.slot_type)
	print(data.owner)
end)
--]]
EVENT.SPEC_EQUIPMENT_ENTER_CHAR_SLOT = "SPEC_EQUIPMENT_ENTER_CHAR_SLOT"

---指定物品离开角色栏位
---事件主体 Equipment 物品
---注册参数 _slot_type Enums.EquipmentSlotType 物品格类型
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 slot_type Enums.EquipmentSlotType 物品格类型
---事件回调参数 owner Character 触发事件的角色
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_LEAVE_CHAR_SLOT, _slot_type}, function(event_name, actor, data)
	print(data.equipment)
	print(data.slot_type)
	print(data.owner)
end)
--]]
EVENT.SPEC_EQUIPMENT_LEAVE_CHAR_SLOT = "SPEC_EQUIPMENT_LEAVE_CHAR_SLOT"

---指定物品被失去
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 owner LifeEntity 持有者
---事件回调参数 slot_type Enums.EquipmentSlotType 物品槽位类型
---事件回调参数 slot_index integer 物品槽位索引
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_LOST, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.owner)
	print(data.slot_type)
	print(data.slot_index)
end)
--]]
EVENT.SPEC_EQUIPMENT_LOST = "SPEC_EQUIPMENT_LOST"

---指定物品被获得
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 owner LifeEntity 持有者
---事件回调参数 count integer 获得数量
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_OBTAIN, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.owner)
	print(data.count)
end)
--]]
EVENT.SPEC_EQUIPMENT_OBTAIN = "SPEC_EQUIPMENT_OBTAIN"

---指定物品被选中
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_SELECT, }, function(event_name, actor, data)
	print(data.equipment)
end)
--]]
EVENT.SPEC_EQUIPMENT_SELECT = "SPEC_EQUIPMENT_SELECT"

---指定物品堆叠层数变化
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 variation integer 变化层数
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_STACK_NUM_CHANGE, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.variation)
end)
--]]
EVENT.SPEC_EQUIPMENT_STACK_NUM_CHANGE = "SPEC_EQUIPMENT_STACK_NUM_CHANGE"

---指定物品发生位置交换
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_SWAP_SLOT, }, function(event_name, actor, data)
	print(data.equipment)
end)
--]]
EVENT.SPEC_EQUIPMENT_SWAP_SLOT = "SPEC_EQUIPMENT_SWAP_SLOT"

---指定物品被取消选中
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_UNSELECT, }, function(event_name, actor, data)
	print(data.equipment)
end)
--]]
EVENT.SPEC_EQUIPMENT_UNSELECT = "SPEC_EQUIPMENT_UNSELECT"

---指定物品被使用
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_USE, }, function(event_name, actor, data)
	print(data.equipment)
end)
--]]
EVENT.SPEC_EQUIPMENT_USE = "SPEC_EQUIPMENT_USE"

---指定物品被使用前
---事件主体 Equipment 物品
---事件回调参数 equipment Equipment 当前物品
---事件回调参数 equipment_user LifeEntity 使用物品的角色/生物
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_EQUIPMENT_USE_BEFORE, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.equipment_user)
end)
--]]
EVENT.SPEC_EQUIPMENT_USE_BEFORE = "SPEC_EQUIPMENT_USE_BEFORE"

---指定生命体技能降级
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 技能拥有者
---事件回调参数 ability Ability 触发技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ABILITY_DOWNGRADE, }, function(event_name, actor, data)
	print(data.unit)
	print(data.ability)
end)
--]]
EVENT.SPEC_LIFEENTITY_ABILITY_DOWNGRADE = "SPEC_LIFEENTITY_ABILITY_DOWNGRADE"

---指定生命体获得技能
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 技能拥有者
---事件回调参数 ability Ability 触发技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ABILITY_OBTAIN, }, function(event_name, actor, data)
	print(data.unit)
	print(data.ability)
end)
--]]
EVENT.SPEC_LIFEENTITY_ABILITY_OBTAIN = "SPEC_LIFEENTITY_ABILITY_OBTAIN"

---指定生命体失去技能
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 技能拥有者
---事件回调参数 ability Ability 触发技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ABILITY_REMOVE, }, function(event_name, actor, data)
	print(data.unit)
	print(data.ability)
end)
--]]
EVENT.SPEC_LIFEENTITY_ABILITY_REMOVE = "SPEC_LIFEENTITY_ABILITY_REMOVE"

---指定生命体技能升级
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 技能拥有者
---事件回调参数 ability Ability 触发技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ABILITY_UPGRADE, }, function(event_name, actor, data)
	print(data.unit)
	print(data.ability)
end)
--]]
EVENT.SPEC_LIFEENTITY_ABILITY_UPGRADE = "SPEC_LIFEENTITY_ABILITY_UPGRADE"

---指定生命体发生碰撞开始
---事件主体 LifeEntity 生命体
---事件回调参数 unit1 LifeEntity 碰撞者
---事件回调参数 unit2 Unit 被碰撞者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_CONTACT_BEGIN, }, function(event_name, actor, data)
	print(data.unit1)
	print(data.unit2)
end)
--]]
EVENT.SPEC_LIFEENTITY_CONTACT_BEGIN = "SPEC_LIFEENTITY_CONTACT_BEGIN"

---指定生命体发生碰撞结束
---事件主体 LifeEntity 生命体
---事件回调参数 unit1 LifeEntity 碰撞者
---事件回调参数 unit2 Unit 被碰撞者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_CONTACT_END, }, function(event_name, actor, data)
	print(data.unit1)
	print(data.unit2)
end)
--]]
EVENT.SPEC_LIFEENTITY_CONTACT_END = "SPEC_LIFEENTITY_CONTACT_END"

---指定生命体击败其他生命体
---事件主体 LifeEntity 生命体
---事件回调参数 dmg_unit LifeEntity 伤害来源
---事件回调参数 die_unit LifeEntity 被击败者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DEFEAT, }, function(event_name, actor, data)
	print(data.dmg_unit)
	print(data.die_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_DEFEAT = "SPEC_LIFEENTITY_DEFEAT"

---指定生命体被销毁
---事件主体 LifeEntity 生命体
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DESTROY, }, function(event_name, actor, data)
end)
--]]
EVENT.SPEC_LIFEENTITY_DESTROY = "SPEC_LIFEENTITY_DESTROY"

---指定生命体被击败
---事件主体 LifeEntity 生命体
---事件回调参数 die_unit LifeEntity 被击败者
---事件回调参数 dmg_unit LifeEntity 伤害来源
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DIE, }, function(event_name, actor, data)
	print(data.die_unit)
	print(data.dmg_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_DIE = "SPEC_LIFEENTITY_DIE"

---指定生命体被击败前
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 被击败者
---事件回调参数 dmg_unit Unit 伤害来源
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DIE_BEFORE, }, function(event_name, actor, data)
	print(data.unit)
	print(data.dmg_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_DIE_BEFORE = "SPEC_LIFEENTITY_DIE_BEFORE"

---指定生命体受到伤害后
---事件主体 LifeEntity 生命体
---事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE
---事件回调参数 _src Unit 伤害来源
---事件回调参数 _dst LifeEntity 伤害目标
---事件回调参数 _dmg Damage DAMAGE_OBJ
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DMGED_AFTER, }, function(event_name, actor, data)
	print(data._dmg_schema)
	print(data._src)
	print(data._dst)
	print(data._dmg)
end)
--]]
EVENT.SPEC_LIFEENTITY_DMGED_AFTER = "SPEC_LIFEENTITY_DMGED_AFTER"

---指定生命体受到伤害前
---事件主体 LifeEntity 生命体
---事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE
---事件回调参数 _src Unit 伤害来源
---事件回调参数 _dst LifeEntity 伤害目标
---事件回调参数 _dmg Damage DAMAGE_OBJ
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DMGED_BEFORE, }, function(event_name, actor, data)
	print(data._dmg_schema)
	print(data._src)
	print(data._dst)
	print(data._dmg)
end)
--]]
EVENT.SPEC_LIFEENTITY_DMGED_BEFORE = "SPEC_LIFEENTITY_DMGED_BEFORE"

---指定生命体造成伤害后
---事件主体 LifeEntity 生命体
---事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE
---事件回调参数 _src LifeEntity 伤害来源
---事件回调参数 _dst LifeEntity 伤害目标
---事件回调参数 _dmg Damage DAMAGE_OBJ
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DMG_AFTER, }, function(event_name, actor, data)
	print(data._dmg_schema)
	print(data._src)
	print(data._dst)
	print(data._dmg)
end)
--]]
EVENT.SPEC_LIFEENTITY_DMG_AFTER = "SPEC_LIFEENTITY_DMG_AFTER"

---指定生命体造成伤害前
---事件主体 LifeEntity 生命体
---事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE
---事件回调参数 _src LifeEntity 伤害来源
---事件回调参数 _dst LifeEntity 伤害目标
---事件回调参数 _dmg Damage DAMAGE_OBJ
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_DMG_BEFORE, }, function(event_name, actor, data)
	print(data._dmg_schema)
	print(data._src)
	print(data._dst)
	print(data._dmg)
end)
--]]
EVENT.SPEC_LIFEENTITY_DMG_BEFORE = "SPEC_LIFEENTITY_DMG_BEFORE"

---指定生命体上载具
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 触发角色/生物
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ENTER_VEHICLE, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_ENTER_VEHICLE = "SPEC_LIFEENTITY_ENTER_VEHICLE"

---指定生命体持有物品槽位发生变化
---事件主体 LifeEntity 生命体
---事件回调参数 equipment Equipment 触发物品
---事件回调参数 old_slot_type Enums.EquipmentSlotType 旧槽位类型
---事件回调参数 old_index integer 旧槽位索引
---事件回调参数 new_slot_type Enums.EquipmentSlotType 新槽位类型
---事件回调参数 new_index integer 新槽位索引
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_EQUIPMENT_SLOT_CHANGE, }, function(event_name, actor, data)
	print(data.equipment)
	print(data.old_slot_type)
	print(data.old_index)
	print(data.new_slot_type)
	print(data.new_index)
end)
--]]
EVENT.SPEC_LIFEENTITY_EQUIPMENT_SLOT_CHANGE = "SPEC_LIFEENTITY_EQUIPMENT_SLOT_CHANGE"

---指定生命体下载具
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 触发角色/生物
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_EXIT_VEHICLE, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_EXIT_VEHICLE = "SPEC_LIFEENTITY_EXIT_VEHICLE"

---生命体获得经验
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 获得者
---事件回调参数 exp Fixed 经验值
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_GAIN_EXP, }, function(event_name, actor, data)
	print(data.unit)
	print(data.exp)
end)
--]]
EVENT.SPEC_LIFEENTITY_GAIN_EXP = "SPEC_LIFEENTITY_GAIN_EXP"

---指定生命体获得道具箱
---事件主体 LifeEntity 生命体
---事件回调参数 life_entity LifeEntity 获得道具的角色/生物
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_GET_ITEMBOX, }, function(event_name, actor, data)
	print(data.life_entity)
end)
--]]
EVENT.SPEC_LIFEENTITY_GET_ITEMBOX = "SPEC_LIFEENTITY_GET_ITEMBOX"

---指定生命体跳跃
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 跳跃者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_JUMP, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_JUMP = "SPEC_LIFEENTITY_JUMP"

---生命体升级
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 获得者
---事件回调参数 level integer 当前等级
---事件回调参数 ori_level integer 升级前等级
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_LEVEL_UP, }, function(event_name, actor, data)
	print(data.unit)
	print(data.level)
	print(data.ori_level)
end)
--]]
EVENT.SPEC_LIFEENTITY_LEVEL_UP = "SPEC_LIFEENTITY_LEVEL_UP"

---指定生命体被其他单位举起
---事件主体 LifeEntity 生命体
---事件回调参数 lift_unit Unit 抓举者
---事件回调参数 lifted_unit LifeEntity 被抓举者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_LIFTED_BEGIN, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_LIFTED_BEGIN = "SPEC_LIFEENTITY_LIFTED_BEGIN"

---指定生命体被其他单位放下
---事件主体 LifeEntity 生命体
---事件回调参数 lift_unit Unit 抓举者
---事件回调参数 lifted_unit LifeEntity 被抓举者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_LIFTED_END, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_LIFTED_END = "SPEC_LIFEENTITY_LIFTED_END"

---指定生命体举起其他单位
---事件主体 LifeEntity 生命体
---事件回调参数 lift_unit LifeEntity 抓举者
---事件回调参数 lifted_unit Unit 被抓举者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_LIFT_BEGIN, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_LIFT_BEGIN = "SPEC_LIFEENTITY_LIFT_BEGIN"

---指定生命体放下其他单位
---事件主体 LifeEntity 生命体
---事件回调参数 lift_unit LifeEntity 抓举者
---事件回调参数 lifted_unit Unit 被抓举者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_LIFT_END, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_LIFT_END = "SPEC_LIFEENTITY_LIFT_END"

---指定生命体移动开始
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 获得者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_MOVE_BEGIN, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_MOVE_BEGIN = "SPEC_LIFEENTITY_MOVE_BEGIN"

---指定生命体移动结束
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 获得者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_MOVE_END, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_MOVE_END = "SPEC_LIFEENTITY_MOVE_END"

---指定生命体复活
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 复活者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_REBORN, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_REBORN = "SPEC_LIFEENTITY_REBORN"

---指定生命体释放技能
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 触发角色/生物
---事件回调参数 ability Ability 触发技能
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_RELEASE_ABILITY, }, function(event_name, actor, data)
	print(data.unit)
	print(data.ability)
end)
--]]
EVENT.SPEC_LIFEENTITY_RELEASE_ABILITY = "SPEC_LIFEENTITY_RELEASE_ABILITY"

---指定生命体滚动开始
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 滚动者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ROLL_BEGIN, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_ROLL_BEGIN = "SPEC_LIFEENTITY_ROLL_BEGIN"

---指定生命体滚动结束
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 滚动者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_ROLL_END, }, function(event_name, actor, data)
	print(data.unit)
end)
--]]
EVENT.SPEC_LIFEENTITY_ROLL_END = "SPEC_LIFEENTITY_ROLL_END"

---指定生命体前扑
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 前扑者
---事件回调参数 dir Vector3 前扑方向
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_RUSH, }, function(event_name, actor, data)
	print(data.unit)
	print(data.dir)
end)
--]]
EVENT.SPEC_LIFEENTITY_RUSH = "SPEC_LIFEENTITY_RUSH"

---指定生命体抓举
---事件主体 LifeEntity 生命体
---事件回调参数 unit LifeEntity 抓举者
---事件回调参数 dir Vector3 抓举方向
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_LIFEENTITY_START_LIFT, }, function(event_name, actor, data)
	print(data.unit)
	print(data.dir)
end)
--]]
EVENT.SPEC_LIFEENTITY_START_LIFT = "SPEC_LIFEENTITY_START_LIFT"

---失去效果
---事件主体 Modifier 效果
---事件回调参数 modifier Modifier 触发效果
---事件回调参数 unit Unit 效果拥有者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.MODIFIER_LOSS, }, function(event_name, actor, data)
	print(data.modifier)
	print(data.unit)
end)
--]]
EVENT.MODIFIER_LOSS = "MODIFIER_LOSS"

---指定组件发生碰撞开始
---事件主体 Obstacle 组件
---事件回调参数 unit1 Obstacle 碰撞者
---事件回调参数 unit2 Unit 被碰撞者
---事件回调参数 contact_pos Vector3 碰撞位置
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_CONTACT_BEGIN, }, function(event_name, actor, data)
	print(data.unit1)
	print(data.unit2)
	print(data.contact_pos)
end)
--]]
EVENT.SPEC_OBSTACLE_CONTACT_BEGIN = "SPEC_OBSTACLE_CONTACT_BEGIN"

---指定组件发生碰撞结束
---事件主体 Obstacle 组件
---事件回调参数 unit1 Obstacle 碰撞者
---事件回调参数 unit2 Unit 被碰撞者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_CONTACT_END, }, function(event_name, actor, data)
	print(data.unit1)
	print(data.unit2)
end)
--]]
EVENT.SPEC_OBSTACLE_CONTACT_END = "SPEC_OBSTACLE_CONTACT_END"

---指定组件销毁
---事件主体 Obstacle 组件
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_DESTROY, }, function(event_name, actor, data)
end)
--]]
EVENT.SPEC_OBSTACLE_DESTROY = "SPEC_OBSTACLE_DESTROY"

---指定组件互动按钮被按下
---事件主体 Obstacle 组件
---事件回调参数 interact_lifeentity LifeEntity 互动触发者
---事件回调参数 interact_unit Obstacle 互动目标
---事件回调参数 interact_id InteractBtnID 互动按钮
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_INTERACTED, }, function(event_name, actor, data)
	print(data.interact_lifeentity)
	print(data.interact_unit)
	print(data.interact_id)
end)
--]]
EVENT.SPEC_OBSTACLE_INTERACTED = "SPEC_OBSTACLE_INTERACTED"

---指定组件被举起
---事件主体 Obstacle 组件
---事件回调参数 lift_unit Unit 抓举者
---事件回调参数 lifted_unit Obstacle 被抓举者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_LIFTED_BEGIN, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.SPEC_OBSTACLE_LIFTED_BEGIN = "SPEC_OBSTACLE_LIFTED_BEGIN"

---指定组件被放下
---事件主体 Obstacle 组件
---事件回调参数 lift_unit Unit 抓举者
---事件回调参数 lifted_unit Obstacle 被抓举者
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_LIFTED_END, }, function(event_name, actor, data)
	print(data.lift_unit)
	print(data.lifted_unit)
end)
--]]
EVENT.SPEC_OBSTACLE_LIFTED_END = "SPEC_OBSTACLE_LIFTED_END"

---指定组件受到伤害
---事件主体 Obstacle 组件
---事件回调参数 src Unit 伤害来源
---事件回调参数 src_ability Ability 来源技能
---事件回调参数 damage Fixed 伤害值
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_ON_DAMAGED, }, function(event_name, actor, data)
	print(data.src)
	print(data.src_ability)
	print(data.damage)
end)
--]]
EVENT.SPEC_OBSTACLE_ON_DAMAGED = "SPEC_OBSTACLE_ON_DAMAGED"

---指定组件被点击开始
---事件主体 Obstacle 组件
---事件回调参数 touch_unit Role 点击玩家
---事件回调参数 touched_unit Obstacle 被点击的物体
---事件回调参数 touch_pos Vector3 点击位置
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_TOUCH_BEGIN, }, function(event_name, actor, data)
	print(data.touch_unit)
	print(data.touched_unit)
	print(data.touch_pos)
end)
--]]
EVENT.SPEC_OBSTACLE_TOUCH_BEGIN = "SPEC_OBSTACLE_TOUCH_BEGIN"

---指定组件被点击结束
---事件主体 Obstacle 组件
---事件回调参数 touch_unit Role 点击玩家
---事件回调参数 touched_unit Obstacle 被点击的物体
---事件回调参数 touch_pos Vector3 松开位置
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_OBSTACLE_TOUCH_END, }, function(event_name, actor, data)
	print(data.touch_unit)
	print(data.touched_unit)
	print(data.touch_pos)
end)
--]]
EVENT.SPEC_OBSTACLE_TOUCH_END = "SPEC_OBSTACLE_TOUCH_END"

---指定玩家完成自定义成就
---事件主体 Global 全局触发器
---注册参数 _role RoleID 目标玩家
---事件回调参数 role Role 目标玩家
---事件回调参数 achieve_id Achievement TARGET_ACHIEVE
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_ACHIEVEMENT_COMPLETE, _role}, function(event_name, actor, data)
	print(data.role)
	print(data.achieve_id)
end)
--]]
EVENT.SPEC_ROLE_ACHIEVEMENT_COMPLETE = "SPEC_ROLE_ACHIEVEMENT_COMPLETE"

---指定玩家领取成就奖励
---事件主体 Global 全局触发器
---注册参数 _role RoleID 目标玩家
---注册参数 _achievement Achievement TARGET_ACHIEVE
---事件回调参数 role Role 目标玩家
---事件回调参数 achieve_id Achievement TARGET_ACHIEVE
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_ACHIEVEMENT_REWARD_GAIN, _role, _achievement}, function(event_name, actor, data)
	print(data.role)
	print(data.achieve_id)
end)
--]]
EVENT.SPEC_ROLE_ACHIEVEMENT_REWARD_GAIN = "SPEC_ROLE_ACHIEVEMENT_REWARD_GAIN"

---指定玩家阵营发生变化
---事件主体 Global 全局触发器
---注册参数 _role RoleID 目标玩家
---事件回调参数 role Role 目标玩家
---事件回调参数 camp_before_change Camp 变化前的阵营
---事件回调参数 camp_after_change Camp 变化后的阵营
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_CAMP_CHANGE, _role}, function(event_name, actor, data)
	print(data.role)
	print(data.camp_before_change)
	print(data.camp_after_change)
end)
--]]
EVENT.SPEC_ROLE_CAMP_CHANGE = "SPEC_ROLE_CAMP_CHANGE"

---指定玩家离开游戏
---事件主体 Global 全局触发器
---注册参数 _role Role 目标玩家
---事件回调参数 role Role 目标玩家
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_EXIT_GAME, _role}, function(event_name, actor, data)
	print(data.role)
end)
--]]
EVENT.SPEC_ROLE_EXIT_GAME = "SPEC_ROLE_EXIT_GAME"

---指定玩家游戏失败
---事件主体 Global 全局触发器
---注册参数 _role RoleID 目标玩家
---事件回调参数 role Role 目标玩家
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_GAME_LOSE, _role}, function(event_name, actor, data)
	print(data.role)
end)
--]]
EVENT.SPEC_ROLE_GAME_LOSE = "SPEC_ROLE_GAME_LOSE"

---指定玩家游戏胜利
---事件主体 Global 全局触发器
---注册参数 _role RoleID 目标玩家
---事件回调参数 role Role 目标玩家
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_GAME_WIN, _role}, function(event_name, actor, data)
	print(data.role)
end)
--]]
EVENT.SPEC_ROLE_GAME_WIN = "SPEC_ROLE_GAME_WIN"

---指定玩家播放广告失败
---事件主体 Global 全局触发器
---注册参数 _role Role 目标玩家
---注册参数 _ad_tag string ADVERTISEMENT_TAG
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_PLAY_ADVERTISEMENT_FAILURE, _role, _ad_tag}, function(event_name, actor, data)
end)
--]]
EVENT.SPEC_ROLE_PLAY_ADVERTISEMENT_FAILURE = "SPEC_ROLE_PLAY_ADVERTISEMENT_FAILURE"

---指定玩家播放广告成功
---事件主体 Global 全局触发器
---注册参数 _role Role 目标玩家
---注册参数 _ad_tag string ADVERTISEMENT_TAG
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_PLAY_ADVERTISEMENT_SUCCESS, _role, _ad_tag}, function(event_name, actor, data)
end)
--]]
EVENT.SPEC_ROLE_PLAY_ADVERTISEMENT_SUCCESS = "SPEC_ROLE_PLAY_ADVERTISEMENT_SUCCESS"

---指定玩家成功购买商品
---事件主体 Global 全局触发器
---注册参数 _role Role 目标玩家
---事件回调参数 role Role 目标玩家
---事件回调参数 goods_id UgcGoods TARGET_GOODS
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_PURCHASE_GOODS, _role}, function(event_name, actor, data)
	print(data.role)
	print(data.goods_id)
end)
--]]
EVENT.SPEC_ROLE_PURCHASE_GOODS = "SPEC_ROLE_PURCHASE_GOODS"

---语音音量变化事件
---事件主体 Default 多类型
---注册参数 _role Role 目标玩家
---事件回调参数 voice_volume Fixed 当前的音量
--[[
LuaAPI.global_register_trigger_event({EVENT.SPEC_ROLE_VOICE_VOLUME_CHANGE, _role}, function(event_name, actor, data)
	print(data.voice_volume)
end)
--]]
EVENT.SPEC_ROLE_VOICE_VOLUME_CHANGE = "SPEC_ROLE_VOICE_VOLUME_CHANGE"

---指定逻辑体销毁
---事件主体 TriggerSpace 逻辑体
--[[
LuaAPI.unit_register_trigger_event(_unit, {EVENT.SPEC_TRIGGERSPACE_DESTROY, }, function(event_name, actor, data)
end)
--]]
EVENT.SPEC_TRIGGERSPACE_DESTROY = "SPEC_TRIGGERSPACE_DESTROY"

---计时器超时
---事件主体 Default 多类型
---注册参数 _delay Fixed DELAY_TIME
--[[
LuaAPI.global_register_trigger_event({EVENT.TIMEOUT, _delay}, function(event_name, actor, data)
end)
--]]
EVENT.TIMEOUT = "TIMEOUT"

---UI自定义事件(附带玩家)
---事件主体 Default 多类型
---注册参数 _name string 自定义事件
---事件回调参数 role_id RoleID 触发事件的玩家ID
---事件回调参数 role Role 触发事件的玩家
---事件回调参数 eui_node_id ENode 触发事件的界面控件
--[[
LuaAPI.global_register_trigger_event({EVENT.UI_CUSTOM_EVENT, _name}, function(event_name, actor, data)
	print(data.role_id)
	print(data.role)
	print(data.eui_node_id)
end)
--]]
EVENT.UI_CUSTOM_EVENT = "UI_CUSTOM_EVENT"

