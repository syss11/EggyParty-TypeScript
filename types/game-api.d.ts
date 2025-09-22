import * as Enums from './enums'


// 类型别名定义
type Fixed = number;

// Vector3类声明
declare class Vector3 {
    x: Fixed;
    y: Fixed;
    z: Fixed;
    pitch: Fixed;
    yaw: Fixed;

    // 操作符重载声明
    add(rhs: Vector3): Vector3;
    add(rhs: Fixed): Vector3;
    
    sub(rhs: Vector3): Vector3;
    sub(rhs: Fixed): Vector3;
    
    mul(rhs: Vector3): Vector3;
    mul(rhs: Fixed): Vector3;
    
    div(rhs: Vector3): Vector3;
    div(rhs: Fixed): Vector3;
    
    unm(): Vector3;

    // 向量设置pitch/yaw
    set_pitch_yaw(pitch: Fixed, yaw: Fixed): void;

    // 向量长度
    length(): Fixed;

    // 向量归一化，返回长度
    normalize(): Fixed;

    // 点积
    dot(rhs: Vector3): Fixed;

    // 叉积
    cross(rhs: Vector3): Vector3;
}

// Quaternion类声明
declare class Quaternion {
    x: Fixed;
    y: Fixed;
    z: Fixed;
    w: Fixed;
    yaw: Fixed;
    pitch: Fixed;
    roll: Fixed;
    euler: Vector3;

    // 操作符重载声明
    mul(rhs: Vector3): Vector3;
    mul(rhs: Quaternion): Quaternion;

    // 四元数求逆
    inverse(): Quaternion;

    // 旋转一个向量
    apply(v: Vector3): Vector3;
}

// 扩展Array接口以实现table方法
declare interface Array<T> {
    // 设置键值
    set(key: any, value: any): void;

    // 获取值
    get(key: any): any;

    // 获取键值列表
    keyvalues(): any[];

    // 获取键列表
    keys(): any[];

    // 获取值列表
    values(): any[];
}

// 数学库声明
declare namespace math {
    let pi: Fixed;
    let e: Fixed;
    let maxval: Fixed;
    let minval: Fixed;
    let zero: Fixed;
    let one: Fixed;
    let neg_one: Fixed;

    // 转换为整数
    function tointeger(x: Fixed): number;

    // 转换为实数（固定点数）
    function toreal(x: Fixed): Fixed;

    // 转换为固定点数
    function tofixed(x: Fixed): Fixed;

    // 检查是否为有限数
    function isfinite(x: Fixed): boolean;

    // 正弦函数
    function sin(x: Fixed): Fixed;

    // 余弦函数
    function cos(x: Fixed): Fixed;

    // 正切函数
    function tan(x: Fixed): Fixed;

    // 反正弦函数
    function asin(x: Fixed): Fixed;

    // 反余弦函数
    function acos(x: Fixed): Fixed;

    // 反正切函数
    function atan(x: Fixed): Fixed;

    // 两个参数的反正切函数
    function atan2(y: Fixed, x: Fixed): Fixed;

    // 平方根
    function sqrt(x: Fixed): Fixed;

    // 自然对数
    function log(x: Fixed): Fixed;

    // 以2为底的对数
    function log2(x: Fixed): Fixed;

    // 以10为底的对数
    function log10(x: Fixed): Fixed;

    // 计算ln(1+x)
    function log1p(x: Fixed): Fixed;

    // 指数函数
    function exp(x: Fixed): Fixed;

    // 2的幂
    function exp2(x: Fixed): Fixed;

    // 取模
    function fmod(x: Fixed, y: Fixed): Fixed;

    // 幂函数
    function pow(x: Fixed, y: Fixed): Fixed;

    // 四舍五入
    function round(x: Fixed): Fixed;

    // 向上取整
    function ceil(x: Fixed): Fixed;

    // 向下取整
    function floor(x: Fixed): Fixed;

    // 截断
    function trunc(x: Fixed): Fixed;

    // 最小值
    function min(a: Fixed, b: Fixed): Fixed;

    // 最大值
    function max(a: Fixed, b: Fixed): Fixed;

    // 绝对值
    function abs(a: Fixed): Fixed;

    // 浮点数绝对值
    function fabs(x: Fixed): Fixed;

    // 限制值在指定范围内
    function clamp(x: Fixed, min: Fixed, max: Fixed): Fixed;

    // 比较两个数是否相等
    function equal(a: Fixed, b: Fixed): boolean;

    // 比较两个数是否近似相等（误差在0.001内）
    function equal001(a: Fixed, b: Fixed): boolean;

    // 弧度转角度
    function rad_to_deg(rad: Fixed): Fixed;

    // 角度转弧度
    function deg_to_rad(deg: Fixed): Fixed;

    // 创建Vector3对象
    function Vector3(x?: Fixed, y?: Fixed, z?: Fixed): Vector3;

    // 创建Quaternion对象，弧度制
    function Quaternion(pitch: Fixed, yaw: Fixed, roll: Fixed): Quaternion;
}


// 类型别名定义
type AbilityKey = number; // 技能编号
type AbilitySlot = number; // 技能槽位
type Achievement = number; // 自定义成就
type AnimKey = number; // 动画编号
type Archive = number; // 自定义存档
type CampID = number; // 阵营ID
type Color = number; // 颜色
type CreatureKey = LifeEntityKey; // 生物编号
type CustomTriggerSpaceID = UnitID; // 触发区域ID
type CustomTriggerSpaceKey = UnitKey; // 触发区域编号
type EButton = ENode; // UI按钮节点
type EImage = ENode; // UI图片节点
type EInputField = ENode; // UI输入节点
type ELabel = ENode; // UI文本节点
type ENode = string; // UI节点
type EProgressbar = ENode; // UI进度条节点
type EmojiKey = number; // 气泡表情编号
type EquipmentID = UnitID; // 物品ID
type EquipmentKey = number; // 物品编号
type EquipmentSlot = number; // 物品槽位
type InteractBtnID = number; // 交互按钮编号
type LifeEntityKey = UnitKey; // 生命体编号
type ModifierKey = number; // 效果编号
type ObstacleID = UnitID; // 组件ID
type ObstacleKey = UnitKey; // 组件编号
type PathID = UnitID; // 路径ID
type PathPointID = UnitID; // 路点ID
type RoleID = number; // 玩家ID
type SfxID = number; // 特效ID
type SfxKey = number; // 特效编号
type SkyBoxBackground = number; // 天空盒背景
type SoundID = number; // 音效ID
type SoundKey = number; // 音效编号
type Timestamp = number; // 时间戳
type TriggerSpaceKey = UnitKey; // 逻辑体编号
type UgcCommodity = number; // 道具
type UgcGoods = string; // 商品
type UnitGroupKey = UnitKey; // 组件组编号
type UnitID = number; // 单位ID
type UnitKey = number; // 单位编号


// Ability 类声明
declare class Ability implements Actor, AttrComp, KVBase, TriggerSystem {
    /**
     * 技能给单位添加状态
     * @param _unit 目标对象
     * @param _state_id 状态ID
     */
    static add_state_to_target(_unit: Unit, _state_id: Enums.BuffState): void;

    /**
     * 技能开始释放
     * @param _dir_info? 方向信息
     * @param _target_point? 目标坐标点
     * @param _target_unit? 目标单位
     */
    static begin_cast(_dir_info?: Vector3, _target_point?: Vector3, _target_unit?: Unit): void;

    /** 打断蓄力 */
    static break_accumulate(): void;

    /** 打断技能施法 */
    static break_cast(): void;

    /**
     * 修改技能作用半径
     * @param _delta_affect_radius 半径修改量
     */
    static change_affect_radius(_delta_affect_radius: Fixed): void;

    /**
     * 修改技能作用宽度
     * @param _delta_affect_width 宽度修改量
     */
    static change_affect_width(_delta_affect_width: Fixed): void;

    /**
     * 修改技能施法距离
     * @param _delta_level 距离修改量
     */
    static change_max_release_distance(_delta_level: Fixed): void;

    /**
     * 降级技能等级
     * @param _delta_level 降低的等级数
     */
    static downgrade_ability_level(_delta_level: number): void;

    /** 技能激活冷却 */
    static enter_cd(): void;

    /** 获取技能的等级 */
    static get_ability_level(): number;

    /** 获取技能的最大等级 */
    static get_ability_max_level(): number;

    /** 获取技能所在槽位 */
    static get_ability_slot(): AbilitySlot;

    /** 获取技能蓄力百分比 */
    static get_accumulate_ratio(): Fixed;

    /**
     * 获取技能可以作用的角色列表
     * @param _height 高度差阈值
     * @param _use_fixed_release_point? 施法点是否固定
     * @returns 可影响的角色列表
     */
    static get_affect_character_list(_height: Fixed, _use_fixed_release_point?: boolean): Character[];

    /**
     * 获取技能可以作用的生物列表
     * @param _height 高度差阈值
     * @param _use_fixed_release_point? 施法点是否固定
     * @returns 可影响的生物列表
     */
    static get_affect_creature_list(_height: Fixed, _use_fixed_release_point?: boolean): Creature[];

    /**
     * 获取技能可以作用的生命体列表
     * @param _height 高度差阈值
     * @param _use_fixed_release_point? 施法点是否固定
     * @returns 可影响的生命体列表
     */
    static get_affect_lifeentity_list(_height: Fixed, _use_fixed_release_point?: boolean): LifeEntity[];

    /**
     * 获取技能可以作用的组件列表
     * @param _height 高度差阈值
     * @param _use_fixed_release_point? 施法点是否固定
     * @returns 可影响的组件列表
     */
    static get_affect_obstacle_list(_height: Fixed, _use_fixed_release_point?: boolean): Obstacle[];

    /** 获取技能的作用半径 */
    static get_affect_radius(): Fixed;

    /** 获取技能的作用宽度 */
    static get_affect_width(): Fixed;

    /** 获取技能冷却时间 */
    static get_cd_time(): Fixed;

    /** 获取技能充能时间 */
    static get_charge_time(): Fixed;

    /** 获取技能当前使用次数 */
    static get_cur_release_num(): number;

    /** 获取技能描述 */
    static get_desc(): string;

    /** 获取技能编号 */
    static get_key(): AbilityKey;

    /** 获取技能剩余冷却时间 */
    static get_left_cd_time(): Fixed;

    /** 获取技能剩余充能时间 */
    static get_left_charge_time(): Fixed;

    /** 获取技能锁定目标（生命体） */
    static get_lock_target(): LifeEntity;

    /** 获取技能锁定角色 */
    static get_lock_target_char(): Character;

    /** 获取技能锁定生物 */
    static get_lock_target_creature(): Creature;

    /** 获取技能的施法距离 */
    static get_max_release_distance(): Fixed;

    /** 获取技能最大使用次数 */
    static get_max_release_num(): number;

    /** 获取技能名称 */
    static get_name(): string;

    /** 获取技能拥有者（生命体） */
    static get_owner(): LifeEntity;

    /** 获取技能拥有角色 */
    static get_owner_character(): Unit;

    /** 获取技能拥有生物 */
    static get_owner_creature(): Unit;

    /** 获取拥有技能的物品 */
    static get_owner_equipment(): Equipment;

    /** 获取技能释放方向 */
    static get_release_direction(): Vector3;

    /** 获取技能复数释放方向 */
    static get_release_direction_list(): Vector3[];

    /** 获取技能释放坐标点 */
    static get_release_point(): Vector3;

    /** 获取技能复数释放坐标点 */
    static get_release_point_list(): Vector3[];

    /** 技能是否在冷却中 */
    static is_in_cd(): boolean;

    /** 技能是否在充能中 */
    static is_in_charge(): boolean;

    /**
     * 播放倒计时UI效果
     * @param _time 倒计时持续时间
     */
    static play_countdown_ui(_time: Fixed): void;

    /**
     * 技能给单位移除状态
     * @param _unit 目标对象
     * @param _state_id 状态ID
     */
    static remove_state_to_target(_unit: Unit, _state_id: Enums.BuffState): void;

    /**
     * 设置技能等级
     * @param _new_level 新等级
     */
    static set_ability_level(_new_level: number): void;

    /**
     * 设置技能最大等级
     * @param _new_max_level 新的最大等级
     */
    static set_ability_max_level(_new_max_level: number): void;

    /**
     * 设置技能的作用半径
     * @param _new_affect_radius 新作用半径
     */
    static set_affect_radius(_new_affect_radius: Fixed): void;

    /**
     * 设置技能的作用宽度
     * @param _new_affect_width 新作用宽度
     */
    static set_affect_width(_new_affect_width: Fixed): void;

    /**
     * 设置技能当前使用次数
     * @param _release_num 当前使用次数
     */
    static set_cur_release_num(_release_num: number): void;

    /**
     * 设置技能剩余冷却
     * @param _cd_time 剩余冷却时间
     */
    static set_left_cd_time(_cd_time: Fixed): void;

    /**
     * 设置技能剩余充能
     * @param _cd_time 剩余充能时间
     */
    static set_left_charge_time(_cd_time: Fixed): void;

    /**
     * 设置技能的施法距离
     * @param _new_max_release_distance 新施法距离
     */
    static set_max_release_distance(_new_max_release_distance: Fixed): void;

    /**
     * 设置技能最大使用次数
     * @param _release_num_max 最大使用次数
     */
    static set_max_release_num(_release_num_max: number): void;

    /**
     * 增加技能等级
     * @param _delta_level 增加的等级数
     */
    static upgrade_ability_level(_delta_level: number): void;
}


// GlobalAPI 类声明
declare class GlobalAPI {
    /**
     * 添加击杀播报
     * @param _kill_char 击杀角色
     * @param _dead_char 死亡角色
     * @param _duration 持续时间
     */
    static add_kill_broadcast(_kill_char: Character, _dead_char: Character, _duration: Fixed): void;

    /**
     * Debug窗口打印日志
     * @param _content 内容
     */
    static debug(_content: string): void;

    /**
     * 销毁特效
     * @param _sfx_id 特效ID
     * @param _fade_out? 是否淡出
     */
    static destroy_sfx(_sfx_id: SfxID, _fade_out?: boolean): void;

    /**
     * Debug窗口打印错误日志
     * @param _content 内容
     */
    static error(_content: string): void;

    /**
     * 获取向量投影
     * @param _vec 向量
     * @param _direction 投影方向
     * @returns 投影后向量
     */
    static get_vector_projection(_vec: Vector3, _direction: Vector3): Vector3;

    /**
     * 去除特效的音效
     * @param _sfx_id 特效ID
     */
    static mute_sfx_sound(_sfx_id: SfxID): void;

    /**
     * 设置玩家的镜头模式为固定
     * @param _role 玩家
     * @param _mode 模式
     */
    static set_camera_bind_mode(_role: Role, _mode: Enums.CameraBindMode): void;

    /**
     * 相机跟随单位
     * @param _role 玩家
     * @param _unit 单位
     * @param _follow_rotation 跟随旋转
     */
    static set_camera_follow_unit(_role: Role, _unit: Unit, _follow_rotation: boolean): void;

    /**
     * 设置镜头属性
     * @param _role 玩家
     * @param _property 属性
     * @param _value 值
     */
    static set_camera_property(_role: Role, _property: Enums.CameraPropertyType, _value: Fixed): void;

    /**
     * 修改直接光参数
     * @param _param_dict 切换参数
     * @param _duration 持续时间
     */
    static set_direct_light(_param_dict: Record<string, any>, _duration: Fixed): void;

    /**
     * 设置特效旋转
     * @param _sfx_id 特效ID
     * @param _orientation 旋转
     */
    static set_sfx_orientation(_sfx_id: SfxID, _orientation: Quaternion): void;

    /**
     * 设置特效坐标
     * @param _sfx_id 特效ID
     * @param _pos 位置
     */
    static set_sfx_position(_sfx_id: SfxID, _pos: Vector3): void;

    /**
     * 设置特效播放速率
     * @param _sfx_id 特效ID
     * @param _rate 播放速率
     */
    static set_sfx_rate(_sfx_id: SfxID, _rate: Fixed): void;

    /**
     * 设置特效缩放
     * @param _sfx_id 特效ID
     * @param _scale 缩放
     */
    static set_sfx_scale(_sfx_id: SfxID, _scale: Vector3): void;

    /**
     * 设置特效是否可见
     * @param _sfx_id 特效ID
     * @param _visible 是否可见
     */
    static set_sfx_visible(_sfx_id: SfxID, _visible: boolean): void;

    /**
     * 改变天空盒贴图
     * @param _texture_key 天空盒背景
     * @param _change_type 切换方式
     * @param _duration 持续时间
     */
    static set_skybox_texture(_texture_key: SkyBoxBackground, _change_type: Enums.SkyBoxGradualType, _duration: Fixed): void;

    /**
     * 跑马灯信息
     * @param _content? 字符串
     */
    static show_message_marquee(_content?: string): void;

    /**
     * 游戏内飘字信息
     * @param _content 字符串
     * @param _duration? 时长
     */
    static show_tips(_content: string, _duration?: Fixed): void;

    /**
     * 是否含有子字符串
     * @param _str1 父字符串
     * @param _str2 子字符串
     * @returns 布尔值
     */
    static str_contains(_str1: string, _str2: string): boolean;

    /**
     * 字符串转颜色
     * @param _color_str 字符串
     * @returns 颜色
     */
    static str_to_color(_color_str: string): Color;

    /**
     * Debug窗口打印警告日志
     * @param _content 内容
     */
    static warning(_content: string): void;
}

// AbilityComp 类声明
declare class AbilityComp {
    /**
     * 向技能槽位添加UGC技能
     * @param _ability_index 技能槽位
     * @param _ability_id 技能编号
     * @param _kv_args? 自定义参数值
     * @param _kv_types? 自定义参数类型
     * @returns 添加上的技能对象
     */
    static add_ability_to_slot(
        _ability_index: AbilitySlot, 
        _ability_id: AbilityKey, 
        _kv_args?: Record<string, any>, 
        _kv_types?: Record<string, any>
    ): Ability;

    /**
     * 添加道具技能
     * @param _ability_id 技能编号
     * @param _kv_args? 自定义参数值
     * @param _kv_types? 自定义参数类型
     * @returns 添加上的技能对象
     */
    static add_prop_ability(
        _ability_id: AbilityKey, 
        _kv_args?: Record<string, any>, 
        _kv_types?: Record<string, any>
    ): Ability;

    /**
     * 控制角色对目标方向释放指定槽位技能
     * @param _direction 释放方向
     * @param _ability_slot 技能槽位
     * @param _duration 操作持续时间
     */
    static cast_ability_by_ability_slot_and_direction(
        _direction: Vector3, 
        _ability_slot: AbilitySlot, 
        _duration: Fixed
    ): void;

    /**
     * 控制角色对目标坐标释放指定槽位技能
     * @param _position 目标坐标
     * @param _ability_slot 技能槽位
     * @param _duration 操作持续时间
     */
    static cast_ability_by_ability_slot_and_position(
        _position: Vector3, 
        _ability_slot: AbilitySlot, 
        _duration: Fixed
    ): void;

    /**
     * 控制角色对目标单位释放指定槽位技能
     * @param _target 目标单位(生命体)
     * @param _ability_slot 技能槽位
     * @param _duration 操作持续时间
     */
    static cast_ability_by_ability_slot_and_target(
        _target: LifeEntity, 
        _ability_slot: AbilitySlot, 
        _duration: Fixed
    ): void;

    /**
     * 控制角色对指定方向执行释放指定预设技能
     * @param _ability_key 技能编号
     * @param _duration 操作持续时间
     * @param _direction 释放方向
     * @param _ability_slot? 技能槽位
     */
    static cast_ability_by_direction(
        _ability_key: AbilityKey, 
        _duration: Fixed, 
        _direction: Vector3, 
        _ability_slot?: AbilitySlot
    ): void;

    /**
     * 控制角色对指定坐标执行释放预设技能
     * @param _ability_key 技能编号
     * @param _duration 操作持续时间
     * @param _position 目标坐标
     * @param _ability_slot? 技能槽位
     */
    static cast_ability_by_position(
        _ability_key: AbilityKey, 
        _duration: Fixed, 
        _position: Vector3, 
        _ability_slot?: AbilitySlot
    ): void;

    /**
     * 控制角色对指定目标执行释放指定预设技能
     * @param _ability_key 技能编号
     * @param _duration 操作持续时间
     * @param _target 目标单位(生命体)
     * @param _ability_slot? 技能槽位
     */
    static cast_ability_by_target(
        _ability_key: AbilityKey, 
        _duration: Fixed, 
        _target: LifeEntity, 
        _ability_slot?: AbilitySlot
    ): void;

    /**
     * 销毁技能
     * @param _ability 技能对象
     * @returns 是否成功移除
     */
    static destroy_ability(_ability: Ability): boolean;

    /** 获取单位所有技能 */
    static get_abilities(): Ability[];

    /**
     * 获取对应槽位技能
     * @param _ability_slot 技能槽位
     * @returns 技能对象
     */
    static get_ability_by_slot(_ability_slot: AbilitySlot): Ability;

    /** 获取道具技能 */
    static get_prop_ability(): Ability;

    /** 打断技能施法 */
    static interrupt_ability(): void;

    /**
     * 移除槽位上的技能
     * @param _ability_slot 技能槽位
     * @returns 是否成功移除
     */
    static remove_ability(_ability_slot: AbilitySlot): boolean;

    /**
     * 根据技能编号移除技能
     * @param _ability_key 技能编号
     * @returns 是否成功移除
     */
    static remove_ability_by_key(_ability_key: AbilityKey): boolean;

    /** 移除道具技能 */
    static remove_prop_ability(): boolean;

    /**
     * 重置指定槽位技能CD
     * @param _ability_index 技能槽位
     */
    static reset_ability_cd(_ability_index: AbilitySlot): void;

    /**
     * 设置是否能在载具上使用技能
     * @param _enable 是否允许使用
     */
    static set_ability_enabled_on_vehicle(_enable: boolean): void;
}

// Actor 类声明
declare class Actor implements KVBase, TriggerSystem {
    /** 获取单位ID */
    static get_id(): UnitID;
}

// AttrComp 类声明
declare class AttrComp {
    /**
     * 改变属性的额外固定值(复杂模式)
     * @param _key 属性名
     * @param _value 额外固定值
     */
    static change_attr_bonus_fixed(_key: string, _value: Fixed): void;

    /**
     * 改变属性的倍率值(复杂模式)
     * @param _key 属性名
     * @param _value 倍率值
     */
    static change_attr_ratio_fixed(_key: string, _value: Fixed): void;

    /**
     * 改变属性的基础值(复杂模式)
     * @param _key 属性名
     * @param _value 基础值
     */
    static change_attr_raw_fixed(_key: string, _value: Fixed): void;

    /**
     * 获取属性的基础加成值(复杂模式)
     * @param _key 属性名
     * @returns 基础加成值
     */
    static get_attr_base_extra_fixed(_key: string): Fixed;

    /**
     * 获取属性的额外固定值(复杂模式)
     * @param _key 属性名
     * @returns 额外固定值
     */
    static get_attr_bonus_fixed(_key: string): Fixed;

    /**
     * 获取属性
     * @param _value_type 值类型
     * @param _key 属性名
     * @returns 属性值
     */
    static get_attr_by_type(_value_type: Enums.ValueType, _key: string): any;

    /**
     * 获取属性的倍率值(复杂模式)
     * @param _key 属性名
     * @returns 倍率值
     */
    static get_attr_ratio_fixed(_key: string): Fixed;

    /**
     * 获取属性的基础值(复杂模式)
     * @param _key 属性名
     * @returns 基础值
     */
    static get_attr_raw_fixed(_key: string): Fixed;

    /**
     * 设置属性的额外固定值(复杂模式)
     * @param _key 属性名
     * @param _value 额外固定值
     */
    static set_attr_bonus_fixed(_key: string, _value: Fixed): void;

    /**
     * 设置属性
     * @param _value_type 值类型
     * @param _key 属性名
     * @param _val 属性值
     */
    static set_attr_by_type(_value_type: Enums.ValueType, _key: string, _val: any): void;

    /**
     * 设置属性的倍率值(复杂模式)
     * @param _key 属性名
     * @param _value 倍率值
     */
    static set_attr_ratio_fixed(_key: string, _value: Fixed): void;

    /**
     * 设置属性的基础值(复杂模式)
     * @param _key 属性名
     * @param _value 基础值
     */
    static set_attr_raw_fixed(_key: string, _value: Fixed): void;
}

// BuffStateComp 类声明
declare class BuffStateComp {
    /**
     * 添加状态
     * @param _state_id 状态ID
     */
    static add_state(_state_id: Enums.BuffState): void;

    /**
     * 清除状态
     * @param _state_id 状态ID
     */
    static clear_state(_state_id: Enums.BuffState): void;

    /**
     * 获取限制状态计数
     * @param _state_id 状态ID
     * @returns 状态计数
     */
    static get_state_count(_state_id: Enums.BuffState): number;

    /** 获取所有限制状态 */
    static get_state_list(): Enums.BuffState[];

    /**
     * 移除状态
     * @param _state_id 状态ID
     */
    static remove_state(_state_id: Enums.BuffState): void;
}


// Equipment 类声明
declare class Equipment implements KVBase, TriggerSystem {
    /** 获取物品能否丢弃 */
    static can_drop(): boolean;

    /**
     * 增加/减少物品当前堆叠数
     * @param _num 堆叠数变化量（正数增加，负数减少）
     */
    static change_current_stack_size(_num: number): void;

    /**
     * 增加/减少物品最大堆叠数
     * @param _num 堆叠数变化量（正数增加，负数减少）
     */
    static change_max_stack_size(_num: number): void;

    /** 删除物品 */
    static destroy_equipment(): void;

    /** 获取物品当前堆叠层数 */
    static get_current_stack_num(): number;

    /** 获取物品描述 */
    static get_desc(): string;

    /** 获取物品所在槽位 */
    static get_equipment_slot(): EquipmentSlot;

    /** 获取物品的物品类型 */
    static get_equipment_type(): Enums.EquipmentType;

    /** 获取物品的物品编号 */
    static get_key(): EquipmentKey;

    /** 获取物品最大堆叠层数 */
    static get_max_stack_num(): number;

    /** 获取物品名称 */
    static get_name(): string;

    /** 获取持有物品的角色 */
    static get_owner_character(): Character;

    /** 获取持有物品的生物 */
    static get_owner_creature(): Creature;

    /** 获取物品位置 */
    static get_position(): Vector3;

    /** 获取物品所在槽位类型 */
    static get_slot_type(): Enums.EquipmentSlotType;

    /** 获取物品单位 */
    static get_unit(): Obstacle;

    /** 物品是否被持有 */
    static has_owner(): boolean;

    /** 获取物品是否自动拾取 */
    static is_auto_picking(): boolean;

    /** 获取物品是否自动使用 */
    static is_auto_using(): boolean;

    /**
     * 移动物品到指定槽位
     * @param _slot_type 目标槽位类型
     * @param _slot 目标槽位索引
     */
    static move_to_slot(_slot_type: Enums.EquipmentSlotType, _slot: number): void;

    /**
     * 设置枪械自动瞄准
     * @param _is_auto_aim 是否启用自动瞄准
     */
    static set_auto_aim_enabled(_is_auto_aim: boolean): void;

    /**
     * 设置枪械自动开火
     * @param _is_auto_fire 是否启用自动开火
     */
    static set_auto_fire_enabled(_is_auto_fire: boolean): void;

    /**
     * 设置物品充能无消耗
     * @param _is_free 是否启用无消耗充能
     */
    static set_charge_cost_free(_is_free: boolean): void;

    /**
     * 设置物品当前堆叠数
     * @param _num 目标堆叠数
     */
    static set_current_stack_num(_num: number): void;

    /**
     * 设置物品的描述
     * @param _desc 目标描述文本
     */
    static set_desc(_desc: string): void;

    /**
     * 设置物品能否丢弃
     * @param _droppable 是否允许丢弃
     */
    static set_droppable(_droppable: boolean): void;

    /**
     * 设置物品最大堆叠数
     * @param _num 目标最大堆叠数
     */
    static set_max_stack_num(_num: number): void;

    /**
     * 设置物品的名称
     * @param _name 目标名称文本
     */
    static set_name(_name: string): void;

    /**
     * 设置物品能否使用
     * @param _usable 是否允许使用
     */
    static set_usable(_usable: boolean): void;

    /** 使物品开始充能 */
    static start_charge(): void;
}

// EquipmentComp 类声明
declare class EquipmentComp {
    /** 清除单位物品格选中状态 */
    static clear_selected_equipment_slot(): void;

    /**
     * 创建物品到指定类型槽位
     * @param _key 物品编号
     * @param _slot_type 目标槽位类型
     * @returns 创建的物品对象
     */
    static create_equipment_to_slot(
        _key: EquipmentKey, 
        _slot_type: Enums.EquipmentSlotType
    ): Equipment;

    /**
     * 获取身上的物品
     * @param _slot_type 槽位类型
     * @param _slot_index 槽位索引
     * @returns 对应槽位的物品对象
     */
    static get_equipment_by_slot(
        _slot_type: Enums.EquipmentSlotType, 
        _slot_index: number
    ): Equipment;

    /**
     * 获取角色/生物持有的物品预设列表
     * @param _equipment_key 目标物品类型编号
     * @param _exclude_equipped? 是否排除已装备的物品
     * @param _exclude_bag? 是否排除背包中的物品
     * @returns 符合条件的物品列表
     */
    static get_equipment_list(
        _equipment_key: EquipmentKey, 
        _exclude_equipped?: boolean, 
        _exclude_bag?: boolean
    ): Equipment[];

    /**
     * 获取持有的物品列表（按槽位类型）
     * @param _slot_type 目标槽位类型
     * @returns 对应槽位类型的物品列表
     */
    static get_equipment_list_by_slot_type(_slot_type: Enums.EquipmentSlotType): Equipment[];

    /**
     * 获取最大可持有的物品数量
     * @param _slot_type 目标槽位类型
     * @returns 该类型槽位的最大物品持有量
     */
    static get_equipment_max_count(_slot_type: Enums.EquipmentSlotType): number;

    /** 获取当前选中的物品 */
    static get_selected_equipment(): Equipment;

    /**
     * 设置单位选中物品格
     * @param _slot_type 目标槽位类型
     * @param _slot_index 目标槽位索引
     */
    static select_equipment_slot(_slot_type: Enums.EquipmentSlotType, _slot_index: number): void;

    /**
     * 修改最大可持有的物品数量
     * @param _slot_type 目标槽位类型
     * @param _slot_num 新的最大物品持有量
     */
    static set_equipment_max_count(_slot_type: Enums.EquipmentSlotType, _slot_num: number): void;
}

// ExprDeviceComp 类声明
declare class ExprDeviceComp {
    /**
     * 通过名称禁用表现器
     * @param _name 表现器名称
     */
    static disable_expr_device_by_name(_name: string): void;

    /**
     * 通过名称激活表现器
     * @param _name 表现器名称
     */
    static enable_expr_device_by_name(_name: string): void;
}
// Camp 类声明
declare class Camp implements AttrComp, KVBase {
    /**
     * 改变阵营积分
     * @param _add_score 积分变化量（可正可负）
     */
    static change_camp_score(_add_score: number): void;

    /** 获取阵营积分 */
    static get_camp_score(): number;

    /** 获取阵营名称 */
    static get_name(): string;

    /** 获取阵营内玩家列表 */
    static get_roles(): Role[];

    /**
     * 设置阵营积分
     * @param _score 目标积分值
     */
    static set_camp_score(_score: number): void;
}

// Character 类声明
declare class Character implements LifeEntity {
    /** 命令角色前扑 */
    static fling_rush(): void;

    /** 获取技能点 */
    static get_ability_point(): number;

    /** 获取控制角色的玩家 */
    static get_ctrl_role(): Role;

    /**
     * 增加技能点
     * @param _increase 增加的技能点数
     */
    static increase_ability_point(_increase: number): void;

    /** 命令角色抓举 */
    static lift(): void;

    /**
     * 开关角色靶向移动
     * @param _enable 是否启用靶向移动
     */
    static set_aim_move_enabled(_enable: boolean): void;

    /**
     * 命令角色移动到坐标点
     * @param _target_pos 目标坐标点
     * @param _duration 移动持续时间
     */
    static start_move_to_pos(_target_pos: Vector3, _duration: Fixed): void;
}

// CharacterComp 类声明
declare class CharacterComp {
    /** 获取缩放倍率 */
    static get_scale_ratio(): Fixed;
}

// Creature 类声明
declare class Creature implements LifeEntity, OwnerComp {
    /**
     * 命令生物移动
     * @param _direction 移动方向
     * @param _t 移动持续时间
     */
    static force_start_move(_direction: Vector3, _t: Fixed): void;

    /** 命令生物停止移动 */
    static force_stop_move(): void;

    /**
     * 设置生物是否可拖动
     * @param _enable 是否允许拖动
     */
    static set_draggable(_enable: boolean): void;

    /**
     * 设置生物的显示名称
     * @param _name 目标显示名称
     */
    static set_name(_name: string): void;

    /**
     * 设置生物是否显示名称
     * @param _visible 是否显示名称
     */
    static set_name_visible(_visible: boolean): void;

    /**
     * 设置生物是否可点击
     * @param _enable 是否允许点击
     */
    static set_touchable(_enable: boolean): void;
}

// CustomTriggerSpace 类声明
declare class CustomTriggerSpace implements ExprDeviceComp, OwnerComp, Unit, UnitInteractVolumeComp {
    /** 获取触发区域内的随机坐标 */
    static random_point(): Vector3;
}

// DisplayComp 类声明
declare class DisplayComp {
    /**
     * 添加绑定模型
     * @param _model_id 模型对应的单位编号
     * @param _socket 模型挂点
     * @param _offset? 挂点偏移量
     * @param _rot? 模型旋转角度
     * @param _scale? 模型缩放比例
     * @returns 模型绑定ID（用于后续解绑）
     */
    static bind_model(
        _model_id: UnitKey, 
        _socket: Enums.ModelSocket, 
        _offset?: Vector3, 
        _rot?: Quaternion, 
        _scale?: Vector3
    ): string;

    /**
     * 播放全身动画
     * @param _anim_id 动画编号
     * @param _start_time? 动画开始时间点
     * @param _play_time? 动画播放时长
     * @param _is_loop? 是否循环播放
     */
    static play_body_anim_by_id(
        _anim_id: AnimKey, 
        _start_time?: Fixed, 
        _play_time?: Fixed, 
        _is_loop?: boolean
    ): void;

    /**
     * 播放上半身动画
     * @param _anim_id 动画编号
     * @param _start_time? 动画开始时间点
     * @param _play_time? 动画播放时长
     * @param _is_loop? 是否循环播放
     */
    static play_upper_anim_by_id(
        _anim_id: AnimKey, 
        _start_time?: Fixed, 
        _play_time?: Fixed, 
        _is_loop?: boolean
    ): void;

    /**
     * 设置动画播放速率
     * @param _anim_rate 目标播放速率（1为正常速率）
     */
    static set_anim_rate(_anim_rate: Fixed): void;

    /** 停止播放所有全身动画 */
    static stop_play_body_anim(): void;

    /**
     * 停止播放指定ID的全身动画
     * @param _anim_id 目标动画编号
     */
    static stop_play_body_anim_by_id(_anim_id: AnimKey): void;

    /** 停止播放所有上半身动画 */
    static stop_play_upper_anim(): void;

    /**
     * 停止播放指定ID的上半身动画
     * @param _anim_id 目标动画编号
     */
    static stop_play_upper_anim_by_id(_anim_id: AnimKey): void;

    /**
     * 移除绑定的模型
     * @param _bind_id 模型绑定ID（由bind_model返回）
     */
    static unbind_model(_bind_id: string): void;
}


// GameAPI 类声明
declare class GameAPI {
    /**
     * 获取技能预设描述
     * @param _ability_id 技能编号
     * @returns 技能描述文本
     */
    static ability_prefab_get_desc(_ability_id: AbilityKey): string;

    /**
     * 获取技能预设名称
     * @param _ability_id 技能编号
     * @returns 技能名称
     */
    static ability_prefab_get_name(_ability_id: AbilityKey): string;

    /**
     * 获取触发区域预设的属性
     * @param _value_type 值类型
     * @param _key 技能编号
     * @param _prop 属性名称
     * @returns 属性值
     */
    static ability_prefab_get_prop_by_type(
        _value_type: Enums.ValueType, 
        _key: AbilityKey, 
        _prop: string
    ): any;

    /**
     * 技能预设是否存在自定义值
     * @param _ability_key 技能编号
     * @param _prop 自定义值名称
     * @returns 是否存在
     */
    static ability_prefab_has_kv(_ability_key: AbilityKey, _prop: string): boolean;

    /**
     * 新增路点
     * @param _path_id 所属路径ID
     * @param _index 路点索引位置
     * @param _point_id 路点ID
     */
    static add_pathpoint(_path_id: PathID, _index: number, _point_id: PathPointID): void;

    /**
     * 创建一个生物
     * @param _u_key 生物编号
     * @param _pos 生成位置
     * @param _rotation 生成旋转角度
     * @param _scale 生成缩放比例
     * @param _role? 所属玩家
     * @returns 创建的生物对象
     */
    static create_creature(
        _u_key: CreatureKey, 
        _pos: Vector3, 
        _rotation: Quaternion, 
        _scale: Vector3, 
        _role?: Role
    ): Creature;

    /**
     * 创建一个触发区域
     * @param _u_key 触发区域编号
     * @param _pos 生成位置
     * @param _rotation 生成旋转角度
     * @param _scale 生成缩放比例
     * @param _role? 所属玩家
     * @returns 创建的触发区域对象
     */
    static create_customtriggerspace(
        _u_key: CustomTriggerSpaceKey, 
        _pos: Vector3, 
        _rotation: Quaternion, 
        _scale: Vector3, 
        _role?: Role
    ): CustomTriggerSpace;

    /**
     * 创建物品到坐标点
     * @param _equipment_eid 物品编号
     * @param _pos 生成位置
     * @returns 创建的物品对象
     */
    static create_equipment(_equipment_eid: EquipmentKey, _pos: Vector3): Equipment;

    /**
     * 创建关节助手
     * @param _unit_key 关节助手类型编号
     * @param _unit1 连接主体单位
     * @param _unit2 连接目标单位
     * @returns 创建的关节助手对象
     */
    static create_joint_assistant(
        _unit_key: Enums.JointAssistantKey, 
        _unit1: Unit, 
        _unit2: Unit
    ): JointAssistant;

    /**
     * 创建一个生命体
     * @param _unit_key 单位编号
     * @param _pos 生成位置
     * @param _rotation 生成旋转角度
     * @param _scale_ratio 缩放大小
     * @param _role? 所属玩家
     * @returns 创建的生命体对象
     */
    static create_life_entity(
        _unit_key: UnitKey, 
        _pos: Vector3, 
        _rotation: Quaternion, 
        _scale_ratio: Fixed, 
        _role?: Role
    ): LifeEntity;

    /**
     * 创建一个组件
     * @param _u_key 组件编号
     * @param _pos 生成位置
     * @param _rotation 生成旋转角度
     * @param _scale 生成缩放比例
     * @param _role? 所属玩家
     * @returns 创建的组件对象
     */
    static create_obstacle(
        _u_key: UnitKey, 
        _pos: Vector3, 
        _rotation: Quaternion, 
        _scale: Vector3, 
        _role?: Role
    ): Obstacle;

    /**
     * 播放特效并绑定
     * @param _sfx_key 特效编号
     * @param _unit 绑定的起点单位
     * @param _socket_name 绑定的起点节点
     * @param _scale 特效缩放
     * @param _duration 特效持续时间
     * @param _bind_type 绑定方式
     * @returns 特效ID
     */
    static create_sfx_with_socket(
        _sfx_key: SfxKey, 
        _unit: Unit, 
        _socket_name: Enums.ModelSocket, 
        _scale: Fixed, 
        _duration: Fixed, 
        _bind_type: Enums.BindType
    ): SfxID;

    /**
     * 创建一个逻辑体
     * @param _u_key 逻辑体编号
     * @param _pos 生成位置
     * @param _rotation 生成旋转角度
     * @param _scale 生成缩放比例
     * @param _role? 所属玩家
     * @returns 创建的逻辑体对象
     */
    static create_triggerspace(
        _u_key: TriggerSpaceKey, 
        _pos: Vector3, 
        _rotation: Quaternion, 
        _scale: Vector3, 
        _role?: Role
    ): TriggerSpace;

    /**
     * 创建一个组件组
     * @param _unit_group_id 组件组编号
     * @param _pos 生成位置
     * @param _root_quaternion 根节点旋转角度
     * @param _role? 所属玩家
     * @returns 创建的组件组对象
     */
    static create_unit_group(
        _unit_group_id: UnitGroupKey, 
        _pos: Vector3, 
        _root_quaternion: Quaternion, 
        _role?: Role
    ): UnitGroup;

    /**
     * 创建缩放单位
     * @param _u_key 单位编号
     * @param _pos 生成位置
     * @param _rotation 生成旋转角度
     * @param _scale 生成缩放比例
     * @returns 创建的单位对象
     */
    static create_unit_with_scale(
        _u_key: UnitKey, 
        _pos: Vector3, 
        _rotation: Quaternion, 
        _scale: Vector3
    ): Unit;

    /**
     * 获取生物预设的自定义值
     * @param _value_type 值类型
     * @param _key 生物编号
     * @param _prop 自定义值名称
     * @returns 自定义值
     */
    static creature_prefab_get_kv_by_type(
        _value_type: Enums.ValueType, 
        _key: CreatureKey, 
        _prop: string
    ): any;

    /**
     * 获取生物预设的属性
     * @param _value_type 值类型
     * @param _key 生物编号
     * @param _prop 属性名称
     * @returns 属性值
     */
    static creature_prefab_get_prop_by_type(
        _value_type: Enums.ValueType, 
        _key: CreatureKey, 
        _prop: string
    ): any;

    /**
     * 生物预设是否存在自定义值
     * @param _unit_key 生物编号
     * @param _prop 自定义值名称
     * @returns 是否存在
     */
    static creature_prefab_has_kv(_unit_key: CreatureKey, _prop: string): boolean;

    /**
     * 获取触发区域预设的自定义值
     * @param _value_type 值类型
     * @param _key 逻辑体编号
     * @param _prop 自定义值名称
     * @returns 自定义值
     */
    static customtriggerspace_prefab_get_kv_by_type(
        _value_type: Enums.ValueType, 
        _key: CustomTriggerSpaceKey, 
        _prop: string
    ): any;

    /**
     * 获取触发区域预设的属性
     * @param _value_type 值类型
     * @param _key 逻辑体编号
     * @param _prop 属性名称
     * @returns 属性值
     */
    static customtriggerspace_prefab_get_prop_by_type(
        _value_type: Enums.ValueType, 
        _key: CustomTriggerSpaceKey, 
        _prop: string
    ): any;

    /**
     * 触发区域预设是否存在自定义值
     * @param _key 触发区域编号
     * @param _prop 自定义值名称
     * @returns 是否存在
     */
    static customtriggerspace_prefab_has_kv(_key: CustomTriggerSpaceKey, _prop: string): boolean;

    /**
     * 删除单位
     * @param _unit 目标单位
     */
    static destroy_unit(_unit: Unit): void;

    /**
     * 销毁单位
     * @param _unit 目标单位
     * @param _destroy_children? 是否销毁子组件
     */
    static destroy_unit_with_children(_unit: Unit, _destroy_children?: boolean): void;

    /**
     * 设置两个单位是否能碰撞
     * @param _unit_1 单位1
     * @param _unit_2 单位2
     * @param _enable 是否允许碰撞
     */
    static enable_collision_between_units(_unit_1: Unit, _unit_2: Unit, _enable: boolean): void;

    /** 游戏结束 */
    static game_end(): void;

    /**
     * 获取成就目标进度
     * @param _event_id 成就ID
     * @returns 成就进度值
     */
    static get_achievement_target(_event_id: number): number;

    /** 获取所有阵营 */
    static get_all_camps(): Camp[];

    /** 获取所有在线玩家 */
    static get_all_online_roles(): Role[];

    /** 获取游戏中所有玩家 */
    static get_all_valid_roles(): Role[];

    /**
     * 获取阵营
     * @param _camp_id 阵营ID
     * @returns 阵营对象
     */
    static get_camp(_camp_id: CampID): Camp;

    /**
     * 获取阵营关系
     * @param _camp1 阵营1
     * @param _camp2 阵营2
     * @returns 阵营关系类型
     */
    static get_camp_relation(_camp1: Camp, _camp2: Camp): Enums.CampRelationType;

    /**
     * 获取矩形区域内的角色
     * @param _center 矩形中心点
     * @param _length 矩形长度
     * @param _height 矩形高度
     * @param _width 矩形宽度
     * @returns 区域内的角色列表
     */
    static get_characters_in_aabb(
        _center: Vector3, 
        _length: Fixed, 
        _height: Fixed, 
        _width: Fixed
    ): Character[];

    /**
     * 获取圆柱区域内的角色
     * @param _bottom_center 圆柱底部中心点
     * @param _radius 圆柱半径
     * @param _height 圆柱高度
     * @returns 区域内的角色列表
     */
    static get_characters_in_cylinder(
        _bottom_center: Vector3, 
        _radius: Fixed, 
        _height: Fixed
    ): Character[];

    /**
     * 获取圆形区域内的角色
     * @param _center 圆形中心点
     * @param _radius 圆形半径
     * @returns 区域内的角色列表
     */
    static get_characters_in_sphere(_center: Vector3, _radius: Fixed): Character[];

    /**
     * 获取指定编号的逻辑体列表
     * @param _creature_key 生物编号
     * @returns 对应编号的生物列表
     */
    static get_creatures_by_key(_creature_key: CreatureKey): Creature[];

    /**
     * 获取矩形区域内的生物
     * @param _center 矩形中心点
     * @param _length 矩形长度
     * @param _height 矩形高度
     * @param _width 矩形宽度
     * @returns 区域内的生物列表
     */
    static get_creatures_in_aabb(
        _center: Vector3, 
        _length: Fixed, 
        _height: Fixed, 
        _width: Fixed
    ): Creature[];

    /**
     * 获取圆柱区域内的生物
     * @param _bottom_center 圆柱底部中心点
     * @param _radius 圆柱半径
     * @param _height 圆柱高度
     * @returns 区域内的生物列表
     */
    static get_creatures_in_cylinder(
        _bottom_center: Vector3, 
        _radius: Fixed, 
        _height: Fixed
    ): Creature[];

    /**
     * 获取圆形区域内的生物
     * @param _center 圆形中心点
     * @param _radius 圆形半径
     * @returns 区域内的生物列表
     */
    static get_creatures_in_sphere(_center: Vector3, _radius: Fixed): Creature[];

    /**
     * 获取指定预设的触发区域列表
     * @param _key 触发区域编号
     * @returns 对应编号的触发区域列表
     */
    static get_customtriggerspaces_by_key(_key: CustomTriggerSpaceKey): CustomTriggerSpace[];

    /**
     * 获取时间戳转化后的日期数
     * @param _timestamp 目标时间戳
     * @returns 日期（1-31）
     */
    static get_day(_timestamp: Timestamp): number;

    /** 获取付费商品信息列表 */
    static get_goods_list(): any[];

    /**
     * 获取时间戳转化后的小时数
     * @param _timestamp 目标时间戳
     * @returns 小时（0-23）
     */
    static get_hour(_timestamp: Timestamp): number;

    /**
     * 获取组件上的所有关节
     * @param _unit 目标单位
     * @returns 单位上的关节列表
     */
    static get_joint_assistants(_unit: Unit): JointAssistant[];

    /**
     * 获取矩形区域内的生命体
     * @param _center 矩形中心点
     * @param _length 矩形长度
     * @param _height 矩形高度
     * @param _width 矩形宽度
     * @returns 区域内的生命体列表
     */
    static get_lifeentities_in_aabb(
        _center: Vector3, 
        _length: Fixed, 
        _height: Fixed, 
        _width: Fixed
    ): LifeEntity[];

    /**
     * 获取圆柱区域内的生命体
     * @param _bottom_center 圆柱底部中心点
     * @param _radius 圆柱半径
     * @param _height 圆柱高度
     * @returns 区域内的生命体列表
     */
    static get_lifeentities_in_cylinder(
        _bottom_center: Vector3, 
        _radius: Fixed, 
        _height: Fixed
    ): LifeEntity[];

    /**
     * 获取圆形区域内的生命体
     * @param _center 圆形中心点
     * @param _radius 圆形半径
     * @returns 区域内的生命体列表
     */
    static get_lifeentities_in_sphere(_center: Vector3, _radius: Fixed): LifeEntity[];

    /** 获取所有地图角色 */
    static get_map_characters(): Character[];

    /**
     * 获取时间戳转化后的分钟数
     * @param _timestamp 目标时间戳
     * @returns 分钟（0-59）
     */
    static get_minute(_timestamp: Timestamp): number;

    /**
     * 获取时间戳转化后的月份数
     * @param _timestamp 目标时间戳
     * @returns 月份（1-12）
     */
    static get_month(_timestamp: Timestamp): number;

    /**
     * 获取指定编号的组件列表
     * @param _key 组件编号
     * @returns 对应编号的组件列表
     */
    static get_obstacles_by_key(_key: ObstacleKey): Obstacle[];

    // （续）GameAPI.d.ts
// 注：需确保已在文件开头引入所有依赖类型并声明枚举命名空间

    /**
     * 获取矩形区域内的组件
     * @param _center 矩形中心点
     * @param _length 矩形长度
     * @param _height 矩形高度
     * @param _width 矩形宽度
     * @returns 区域内的组件列表
     */
    static get_obstacles_in_aabb(
        _center: Vector3, 
        _length: Fixed, 
        _height: Fixed, 
        _width: Fixed
    ): Obstacle[];

    /**
     * 获取圆柱区域内的组件
     * @param _bottom_center 圆柱底部中心点
     * @param _radius 圆柱半径
     * @param _height 圆柱高度
     * @returns 区域内的组件列表
     */
    static get_obstacles_in_cylinder(
        _bottom_center: Vector3, 
        _radius: Fixed, 
        _height: Fixed
    ): Obstacle[];

    /**
     * 获取圆形区域内的组件
     * @param _center 圆形中心点
     * @param _radius 圆形半径
     * @returns 区域内的组件列表
     */
    static get_obstacles_in_sphere(_center: Vector3, _radius: Fixed): Obstacle[];

    /**
     * 获取路点坐标
     * @param _point_id 路点ID
     * @returns 路点的三维坐标
     */
    static get_pathpoint_by_id(_point_id: PathPointID): Vector3;

    /**
     * 获取路径中的路点向量
     * @param _path_id 路径ID
     * @param _index 路点在路径中的索引
     * @returns 对应索引的路点坐标向量
     */
    static get_pathpoint_by_index(_path_id: PathID, _index: number): Vector3;

    /**
     * 通过玩家ID获取玩家对象
     * @param _role_id 玩家ID
     * @returns 对应的玩家对象
     */
    static get_role(_role_id: RoleID): Role;

    /**
     * 获取时间戳转化后的秒数
     * @param _timestamp 目标时间戳
     * @returns 秒数（0-59）
     */
    static get_second(_timestamp: Timestamp): number;

    /**
     * 计算两个时间戳的秒差
     * @param _timestamp_1 时间戳1
     * @param _timestamp_2 时间戳2
     * @returns 秒差（timestamp1 - timestamp2 的结果）
     */
    static get_timestamp_diff(_timestamp_1: Timestamp, _timestamp_2: Timestamp): number;

    /**
     * 通过单位ID获取单位对象
     * @param _unit_id 单位ID
     * @returns 对应的单位对象
     */
    static get_unit(_unit_id: UnitID): Unit;

    /**
     * 通过单位名称获取单位ID
     * @param _name 单位名称
     * @returns 对应的单位ID
     */
    static get_unit_id_by_name(_name: string): UnitID;

    /**
     * 获取路径包含的所有路点坐标数组
     * @param _path_id 路径ID
     * @returns 路点坐标向量数组（按路径顺序排列）
     */
    static get_vector3s_from_path(_path_id: PathID): Vector3[];

    /**
     * 获取时间戳转化后的星期数
     * @param _timestamp 目标时间戳
     * @returns 星期数（1-7，具体对应需参考项目定义）
     */
    static get_weekday(_timestamp: Timestamp): number;

    /**
     * 获取时间戳转化后的年数
     * @param _timestamp 目标时间戳
     * @returns 年份（4位数字）
     */
    static get_year(_timestamp: Timestamp): number;

    /**
     * 检查是否存在指定名称的全局变量
     * @param _var_name 全局变量名称
     * @returns 是否存在该全局变量
     */
    static has_global_kv(_var_name: string): boolean;

    /**
     * 获取效果预设的描述文本
     * @param _modifier_key 效果编号
     * @returns 效果描述
     */
    static modifier_prefab_get_desc(_modifier_key: ModifierKey): string;

    /**
     * 获取效果预设的名称
     * @param _modifier_key 效果编号
     * @returns 效果名称
     */
    static modifier_prefab_get_name(_modifier_key: ModifierKey): string;

    /**
     * 获取效果预设的属性值
     * @param _value_type 值类型
     * @param _key 效果编号
     * @param _prop 属性名称
     * @returns 对应属性的值
     */
    static modifier_prefab_get_prop_by_type(
        _value_type: Enums.ValueType, 
        _key: ModifierKey, 
        _prop: string
    ): any;

    /**
     * 检查效果预设是否存在指定名称的自定义值
     * @param _modifier_key 效果编号
     * @param _prop 自定义值名称
     * @returns 是否存在该自定义值
     */
    static modifier_prefab_has_kv(_modifier_key: ModifierKey, _prop: string): boolean;

    /**
     * 获取组件预设的自定义值
     * @param _value_type 值类型
     * @param _key 组件编号
     * @param _prop 自定义值名称
     * @returns 对应自定义值
     */
    static obstacle_prefab_get_kv_by_type(
        _value_type: Enums.ValueType, 
        _key: ObstacleKey, 
        _prop: string
    ): any;

    /**
     * 获取组件预设的属性值
     * @param _value_type 值类型
     * @param _key 组件编号
     * @param _prop 属性名称
     * @returns 对应属性的值
     */
    static obstacle_prefab_get_prop_by_type(
        _value_type: Enums.ValueType, 
        _key: ObstacleKey, 
        _prop: string
    ): any;

    /**
     * 检查组件预设是否存在指定名称的自定义值
     * @param _key 组件编号
     * @param _prop 自定义值名称
     * @returns 是否存在该自定义值
     */
    static obstacle_prefab_has_kv(_key: ObstacleKey, _prop: string): boolean;

    /**
     * 在指定位置播放3D音效
     * @param _position 发声位置
     * @param _sound_key 声音编号
     * @param _duration? 音效持续时间（未指定则播放完整音效）
     * @param _volume? 音效音量（默认使用预设音量）
     * @returns 音效ID（用于后续停止播放）
     */
    static play_3d_sound(
        _position: Vector3, 
        _sound_key: SoundKey, 
        _duration?: Fixed, 
        _volume?: Fixed
    ): SoundID;

    /**
     * 在指定位置播放特效
     * @param _sfx_key 特效编号
     * @param _pos 特效播放位置
     * @param _rot 特效旋转角度
     * @param _scale 特效缩放比例
     * @param _duration? 特效持续时间
     * @param _rate? 特效播放速率（1为正常速率）
     * @param _with_sound? 是否播放特效自带音效（默认true）
     * @returns 特效ID
     */
    static play_sfx_by_key(
        _sfx_key: SfxKey, 
        _pos: Vector3, 
        _rot: Quaternion, 
        _scale: Fixed, 
        _duration?: Fixed, 
        _rate?: Fixed, 
        _with_sound?: boolean
    ): SfxID;

    /** 获取一个随机颜色 */
    static random_color(): Color;

    /**
     * 生成指定范围内的随机整数（包含边界值）
     * @param _min_value 最小值
     * @param _max_value 最大值
     * @returns 随机整数
     */
    static random_int(_min_value: number, _max_value: number): number;

    /**
     * 执行射线检测并返回碰撞的单位信息
     * @param _start_pos 射线起始点
     * @param _end_pos 射线终点
     * @param _include_unit_types 需检测的单位类型列表
     * @param _raycast_handler 碰撞回调函数（接收碰撞信息参数）
     */
    static raycast_unit(
        _start_pos: Vector3, 
        _end_pos: Vector3, 
        _include_unit_types: Enums.UnitType[], 
        _raycast_handler: (hitInfo: any) => void
    ): void;

    /**
     * 从路径中删除指定索引的路点
     * @param _path_id 路径ID
     * @param _index 需删除的路点索引
     */
    static remove_pathpoint(_path_id: PathID, _index: number): void;

    /**
     * 设置生命体的存活场景边界大小（超出边界可能触发销毁/惩罚）
     * @param _x 矩形边界X轴长度
     * @param _y 矩形边界Y轴高度
     * @param _z 矩形边界Z轴宽度
     */
    static set_life_entity_survival_scene_boundary(_x: Fixed, _y: Fixed, _z: Fixed): void;

    /**
     * 设置组件的存活场景边界大小（超出边界可能触发销毁/惩罚）
     * @param _x 矩形边界X轴长度
     * @param _y 矩形边界Y轴高度
     * @param _z 矩形边界Z轴宽度
     */
    static set_unit_survival_scene_boundary(_x: Fixed, _y: Fixed, _z: Fixed): void;

    /**
     * 停止播放指定ID的音效
     * @param _assigned_id 音效ID（由play_3d_sound返回）
     */
    static stop_sound(_assigned_id: SoundID): void;

    /**
     * 获取逻辑体预设的自定义值
     * @param _value_type 值类型
     * @param _key 逻辑体编号
     * @param _prop 自定义值名称
     * @returns 对应自定义值
     */
    static triggerspace_prefab_get_kv_by_type(
        _value_type: Enums.ValueType, 
        _key: TriggerSpaceKey, 
        _prop: string
    ): any;

    /**
     * 获取逻辑体预设的属性值
     * @param _value_type 值类型
     * @param _key 逻辑体编号
     * @param _prop 属性名称
     * @returns 对应属性的值
     */
    static triggerspace_prefab_get_prop_by_type(
        _value_type: Enums.ValueType, 
        _key: TriggerSpaceKey, 
        _prop: string
    ): any;

    /**
     * 检查逻辑体预设是否存在指定名称的自定义值
     * @param _key 逻辑体编号
     * @param _prop 自定义值名称
     * @returns 是否存在该自定义值
     */
    static triggerspace_prefab_has_kv(_key: TriggerSpaceKey, _prop: string): boolean;
}



// Unit 类声明
declare class Unit implements Actor {
    /**
     * 向当前单位添加子单位
     * @param _unit 要添加的子单位
     */
    static add_child(_unit: Unit): void;

    /**
     * 为单位添加圆周运动
     * @param _vel 角速度向量
     * @param _time 运动持续时间（秒）
     * @param _is_local? 是否使用局部坐标系（默认false）
     */
    static add_circle_motor(_vel: Vector3, _time: Fixed, _is_local?: boolean): void;

    /**
     * 为单位添加直线运动
     * @param _vel 线速度向量
     * @param _time 运动持续时间（秒）
     * @param _is_local? 是否使用局部坐标系（默认false）
     */
    static add_linear_motor(_vel: Vector3, _time: Fixed, _is_local?: boolean): void;

    /**
     * 为单位添加环绕运动
     * @param _follow_target 环绕的目标单位
     * @param _ang_vel 角速度向量
     * @param _time 运动持续时间（秒）
     * @param _follow_rotate? 是否跟随目标旋转（默认false）
     */
    static add_surround_motor(
        _follow_target: Unit, 
        _ang_vel: Vector3, 
        _time: Fixed, 
        _follow_rotate?: boolean
    ): void;

    /**
     * 向单位施加持续力
     * @param _force 力向量
     */
    static apply_force(_force: Vector3): void;

    /**
     * 向单位施加冲击力（瞬时力）
     * @param _force 冲击力向量
     * @param _max_speed? 击飞的最大速度限制
     * @param _force_lost_control? 是否导致失控状态（默认true）
     * @param _lost_ctrl_time? 失控持续时间（秒）
     */
    static apply_impact_force(
        _force: Vector3, 
        _max_speed?: Fixed, 
        _force_lost_control?: boolean, 
        _lost_ctrl_time?: Fixed
    ): void;

    /** 关闭重力对单位的影响 */
    static disable_gravity(): void;

    /** 禁用单位的所有互动功能 */
    static disable_interact(): void;

    /** 开启重力对单位的影响 */
    static enable_gravity(): void;

    /** 激活单位的互动功能 */
    static enable_interact(): void;

    /** 获取单位当前的角速度 */
    static get_angular_velocity(): Vector3;

    /** 获取单位所属的阵营 */
    static get_camp(): Camp;

    /** 获取单位所属阵营的ID */
    static get_camp_id(): CampID;

    /**
     * 根据名称获取子单位
     * @param _name 子单位名称
     * @returns 对应的子单位
     */
    static get_child_by_name(_name: string): Unit;

    /** 获取单位的所有子单位 */
    static get_children(): Unit[];

    /** 获取单位的编号 */
    static get_key(): UnitKey;

    /** 获取单位当前的线速度 */
    static get_linear_velocity(): Vector3;

    /** 获取单位的名称 */
    static get_name(): string;

    /** 获取单位当前的旋转角度 */
    static get_orientation(): Quaternion;

    /** 获取单位当前的坐标位置 */
    static get_position(): Vector3;

    /** 获取单位的受力类型（静态/动态/动力学） */
    static get_rigid_body_type(): Enums.RigidBodyType;

    /** 获取单位所属的玩家 */
    static get_role(): Role;

    /** 获取单位所属玩家的ID */
    static get_role_id(): RoleID;

    /** 获取单位的类型 */
    static get_unit_type(): Enums.UnitType;

    /** 关闭单位的气泡信息显示 */
    static hide_bubble_msg(): void;

    /** 判断当前单位是否为角色类型 */
    static is_character(): boolean;

    /** 判断当前单位是否为生物类型 */
    static is_creature(): boolean;

    /** 判断当前单位是否为动态受力物体 */
    static is_dynamic_body(): boolean;

    /** 判断当前单位是否为动力学物体 */
    static is_kinematic_body(): boolean;

    /** 判断单位模型是否可见 */
    static is_model_visible(): boolean;

    /** 判断单位的物理效果是否生效 */
    static is_physics_active(): boolean;

    /** 判断当前单位是否为静态物体 */
    static is_static_body(): boolean;

    /**
     * 在单位位置播放3D音效
     * @param _sound_key 声音编号
     * @param _duration? 音效持续时间（秒）
     * @param _volume? 音量大小（0-1）
     * @returns 音效ID
     */
    static play_3d_sound(
        _sound_key: SoundKey, 
        _duration?: Fixed, 
        _volume?: Fixed
    ): SoundID;

    /**
     * 让单位发送指定表情
     * @param _emoji_key 表情编号
     */
    static play_emoji(_emoji_key: EmojiKey): void;

    /**
     * 在单位位置播放带距离衰减的声音
     * @param _event_id 声音编号
     * @param _vis_dis 音效传播可见距离
     * @param _sound_attenuation_curve 衰减曲线名称
     * @returns 音效ID
     */
    static play_sound_with_dis_and_attenuation(
        _event_id: SoundKey, 
        _vis_dis: Fixed, 
        _sound_attenuation_curve: string
    ): SoundID;

    /** 停止单位的环绕运动 */
    static remove_surround_motor(): void;

    /**
     * 设置加速运动的初速度并重置
     * @param _index 加速运动索引
     * @param _init_vel 初速度向量
     */
    static set_acc_motor_init_velocity(_index: number, _init_vel: Vector3): void;

    /**
     * 改变单位的角速度
     * @param _vel 目标角速度向量
     */
    static set_angular_velocity(_vel: Vector3): void;

    /**
     * 设置直线运动的速度
     * @param _index 直线运动索引
     * @param _vel 目标线速度向量
     * @param _is_local? 是否使用局部坐标系（默认false）
     */
    static set_linear_motor_velocity(
        _index: number, 
        _vel: Vector3, 
        _is_local?: boolean
    ): void;

    /**
     * 改变单位的线速度
     * @param _vel 目标线速度向量
     */
    static set_linear_velocity(_vel: Vector3): void;

    /**
     * 设置单位模型的可见性
     * @param _v 是否可见
     */
    static set_model_visible(_v: boolean): void;

    /**
     * 设置单位的旋转角度
     * @param _rot 目标旋转角度
     */
    static set_orientation(_rot: Quaternion): void;

    /**
     * 设置单位物理效果是否生效
     * @param _is_active 是否生效
     */
    static set_physics_active(_is_active: boolean): void;

    /**
     * 重置单位的坐标位置
     * @param _pos 目标坐标
     */
    static set_position(_pos: Vector3): void;

    /**
     * 让单位显示气泡信息
     * @param _show_msg 气泡内容文本
     * @param _show_time 显示持续时间（秒）
     * @param _max_dis? 最大可见距离（超出该距离则隐藏）
     */
    static show_bubble_msg(_show_msg: string, _show_time: Fixed, _max_dis?: Fixed): void;

    /**
     * 停止单位播放的指定音效
     * @param _lres_id 要停止的音效ID
     */
    static stop_sound(_lres_id: SoundID): void;
}
// TriggerSpace 类声明
declare class TriggerSpace implements 
    ExprDeviceComp, OwnerComp, Unit, UnitInteractVolumeComp {
    
    /** 获取当前触发区域的虚拟光源亮度 */
    static get_virtual_light_brightness(): Fixed;

    /**
     * 设置当前触发区域的虚拟光源亮度
     * @param _brightness 目标亮度值
     */
    static set_virtual_light_brightness(_brightness: Fixed): void;
}

// TriggerSystem 类声明
declare class TriggerSystem {
    /**
     * 判断指定计时器是否存在
     * @param _timer 目标计时器对象
     * @returns 计时器是否存在
     */
    static has_timer(_timer: Timer): boolean;
}

// UnitInteractVolumeComp 类声明
declare class UnitInteractVolumeComp {
    /**
     * 设置单位指定索引的互动按钮名称
     * @param _interact_index 互动功能的索引（区分多互动模式）
     * @param _name 互动按钮显示的文本名称
     */
    static set_interact_button_text_by_index(_interact_index: number, _name: string): void;

    /**
     * 全局设置单位的互动功能是否启用
     * @param _enable 是否启用所有互动功能
     */
    static set_interact_enabled(_enable: boolean): void;

    /**
     * 按索引设置单位的特定互动功能是否启用
     * @param _interact_index 目标互动功能的索引
     * @param _enable 该互动功能是否启用
     */
    static set_interact_enabled_by_index(_interact_index: number, _enable: boolean): void;
}
// Obstacle 类声明
declare class Obstacle implements 
    DisplayComp, ExprDeviceComp, LiftedComp, OwnerComp, Unit, 
    UnitInteractVolumeComp {
    
    /** 获取当前组件绑定的物品 */
    static get_bound_equipment(): Equipment;

    /**
     * 获取牌数（仅适用于麻将、扑克等牌类组件）
     * @returns 牌数
     */
    static get_chess_rank(): number;

    /** 判断当前组件是否可拖动 */
    static is_draggable(): boolean;

    /** 判断当前组件是否可点击 */
    static is_touchable(): boolean;
}

// OwnerComp 类声明
declare class OwnerComp {
    /** 获取当前对象所属的玩家 */
    static get_owner_role(): Role;
}

// Role 类声明
declare class Role implements AttrComp, KVBase {
    /**
     * 增加成就进度
     * @param _event_id 成就ID
     * @param _add_count 增加的进度值
     */
    static add_achievement_progress(_event_id: Achievement, _add_count: number): void;

    /**
     * 增加玩家积分
     * @param _add_score 增加的积分值
     */
    static add_score(_add_score: number): void;

    /**
     * 消耗玩家指定数量的道具
     * @param _commodity_id 道具ID
     * @param _num 消耗数量
     */
    static consume_commodity(_commodity_id: UgcCommodity, _num: number): void;

    /** 玩家游戏失败并显示失败界面 */
    static game_lose_and_show_result_panel(): void;

    /** 玩家游戏胜利并显示胜利界面 */
    static game_win_and_show_result_panel(): void;

    /**
     * 获取指定成就的当前进度
     * @param _event_id 成就ID
     * @returns 成就进度
     */
    static get_achievement_progress(_event_id: Achievement): number;

    /**
     * 获取指定类型的存档值
     * @param _archive_type 存档类型
     * @param _key 存档键名
     * @returns 存档值
     */
    static get_archive_by_type(_archive_type: Enums.ArchiveType, _key: Archive): any;

    /** 获取当前相机的旋转角度 */
    static get_camera_rotation(): Quaternion;

    /** 获取玩家所属的阵营 */
    static get_camp(): Camp;

    /**
     * 获取玩家拥有指定道具的数量
     * @param _commodity_id 道具ID
     * @returns 道具数量
     */
    static get_commodity_count(_commodity_id: UgcCommodity): number;

    /** 获取玩家当前控制的单位 */
    static get_ctrl_unit(): Unit;

    /** 获取玩家的游戏结果 */
    static get_game_result(): Enums.GameResult;

    /** 获取玩家的昵称 */
    static get_name(): string;

    /** 获取玩家的ID */
    static get_roleid(): RoleID;

    /**
     * 检查玩家是否拥有指定道具
     * @param _commodity_id 道具ID
     * @returns 是否拥有该道具
     */
    static has_commodity(_commodity_id: UgcCommodity): boolean;

    /** 检查玩家是否记录过存档 */
    static has_saved_archive(): boolean;

    /**
     * 检查指定成就是否已完成
     * @param _event_id 成就ID
     * @returns 是否完成成就
     */
    static is_achievement_completed(_event_id: Achievement): boolean;

    /** 检查玩家是否是乐园会员 */
    static is_gallery_vip(): boolean;

    /** 检查玩家是否已失败 */
    static is_lost(): boolean;

    /** 检查玩家是否在线 */
    static is_online(): boolean;

    /** 检查玩家是否已胜利 */
    static is_won(): boolean;

    /** 标记玩家游戏失败 */
    static lose(): void;

    /**
     * 在玩家屏幕上播放特效
     * @param _sfx_key 特效编号
     * @param _duration? 特效持续时间（秒）
     * @param _rate? 特效播放速率（1为正常速率）
     * @returns 特效ID
     */
    static play_screen_sfx(
        _sfx_key: SfxKey, 
        _duration?: Fixed, 
        _rate?: Fixed
    ): SfxID;

    /**
     * 重置相机设置
     * @param _reset_angle? 是否重置相机角度
     * @param _reset_bind? 是否重置相机绑定模式
     * @param _reset_point? 是否重置相机相对于焦点的位置
     * @param _reset_prop_pitch? 是否重置俯仰角范围
     */
    static reset_camera(
        _reset_angle?: boolean, 
        _reset_bind?: boolean, 
        _reset_point?: boolean, 
        _reset_prop_pitch?: boolean
    ): void;

    /**
     * 设置指定成就的进度
     * @param _event_id 成就ID
     * @param _count 目标进度值
     */
    static set_achievement_progress(_event_id: Achievement, _count: number): void;

    /**
     * 设置指定类型的存档值
     * @param _archive_type 存档类型
     * @param _key 存档键名
     * @param _val 存档值
     */
    static set_archive_by_type(_archive_type: Enums.ArchiveType, _key: Archive, _val: any): void;

    /**
     * 为玩家屏幕设置暗角效果
     * @param _enable 是否启用暗角
     * @param _strength 暗角强度
     * @param _color 暗角颜色
     */
    static set_blind_corner(_enable: boolean, _strength: Fixed, _color: Color): void;

    /**
     * 设置UI按钮节点的文字字号
     * @param _key UI按钮节点
     * @param _font_size 目标字号
     */
    static set_button_font_size(_key: EButton, _font_size: Fixed): void;

    /**
     * 设置UI按钮节点的常态图片
     * @param _button UI按钮节点
     * @param _image_id 图片ID
     */
    static set_button_normal_image(_button: EButton, _image_id: number): void;

    /**
     * 设置UI按钮节点的按下状态图片
     * @param _button UI按钮节点
     * @param _image_id 图片ID
     */
    static set_button_pressed_image(_button: EButton, _image_id: number): void;

    /**
     * 设置UI按钮节点的文本内容
     * @param _button UI按钮节点
     * @param _text 目标文本
     */
    static set_button_text(_button: EButton, _text: string): void;

    /**
     * 设置UI按钮节点的文字颜色
     * @param _button UI按钮节点
     * @param _text_color 目标文字颜色
     */
    static set_button_text_color(_button: EButton, _text_color: Color): void;

    /**
     * 设置是否开启相机旋转同步
     * @param _enabled 是否启用同步
     */
    static set_camera_rotation_sync_enabled(_enabled: boolean): void;

    /**
     * 设置相机旋转同步的更新频率（启用后会禁止相机移动）
     * @param _frequency 更新频率
     */
    static set_camera_rotation_sync_frequency(_frequency: Fixed): void;

    /**
     * 设置付费道具商店面板的可见性
     * @param _visible 是否可见
     */
    static set_goods_panel_visible(_visible: boolean): void;

    /**
     * 设置玩家的陀螺仪控制目标
     * @param _is_control 是否由陀螺仪控制
     * @param _unit 目标控制单位
     */
    static set_gyroscope_control_unit(_is_control: boolean, _unit: Unit): void;

    /**
     * 设置是否监听陀螺仪信息
     * @param _enabled 是否启用监听
     */
    static set_gyroscope_sync_enabled(_enabled: boolean): void;

    /**
     * 设置UI图片节点的颜色
     * @param _image UI图片节点
     * @param _image_color 目标颜色
     * @param _transition_time 颜色过渡时间（秒）
     */
    static set_image_color(_image: EImage, _image_color: Color, _transition_time: Fixed): void;

    /**
     * 设置UI图片节点的图片资源并自动调整大小
     * @param _image UI图片节点
     * @param _image_path 图片资源路径
     * @param _reset_size? 是否重置节点大小以适配图片
     */
    static set_image_texture_with_auto_resize(_image: EImage, _image_path: string, _reset_size?: boolean): void;

    /**
     * 设置UI输入节点的文本内容
     * @param _input_field UI输入节点
     * @param _text 目标文本
     */
    static set_input_field_text(_input_field: EInputField, _text: string): void;

    /**
     * 设置UI文本节点的背景颜色
     * @param _label UI文本节点
     * @param _color 目标背景颜色
     * @param _transition_time 颜色过渡时间（秒）
     */
    static set_label_background_color(_label: ELabel, _color: Color, _transition_time: Fixed): void;

    /**
     * 设置UI文本节点的背景不透明度
     * @param _label UI文本节点
     * @param _opacity 目标不透明度
     * @param _transition_time 透明度过渡时间（秒）
     */
    static set_label_background_opacity(_label: ELabel, _opacity: Fixed, _transition_time: Fixed): void;

    /**
     * 设置UI文本节点的字体颜色
     * @param _label UI文本节点
     * @param _color 目标字体颜色
     * @param _transition_time 颜色过渡时间（秒）
     */
    static set_label_color(_label: ELabel, _color: Color, _transition_time: Fixed): void;

    /**
     * 设置UI文本节点的字体大小
     * @param _label UI文本节点
     * @param _font_size 目标字号
     * @param _transition_time 大小过渡时间（秒）
     */
    static set_label_font_size(_label: ELabel, _font_size: number, _transition_time: Fixed): void;

    /**
     * 设置UI文本节点的描边颜色
     * @param _label UI文本节点
     * @param _color 目标描边颜色
     */
    static set_label_outline_color(_label: ELabel, _color: Color): void;

    /**
     * 设置UI文本节点是否开启描边
     * @param _label UI文本节点
     * @param _enable 是否启用描边
     */
    static set_label_outline_enabled(_label: ELabel, _enable: boolean): void;

    /**
     * 设置UI文本节点的描边不透明度
     * @param _label UI文本节点
     * @param _opacity 目标描边不透明度
     */
    static set_label_outline_opacity(_label: ELabel, _opacity: Fixed): void;

    /**
     * 设置UI文本节点的描边大小
     * @param _label UI文本节点
     * @param _width 目标描边宽度
     */
    static set_label_outline_width(_label: ELabel, _width: Fixed): void;

    /**
     * 设置UI文本节点的阴影颜色
     * @param _label UI文本节点
     * @param _color 目标阴影颜色
     */
    static set_label_shadow_color(_label: ELabel, _color: Color): void;

    /**
     * 设置UI文本节点是否开启阴影
     * @param _label UI文本节点
     * @param _enable 是否启用阴影
     */
    static set_label_shadow_enabled(_label: ELabel, _enable: boolean): void;

    /**
     * 设置UI文本节点的阴影X轴偏移
     * @param _label UI文本节点
     * @param _offset X轴偏移量
     */
    static set_label_shadow_x_offset(_label: ELabel, _offset: Fixed): void;

    /**
     * 设置UI文本节点的阴影Y轴偏移
     * @param _label UI文本节点
     * @param _offset Y轴偏移量
     */
    static set_label_shadow_y_offset(_label: ELabel, _offset: Fixed): void;

    /**
     * 设置UI文本节点的文本内容
     * @param _label UI文本节点
     * @param _text 目标文本
     */
    static set_label_text(_label: ELabel, _text: string): void;

    /**
     * 设置UI节点的交互开关
     * @param _node UI节点
     * @param _touch_enabled 是否允许交互
     */
    static set_node_touch_enabled(_node: ENode, _touch_enabled: boolean): void;

    /**
     * 设置UI节点的可见性
     * @param _node UI节点
     * @param _visible 是否可见
     */
    static set_node_visible(_node: ENode, _visible: boolean): void;

    /**
     * 设置UI进度条节点的当前进度
     * @param _progress_bar UI进度条节点
     * @param _current 目标当前进度
     */
    static set_progressbar_current(_progress_bar: EProgressbar, _current: number): void;

    /**
     * 设置UI进度条节点的最大进度
     * @param _progress_bar UI进度条节点
     * @param _max 目标最大进度
     */
    static set_progressbar_max(_progress_bar: EProgressbar, _max: number): void;

    /**
     * 设置UI进度条节点的最小进度
     * @param _key UI进度条节点
     * @param _min 目标最小进度
     */
    static set_progressbar_min(_key: EProgressbar, _min: number): void;

    /**
     * 设置UI进度条节点的进度过渡动画
     * @param _progress_bar UI进度条节点
     * @param _current 目标当前进度
     * @param _transition_time 过渡时间（秒）
     */
    static set_progressbar_transition(_progress_bar: EProgressbar, _current: number, _transition_time: Fixed): void;

    /**
     * 设置玩家控制功能的开启/关闭
     * @param _enable 是否启用控制
     */
    static set_role_ctrl_enabled(_enable: boolean): void;

    /**
     * 设置玩家的积分
     * @param _score 目标积分值
     */
    static set_score(_score: number): void;

    /**
     * 设置UI节点的不透明度
     * @param _node UI节点
     * @param _opacity 目标不透明度
     */
    static set_ui_opacity(_node: ENode, _opacity: Fixed): void;

    /**
     * 设置指定单位对玩家的可见性
     * @param _unit 目标单位
     * @param _is_visible 是否对玩家可见
     */
    static set_unit_visible(_unit: Unit, _is_visible: boolean): void;

    /**
     * 向玩家显示指定商品的购买界面
     * @param _raw_goods_id 商品ID
     * @param _show_time 界面显示时间（秒）
     */
    static show_goods_purchase_panel(_raw_goods_id: UgcGoods, _show_time: Fixed): void;

    /**
     * 向玩家显示飘字提示信息
     * @param _content 提示文本内容
     * @param _duration? 提示显示时长（秒）
     */
    static show_tips(_content: string, _duration?: Fixed): void;

    /**
     * 跳过当前播放的剧情动画
     * @param _has_black_screen 是否包含跳过黑幕效果
     */
    static skip_current_montage(_has_black_screen: boolean): void;

    /**
     * 解除UI文本节点的属性绑定
     * @param _label UI文本节点
     */
    static unbind_label_text(_label: ELabel): void;

    /**
     * 解除UI进度条节点当前进度的属性绑定
     * @param _progress_bar UI进度条节点
     */
    static unbind_progressbar_current(_progress_bar: EProgressbar): void;

    /**
     * 解除UI进度条节点最大进度的属性绑定
     * @param _progress_bar UI进度条节点
     */
    static unbind_progressbar_max(_progress_bar: EProgressbar): void;

    /** 标记玩家游戏胜利 */
    static win(): void;
}

// Modifier 类声明
declare class Modifier implements Actor {
    /**
     * 增加效果的持续时间
     * @param _add_time 增加的时间（秒）
     */
    static add_duration(_add_time: Fixed): void;

    /**
     * 增加效果层数
     * @param _stack_count_add 增加的层数
     */
    static add_stack_count(_stack_count_add: number): void;

    /** 获取效果的描述文本 */
    static get_desc(): string;

    /** 获取效果的编号 */
    static get_key(): ModifierKey;

    /** 获取效果的最大层数限制 */
    static get_max_stack_count(): number;

    /** 获取效果的名称 */
    static get_name(): string;

    /** 获取效果所属的技能 */
    static get_owner_ability(): Ability;

    /** 获取携带该效果的角色 */
    static get_owner_character(): Character;

    /** 获取携带该效果的生物 */
    static get_owner_creature(): Creature;

    /** 获取携带该效果的生命体 */
    static get_owner_life_entity(): LifeEntity;

    /** 获取携带该效果的单位 */
    static get_owner_unit(): Unit;

    /** 获取释放该效果的单位 */
    static get_releaser_unit(): Unit;

    /** 获取效果的剩余持续时间（秒） */
    static get_remain_duration(): Fixed;

    /** 获取效果当前的层数 */
    static get_stack_count(): number;

    /**
     * 设置效果的剩余持续时间
     * @param _remain_duration 剩余持续时间（秒）
     */
    static set_remain_duration(_remain_duration: Fixed): void;

    /**
     * 设置效果的当前层数
     * @param _stack_count_add 目标层数
     */
    static set_stack_count(_stack_count_add: number): void;
}

// ModifierComp 类声明
declare class ModifierComp {
    /**
     * 添加效果到单位
     * @param _modifier_id 效果编号
     * @returns 添加的效果对象
     */
    static add_modifier(_modifier_id: ModifierKey): Modifier;

    /**
     * 添加带参数的效果到单位
     * @param _modifier_id 效果编号
     * @param _params_dict 额外参数字典
     * @returns 添加的效果对象
     */
    static add_modifier_by_key(_modifier_id: ModifierKey, _params_dict: any): Modifier;

    /**
     * 销毁指定效果
     * @param _modifier 目标效果对象
     */
    static destroy_modifier(_modifier: Modifier): void;

    /**
     * 获取单位身上指定编号的效果
     * @param _modifier_id 效果ID
     * @returns 对应的效果对象
     */
    static get_modifier_by_modifier_key(_modifier_id: ModifierKey): Modifier;

    /** 获取单位身上的所有效果 */
    static get_modifiers(): Modifier[];

    /**
     * 检查单位是否拥有指定编号的效果
     * @param _modifier_key 效果编号
     * @returns 是否拥有该效果
     */
    static has_modifier_by_key(_modifier_key: ModifierKey): boolean;

    /**
     * 从单位身上移除指定编号的效果
     * @param _modifier_id 效果编号
     */
    static remove_modifier_by_key(_modifier_id: ModifierKey): void;
}

// MoveStatusComp 类声明
declare class MoveStatusComp {
    /** 判断当前是否处于滚动状态 */
    static is_fling_status(): boolean;

    /** 判断当前是否处于失控状态 */
    static is_lost_control_status(): boolean;
}

// LiftComp 类声明
declare class LiftComp {
    /**
     * 举起指定单位
     * @param _unit 被抓举的目标单位
     */
    static lift_unit(_unit: Unit): void;
}

// LiftedComp 类声明
declare class LiftedComp {
    /**
     * 设置自定义投掷力量
     * @param _force 投掷力量值
     */
    static set_custom_thrown_force(_force: Fixed): void;

    /**
     * 设置是否启用自定义投掷力量
     * @param _enable 是否启用
     */
    static set_custom_thrown_force_enabled(_enable: boolean): void;

    /**
     * 设置当前单位是否可被抓举
     * @param _enable 是否允许被抓举
     */
    static set_lifted_enabled(_enable: boolean): void;
}

// LuaAPI 类声明
declare class LuaAPI {
    /**
     * 按帧数延迟调用函数
     * @param _interval 延迟的帧数
     * @param _callback 延迟后执行的回调函数
     */
    static call_delay_frame(_interval: number, _callback: () => void): void;

    /**
     * 按时间延迟调用函数
     * @param _interval 延迟的时间（秒）
     * @param _callback 延迟后执行的回调函数
     */
    static call_delay_time(_interval: Fixed, _callback: () => void): void;

    /** 启用开发者模式 */
    static enable_developer_mode(): boolean;

    /**
     * 启用错误中断模式
     * @param _enable 是否启用错误中断
     */
    static enable_error_interruption_mode(_enable: boolean): void;

    /**
     * 获取单位的子部件列表（性能消耗较高）
     * @param _obj 目标单位
     * @returns 子组件名称列表
     */
    static get_component_list(_obj: Unit): string[];

    /** 获取当前单位 */
    static get_current_unit(): Unit;

    /**
     * 获取全局变量
     * @param _var_name 全局变量名称
     * @returns 全局变量的值
     */
    static get_global_var(_var_name: string): any;

    /**
     * 获取单位的ID
     * @param _unit 目标单位
     * @returns 单位ID
     */
    static get_unit_id(_unit: Unit): number;

    /**
     * 获取变量的类型
     * @param _value 目标变量
     * @returns 变量类型的字符串表示
     */
    static get_value_type(_value: any): string;

    /**
     * 注册全局自定义事件监听
     * @param _event_name 自定义事件名称
     * @param _callback 事件触发时的回调函数
     * @returns 注册ID（用于注销）
     */
    static global_register_custom_event(
        _event_name: string, 
        _callback: (data: any) => void
    ): number;

    /**
     * 注册全局触发器
     * @param _event_desc 事件描述及参数数组
     * @param _callback 触发器触发时的回调函数
     * @returns 注册ID（用于注销）
     */
    static global_register_trigger_event(
        _event_desc: any[], 
        _callback: (...args: any[]) => void
    ): number;

    /**
     * 发送全局自定义事件
     * @param _event_name 自定义事件名称
     * @param _data 附带的事件数据
     */
    static global_send_custom_event(_event_name: string, _data: any): void;

    /**
     * 注销全局自定义事件监听
     * @param _id 要注销的事件注册ID
     */
    static global_unregister_custom_event(_id: number): void;

    /**
     * 注销全局触发器
     * @param _id 要注销的触发器注册ID
     */
    static global_unregister_trigger_event(_id: number): void;

    /**
     * 检查单位是否含有指定子部件
     * @param _object 目标单位
     * @param _name 子组件名称
     * @returns 是否含有该子组件
     */
    static has_component(_object: Unit, _name: string): boolean;

    /**
     * 输出日志信息
     * @param _content 日志内容
     */
    static log(_content: string): void;

    /**
     * 查询UI节点（性能消耗较高）
     * @param _name UI节点名称
     * @returns 对应的UI节点
     */
    static query_ui_node(_name: string): ENode;

    /**
     * 批量查询UI节点（性能消耗较高）
     * @param _name_list UI节点名称列表
     * @returns 对应的UI节点列表
     */
    static query_ui_nodes(_name_list: string[]): ENode[];

    /**
     * 查询组件单位（性能消耗较高）
     * @param _name 单位名称
     * @returns 对应的单位
     */
    static query_unit(_name: string): Unit;

    /**
     * 批量查询单位（按名称）
     * @param _name_list 单位名称列表
     * @returns 对应的单位列表
     */
    static query_units(_name_list: string[]): Unit[];

    /**
     * 批量查询单位（按类型和预设）
     * @param _unit_type 单位类型
     * @param _unit_eid 预设ID
     * @returns 符合条件的单位列表
     */
    static query_units_by_type(_unit_type: Enums.UnitType, _unit_eid: number): Unit[];

    /** 生成一个随机数 */
    static rand(): number;

    /**
     * 设置帧回调函数
     * @param _pre_handler? 帧前回调函数
     * @param _post_handler? 帧后回调函数
     */
    static set_tick_handler(
        _pre_handler?: () => void, 
        _post_handler?: () => void
    ): void;

    /**
     * 注册单位创建回调
     * @param _unit_type 单位类型
     * @param _unit_eid 预设ID
     * @param _callback 单位创建时的回调函数
     */
    static unit_register_creation_handler(
        _unit_type: Enums.UnitType, 
        _unit_eid: number, 
        _callback: (unit: Unit) => void
    ): void;

    /**
     * 注册单位自定义事件监听
     * @param _unit 目标单位
     * @param _event_name 自定义事件名称
     * @param _callback 事件触发时的回调函数
     * @returns 注册ID（用于注销）
     */
    static unit_register_custom_event(
        _unit: Unit, 
        _event_name: string, 
        _callback: (data: any) => void
    ): number;

    /**
     * 注册单位触发器
     * @param _unit 目标单位
     * @param _event_desc 事件描述及参数数组
     * @param _callback 触发器触发时的回调函数
     * @returns 触发器ID（用于注销）
     */
    static unit_register_trigger_event(
        _unit: Unit, 
        _event_desc: any[], 
        _callback: (...args: any[]) => void
    ): number;

    /**
     * 向指定单位发送自定义事件
     * @param _unit 目标单位
     * @param _event_name 自定义事件名称
     * @param _data 附带的事件数据
     */
    static unit_send_custom_event(_unit: Unit, _event_name: string, _data: any): void;

    /**
     * 注销单位创建回调
     * @param _unit_type 单位类型
     * @param _unit_eid 预设ID
     */
    static unit_unregister_creation_handler(
        _unit_type: Enums.UnitType, 
        _unit_eid: number
    ): void;

    /**
     * 注销单位自定义事件监听
     * @param _unit 目标单位
     * @param _id 要注销的事件注册ID
     */
    static unit_unregister_custom_event(_unit: Unit, _id: number): void;

    /**
     * 注销单位触发器
     * @param _unit 目标单位
     * @param _id 要注销的触发器ID
     */
    static unit_unregister_trigger_event(_unit: Unit, _id: number): void;
}
// LevelComp 类声明
declare class LevelComp {
    /**
     * 获得经验值
     * @param _killed_exp 获得的经验值
     */
    static gain_exp(_killed_exp: Fixed): void;

    /** 获取当前经验值 */
    static get_exp(): Fixed;

    /** 获取击杀经验点 */
    static get_killed_exp(): Fixed;

    /** 获取当前等级 */
    static get_level(): number;

    /** 执行升级操作 */
    static level_up(): void;

    /**
     * 设置击杀经验点
     * @param _killed_exp 击杀可获得的经验值
     */
    static set_killed_exp(_killed_exp: Fixed): void;
}

// LifeComp 类声明
declare class LifeComp {
    /** 判断生物是否可以复活 */
    static can_reborn(): boolean;

    /**
     * 改变健康值（生命值）
     * @param _value 健康值变化量（正数增加，负数减少）
     */
    static change_hp(_value: Fixed): void;

    /**
     * 使生物死亡
     * @param _dmg_unit? 造成伤害的来源单位
     */
    static die(_dmg_unit?: Unit): void;

    /** 获取当前健康值（生命值） */
    static get_hp(): Fixed;

    /** 获取最大健康值（生命值） */
    static get_hp_max(): Fixed;

    /** 获取当前命数 */
    static get_life(): number;

    /** 获取最大命数 */
    static get_life_max(): number;

    /** 判断是否启用无限复活 */
    static is_infinite_reborn(): boolean;

    /**
     * 使生物复活
     * @param _immediate? 是否立即复活（不等待复活时间）
     */
    static reborn(_immediate?: boolean): void;

    /**
     * 设置是否自动复活
     * @param _auto_reborn 是否启用自动复活
     */
    static set_auto_reborn_enabled(_auto_reborn: boolean): void;

    /**
     * 设置最大健康值（生命值）
     * @param _value 目标最大健康值
     */
    static set_hp_max(_value: Fixed): void;

    /**
     * 设置是否启用无限复活
     * @param _enable_reborn 是否启用无限复活
     */
    static set_infinite_reborn_enabled(_enable_reborn: boolean): void;

    /**
     * 改变当前命数
     * @param _value 目标命数
     */
    static set_life_count(_value: number): void;

    /**
     * 改变最大命数
     * @param _value 目标最大命数
     */
    static set_life_max(_value: number): void;

    /**
     * 设置是否原地复活
     * @param _reborn_in_place 是否原地复活
     * @param _reset_camera 是否重置相机位置
     */
    static set_reborn_in_place(_reborn_in_place: boolean, _reset_camera: boolean): void;

    /**
     * 设置复活时间
     * @param _reborn_time 复活所需时间
     */
    static set_reborn_time(_reborn_time: Fixed): void;
}

// LifeEntity 类声明
declare class LifeEntity implements 
    AbilityComp, AttrComp, BuffStateComp, CharacterComp, 
    DisplayComp, EquipmentComp, JumpComp, LevelComp, LifeComp, 
    LiftComp, LiftedComp, ModifierComp, MoveStatusComp, Unit, 
    UnitInteractVolumeComp {
    
    /** 获取当前朝向的方向向量 */
    static get_direction(): Vector3;

    /** 获取生命体血条的宽度缩放比例 */
    static get_hpbar_scale_x(): Fixed;

    /** 获取生命体血条的高度缩放比例 */
    static get_hpbar_scale_y(): Fixed;

    /** 获取当前被该生命体抓举的其他生命体 */
    static get_lifted_lifeentity(): LifeEntity;

    /** 获取当前被该生命体抓举的组件 */
    static get_lifted_obstacle(): Obstacle;

    /** 判断该生命体是否可拖动 */
    static is_draggable(): boolean;

    /** 判断该生命体是否可点击 */
    static is_touchable(): boolean;

    /** 命令角色执行跳跃动作 */
    static jump(): void;

    /**
     * 发送气泡表情
     * @param _emoji_key 表情编号
     * @param _show_time 表情显示持续时间
     * @param _offset 表情显示位置的偏移量
     */
    static play_emoji_with_offset(
        _emoji_key: EmojiKey, 
        _show_time: Fixed, 
        _offset: Vector3
    ): void;

    /**
     * 播放面部表情
     * @param _emoji_key 表情编号
     * @param _show_time 表情显示持续时间
     */
    static play_face_expression(_emoji_key: EmojiKey, _show_time: Fixed): void;

    /** 还原模型的所有变化（恢复到初始状态） */
    static reset_model(): void;

    /**
     * 设置朝向
     * @param _face_dir 目标朝向的方向向量
     */
    static set_direction(_face_dir: Vector3): void;

    /**
     * 设置生命体血条的缩放比例
     * @param _hpbar_scale_x 宽度缩放比例
     * @param _hpbar_scale_y 高度缩放比例
     */
    static set_hpbar_scale(_hpbar_scale_x: Fixed, _hpbar_scale_y: Fixed): void;

    /**
     * 设置质量条是否显示
     * @param _visible 是否显示质量条
     */
    static set_mass_bar_visible(_visible: boolean): void;

    /**
     * 根据角色设置模型
     * @param _character 角色对象
     * @param _include_ugc_model? 是否包含自定义形象
     * @param _inherit_scale? 是否继承缩放比例
     * @param _inherit_capsule_size? 是否继承胶囊体尺寸
     */
    static set_model_by_character(
        _character: Character, 
        _include_ugc_model?: boolean, 
        _inherit_scale?: boolean, 
        _inherit_capsule_size?: boolean
    ): void;

    /**
     * 根据生物设置模型
     * @param _creature 生物对象
     * @param _include_custom_model? 是否包含自定义形象
     * @param _inherit_scale? 是否继承缩放比例
     * @param _inherit_capsule_size? 是否继承胶囊体尺寸
     */
    static set_model_by_creature(
        _creature: Creature, 
        _include_custom_model?: boolean, 
        _inherit_scale?: boolean, 
        _inherit_capsule_size?: boolean
    ): void;

    /**
     * 根据生物预设设置模型
     * @param _creature_key 生物编号
     * @param _include_custom_model? 是否包含自定义形象
     * @param _inherit_scale? 是否继承缩放比例
     * @param _inherit_capsule_size? 是否继承胶囊体尺寸
     */
    static set_model_by_creature_key(
        _creature_key: CreatureKey, 
        _include_custom_model?: boolean, 
        _inherit_scale?: boolean, 
        _inherit_capsule_size?: boolean
    ): void;

    /**
     * 交换物品槽位
     * @param _equipment 目标物品
     * @param _slot_type? 目标槽位类型
     * @param _slot? 目标槽位
     */
    static swap_equipment_slot(
        _equipment: Equipment, 
        _slot_type?: Enums.EquipmentSlotType, 
        _slot?: number
    ): void;

    /** 命令生命体尝试下载具 */
    static try_exit_vehicle(): void;
}
// ItemBox 类声明
declare class ItemBox implements DisplayComp, ExprDeviceComp {
    /**
     * 添加道具箱刷新技能
     * @param _ability_key 技能编号
     * @param _weight 权重值（影响随机刷新概率）
     */
    static add_ability(_ability_key: AbilityKey, _weight: number): void;

    /**
     * 添加物品箱刷新预设
     * @param _key 物品编号
     * @param _weight 权重值（影响随机刷新概率）
     */
    static add_equipment(_key: EquipmentKey, _weight: number): void;

    /**
     * 移除道具箱刷新技能
     * @param _ability_key 目标技能编号
     */
    static remove_ability(_ability_key: AbilityKey): void;

    /**
     * 移除物品箱刷新预设
     * @param _key 目标物品编号
     */
    static remove_equipment(_key: EquipmentKey): void;
}

// JointAssistantComp 类声明
declare class JointAssistantComp {
    /**
     * 设置关节组件的启用状态
     * @param _enable 是否启用关节组件
     */
    static set_joint_assistant_enabled(_enable: boolean): void;
}

// JumpComp 类声明
declare class JumpComp {
    /** 判断当前是否位于地面 */
    static is_on_ground(): boolean;
}

// KVBase 类声明
declare class KVBase {
    /**
     * 给对象添加标签
     * @param _tag 标签文本
     */
    static add_tag(_tag: string): void;

    /** 清空对象的所有标签 */
    static clear_tag(): void;

    /**
     * 获取对象的自定义值
     * @param _value_type 值类型
     * @param _key 自定义值名称
     * @returns 对应的自定义值
     */
    static get_kv_by_type(_value_type: Enums.ValueType, _key: string): any;

    /**
     * 检查对象是否存在指定自定义值
     * @param _key 自定义值名称
     * @returns 是否存在
     */
    static has_kv(_key: string): boolean;

    /**
     * 检查对象是否含有指定标签
     * @param _tag 标签名称
     * @returns 是否含有该标签
     */
    static has_tag(_tag: string): boolean;

    /**
     * 移除对象的指定自定义值
     * @param _key 自定义值名称
     */
    static remove_kv(_key: string): void;

    /**
     * 移除对象的指定标签
     * @param _tag 标签名称
     */
    static remove_tag(_tag: string): void;

    /**
     * 设置对象公告板的文本内容
     * @param _content 公告板显示文本
     */
    static set_billboard_content(_content: string): void;

    /**
     * 设置对象的自定义值
     * @param _value_type 值类型
     * @param _key 自定义值名称
     * @param _val 自定义值内容
     */
    static set_kv_by_type(_value_type: Enums.ValueType, _key: string, _val: any): void;
}


// 类声明
declare class JointAssistant implements JointAssistantComp, Unit {
    // 具体方法将在对应的接口中声明
}

declare class Timer {
    // 具体方法将在后续补充
}

declare class UnitGroup implements Unit {
    // 具体方法将在对应的接口中声明
}

// 接口声明（用于类型实现）
declare interface JointAssistantComp {
    // 具体方法将在后续补充
}

declare interface Unit {
    // 具体方法将在后续补充
}

declare function print(text:string):void;