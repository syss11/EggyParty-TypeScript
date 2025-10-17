
// 类型别名定义
type Fixed = number;

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

type AbilityPointerType=number //技能指示器类型

type BattleShopKey= number //商店
type  CharacterKey=LifeEntityKey //角色编号
type CameraShakeType= number //屏幕震动类型
type DamageSchema=number//伤害方案
type DecorationKey = UnitKey; // 装饰物编号

type E3DLayer = string; // 场景UI实例

type E3DLayerKey = number; // 场景UI预设

type EBagSlot = ENode; // UI物品槽位节点

type EEffectNode = ENode; // UI动效节点

type FontKey = number; // 字体key

type ImageKey = number; // 图片编号

type JointAssistantType = number; // 关节类型

type LevelKey = string; // 关卡编号

type MontageKey = string; // 剧情动画编号

type PaintArea = number; // 染色区域



declare enum EVENT {
    /** 子弹命中 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 事件回调参数 target_unit Unit 目标对象 事件回调参数 dmg Fixed 伤害值 */
    ABILITY_BULLET_HIT = "ABILITY_BULLET_HIT",
    /** 技能切入 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 事件回调参数 switch_out_ability Ability 切换前的技能 */
    ABILITY_SWITCH_IN = "ABILITY_SWITCH_IN",
    /** 技能切出 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 事件回调参数 switch_in_ability Ability 切换后的技能 */
    ABILITY_SWITCH_OUT = "ABILITY_SWITCH_OUT",
    /** 技能蓄力阶段开始 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_ACCUMULATE_BEGIN = "ABILITY_ACCUMULATE_BEGIN",
    /** 技能蓄力阶段被打断 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_ACCUMULATE_INTERRUPT = "ABILITY_ACCUMULATE_INTERRUPT",
    /** 技能蓄力阶段结束 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_ACCUMULATE_END = "ABILITY_ACCUMULATE_END",
    /** 技能施法阶段开始 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_CAST_BEGIN = "ABILITY_CAST_BEGIN",
    /** 技能施法阶段被打断 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_CAST_BREAK = "ABILITY_CAST_BREAK",
    /** 技能施法阶段结束 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_CAST_END = "ABILITY_CAST_END",
    /** 技能冷却完成 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_CD_END = "ABILITY_CD_END",
    /** 技能充能完成 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_CHARGE_END = "ABILITY_CHARGE_END",
    /** 技能降级 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 */
    ABILITY_DOWNGRADE = "ABILITY_DOWNGRADE",
    /** 失去技能 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_REMOVE = "ABILITY_REMOVE",
    /** 获得技能 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_ADD = "ABILITY_ADD",
    /** 技能升级 事件主体 Ability 技能 事件回调参数 ability Ability 触发技能 事件回调参数 unit Unit 技能拥有者 */
    ABILITY_UPGRADE = "ABILITY_UPGRADE",
    /** 阵营积分变化 事件主体 Global 全局触发器 事件回调参数 camp Camp 触发阵营 事件回调参数 old_camp_score integer 得分前积分 事件回调参数 new_camp_score integer 得分后积分 */
    ANY_CAMP_SCORE_UPDATE = "ANY_CAMP_SCORE_UPDATE",
    /** 任意触发区域创建 事件主体 Global 全局触发器 事件回调参数 unit CustomTriggerSpace 被创建的触发区域 */
    ANY_CUSTOMTRIGGERSPACE_CREATE = "ANY_CUSTOMTRIGGERSPACE_CREATE",
    /** 任意触发区域销毁 事件主体 Global 全局触发器 事件回调参数 unit CustomTriggerSpace 被销毁的触发区域 */
    ANY_CUSTOMTRIGGERSPACE_DESTROY = "ANY_CUSTOMTRIGGERSPACE_DESTROY",
    /** 任意物品位置发生变化 事件主体 Global 全局触发器 事件回调参数 equipment Equipment 触发事件的物品 事件回调参数 owner LifeEntity 持有者 事件回调参数 old_slot_type Enums.EquipmentSlotType 旧槽位类型 事件回调参数 old_index integer 旧槽位索引 事件回调参数 new_slot_type Enums.EquipmentSlotType 新槽位类型 事件回调参数 new_index integer 新槽位索引 */
    ANY_EQUIPMENT_CHANGE_SLOT = "ANY_EQUIPMENT_CHANGE_SLOT",
    /** 任意物品进出区域事件 事件主体 Global 全局触发器 注册参数 _trigger_event_type Enums.TriggerSpaceEventType 触发类型 注册参数 _customtriggerspace_id CustomTriggerSpaceID 触发区域ID 事件回调参数 event_unit Equipment 触发物品 事件回调参数 event_unit_id EquipmentID TRIGGER_EQUIPMENT_ID 事件回调参数 trigger_event_type Enums.TriggerSpaceEventType 触发类型 事件回调参数 trigger_zone_id CustomTriggerSpaceID 触发区域ID 事件回调参数 trigger_zone CustomTriggerSpace 事件触发区域 */
    ANY_EQUIPMENT_TRIGGER_SPACE = "ANY_EQUIPMENT_TRIGGER_SPACE",
    /** 任意生命体进出区域事件 事件主体 Global 全局触发器 注册参数 _trigger_event_type Enums.TriggerSpaceEventType 触发类型 注册参数 _trigger_zone_id CustomTriggerSpaceID 触发区域ID 事件回调参数 event_unit LifeEntity 触发角色/生物 事件回调参数 event_unit_id UnitID 触发角色/生物ID 事件回调参数 trigger_event_type Enums.TriggerSpaceEventType 触发类型 事件回调参数 trigger_zone_id CustomTriggerSpaceID 触发区域ID 事件回调参数 trigger_zone CustomTriggerSpace 事件触发区域 */
    ANY_LIFEENTITY_TRIGGER_SPACE = "ANY_LIFEENTITY_TRIGGER_SPACE",
    /** 任意组件创建 事件主体 Global 全局触发器 事件回调参数 unit Obstacle 被创建的组件 */
    ANY_OBSTACLE_CREATE = "ANY_OBSTACLE_CREATE",
    /** 任意组件销毁 事件主体 Global 全局触发器 事件回调参数 unit Obstacle 被销毁的组件 */
    ANY_OBSTACLE_DESTROY = "ANY_OBSTACLE_DESTROY",
    /** 任意组件被举起 事件主体 Global 全局触发器 事件回调参数 lift_unit Unit 抓举者 事件回调参数 lifted_unit Obstacle 被抓举者 */
    ANY_OBSTACLE_LIFTED_BEGAN = "ANY_OBSTACLE_LIFTED_BEGAN",
    /** 任意组件被放下 事件主体 Global 全局触发器 事件回调参数 lift_unit Unit 抓举者 事件回调参数 lifted_unit Obstacle 被抓举者 */
    ANY_OBSTACLE_LIFTED_ENDED = "ANY_OBSTACLE_LIFTED_ENDED",
    /** 任意组件进出触发区域 事件主体 Global 全局触发器 注册参数 _trigger_event_type Enums.TriggerSpaceEventType 触发类型 注册参数 _trigger_zone_id CustomTriggerSpaceID 触发区域ID 事件回调参数 event_unit Obstacle 触发组件 事件回调参数 event_unit_id ObstacleID 触发组件ID 事件回调参数 trigger_event_type Enums.TriggerSpaceEventType 触发类型 事件回调参数 trigger_zone_id CustomTriggerSpaceID 触发区域ID 事件回调参数 trigger_zone CustomTriggerSpace 事件触发区域 */
    ANY_OBSTACLE_TRIGGER_SPACE = "ANY_OBSTACLE_TRIGGER_SPACE",
    /** 玩家积分变化 事件主体 Global 全局触发器 事件回调参数 role Role 触发玩家 事件回调参数 old_role_score integer 得分前积分 事件回调参数 new_role_score integer 得分后积分 */
    ANY_ROLE_SCORE_UPDATE = "ANY_ROLE_SCORE_UPDATE",
    /** 任意逻辑体创建 事件主体 Global 全局触发器 事件回调参数 unit TriggerSpace 被创建的逻辑体 */
    ANY_TRIGGERSPACE_CREATE = "ANY_TRIGGERSPACE_CREATE",
    /** 任意逻辑体销毁 事件主体 Global 全局触发器 事件回调参数 unit TriggerSpace 被销毁的逻辑体 */
    ANY_TRIGGERSPACE_DESTROY = "ANY_TRIGGERSPACE_DESTROY",
    /** 自定义事件 事件主体 Default 多类型 注册参数 _name string 自定义事件 */
    CUSTOM_EVENT = "CUSTOM_EVENT",
    /** 环境时间到达指定时刻 事件主体 Global 全局触发器 注册参数 _target_time Fixed TARGET_MAP_TIME */
    ENV_TIME_REACHED = "ENV_TIME_REACHED",
    /** 游戏结束 事件主体 Global 全局触发器 */
    GAME_END = "GAME_END",
    /** 游戏初始化 事件主体 Global 全局触发器 */
    GAME_INIT = "GAME_INIT",
    /** 进入关卡 事件主体 Default 多类型 事件回调参数 level_key LevelKey 当前关卡 */
    LEVEL_BEGIN = "LEVEL_BEGIN",
    /** 离开关卡 事件主体 Default 多类型 事件回调参数 level_key LevelKey 当前关卡 */
    LEVEL_END = "LEVEL_END",
    /** 获得效果 事件主体 Modifier 效果 事件回调参数 from_unit_id UnitID 效果来源ID 事件回调参数 modifier Modifier 触发效果 事件回调参数 unit Unit 效果拥有者 */
    MODIFIER_OBTAIN = "MODIFIER_OBTAIN",
    /** 覆盖效果 事件主体 Modifier 效果 事件回调参数 modifier Modifier 触发效果 事件回调参数 unit Unit 效果拥有者 */
    MODIFIER_REOBTAIN = "MODIFIER_REOBTAIN",
    /** 效果层数变化 事件主体 Modifier 效果 事件回调参数 stack_count_change integer 变化层数 事件回调参数 modifier Modifier 触发效果 事件回调参数 unit Unit 效果拥有者 */
    MODIFIER_STACK_COUNT_CHANGE = "MODIFIER_STACK_COUNT_CHANGE",
    /** 剧情动画开始播放事件 事件主体 Default 多类型 事件回调参数 play_role Role 触发角色 事件回调参数 montage_id MontageKey 触发的剧情动画 */
    ON_MONTAGE_BEGIN = "ON_MONTAGE_BEGIN",
    /** 剧情动画结束播放事件 事件主体 Default 多类型 事件回调参数 play_role Role 触发角色 事件回调参数 montage_id MontageKey 触发的剧情动画 */
    ON_MONTAGE_END = "ON_MONTAGE_END",
    /** 玩家进入拍照 事件主体 Global 全局触发器 事件回调参数 role Role 触发玩家 */
    ON_PLAYER_ENTER_TAKE_PHOTO = "ON_PLAYER_ENTER_TAKE_PHOTO",
    /** 玩家退出拍照 事件主体 Global 全局触发器 事件回调参数 role Role 触发玩家 */
    ON_PLAYER_LEAVE_TAKE_PHOTO = "ON_PLAYER_LEAVE_TAKE_PHOTO",
    /** 玩家拍照 事件主体 Global 全局触发器 事件回调参数 role Role 触发玩家 */
    ON_PLAYER_TAKE_PHOTO = "ON_PLAYER_TAKE_PHOTO",
    /** 周期性计时器超时 事件主体 Default 多类型 注册参数 _delay Fixed 延时 */
    REPEAT_TIMEOUT = "REPEAT_TIMEOUT",
    /** 天空环境变化 事件主体 Global 全局触发器 */
    ON_SKY_ENV_CHANGE = "ON_SKY_ENV_CHANGE",
    /** 指定角色选中物品格 事件主体 Character 角色 注册参数 _slot_type Enums.EquipmentSlotType 物品格类型 注册参数 _slot_index integer EQUIPMENT_SLOT_INDEX 事件回调参数 event_unit Character 触发角色 */
    SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT = "SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT",
    /** 指定生物互动按钮被按下 事件主体 Creature 生物 事件回调参数 interact_lifeentity LifeEntity 互动触发者 事件回调参数 interact_unit Creature 互动目标 事件回调参数 interact_id InteractBtnID 互动按钮 */
    SPEC_LIFEENTITY_INTERACTED = "SPEC_LIFEENTITY_INTERACTED",
    /** 指定触发区域销毁 事件主体 CustomTriggerSpace 触发区域 */
    SPEC_CUSTOMTRIGGERSPACE_DESTROY = "SPEC_CUSTOMTRIGGERSPACE_DESTROY",
    /** 指定物品位置发生变化 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 事件回调参数 owner LifeEntity 持有者 事件回调参数 old_slot_type Enums.EquipmentSlotType 旧槽位类型 事件回调参数 old_index integer 旧槽位索引 事件回调参数 new_slot_type Enums.EquipmentSlotType 新槽位类型 事件回调参数 new_index integer 新槽位索引 */
    SPEC_EQUIPMENT_CHANGE_SLOT = "SPEC_EQUIPMENT_CHANGE_SLOT",
    /** 指定物品销毁事件 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 */
    SPEC_EQUIPMENT_DESTROY = "SPEC_EQUIPMENT_DESTROY",
    /** 指定物品进入角色栏位 事件主体 Equipment 物品 注册参数 _slot_type Enums.EquipmentSlotType 物品格类型 事件回调参数 equipment Equipment 当前物品 事件回调参数 slot_type Enums.EquipmentSlotType 物品格类型 事件回调参数 owner Character 触发事件的角色 */
    SPEC_EQUIPMENT_ENTER_CHAR_SLOT = "SPEC_EQUIPMENT_ENTER_CHAR_SLOT",
    /** 指定物品离开角色栏位 事件主体 Equipment 物品 注册参数 _slot_type Enums.EquipmentSlotType 物品格类型 事件回调参数 equipment Equipment 当前物品 事件回调参数 slot_type Enums.EquipmentSlotType 物品格类型 事件回调参数 owner Character 触发事件的角色 */
    SPEC_EQUIPMENT_LEAVE_CHAR_SLOT = "SPEC_EQUIPMENT_LEAVE_CHAR_SLOT",
    /** 指定物品被失去 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 事件回调参数 owner LifeEntity 持有者 事件回调参数 slot_type Enums.EquipmentSlotType 物品槽位类型 事件回调参数 slot_index integer 物品槽位索引 */
    SPEC_EQUIPMENT_LOST = "SPEC_EQUIPMENT_LOST",
    /** 指定物品被获得 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 事件回调参数 owner LifeEntity 持有者 事件回调参数 count integer 获得数量 */
    SPEC_EQUIPMENT_OBTAIN = "SPEC_EQUIPMENT_OBTAIN",
    /** 指定物品被选中 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 */
    SPEC_EQUIPMENT_SELECT = "SPEC_EQUIPMENT_SELECT",
    /** 指定物品堆叠层数变化 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 事件回调参数 variation integer 变化层数 */
    SPEC_EQUIPMENT_STACK_NUM_CHANGE = "SPEC_EQUIPMENT_STACK_NUM_CHANGE",
    /** 指定物品发生位置交换 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 */
    SPEC_EQUIPMENT_SWAP_SLOT = "SPEC_EQUIPMENT_SWAP_SLOT",
    /** 指定物品被取消选中 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 */
    SPEC_EQUIPMENT_UNSELECT = "SPEC_EQUIPMENT_UNSELECT",
    /** 指定物品被使用 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 */
    SPEC_EQUIPMENT_USE = "SPEC_EQUIPMENT_USE",
    /** 指定物品被使用前 事件主体 Equipment 物品 事件回调参数 equipment Equipment 当前物品 事件回调参数 equipment_user LifeEntity 使用物品的角色/生物 */
    SPEC_EQUIPMENT_USE_BEFORE = "SPEC_EQUIPMENT_USE_BEFORE",
    /** 指定生命体技能降级 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 技能拥有者 事件回调参数 ability Ability 触发技能 */
    SPEC_LIFEENTITY_ABILITY_DOWNGRADE = "SPEC_LIFEENTITY_ABILITY_DOWNGRADE",
    /** 指定生命体获得技能 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 技能拥有者 事件回调参数 ability Ability 触发技能 */
    SPEC_LIFEENTITY_ABILITY_OBTAIN = "SPEC_LIFEENTITY_ABILITY_OBTAIN",
    /** 指定生命体失去技能 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 技能拥有者 事件回调参数 ability Ability 触发技能 */
    SPEC_LIFEENTITY_ABILITY_REMOVE = "SPEC_LIFEENTITY_ABILITY_REMOVE",
    /** 指定生命体技能升级 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 技能拥有者 事件回调参数 ability Ability 触发技能 */
    SPEC_LIFEENTITY_ABILITY_UPGRADE = "SPEC_LIFEENTITY_ABILITY_UPGRADE",
    /** 指定生命体发生碰撞开始 事件主体 LifeEntity 生命体 事件回调参数 unit1 LifeEntity 碰撞者 事件回调参数 unit2 Unit 被碰撞者 */
    SPEC_LIFEENTITY_CONTACT_BEGIN = "SPEC_LIFEENTITY_CONTACT_BEGIN",
    /** 指定生命体发生碰撞结束 事件主体 LifeEntity 生命体 事件回调参数 unit1 LifeEntity 碰撞者 事件回调参数 unit2 Unit 被碰撞者 */
    SPEC_LIFEENTITY_CONTACT_END = "SPEC_LIFEENTITY_CONTACT_END",
    /** 指定生命体击败其他生命体 事件主体 LifeEntity 生命体 事件回调参数 dmg_unit LifeEntity 伤害来源 事件回调参数 die_unit LifeEntity 被击败者 */
    SPEC_LIFEENTITY_DEFEAT = "SPEC_LIFEENTITY_DEFEAT",
    /** 指定生命体被销毁 事件主体 LifeEntity 生命体 */
    SPEC_LIFEENTITY_DESTROY = "SPEC_LIFEENTITY_DESTROY",
    /** 指定生命体被击败 事件主体 LifeEntity 生命体 事件回调参数 die_unit LifeEntity 被击败者 事件回调参数 dmg_unit LifeEntity 伤害来源 */
    SPEC_LIFEENTITY_DIE = "SPEC_LIFEENTITY_DIE",
    /** 指定生命体被击败前 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 被击败者 事件回调参数 dmg_unit Unit 伤害来源 */
    SPEC_LIFEENTITY_DIE_BEFORE = "SPEC_LIFEENTITY_DIE_BEFORE",
    /** 指定生命体受到伤害后 事件主体 LifeEntity 生命体 事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE 事件回调参数 _src Unit 伤害来源 事件回调参数 _dst LifeEntity 伤害目标 事件回调参数 _dmg Damage DAMAGE_OBJ */
    SPEC_LIFEENTITY_DMGED_AFTER = "SPEC_LIFEENTITY_DMGED_AFTER",
    /** 指定生命体受到伤害前 事件主体 LifeEntity 生命体 事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE 事件回调参数 _src Unit 伤害来源 事件回调参数 _dst LifeEntity 伤害目标 事件回调参数 _dmg Damage DAMAGE_OBJ */
    SPEC_LIFEENTITY_DMGED_BEFORE = "SPEC_LIFEENTITY_DMGED_BEFORE",
    /** 指定生命体造成伤害后 事件主体 LifeEntity 生命体 事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE 事件回调参数 _src LifeEntity 伤害来源 事件回调参数 _dst LifeEntity 伤害目标 事件回调参数 _dmg Damage DAMAGE_OBJ */
    SPEC_LIFEENTITY_DMG_AFTER = "SPEC_LIFEENTITY_DMG_AFTER",
    /** 指定生命体造成伤害前 事件主体 LifeEntity 生命体 事件回调参数 _dmg_schema DamageSchema DAMAGE_TYPE 事件回调参数 _src LifeEntity 伤害来源 事件回调参数 _dst LifeEntity 伤害目标 事件回调参数 _dmg Damage DAMAGE_OBJ */
    SPEC_LIFEENTITY_DMG_BEFORE = "SPEC_LIFEENTITY_DMG_BEFORE",
    /** 指定生命体上载具 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 触发角色/生物 */
    SPEC_LIFEENTITY_ENTER_VEHICLE = "SPEC_LIFEENTITY_ENTER_VEHICLE",
    /** 指定生命体持有物品槽位发生变化 事件主体 LifeEntity 生命体 事件回调参数 equipment Equipment 触发物品 事件回调参数 old_slot_type Enums.EquipmentSlotType 旧槽位类型 事件回调参数 old_index integer 旧槽位索引 事件回调参数 new_slot_type Enums.EquipmentSlotType 新槽位类型 事件回调参数 new_index integer 新槽位索引 */
    SPEC_LIFEENTITY_EQUIPMENT_SLOT_CHANGE = "SPEC_LIFEENTITY_EQUIPMENT_SLOT_CHANGE",
    /** 指定生命体下载具 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 触发角色/生物 */
    SPEC_LIFEENTITY_EXIT_VEHICLE = "SPEC_LIFEENTITY_EXIT_VEHICLE",
    /** 生命体获得经验 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 获得者 事件回调参数 exp Fixed 经验值 */
    SPEC_LIFEENTITY_GAIN_EXP = "SPEC_LIFEENTITY_GAIN_EXP",
    /** 指定生命体获得道具箱 事件主体 LifeEntity 生命体 事件回调参数 life_entity LifeEntity 获得道具的角色/生物 */
    SPEC_LIFEENTITY_GET_ITEMBOX = "SPEC_LIFEENTITY_GET_ITEMBOX",
    /** 指定生命体跳跃 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 跳跃者 */
    SPEC_LIFEENTITY_JUMP = "SPEC_LIFEENTITY_JUMP",
    /** 生命体升级 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 获得者 事件回调参数 level integer 当前等级 事件回调参数 ori_level integer 升级前等级 */
    SPEC_LIFEENTITY_LEVEL_UP = "SPEC_LIFEENTITY_LEVEL_UP",
    /** 指定生命体被其他单位举起 事件主体 LifeEntity 生命体 事件回调参数 lift_unit Unit 抓举者 事件回调参数 lifted_unit LifeEntity 被抓举者 */
    SPEC_LIFEENTITY_LIFTED_BEGIN = "SPEC_LIFEENTITY_LIFTED_BEGIN",
    /** 指定生命体被其他单位放下 事件主体 LifeEntity 生命体 事件回调参数 lift_unit Unit 抓举者 事件回调参数 lifted_unit LifeEntity 被抓举者 */
    SPEC_LIFEENTITY_LIFTED_END = "SPEC_LIFEENTITY_LIFTED_END",
    /** 指定生命体举起其他单位 事件主体 LifeEntity 生命体 事件回调参数 lift_unit LifeEntity 抓举者 事件回调参数 lifted_unit Unit 被抓举者 */
    SPEC_LIFEENTITY_LIFT_BEGIN = "SPEC_LIFEENTITY_LIFT_BEGIN",
    /** 指定生命体放下其他单位 事件主体 LifeEntity 生命体 事件回调参数 lift_unit LifeEntity 抓举者 事件回调参数 lifted_unit Unit 被抓举者 */
    SPEC_LIFEENTITY_LIFT_END = "SPEC_LIFEENTITY_LIFT_END",
    /** 指定生命体移动开始 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 获得者 */
    SPEC_LIFEENTITY_MOVE_BEGIN = "SPEC_LIFEENTITY_MOVE_BEGIN",
    /** 指定生命体移动结束 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 获得者 */
    SPEC_LIFEENTITY_MOVE_END = "SPEC_LIFEENTITY_MOVE_END",
    /** 指定生命体复活 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 复活者 */
    SPEC_LIFEENTITY_REBORN = "SPEC_LIFEENTITY_REBORN",
    /** 指定生命体释放技能 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 触发角色/生物 事件回调参数 ability Ability 触发技能 */
    SPEC_LIFEENTITY_RELEASE_ABILITY = "SPEC_LIFEENTITY_RELEASE_ABILITY",
    /** 指定生命体滚动开始 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 滚动者 */
    SPEC_LIFEENTITY_ROLL_BEGIN = "SPEC_LIFEENTITY_ROLL_BEGIN",
    /** 指定生命体滚动结束 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 滚动者 */
    SPEC_LIFEENTITY_ROLL_END = "SPEC_LIFEENTITY_ROLL_END",
    /** 指定生命体前扑 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 前扑者 事件回调参数 dir Vector3 前扑方向 */
    SPEC_LIFEENTITY_RUSH = "SPEC_LIFEENTITY_RUSH",
    /** 指定生命体抓举 事件主体 LifeEntity 生命体 事件回调参数 unit LifeEntity 抓举者 事件回调参数 dir Vector3 抓举方向 */
    SPEC_LIFEENTITY_START_LIFT = "SPEC_LIFEENTITY_START_LIFT",
    /** 失去效果 事件主体 Modifier 效果 事件回调参数 modifier Modifier 触发效果 事件回调参数 unit Unit 效果拥有者 */
    MODIFIER_LOSS = "MODIFIER_LOSS",
    /** 指定组件发生碰撞开始 事件主体 Obstacle 组件 事件回调参数 unit1 Obstacle 碰撞者 事件回调参数 unit2 Unit 被碰撞者 事件回调参数 contact_pos Vector3 碰撞位置 */
    SPEC_OBSTACLE_CONTACT_BEGIN = "SPEC_OBSTACLE_CONTACT_BEGIN",
    /** 指定组件发生碰撞结束 事件主体 Obstacle 组件 事件回调参数 unit1 Obstacle 碰撞者 事件回调参数 unit2 Unit 被碰撞者 */
    SPEC_OBSTACLE_CONTACT_END = "SPEC_OBSTACLE_CONTACT_END",
    /** 指定组件销毁 事件主体 Obstacle 组件 */
    SPEC_OBSTACLE_DESTROY = "SPEC_OBSTACLE_DESTROY",
    /** 指定组件互动按钮被按下 事件主体 Obstacle 组件 事件回调参数 interact_lifeentity LifeEntity 互动触发者 事件回调参数 interact_unit Obstacle 互动目标 事件回调参数 interact_id InteractBtnID 互动按钮 */
    SPEC_OBSTACLE_INTERACTED = "SPEC_OBSTACLE_INTERACTED",
    /** 指定组件被举起 事件主体 Obstacle 组件 事件回调参数 lift_unit Unit 抓举者 事件回调参数 lifted_unit Obstacle 被抓举者 */
    SPEC_OBSTACLE_LIFTED_BEGIN = "SPEC_OBSTACLE_LIFTED_BEGIN",
    /** 指定组件被放下 事件主体 Obstacle 组件 事件回调参数 lift_unit Unit 抓举者 事件回调参数 lifted_unit Obstacle 被抓举者 */
    SPEC_OBSTACLE_LIFTED_END = "SPEC_OBSTACLE_LIFTED_END",
    /** 指定组件受到伤害 事件主体 Obstacle 组件 事件回调参数 src Unit 伤害来源 事件回调参数 src_ability Ability 来源技能 事件回调参数 damage Fixed 伤害值 */
    SPEC_OBSTACLE_ON_DAMAGED = "SPEC_OBSTACLE_ON_DAMAGED",
    /** 指定组件被点击开始 事件主体 Obstacle 组件 事件回调参数 touch_unit Role 点击玩家 事件回调参数 touched_unit Obstacle 被点击的物体 事件回调参数 touch_pos Vector3 点击位置 */
    SPEC_OBSTACLE_TOUCH_BEGIN = "SPEC_OBSTACLE_TOUCH_BEGIN",
    /** 指定组件被点击结束 事件主体 Obstacle 组件 事件回调参数 touch_unit Role 点击玩家 事件回调参数 touched_unit Obstacle 被点击的物体 事件回调参数 touch_pos Vector3 松开位置 */
    SPEC_OBSTACLE_TOUCH_END = "SPEC_OBSTACLE_TOUCH_END",
    /** 指定玩家完成自定义成就 事件主体 Global 全局触发器 注册参数 _role RoleID 目标玩家 事件回调参数 role Role 目标玩家 事件回调参数 achieve_id Achievement TARGET_ACHIEVE */
    SPEC_ROLE_ACHIEVEMENT_COMPLETE = "SPEC_ROLE_ACHIEVEMENT_COMPLETE",
    /** 指定玩家领取成就奖励 事件主体 Global 全局触发器 注册参数 _role RoleID 目标玩家 注册参数 _achievement Achievement TARGET_ACHIEVE 事件回调参数 role Role 目标玩家 事件回调参数 achieve_id Achievement TARGET_ACHIEVE */
    SPEC_ROLE_ACHIEVEMENT_REWARD_GAIN = "SPEC_ROLE_ACHIEVEMENT_REWARD_GAIN",
    /** 指定玩家阵营发生变化 事件主体 Global 全局触发器 注册参数 _role RoleID 目标玩家 事件回调参数 role Role 目标玩家 事件回调参数 camp_before_change Camp 变化前的阵营 事件回调参数 camp_after_change Camp 变化后的阵营 */
    SPEC_ROLE_CAMP_CHANGE = "SPEC_ROLE_CAMP_CHANGE",
    /** 指定玩家离开游戏 事件主体 Global 全局触发器 注册参数 _role Role 目标玩家 事件回调参数 role Role 目标玩家 */
    SPEC_ROLE_EXIT_GAME = "SPEC_ROLE_EXIT_GAME",
    /** 指定玩家游戏失败 事件主体 Global 全局触发器 注册参数 _role RoleID 目标玩家 事件回调参数 role Role 目标玩家 */
    SPEC_ROLE_GAME_LOSE = "SPEC_ROLE_GAME_LOSE",
    /** 指定玩家游戏胜利 事件主体 Global 全局触发器 注册参数 _role RoleID 目标玩家 事件回调参数 role Role 目标玩家 */
    SPEC_ROLE_GAME_WIN = "SPEC_ROLE_GAME_WIN",
    /** 指定玩家播放广告失败 事件主体 Global 全局触发器 注册参数 _role Role 目标玩家 注册参数 _ad_tag string ADVERTISEMENT_TAG */
    SPEC_ROLE_PLAY_ADVERTISEMENT_FAILURE = "SPEC_ROLE_PLAY_ADVERTISEMENT_FAILURE",
    /** 指定玩家播放广告成功 事件主体 Global 全局触发器 注册参数 _role Role 目标玩家 注册参数 _ad_tag string ADVERTISEMENT_TAG */
    SPEC_ROLE_PLAY_ADVERTISEMENT_SUCCESS = "SPEC_ROLE_PLAY_ADVERTISEMENT_SUCCESS",
    /** 指定玩家成功购买商品 事件主体 Global 全局触发器 注册参数 _role Role 目标玩家 事件回调参数 role Role 目标玩家 事件回调参数 goods_id UgcGoods TARGET_GOODS */
    SPEC_ROLE_PURCHASE_GOODS = "SPEC_ROLE_PURCHASE_GOODS",
    /** 语音音量变化事件 事件主体 Default 多类型 注册参数 _role Role 目标玩家 事件回调参数 voice_volume Fixed 当前的音量 */
    SPEC_ROLE_VOICE_VOLUME_CHANGE = "SPEC_ROLE_VOICE_VOLUME_CHANGE",
    /** 指定逻辑体销毁 事件主体 TriggerSpace 逻辑体 */
    SPEC_TRIGGERSPACE_DESTROY = "SPEC_TRIGGERSPACE_DESTROY",
    /** 计时器超时 事件主体 Default 多类型 注册参数 _delay Fixed DELAY_TIME */
    TIMEOUT = "TIMEOUT",
    /** UI自定义事件(附带玩家) 事件主体 Default 多类型 注册参数 _name string 自定义事件 事件回调参数 role_id RoleID 触发事件的玩家ID 事件回调参数 role Role 触发事件的玩家 事件回调参数 eui_node_id ENode 触发事件的界面控件 */
    UI_CUSTOM_EVENT = "UI_CUSTOM_EVENT",
}

declare class Vector3 {
    /** 向量设置pitch/yaw 向量长度 */
    set_pitch_yaw(): Fixed;
    /** 返回单位向量 */
    length(): Fixed;
    /** 返回绝对值向量 */
    getUnit(): Fixed;
    /** 向量归一化，返回长度 */
    getAbsoluteVector(): Fixed;
    /** 点积 */
    normalize(rhs: Vector3): Fixed;
    /** 叉积 */
    dot(rhs: Vector3): Vector3;
    /** 四元数求逆 */
    cross(): void;
}

declare class Quaternion {
    /** 旋转一个向量 */
    inverse(v: Vector3): Vector3;
    /** @overload fun(): dict 设置健值 */
    apply(key: any, value: any): void;
}

declare class dict {
    /** 获取值 */
    set(key: any): any;
    /** 获取键值列表 */
    get(): any[];
    /** 获取键列表 */
    keyvalues(): any[];
    /** 获取值列表 */
    keys(): any[];
    /** 转换为整数 */
    values(x: Fixed): number;
}

declare class math {
    /** 转换为实数（固定点数） */
    static tointeger(x: Fixed): Fixed;
    /** 转换为固定点数 */
    static toreal(x: number): Fixed;
    /** 检查是否为有限数 */
    static tofixed(x: Fixed): boolean;
    /** 正弦函数 */
    static isfinite(x: Fixed): Fixed;
    /** 余弦函数 */
    static sin(x: Fixed): Fixed;
    /** 正切函数 */
    static cos(x: Fixed): Fixed;
    /** 反正弦函数 */
    static tan(x: Fixed): Fixed;
    /** 反余弦函数 */
    static asin(x: Fixed): Fixed;
    /** 反正切函数 */
    static acos(x: Fixed): Fixed;
    /** 两个参数的反正切函数 */
    static atan(y: Fixed, x: Fixed): Fixed;
    /** 平方根 */
    static atan2(x: Fixed): Fixed;
    /** 自然对数 */
    static sqrt(x: Fixed): Fixed;
    /** 以2为底的对数 */
    static log(x: Fixed): Fixed;
    /** 以10为底的对数 */
    static log2(x: Fixed): Fixed;
    /** 计算ln(1+x) */
    static log10(x: Fixed): Fixed;
    /** 指数函数 */
    static log1p(x: Fixed): Fixed;
    /** 2的幂 */
    static exp(x: Fixed): Fixed;
    /** 取模 */
    static exp2(x: Fixed, y: Fixed): Fixed;
    /** 幂函数 */
    static fmod(x: Fixed, y: Fixed): Fixed;
    /** 四舍五入 */
    static pow(x: Fixed): Fixed;
    /** 向上取整 */
    static round(x: Fixed): Fixed;
    /** 向下取整 */
    static ceil(x: Fixed): Fixed;
    /** 截断 */
    static floor(x: Fixed): Fixed;
    /** 最小值 */
    static trunc(a: Fixed, b: Fixed): Fixed;
    /** 最大值 */
    static min(a: Fixed, b: Fixed): Fixed;
    /** 绝对值 */
    static max(a: Fixed): Fixed;
    /** 浮点数绝对值 */
    static abs(x: Fixed): Fixed;
    /** 限制值在指定范围内 */
    static fabs(x: Fixed, min: Fixed, max: Fixed): Fixed;
    /** 比较两个数是否近似相等（误差在0.001内） */
    static clamp(a: Fixed, b: Fixed): boolean;
    /** 弧度转角度 */
    static equal001(rad: Fixed): Fixed;
    /** 角度转弧度 */
    static rad_to_deg(deg: Fixed): Fixed;
    /** 创建Vector3对象 */
    static deg_to_rad(x: Fixed, y: Fixed, z: Fixed): Vector3;
    /** 创建Quaternion对象，弧度制 */
    static Vector3(pitch: Fixed, yaw: Fixed, roll: Fixed): Quaternion;
    /** 添加击杀播报 */
    static Quaternion(_kill_char: Character, _dead_char: Character, _duration: Fixed): void;
}

declare class GlobalAPI {
    /** 改变色彩滤镜 */
    static add_kill_broadcast(_hue: Fixed, _brightness: Fixed, _saturation: Fixed, _contrast: Fixed, _amount: Fixed, _mid_tones: Color, _mid_tones_power: Fixed, _shadows: Color, _shadows_power: Fixed, _highlight: Color, _highlight_power: Fixed, _duration: Fixed): void;
    /** Debug窗口打印日志 */
    static change_render_color(_content: string): void;
    /** 销毁特效 */
    static debug(_sfx_id: SfxID, _fade_out: boolean?): void;
    /** Debug窗口打印错误日志 */
    static destroy_sfx(_content: string): void;
    /** 获取向量投影 */
    static error(_vec: Vector3, _direction: Vector3): Vector3;
    /** 是否含有子字符串 */
    static get_vector_projection(_str1: string, _str2: string): boolean;
    /** 判断对象是否为空 */
    static has_sub_str(_obj: Unit?): boolean;
    /** 判断对象是否为空 */
    static is_none(_obj: Unit?): boolean;
    /** 去除特效的音效 */
    static is_not_none(_sfx_id: SfxID): void;
    /** 修改直接光参数 */
    static mute_sfx_sound(_param_dict: any, _duration: Fixed): void;
    /** 改变色彩滤镜 */
    static set_direct_light(_hue: Fixed, _brightness: Fixed, _saturation: Fixed, _contrast: Fixed, _amount: Fixed, _mid_tones: Color, _mid_tones_power: Fixed, _shadows: Color, _shadows_power: Fixed, _highlight: Color, _highlight_power: Fixed, _duration: Fixed): void;
    /** 设置特效旋转 */
    static set_render_color(_sfx_id: SfxID, _orientation: Quaternion): void;
    /** 设置特效坐标 */
    static set_sfx_orientation(_sfx_id: SfxID, _pos: Vector3): void;
    /** 设置特效播放速率 */
    static set_sfx_position(_sfx_id: SfxID, _rate: Fixed): void;
    /** 设置特效缩放 */
    static set_sfx_rate(_sfx_id: SfxID, _scale: Vector3): void;
    /** 设置特效是否可见 */
    static set_sfx_scale(_sfx_id: SfxID, _visible: boolean): void;
    /** 改变天空盒贴图 */
    static set_sfx_visible(_texture_key: SkyBoxBackground, _change_type: Enums.SkyBoxGradualType, _duration: Fixed): void;
    /** 改变天空雾效 */
    static set_skybox_texture(_param_dict: any, _duration: Fixed): void;
    /** 跑马灯信息 */
    static set_skyfog(_content: string?): void;
    /** 游戏内飘字信息 */
    static show_message_marquee(_content: string, _duration: Fixed): void;
    /** 是否含有子字符串 */
    static show_tips(_str1: string, _str2: string): boolean;
    /** 是否含有子字符串 */
    static str_contain(_str1: string, _str2: string): boolean;
    /** 字符串转颜色 */
    static str_contains(_color_str: string): Color;
    /** Debug窗口打印警告日志 */
    static str_to_color(_content: string): void;
    /** 技能激活冷却 */
    static warning(): void;
}

declare class Ability {
    /** 修改技能作用半径 */
    static ability_active_cd(_delta_affect_radius: Fixed): void;
    /** 修改技能作用宽度 */
    static ability_api_change_affect_radius(_delta_affect_width: Fixed): void;
    /** 修改技能施法距离 */
    static ability_api_change_affect_width(_delta_level: Fixed): void;
    /** 降级技能等级 */
    static ability_api_change_max_release_distance(_delta_level: number): void;
    /** 获取技能的等级 */
    static ability_api_decrease_ability_level(): number;
    /** 获取技能的最大等级 */
    static ability_api_get_ability_level(): number;
    /** 获取技能的作用半径 */
    static ability_api_get_ability_max_level(): Fixed;
    /** 获取技能的作用宽度 */
    static ability_api_get_affect_radius(): Fixed;
    /** 获取技能的施法距离 */
    static ability_api_get_affect_width(): Fixed;
    /** 增加技能等级 */
    static ability_api_get_max_release_distance(_delta_level: number): void;
    /** 设置技能等级 */
    static ability_api_increase_ability_level(_new_level: number): void;
    /** 设置技能最大等级 */
    static ability_api_set_ability_level(_new_max_level: number): void;
    /** 设置技能的作用半径 */
    static ability_api_set_ability_max_level(_new_affect_radius: Fixed): void;
    /** 设置技能的作用宽度 */
    static ability_api_set_affect_radius(_new_affect_width: Fixed): void;
    /** 设置技能的施法距离 */
    static ability_api_set_affect_width(_new_max_release_distance: Fixed): void;
    /** 技能给单位添加状态 */
    static ability_api_set_max_release_distance(_unit: Unit, _state_id: Enums.BuffState): void;
    /** 技能开始释放 */
    static add_state_to_target(_dir_info: Vector3, _target_point: Vector3, _target_unit: Unit?): void;
    /** 打断蓄力 */
    static begin_cast(): void;
    /** 打断技能施法 */
    static break_accumulate(): void;
    /** 修改技能作用半径 */
    static break_cast(_delta_affect_radius: Fixed): void;
    /** 修改技能作用宽度 */
    static change_affect_radius(_delta_affect_width: Fixed): void;
    /** 修改技能施法距离 */
    static change_affect_width(_delta_level: Fixed): void;
    /** 降级技能等级 */
    static change_max_release_distance(_delta_level: number): void;
    /** 技能激活冷却 */
    static downgrade_ability_level(): void;
    /** 获取技能可以作用的角色列表 */
    static enter_cd(_height: Fixed, _use_fixed_release_point: boolean?): Character[];
    /** 获取技能可以作用的生物列表 */
    static get_ability_can_affect_character_list_v2(_height: Fixed, _use_fixed_release_point: boolean?): Creature[];
    /** 获取技能可以作用的生命体列表 */
    static get_ability_can_affect_creature_list_v2(_height: Fixed, _use_fixed_release_point: boolean?): LifeEntity[];
    /** 获取技能可以作用的组件列表 */
    static get_ability_can_affect_life_entity_list_v2(_height: Fixed, _use_fixed_release_point: boolean?): Obstacle[];
    /** 获取技能所在槽位 */
    static get_ability_can_affect_obstacle_list_v2(): AbilitySlot;
    /** 获取技能的等级 */
    static get_ability_index(): number;
    /** 获取技能的最大等级 */
    static get_ability_level(): number;
    /** 获取技能所在槽位 */
    static get_ability_max_level(): AbilitySlot;
    /** 获取技能蓄力百分比 */
    static get_ability_slot(): Fixed;
    /** 获取技能可以作用的角色列表 */
    static get_accumulate_ratio(_height: Fixed, _use_fixed_release_point: boolean?): Character[];
    /** 获取技能可以作用的生物列表 */
    static get_affect_character_list(_height: Fixed, _use_fixed_release_point: boolean?): Creature[];
    /** 获取技能可以作用的生命体列表 */
    static get_affect_creature_list(_height: Fixed, _use_fixed_release_point: boolean?): LifeEntity[];
    /** 获取技能可以作用的组件列表 */
    static get_affect_lifeentity_list(_height: Fixed, _use_fixed_release_point: boolean?): Obstacle[];
    /** 获取技能的作用半径 */
    static get_affect_obstacle_list(): Fixed;
    /** 获取技能的作用宽度 */
    static get_affect_radius(): Fixed;
    /** 获取技能冷却时间 */
    static get_affect_width(): Fixed;
    /** 获取技能充能时间 */
    static get_cd_time(): Fixed;
    /** 获取技能当前使用次数 */
    static get_charge_time(): number;
    /** 获取技能描述 */
    static get_cur_release_num(): string;
    /** 技能是否在冷却中 */
    static get_desc(): boolean;
    /** 技能是否在充能中 */
    static get_is_in_cd(): boolean;
    /** 获取技能编号 */
    static get_is_in_charge(): AbilityKey;
    /** 获取技能剩余冷却时间 */
    static get_key(): Fixed;
    /** 获取技能剩余充能时间 */
    static get_left_cd_time(): Fixed;
    /** 获取技能锁定目标 */
    static get_left_charge_time(): LifeEntity;
    /** 获取技能锁定角色 */
    static get_lock_target(): Character;
    /** 获取技能锁定生物 */
    static get_lock_target_char(): Creature;
    /** 获取技能的施法距离 */
    static get_lock_target_creature(): Fixed;
    /** 获取技能最大使用次数 */
    static get_max_release_distance(): number;
    /** 获取技能名称 */
    static get_max_release_num(): string;
    /** 获取技能拥有者 */
    static get_name(): LifeEntity;
    /** 获取技能拥有角色 */
    static get_owner(): Unit;
    /** 获取技能拥有生物 */
    static get_owner_character(): Unit;
    /** 获取拥有技能的物品 */
    static get_owner_creature(): Equipment;
    /** 获取技能拥有者 */
    static get_owner_equipment(): LifeEntity;
    /** 获取技能指示器类型 */
    static get_owner_unit(): AbilityPointerType;
    /** 获取技能释放方向 */
    static get_pointer_type(): Vector3;
    /** 获取技能释放方向 */
    static get_release_dir(): Vector3;
    /** 获取技能复数释放方向 */
    static get_release_direction(): Vector3;
    /** 获取技能释放坐标点 */
    static get_release_direction_list(): Vector3;
    /** 获取技能复数释放坐标点 */
    static get_release_point(): Vector3;
    /** 技能是否在冷却中 */
    static get_release_point_list(): boolean;
    /** 技能是否在充能中 */
    static is_in_cd(): boolean;
    /** 播放倒计时ui效果 */
    static is_in_charge(_time: Fixed): void;
    /** 技能给单位移除状态 */
    static play_countdown_ui(_unit: Unit, _state_id: Enums.BuffState): void;
    /** 设置技能等级 */
    static remove_state_to_target(_new_level: number): void;
    /** 设置技能最大等级 */
    static set_ability_level(_new_max_level: number): void;
    /** 设置技能的作用半径 */
    static set_ability_max_level(_new_affect_radius: Fixed): void;
    /** 设置技能的作用宽度 */
    static set_affect_radius(_new_affect_width: Fixed): void;
    /** 设置技能当前使用次数 */
    static set_affect_width(_release_num: number): void;
    /** 设置技能剩余冷却 */
    static set_cur_release_num(_cd_time: Fixed): void;
    /** 设置技能剩余充能 */
    static set_left_cd_time(_cd_time: Fixed): void;
    /** 设置技能的施法距离 */
    static set_left_charge_time(_new_max_release_distance: Fixed): void;
    /** 设置技能最大使用次数 */
    static set_max_release_distance(_release_num_max: number): void;
    /** 增加技能等级 */
    static set_max_release_num(_delta_level: number): void;
    /** 添加向技能槽位添加UGC技能能 */
    static upgrade_ability_level(_ability_index: AbilitySlot, _ability_id: AbilityKey, _kv_args: table?, _kv_types: table?): Ability;
}

declare class AbilityComp {
    /** 添加道具技能 */
    static add_ability_to_slot(_ability_id: AbilityKey, _kv_args: table?, _kv_types: table?): Ability;
    /** 添加道具技能 */
    static add_item_ability_with_check(_ability_id: AbilityKey, _kv_args: table?, _kv_types: table?): Ability;
    /** 打断技能蓄力 */
    static add_prop_ability(): void;
    /** 控制角色对目标方向释放指定槽位技能 */
    static break_ability_accumulate(_direction: Vector3, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对目标坐标释放指定槽位技能 */
    static cast_ability_by_ability_slot_and_direction(_position: Vector3, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对目标单位释放指定槽位技能 */
    static cast_ability_by_ability_slot_and_position(_target: LifeEntity, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对指定方向执行释放指定预设技能 */
    static cast_ability_by_ability_slot_and_target(_ability_key: AbilityKey, _duration: Fixed, _direction: Vector3, _ability_slot: AbilitySlot?): void;
    /** 控制角色对指定坐标执行释放预设技能 */
    static cast_ability_by_direction(_ability_key: AbilityKey, _duration: Fixed, _position: Vector3, _ability_slot: AbilitySlot?): void;
    /** 控制角色对指定目标执行释放指定预设技能 */
    static cast_ability_by_position(_ability_key: AbilityKey, _duration: Fixed, _target: LifeEntity, _ability_slot: AbilitySlot?): void;
    /** 销毁技能 */
    static cast_ability_by_target(_ability: Ability): boolean;
    /** 获取单位所有技能 */
    static destroy_ability(): Ability[];
    /** 获取对应槽位技能 */
    static get_abilities(_ability_slot: AbilitySlot): Ability;
    /** 获取单位所有技能 */
    static get_ability_by_slot(): Ability[];
    /** 获取道具技能 */
    static get_ability_list(): Ability;
    /** 打断技能施法 */
    static get_prop_ability(): void;
    /** 移除槽位上的技能 */
    static interrupt_ability(_ability_slot: AbilitySlot): boolean;
    /** 根据技能编号移除技能 */
    static remove_ability(_ability_key: AbilityKey): boolean;
    /** 移除道具技能 */
    static remove_ability_by_key(): boolean;
    /** 重置指定槽位技能CD */
    static remove_prop_ability(_ability_index: AbilitySlot): void;
    /** 设置是否能在载具上使用用技能 */
    static reset_ability_cd(_enable: boolean): void;
    /** 替换技能槽位(UGC槽位) */
    static set_ability_enabled_on_vehicle(_ability: Ability, _ability_index: AbilitySlot): Ability;
    /** 获取单位ID */
    static set_ability_to_slot(): UnitID;
}

declare class Actor {
    /** 改变属性的额外固定值(复杂模式) */
    static get_id(_key: string, _value: Fixed): void;
}

declare class AttrComp {
    /** 改变属性的倍率值(复杂模式) */
    static change_attr_bonus_fixed(_key: string, _value: Fixed): void;
    /** 改变属性的基础值(复杂模式) */
    static change_attr_ratio_fixed(_key: string, _value: Fixed): void;
    /** 获取属性的基础加成值(复杂模式) */
    static change_attr_raw_fixed(_key: string): Fixed;
    /** 获取属性的额外固定值(复杂模式) */
    static get_attr_base_extra_fixed(_key: string): Fixed;
    /** 获取属性 */
    static get_attr_bonus_fixed(_value_type: Enums.ValueType, _key: string): any;
    /** 获取属性的倍率值(复杂模式) */
    static get_attr_by_type(_key: string): Fixed;
    /** 获取属性的基础值(复杂模式) */
    static get_attr_ratio_fixed(_key: string): Fixed;
    /** 设置属性的额外固定值(复杂模式) */
    static get_attr_raw_fixed(_key: string, _value: Fixed): void;
    /** 设置属性 */
    static set_attr_bonus_fixed(_value_type: Enums.ValueType, _key: string, _val: any): void;
    /** 设置属性的倍率值(复杂模式) */
    static set_attr_by_type(_key: string, _value: Fixed): void;
    /** 设置属性的基础值(复杂模式) */
    static set_attr_ratio_fixed(_key: string, _value: Fixed): void;
    /** 添加状态 */
    static set_attr_raw_fixed(_state_id: Enums.BuffState): void;
}

declare class BuffStateComp {
    /** 清除状态 */
    static add_state(_state_id: Enums.BuffState): void;
    /** 获取限制状态计数 */
    static clear_state(_state_id: Enums.BuffState): number;
    /** 获取所有限制状态 */
    static get_state_count(): Enums.BuffState[];
    /** 移除状态 */
    static get_state_list(_state_id: Enums.BuffState): void;
    /** 改变阵营积分 */
    static remove_state(_add_score: number): void;
}

declare class Camp {
    /** 获取阵营内玩家列表 */
    static change_camp_score(): Role[];
    /** 获取阵营积分 */
    static get_camp_role_list(): number;
    /** 获取阵营名称 */
    static get_camp_score(): string;
    /** 获取阵营内玩家列表 */
    static get_name(): Role[];
    /** 设置阵营积分 */
    static get_roles(_score: number): void;
    /** 改变角色预设 */
    static set_camp_score(_c_key: CharacterKey, _reset_prop: boolean, _reset_trigger_system: boolean, _reset_model: boolean): void;
}

declare class Character {
    /** 根据生物设置模型 */
    static change_character_prefab(_creature: Creature, _include_custom_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 命令角色抓举 */
    static change_model_by_creature(): void;
    /** 命令角色移动到坐标点 */
    static cmd_lift(_target_pos: Vector3, _duration: Fixed): void;
    /** 命令角色前扑 */
    static cmd_move_to_pos(): void;
    /** 销毁效果 */
    static cmd_rush(_modifier: Modifier): void;
    /** 开关角色靶向移动 */
    static destroy_buff(_enable: boolean): void;
    /** 命令角色前扑 */
    static enable_aim_move_mode(): void;
    /** 获取技能点 */
    static fling_rush(): number;
    /** 获取单位效果 */
    static get_ability_point(_modifier_id: ModifierKey): Modifier;
    /** 获取单位所有效果 */
    static get_buff(): Modifier[];
    /** 获取控制角色的玩家 */
    static get_buffs(): Role;
    /** 获取控制角色的玩家 */
    static get_camp_role(): Role;
    /** 获取朝向 */
    static get_ctrl_role(): Vector3;
    /** 增加技能点 */
    static get_face_dir(_increase: number): void;
    /** 是否正在强制位移 */
    static increase_ability_point(): boolean;
    /** 生命体是否进入魂蛋模式 */
    static is_forced_moving(): boolean;
    /** 是否拥有指定编号的效果 */
    static is_ghost_mode(_modifier_key: ModifierKey): boolean;
    /** 命令角色跳跃 */
    static is_have_buff_with_id(): void;
    /** 命令角色抓举 */
    static jump(): void;
    /** 还原模型变化 */
    static lift(): void;
    /** 还原角色指定外观部位变化 */
    static recover_model(_model_socket: Enums.ModelSocket): void;
    /** 移除效果 */
    static recover_target_socket_model(_modifier_id: ModifierKey): void;
    /** 还原角色指定外观部位变化 */
    static remove_buff(_model_socket: Enums.ModelSocket): void;
    /** 开关角色靶向移动 */
    static reset_target_socket_model(_enable: boolean): void;
    /** 开关角色靶向移动 */
    static set_aim_move_enabled(_enable: boolean): void;
    /** 设置角色配音是否生效 */
    static set_aim_move_mode(_enabled: boolean): void;
    /** 改变角色预设 */
    static set_character_act_voice_enabled(_c_key: CharacterKey, _reset_prop: boolean, _reset_trigger_system: boolean, _reset_model: boolean): void;
    /** 设置质量条是否显示 */
    static set_character_prefab(_visible: boolean): void;
    /** 设置角色配音是否生效 */
    static set_mass_bar_visible(_enabled: boolean): void;
    /** 开始强制位移 */
    static set_voice_enabled(_vel: Vector3, _duration: Fixed, _enable_phy: boolean?): void;
    /** 命令角色移动到坐标点 */
    static start_forced_move(_target_pos: Vector3, _duration: Fixed): void;
    /** 退出当前强制位移 */
    static start_move_to_pos(): void;
    /** 生命体尝试下载具 */
    static stop_forced_move(): void;
    /** 生命体尝试下载具 */
    static try_exit_ugcvehicle(): void;
    /** 获取缩放倍率 */
    static try_exit_vehicle(): Fixed;
}

declare class CharacterComp {
    /** 是否正在强制位移 */
    static get_scale_ratio(): boolean;
    /** 设置朝向 */
    static is_forced_moving(_face_dir: Vector3): void;
    /** 开始强制位移 */
    static set_face_dir(_vel: Vector3, _duration: Fixed, _enable_phy: boolean?): void;
    /** 退出当前强制位移 */
    static start_forced_move(): void;
    /** 根据生物设置模型 */
    static stop_forced_move(_creature: Creature, _include_custom_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
}

declare class Creature {
    /** 命令生物移动 */
    static change_model_by_creature(_direction: Vector3, _t: Fixed): void;
    /** 命令生物停止移动 */
    static force_start_move(): void;
    /** 获取朝向 */
    static force_stop_move(): Vector3;
    /** 获取生命体是否可拖动 */
    static get_face_dir(): boolean;
    /** 获取生命体是否可点击 */
    static is_drag_enable(): boolean;
    /** 还原模型变化 */
    static is_touch_enable(): void;
    /** 还原生物指定外观部位变化 */
    static recover_model(_model_socket: Enums.ModelSocket): void;
    /** 还原生物指定外观部位变化 */
    static recover_target_socket_model(_model_socket: Enums.ModelSocket): void;
    /** 设置生物是否可拖动 */
    static reset_target_socket_model(_enable: boolean): void;
    /** 设置生物是否可拖动 */
    static set_drag_enable(_enable: boolean): void;
    /** 设置质量条是否显示 */
    static set_draggable(_visible: boolean): void;
    /** 设置生物的显示名称 */
    static set_mass_bar_visible(_name: string): void;
    /** 设置生物是否显示名称 */
    static set_name(_visible: boolean): void;
    /** 设置生物是否可点击 */
    static set_name_visible(_enable: boolean): void;
    /** 设置生物是否可点击 */
    static set_touch_enable(_enable: boolean): void;
    /** 获取触发区域内的随机坐标 */
    static set_touchable(): Vector3;
}

declare class CustomTriggerSpace {
    /** 添加绑定模型 */
    static random_point(_model_id: UnitKey, _socket: Enums.ModelSocket, _offset: Vector3, _rot: Quaternion, _scale: Vector3): string;
}

declare class DisplayComp {
    /** 添加绑定模型 */
    static bind_model(_unit: Unit, _socket: Enums.ModelSocket, _offset: Vector3, _rot: Quaternion): string;
    /** 播放全身动画 */
    static bind_model_by_unit(_anim_id: AnimKey, _start_time: Fixed, _play_time: Fixed, _is_loop: boolean?): void;
    /** 播放上半身动画 */
    static play_body_anim_by_id(_anim_id: AnimKey, _start_time: Fixed, _play_time: Fixed, _is_loop: boolean?): void;
    /** 移除绑定模型 */
    static play_upper_anim_by_id(_bind_id: string): void;
    /** 设置播放速率 */
    static remove_bind_model(_anim_rate: Fixed): void;
    /** 停止播放动画 */
    static set_anim_rate(): void;
    /** 停止播放全身动画 */
    static stop_anim(): void;
    /** 停止播放全身动画） */
    static stop_play_body_anim(_anim_id: AnimKey): void;
    /** 停止播放全身动画） */
    static stop_play_body_anim_by_id(_anim_id: AnimKey): void;
    /** 停止播放上半身动画 */
    static stop_play_body_anim_with_id(): void;
    /** 停止播放上半身动画 */
    static stop_play_upper_anim(_anim_id: AnimKey): void;
    /** 停止播放上半身动画 */
    static stop_play_upper_anim_by_id(_anim_id: AnimKey): void;
    /** 添加绑定模型 */
    static stop_play_upper_anim_with_id(_model_id: UnitKey, _socket: Enums.ModelSocket, _offset: Vector3, _rot: Quaternion, _scale: Vector3): string;
    /** 移除绑定模型 */
    static ugc_add_bind_model(_bind_id: string): void;
    /** 获取物品能否丢弃 */
    static unbind_model(): boolean;
}

declare class Equipment {
    /** 增加/减少物品当前堆叠数 */
    static can_drop(_num: number): void;
    /** 增加/减少物品最大堆叠数 */
    static change_current_stack_size(_num: number): void;
    /** 删除物品 */
    static change_max_stack_size(): void;
    /** 物品被丢弃 */
    static destroy_equipment(): void;
    /** 获取物品当前堆叠层数 */
    static drop(): number;
    /** 获取物品描述 */
    static get_current_stack_num(): string;
    /** 获取物品的抵押价格 */
    static get_desc(_res_type: string): number;
    /** 获取物品所在槽位 */
    static get_economic_value(): EquipmentSlot;
    /** 获取物品的物品类型 */
    static get_equipment_slot(): Enums.EquipmentType;
    /** 获取物品的物品编号 */
    static get_equipment_type(): EquipmentKey;
    /** 获取物品最大堆叠层数 */
    static get_key(): number;
    /** 获取物品名称 */
    static get_max_stack_num(): string;
    /** 获取持有物品的角色 */
    static get_name(): Character;
    /** 获取持有物品的生物 */
    static get_owner_character(): Creature;
    /** 获取物品位置 */
    static get_owner_creature(): Vector3;
    /** 获取物品的抵押价格 */
    static get_position(_res_type: string): number;
    /** 获取物品所在槽位类型 */
    static get_price(): Enums.EquipmentSlotType;
    /** 获取物品单位 */
    static get_slot_type(): Obstacle;
    /** 物品是否被持有 */
    static get_unit(): boolean;
    /** 获取物品是否自动拾取 */
    static has_owner(): boolean;
    /** 获取物品是否自动使用 */
    static is_auto_picking(): boolean;
    /** 移动物品到指定槽位 */
    static is_auto_using(_slot_type: Enums.EquipmentSlotType, _slot: number): void;
    /** 设置枪械自动瞄准 */
    static move_to_slot(_is_auto_aim: boolean): void;
    /** 设置枪械自动瞄准 */
    static set_auto_aim(_is_auto_aim: boolean): void;
    /** 设置枪械自动开火 */
    static set_auto_aim_enabled(_is_auto_fire: boolean): void;
    /** 设置枪械自动开火 */
    static set_auto_fire(_is_auto_fire: boolean): void;
    /** 设置物品充能无消耗 */
    static set_auto_fire_enabled(_is_free: boolean): void;
    /** 设置物品当前堆叠数 */
    static set_charge_cost_free(_num: number): void;
    /** 设置物品的描述 */
    static set_current_stack_num(_desc: string): void;
    /** 设置物品能否丢弃 */
    static set_desc(_droppable: boolean): void;
    /** 设置物品的抵押价格 */
    static set_droppable(_res_type: string, _price: number): void;
    /** 设置物品的图标 */
    static set_economic_value(_icon_key: ImageKey): void;
    /** 设置物品最大堆叠数 */
    static set_icon(_num: number): void;
    /** 设置物品的名称 */
    static set_max_stack_num(_name: string): void;
    /** 设置物品的抵押价格 */
    static set_name(_res_type: string, _price: number): void;
    /** 设置物品能否出售 */
    static set_price(_saleable: boolean): void;
    /** 设置物品能否使用 */
    static set_saleable(_usable: boolean): void;
    /** 使物品开始充能 */
    static set_usable(): void;
    /** 清除单位物品格选中状态 */
    static start_charge(): void;
}

declare class EquipmentComp {
    /** 消耗物品 */
    static clear_selected_equipment_slot(_equipment_key: EquipmentKey, _consume_num: number): void;
    /** 创建物品到指定类型槽位 */
    static consume_equipment(_key: EquipmentKey, _slot_type: Enums.EquipmentSlotType): Equipment;
    /** 获取身上的物品 */
    static create_equipment_to_slot(_slot_type: Enums.EquipmentSlotType, _slot_index: number): Equipment;
    /** 获取角色/生物持有的物品预设列表 */
    static get_equipment_by_slot(_equipment_key: EquipmentKey, _exclude_equipped: boolean?, _exclude_bag: boolean?): Equipment[];
    /** 获取持有的物品列表 */
    static get_equipment_list(_slot_type: Enums.EquipmentSlotType): Equipment[];
    /** 获取持有的物品列表 */
    static get_equipment_list_by_slot(_slot_type: Enums.EquipmentSlotType): Equipment[];
    /** 获取最大可持有的物品数量 */
    static get_equipment_list_by_slot_type(_slot_type: Enums.EquipmentSlotType): number;
    /** 获取最大可持有的物品数量 */
    static get_equipment_max_count(_slot_type: Enums.EquipmentSlotType): number;
    /** 获取当前选中的物品 */
    static get_equipment_max_num_by_slot(): Equipment;
    /** 设置单位选中物品格 */
    static get_selected_equipment(_slot_type: Enums.EquipmentSlotType, _slot_index: number): void;
    /** 修改最大可持有的物品数量 */
    static select_equipment_slot(_slot_type: Enums.EquipmentSlotType, _slot_num: number): void;
    /** 设置单位选中物品格 */
    static set_equipment_max_count(_slot_type: Enums.EquipmentSlotType, _slot_index: number): void;
    /** 通过名称禁用表现器 */
    static set_selected_equipment_slot(_name: string): void;
}

declare class ExprDeviceComp {
    /** 通过名称激活表现器 */
    static disable_expr_device_by_name(_name: string): void;
    /** 获取技能预设描述 */
    static enable_expr_device_by_name(_ability_id: AbilityKey): string;
}

declare class GameAPI {
    /** 获取技能预设名称 */
    static ability_prefab_get_desc(_ability_id: AbilityKey): string;
    /** 获取技能预设的属性 */
    static ability_prefab_get_name(_value_type: Enums.ValueType, _key: AbilityKey, _prop: string): any;
    /** 技能预设是否存在自定义值 */
    static ability_prefab_get_prop_by_type(_ability_key: AbilityKey, _prop: string): boolean;
    /** 新增路点 */
    static ability_prefab_has_kv(_path_id: PathID, _index: number, _point_id: PathPointID): void;
    /** 新增路点 */
    static add_pathpoint(_path_id: PathID, _index: number, _point_id: PathPointID): void;
    /** 创建一个固定风场单位 */
    static add_road_point(_pos: Vector3, _wind_type: Enums.WindFieldShapeType, _wind_range: Fixed, _duration: Fixed): void;
    /** 创建一个生物 */
    static create_constant_wind_field(_u_key: UnitKey, _pos: Vector3, _rotation: Quaternion, _scale_ratio: Fixed, _role: Role?): Creature;
    /** 创建一个触发区域 */
    static create_creature_fixed_scale(_u_key: CustomTriggerSpaceKey, _pos: Vector3, _rotation: Quaternion, _scale: Vector3, _role: Role?): CustomTriggerSpace;
    /** 创建一个装饰物 */
    static create_customtriggerspace(_u_key: DecorationKey, _pos: Vector3, _rotation: Quaternion, _scale: Vector3, _parent: Unit?): Decoration;
    /** 创建物品到坐标点 */
    static create_decoration(_equipment_eid: EquipmentKey, _pos: Vector3): Equipment;
    /** 创建物品到坐标点 */
    static create_equipment(_equipment_eid: EquipmentKey, _pos: Vector3): Equipment;
    /** 创建关节助手 */
    static create_equipment_in_scene(_unit_key: Enums.JointAssistantKey, _unit1: Unit, _unit2: Unit): JointAssistant;
    /** 创建一个生命体 */
    static create_joint_assistant(_unit_key: UnitKey, _pos: Vector3, _rotation: Quaternion, _scale_ratio: Fixed, _role: Role?): LifeEntity;
    /** 创建一个组件 */
    static create_life_entity(_u_key: UnitKey, _pos: Vector3, _rotation: Quaternion, _scale: Vector3, _role: Role?): Obstacle;
    /** 创建场景界面到坐标点 */
    static create_obstacle(_layer_key: E3DLayerKey, _pos: Vector3, _duration: Fixed): E3DLayer;
    /** 播放特效并绑定 */
    static create_scene_ui_at_point(_sfx_key: SfxKey, _unit: Unit, _socket_name: Enums.ModelSocket, _scale: Fixed, _duration: Fixed, _bind_type: Enums.BindType): SfxID;
    /** 播放特效并绑定 */
    static create_sfx_with_socket(_sfx_key: SfxKey, _unit: Unit, _socket_name: Enums.ModelSocket, _offset: Vector3, _rot: Quaternion, _scale: Fixed, _duration: Fixed, _bind_type: Enums.BindType): SfxID;
    /** 创建一个逻辑体 */
    static create_sfx_with_socket_offset(_u_key: TriggerSpaceKey, _pos: Vector3, _rotation: Quaternion, _scale: Vector3, _role: Role?): TriggerSpace;
    /** 创建一个组件组 */
    static create_triggerspace(_unit_group_id: UnitGroupKey, _pos: Vector3, _root_quaternion: Quaternion, _role: Role?): UnitGroup;
    /** 创建缩放单位 */
    static create_unit_group(_u_key: UnitKey, _pos: Vector3, _rotation: Quaternion, _scale: Vector3): Unit;
    /** 获取生物预设的自定义值 */
    static create_unit_with_scale(_value_type: Enums.ValueType, _key: CreatureKey, _prop: string): any;
    /** 获取生物预设的属性 */
    static creature_prefab_get_kv_by_type(_value_type: Enums.ValueType, _key: CreatureKey, _prop: string): any;
    /** 生物预设是否存在自定义值 */
    static creature_prefab_get_prop_by_type(_unit_key: CreatureKey, _prop: string): boolean;
    /** 获取触发区域预设的自定义值 */
    static creature_prefab_has_kv(_value_type: Enums.ValueType, _key: CustomTriggerSpaceKey, _prop: string): any;
    /** 获取触发区域预设的属性 */
    static customtriggerspace_prefab_get_kv_by_type(_value_type: Enums.ValueType, _key: CustomTriggerSpaceKey, _prop: string): any;
    /** 触发区域预设是否存在自定义值 */
    static customtriggerspace_prefab_get_prop_by_type(_key: CustomTriggerSpaceKey, _prop: string): boolean;
    /** 造成伤害 */
    static customtriggerspace_prefab_has_kv(_dst: LifeEntity, _dmg: Fixed, _src: Unit?, _schema: DamageSchema?, _data: table?): void;
    /** 删除路点 */
    static deal_damage(_path_id: PathID, _index: number): void;
    /** 销毁场景界面 */
    static del_road_point(_layer: E3DLayer): void;
    /** 删除单位 */
    static destroy_scene_ui(_unit: Unit): void;
    /** 销毁单位 */
    static destroy_unit(_unit: Unit, _destroy_children: boolean?): void;
    /** 设置单位与预设是否能发生碰撞 */
    static destroy_unit_with_children(_unit: Unit, _unit_eid: UnitKey, _enable: boolean): void;
    /** 设置两个单位是否能碰撞 */
    static enable_collision_between_unit_and_prefab(_unit_1: Unit, _unit_2: Unit, _enable: boolean): void;
    /** 物品预设是否存在自定义值 */
    static enable_collision_between_units(_equipment_key: EquipmentKey, _prop: string): boolean;
    /** 创建一个组件组 */
    static equipment_prefab_has_kv(_unit_group_id: UnitGroupKey, _pos: Vector3, _root_quaternion: Quaternion, _role: Role?): UnitGroup;
    /** 游戏结束 */
    static game_api_create_unit_group(): void;
    /** 获取技能预设描述 */
    static game_end(_ability_id: AbilityKey): string;
    /** 获取技能预设名称 */
    static get_ability_prefab_desc(_ability_id: AbilityKey): string;
    /** 获取成就目标进度 */
    static get_ability_prefab_name(_event_id: Achievement): number;
    /** 获取成就目标进度 */
    static get_achieve_target_count(_event_id: Achievement): number;
    /** 获取所有阵营 */
    static get_achievement_target(): Camp[];
    /** 获取物品商店中的所有物品编号 */
    static get_all_camps(_battle_shop_key: BattleShopKey): EquipmentKey[];
    /** 获取所有在线玩家 */
    static get_all_equipment_keys_in_shop(): Role[];
    /** 获取所有玩家 */
    static get_all_online_roles(): Role[];
    /** 获取游戏中所有有效玩家 */
    static get_all_roles(): Role[];
    /** 获取游戏中所有有效玩家 */
    static get_all_roles_in_game(): Role[];
    /** 获取阵营 */
    static get_all_valid_roles(_camp_id: CampID): Camp;
    /** 获取阵营关系 */
    static get_camp(_camp1: Camp, _camp2: Camp): Enums.CampRelationType;
    /** 获取矩形区域内的角色 */
    static get_camp_relation(_center: Vector3, _length: Fixed, _height: Fixed, _width: Fixed): Character[];
    /** 获取圆柱区域内的角色 */
    static get_characters_in_aabb(_bottom_center: Vector3, _radius: Fixed, _height: Fixed): Character[];
    /** 获取圆形区域内的角色 */
    static get_characters_in_cylinder(_center: Vector3, _radius: Fixed): Character[];
    /** 获取指定编号的逻辑体列表 */
    static get_characters_in_sphere(_creature_key: CreatureKey): Creature[];
    /** 获取矩形区域内的生物 */
    static get_creatures_by_key(_center: Vector3, _length: Fixed, _height: Fixed, _width: Fixed): Creature[];
    /** 获取圆环区域内的生物 */
    static get_creatures_in_aabb(_center: Vector3, _radius1: Fixed, _radius2: Fixed, _height: Fixed): Creature[];
    /** 获取圆柱区域内的生物 */
    static get_creatures_in_annulus(_bottom_center: Vector3, _radius: Fixed, _height: Fixed): Creature[];
    /** 获取扇形区域内的生物 */
    static get_creatures_in_cylinder(_center: Vector3, _face_dir: Fixed, _central_angle: Fixed, _radius: Fixed, _height: Fixed): Creature[];
    /** 获取圆形区域内的生物 */
    static get_creatures_in_sector(_center: Vector3, _radius: Fixed): Creature[];
    /** 获取射线检测到的触发区域 */
    static get_creatures_in_sphere(_start_pos: Vector3, _end_pos: Vector3): CustomTriggerSpace;
    /** 获取指定预设的触发区域列表 */
    static get_customtriggerspace_in_raycast(_key: CustomTriggerSpaceKey): CustomTriggerSpace[];
    /** 获取射线检测到的触发区域列表 */
    static get_customtriggerspaces_by_key(_start_pos: Vector3, _end_pos: Vector3): CustomTriggerSpace[];
    /** 获取时间戳转化后的日期数 */
    static get_customtriggerspaces_in_raycast(_timestamp: Timestamp): number;
    /** 获取环境时间 */
    static get_day(): Fixed;
    /** 获取环境时间流逝速率 */
    static get_env_time(): Fixed;
    /** 获取环境时间是否自动流逝 */
    static get_env_time_ratio(): boolean;
    /** 根据索引获取UI节点的子UI节点 */
    static get_env_time_running_enabled(_node: ENode, _index: number): ENode;
    /** 根据名字获取UI节点的子UI节点 */
    static get_eui_child_by_index(_node: ENode, _name: string): ENode;
    /** 获取UI节点的所有子UI节点 */
    static get_eui_child_by_name(_node: ENode): ENode[];
    /** 获取UI节点的子UI节点数量 */
    static get_eui_children(_node: ENode): number;
    /** 获取场景界面中的控件 */
    static get_eui_children_count(_layer: E3DLayer, _node_id: ENode): ENode;
    /** 获取射线检测到的触发区域 */
    static get_eui_node_at_scene_ui(_start_pos: Vector3, _end_pos: Vector3): CustomTriggerSpace;
    /** @alias CommodityInfo {[1]: UgcCommodity, [2]: integer}  {商品项目ID, 道具数量} */
    static get_first_customtriggerspace_in_raycast(): GoodsInfo[];
    /** 获取时间戳转化后的小时数 */
    static get_goods_list(_timestamp: Timestamp): number;
    /** 获取组件上的所有关节 */
    static get_hour(_unit: Unit): JointAssistant[];
    /** 获取矩形区域内的生命体 */
    static get_joint_assistants(_center: Vector3, _length: Fixed, _height: Fixed, _width: Fixed): LifeEntity[];
    /** 获取圆柱区域内的生命体 */
    static get_life_entities_in_aabb(_bottom_center: Vector3, _radius: Fixed, _height: Fixed): LifeEntity[];
    /** 获取圆形区域内的生命体 */
    static get_life_entities_in_cylinder(_center: Vector3, _radius: Fixed): LifeEntity[];
    /** 获取矩形区域内的生命体 */
    static get_life_entities_in_sphere(_center: Vector3, _length: Fixed, _height: Fixed, _width: Fixed): LifeEntity[];
    /** 获取圆柱区域内的生命体 */
    static get_lifeentities_in_aabb(_bottom_center: Vector3, _radius: Fixed, _height: Fixed): LifeEntity[];
    /** 获取圆形区域内的生命体 */
    static get_lifeentities_in_cylinder(_center: Vector3, _radius: Fixed): LifeEntity[];
    /** 获取地图当前评分 */
    static get_lifeentities_in_sphere(): Fixed;
    /** 获取所有地图角色 */
    static get_map_appreciate_score(): Character[];
    /** 获取地图当前评分 */
    static get_map_characters(): Fixed;
    /** 获取环境时间 */
    static get_map_rating_score(): Fixed;
    /** 获取环境时间流逝速率 */
    static get_map_time(): Fixed;
    /** 获取环境时间是否自动流逝 */
    static get_map_time_ratio(): boolean;
    /** 获取时间戳转化后的分钟数 */
    static get_map_time_running_enabled(_timestamp: Timestamp): number;
    /** 获取效果预设描述 */
    static get_minute(_modifier_key: ModifierKey): string;
    /** 获取效果预设名称 */
    static get_modifier_prefab_desc(_modifier_key: ModifierKey): string;
    /** 获取动画时长 */
    static get_modifier_prefab_name(_montage_id: MontageKey): Fixed;
    /** 获取时间戳转化后的月份数 */
    static get_montage_duration(_timestamp: Timestamp): number;
    /** 获取射线检测到的组件 */
    static get_month(_start_pos: Vector3, _end_pos: Vector3): Obstacle;
    /** 获取射线检测到的组件 */
    static get_obstacle_by_raycast(_start_pos: Vector3, _end_pos: Vector3): Obstacle;
    /** 获取指定编号的组件列表 */
    static get_obstacle_in_raycast(_key: ObstacleKey): Obstacle[];
    /** 获取射线检测到的组件列表 */
    static get_obstacles_by_key(_start_pos: Vector3, _end_pos: Vector3): Obstacle[];
    /** 获取矩形区域内的组件 */
    static get_obstacles_by_raycast(_center: Vector3, _length: Fixed, _height: Fixed, _width: Fixed): Obstacle[];
    /** 获取圆环区域内的组件 */
    static get_obstacles_in_aabb(_center: Vector3, _radius1: Fixed, _radius2: Fixed, _height: Fixed): Obstacle[];
    /** 获取圆柱区域内的组件 */
    static get_obstacles_in_annulus(_bottom_center: Vector3, _radius: Fixed, _height: Fixed): Obstacle[];
    /** 获取射线检测到的组件列表 */
    static get_obstacles_in_cylinder(_start_pos: Vector3, _end_pos: Vector3): Obstacle[];
    /** 获取扇形区域内的组件 */
    static get_obstacles_in_raycast(_center: Vector3, _face_dir: Fixed, _central_angle: Fixed, _radius: Fixed, _height: Fixed): Obstacle[];
    /** 获取圆形区域内的组件 */
    static get_obstacles_in_sector(_center: Vector3, _radius: Fixed): Obstacle[];
    /** 获取路点坐标 */
    static get_obstacles_in_sphere(_point_id: PathPointID): Vector3;
    /** 获取路径中的路点向量 */
    static get_pathpoint_by_id(_path_id: PathID, _index: number): Vector3;
    /** 获取随机颜色 */
    static get_pathpoint_by_index(): Color;
    /** 获取路径中的路点向量 */
    static get_random_color(_path_id: PathID, _index: number): Vector3;
    /** 获取路点坐标 */
    static get_road_point_vector3(_point_id: PathPointID): Vector3;
    /** 获取路点坐标 */
    static get_roadpoint_position(_point_id: PathPointID): Vector3;
    /** 玩家ID获取玩家 */
    static get_roadpoint_position_vector3(_role_id: RoleID): Role;
    /** 获取玩家亲密度 */
    static get_role(_role_1: Role, _role_2: Role): number;
    /** 获取玩家亲密度 */
    static get_role_friendship_level(_role_1: Role, _role_2: Role): number;
    /** 获取时间戳转化后的秒数 */
    static get_role_friendship_value(_timestamp: Timestamp): number;
    /** 获取当前时间戳 */
    static get_second(): Timestamp;
    /** 获取时间戳 */
    static get_timestamp(_year: number, _month: number, _day: number, _hour: number, _minute: number, _second: number): Timestamp;
    /** 获取时间戳秒差 */
    static get_timestamp_by_time(_timestamp_1: Timestamp, _timestamp_2: Timestamp): number;
    /** 获取指定编号的逻辑体列表 */
    static get_timestamp_diff(_key: TriggerSpaceKey): TriggerSpace[];
    /** 获取单位 */
    static get_triggerspaces_by_key(_unit_id: UnitID): Unit;
    /** 获取组件上的所有关节 */
    static get_unit(_unit: Unit): JointAssistant[];
    /** 获取单位ID */
    static get_unit_all_joint_assistant(_name: string): UnitID;
    /** 获取路径向量数组 */
    static get_unit_id_by_name(_path_id: PathID): Vector3;
    /** 获取路径向量数组 */
    static get_vector3_from_path(_path_id: PathID): Vector3;
    /** 获取路径向量数组 */
    static get_vector3_list_from_road(_path_id: PathID): Vector3;
    /** 获取时间戳转化后的星期数 */
    static get_vector3s_from_path(_timestamp: Timestamp): number;
    /** 获取时间戳转化后的年数 */
    static get_weekday(_timestamp: Timestamp): number;
    /** 是否有全局变量 */
    static get_year(_var_name: string): boolean;
    /** 是否有全局变量 */
    static has_global_kv(_var_name: string): boolean;
    /** 是否开启存档 */
    static has_var(): boolean;
    /** 坐标点是否在触发区域内 */
    static is_archives_enabled(_point: Vector3, _custom_trigger_space: CustomTriggerSpace): boolean;
    /** 坐标点是否在触发区域内 */
    static is_point_in_custom_trigger_space(_point: Vector3, _custom_trigger_space: CustomTriggerSpace): boolean;
    /** 坐标点是否在触发区域内 */
    static is_point_in_custom_trigger_spaces(_point: Vector3, _custom_trigger_space: CustomTriggerSpace): boolean;
    /** 跳转关卡 */
    static is_point_in_customtriggerspace(_level_key: LevelKey): void;
    /** 获取效果预设描述 */
    static load_level(_modifier_key: ModifierKey): string;
    /** 获取效果预设名称 */
    static modifier_prefab_get_desc(_modifier_key: ModifierKey): string;
    /** 获取效果预设的属性 */
    static modifier_prefab_get_name(_value_type: Enums.ValueType, _key: ModifierKey, _prop: string): any;
    /** 效果预设是否存在自定义值 */
    static modifier_prefab_get_prop_by_type(_modifier_key: ModifierKey, _prop: string): boolean;
    /** 获取组件预设的自定义值 */
    static modifier_prefab_has_kv(_value_type: Enums.ValueType, _key: ObstacleKey, _prop: string): any;
    /** 获取组件预设的属性 */
    static obstacle_prefab_get_kv_by_type(_value_type: Enums.ValueType, _key: ObstacleKey, _prop: string): any;
    /** 组件预设是否存在自定义值 */
    static obstacle_prefab_get_prop_by_type(_key: ObstacleKey, _prop: string): boolean;
    /** 单位开始播放3d音效 */
    static obstacle_prefab_has_kv(_position: Vector3, _sound_key: SoundKey, _duration: Fixed, _volume: Fixed): SoundID;
    /** 播放特效 */
    static play_3d_sound(_sfx_key: SfxKey, _pos: Vector3, _rot: Quaternion, _scale: Fixed, _duration: Fixed, _rate: Fixed, _with_sound: boolean?): SfxID;
    /** 随机整数 */
    static play_sfx_by_key(_min_value: number, _max_value: number): number;
    /** 获取随机颜色 */
    static randint(): Color;
    /** 随机整数 */
    static random_color(_min_value: number, _max_value: number): number;
    /** 查询射线检测到的单位碰撞信息 */
    static random_int(_start_pos: Vector3, _end_pos: Vector3, _include_unit_types: Enums.UnitType[], _raycast_handler: Function): void;
    /** 删除路点 */
    static raycast_unit(_path_id: PathID, _index: number): void;
    /** 设置所有场景界面显示状态 */
    static remove_pathpoint(_role: Role, _visible: boolean): void;
    /** 设置单位与预设是否能发生碰撞 */
    static set_all_scene_ui_visible(_unit: Unit, _unit_eid: UnitKey, _enable: boolean): void;
    /** 设置两个单位是否能碰撞 */
    static set_enable_collide_unit_and_prefab(_unit_1: Unit, _unit_2: Unit, _enable: boolean): void;
    /** 设置环境时间 */
    static set_enable_collide_with_units(_target_time: Fixed, _duration: Fixed, _direction: boolean): void;
    /** 设置环境时间流逝速度 */
    static set_env_time(_time_ratio: Fixed): void;
    /** 设置环境时间是否自动流逝 */
    static set_env_time_ratio(_enabled: boolean): void;
    /** 设置物品商店物品剩余库存 */
    static set_env_time_running_enabled(_battle_shop_key: BattleShopKey, _equipment_key: EquipmentKey, _cur_stock_count: number): void;
    /** 设置物品商店物品最大库存 */
    static set_equipment_current_stock_num(_battle_shop_key: BattleShopKey, _equipment_key: EquipmentKey, _max_stock_count: number): void;
    /** 设置物品商店物品最大库存 */
    static set_equipment_max_stock_count(_battle_shop_key: BattleShopKey, _equipment_key: EquipmentKey, _max_stock_count: number): void;
    /** 设置物品商店物品剩余库存 */
    static set_equipment_max_stock_num(_battle_shop_key: BattleShopKey, _equipment_key: EquipmentKey, _cur_stock_count: number): void;
    /** 设置全局风场开关 */
    static set_equipment_remaining_stock_count(_bool_value: boolean): void;
    /** 设置全局风场方向力 */
    static set_global_wind_enabled(_x_value: Fixed, _y_value: Fixed): void;
    /** 设置全局风场频率 */
    static set_global_wind_force(_fixed_value: Fixed): void;
    /** 设置生命体存活场景边界大小 */
    static set_global_wind_frequency(_x: Fixed, _y: Fixed, _z: Fixed): void;
    /** 设置环境时间 */
    static set_life_entity_survival_scene_boundary(_target_time: Fixed, _duration: Fixed, _direction: boolean): void;
    /** 设置环境时间流逝速度 */
    static set_map_time(_time_ratio: Fixed): void;
    /** 设置环境时间是否自动流逝 */
    static set_map_time_ratio(_enabled: boolean): void;
    /** 设置场景界面位置 */
    static set_map_time_running_enabled(_role: Role, _layer: E3DLayer, _position: Vector3): void;
    /** 设置场景界面的显隐 */
    static set_scene_ui_position(_layer: E3DLayer, _role: Role, _visible: boolean): void;
    /** 设置组件存活场景边界大小 */
    static set_scene_ui_visible(_x: Fixed, _y: Fixed, _z: Fixed): void;
    /** 停止播放音效 */
    static set_unit_survival_scene_boundary(_assigned_id: SoundID): void;
    /** 获取时间戳转化后的星期数 */
    static stop_sound(_timestamp: Timestamp): number;
    /** 获取逻辑体预设的自定义值 */
    static timestame_to_weekday(_value_type: Enums.ValueType, _key: TriggerSpaceKey, _prop: string): any;
    /** 获取逻辑体预设的属性 */
    static triggerspace_prefab_get_kv_by_type(_value_type: Enums.ValueType, _key: TriggerSpaceKey, _prop: string): any;
    /** 逻辑体预设是否存在自定义值 */
    static triggerspace_prefab_get_prop_by_type(_key: TriggerSpaceKey, _prop: string): boolean;
    /** 添加道具箱刷新技能 */
    static triggerspace_prefab_has_kv(_ability_key: AbilityKey, _weight: number): void;
}

declare class ItemBox {
    /** 添加物品箱刷新预设 */
    static add_ability(_key: EquipmentKey, _weight: number): void;
    /** 移除道具箱刷新技能 */
    static add_equipment(_ability_key: AbilityKey): void;
    /** 移除物品箱刷新预设 */
    static remove_ability(_key: EquipmentKey): void;
    /** 获取关节组件主体 */
    static remove_equipment(): Character;
}

declare class JointAssistantComp {
    /** 获取关节组件目标 */
    static get_joint_assistant_object1_obstacle(): Character;
    /** 获取关节组件主体 */
    static get_joint_assistant_object2_obstacle(): Character;
    /** 获取关节组件目标 */
    static get_joint_assistant_primary_obstacle(): Character;
    /** 获取关节组件类型 */
    static get_joint_assistant_target_obstacle(): JointAssistantType;
    /** 设置关节组件的启用状态 */
    static get_joint_assistant_type(_enable: boolean): void;
    /** 设置关节组件可见性 */
    static set_joint_assistant_enabled(_visible: boolean): void;
    /** 获取多段跳剩余冷却 */
    static set_joint_assistant_visible(): Fixed;
}

declare class JumpComp {
    /** 获取多段跳剩余冷却 */
    static get_multi_jump_current_cooldown(): Fixed;
    /** 是否位于地面 */
    static get_multi_jump_remaining_cooldown(): boolean;
    /** 设置多段跳剩余冷却 */
    static is_on_ground(_cd: Fixed): void;
    /** 设置多段跳剩余冷却 */
    static set_multi_jump_current_cooldown(_cd: Fixed): void;
    /** 添加标签 */
    static set_multi_jump_remaining_cooldown(_tag: string): void;
}

declare class KVBase {
    /** 清空自定义值 */
    static add_tag(): void;
    /** 清空标签 */
    static clear_kv(): void;
    /** 移除标签 */
    static clear_tag(_tag: string): void;
    /** 获取公告板文本内容 */
    static delete_tag(): string;
    /** 获取公告板文本字体大小 */
    static get_billboard_content(): number;
    /** 获取自定义值 */
    static get_billboard_font_size(_value_type: Enums.ValueType, _key: string): any;
    /** 是否有自定义值 */
    static get_kv_by_type(_key: string): boolean;
    /** 是否含有标签 */
    static has_kv(_tag: string): boolean;
    /** 移除自定义值 */
    static has_tag(_key: string): void;
    /** 移除标签 */
    static remove_kv(_tag: string): void;
    /** 设置公告板文本内容 */
    static remove_tag(_content: string): void;
    /** 设置公告板文本颜色 */
    static set_billboard_content(_color: Color, _gradient_color_1: Color?, _gradient_color_2: Color?, _gradient_color_3: Color?, _gradient_color_4: Color?): void;
    /** 设置公告板文本字体大小 */
    static set_billboard_font_color(_font_size: number): void;
    /** 设置公告板文本颜色 */
    static set_billboard_font_size(_color: Color, _gradient_color_1: Color?, _gradient_color_2: Color?, _gradient_color_3: Color?, _gradient_color_4: Color?): void;
    /** 设置自定义值 */
    static set_billboard_text_color(_value_type: Enums.ValueType, _key: string, _val: any): void;
    /** 添加标签 */
    static set_kv_by_type(_tag: string): void;
    /** 获得经验 */
    static set_tag(_killed_exp: Fixed): void;
}

declare class LevelComp {
    /** 获取当前经验值 */
    static gain_exp(): Fixed;
    /** 获取击杀经验点 */
    static get_exp(): Fixed;
    /** 获得当前等级 */
    static get_killed_exp(): number;
    /** 升级 */
    static get_level(): void;
    /** 设置击杀经验点 */
    static level_up(_killed_exp: Fixed): void;
    /** 生物是否可以复活 */
    static set_killed_exp(): boolean;
}

declare class LifeComp {
    /** 改变健康值 */
    static can_reborn(_value: Fixed): void;
    /** 使生物死亡 */
    static change_hp(_dmg_unit: Unit?): void;
    /** 获取健康值 */
    static die(): Fixed;
    /** 获取最大健康值 */
    static get_hp(): Fixed;
    /** 获取当前命数 */
    static get_hp_max(): number;
    /** 获取最大命数 */
    static get_life(): number;
    /** 是否处于死亡状态 */
    static get_life_max(): boolean;
    /** 是否无限复活 */
    static is_die_status(): boolean;
    /** 使生物复活 */
    static is_infinite_reborn(_immediate: boolean?): void;
    /** 设置自动复活 */
    static reborn(_auto_reborn: boolean): void;
    /** 设置自动复活 */
    static set_auto_reborn(_auto_reborn: boolean): void;
    /** 设置自动复活 */
    static set_auto_reborn_enable(_auto_reborn: boolean): void;
    /** 设置最大健康值 */
    static set_auto_reborn_enabled(_value: Fixed): void;
    /** 设置无限复活 */
    static set_hp_max(_enable_reborn: boolean): void;
    /** 设置无限复活 */
    static set_infinite_reborn(_enable_reborn: boolean): void;
    /** 设置无限复活 */
    static set_infinite_reborn_enable(_enable_reborn: boolean): void;
    /** 改变当前命数 */
    static set_infinite_reborn_enabled(_value: number): void;
    /** 改变当前命数 */
    static set_life(_value: number): void;
    /** 改变最大命数 */
    static set_life_count(_value: number): void;
    /** 设置是否原地复活 */
    static set_life_max(_reborn_in_place: boolean, _reset_camera: boolean): void;
    /** 设置复活时间 */
    static set_reborn_in_place(_reborn_time: Fixed): void;
    /** 控制AI执行警戒命令 */
    static set_reborn_time(_tagert_pos: Vector3, _target_dir: Vector3, _dalay_time: Fixed, _reject_time: Fixed, _move_mode: Enums.MoveMode): void;
}

declare class LifeEntity {
    /** 控制AI执行追击行为(技能) */
    static ai_command_alert(_target: LifeEntity, _chase_range: Fixed, _reject_time: Fixed, _action_distance: Fixed, _ability_key: AbilityKey, _move_mode: Enums.MoveMode, _action_count: number): void;
    /** 控制AI执行追击行为(命令) */
    static ai_command_chase_with_ability(_target: LifeEntity, _chase_range: Fixed, _reject_time: Fixed, _action_distance: Fixed, _action_mode: Enums.AIBasicCommand, _move_mode: Enums.MoveMode, _action_count: number): void;
    /** 控制AI执行追击行为(物品) */
    static ai_command_chase_with_action(_target: LifeEntity, _chase_range: Fixed, _reject_time: Fixed, _action_distance: Fixed, _equipment_key: EquipmentKey, _move_mode: Enums.MoveMode, _action_count: number): void;
    /** 控制AI执行跟随命令 */
    static ai_command_chase_with_equipment(_target_unit: Character, _follow_dis: Fixed, _tolerate_dis: Fixed, _reject_time: Fixed, _move_mode: Enums.MoveMode): void;
    /** 控制AI执行模仿命令 */
    static ai_command_follow(_target_unit: Character, _delay: Fixed, _disable_actions: Enums.AIBasicCommand[]): void;
    /** 控制AI跳跃 */
    static ai_command_imitate(): void;
    /** 控制AI举起/扔下/投掷 */
    static ai_command_jump(): void;
    /** 控制AI执行巡逻命令 */
    static ai_command_lift(_waypoint: Vector3, _reject_time: Fixed, _round_mode: Enums.PatrolType, _move_mode: Enums.MoveMode): void;
    /** 控制AI执行巡逻命令 */
    static ai_command_nav(_waypoint: Vector3, _reject_time: Fixed, _round_mode: Enums.PatrolType, _move_mode: Enums.MoveMode): void;
    /** 控制AI拾取物品 */
    static ai_command_patrol(_target_equipment: Equipment, _move_mode: Enums.MoveMode, _reject_time: Fixed): void;
    /** 控制AI滚动 */
    static ai_command_pick_up_equipment(): void;
    /** 控制AI前扑 */
    static ai_command_roll(): void;
    /** 控制AI单位移动 */
    static ai_command_rush(_direction: Vector3, _t: Fixed): void;
    /** 控制AI执行高优先级寻路命令 */
    static ai_command_start_move(_target_position: Vector3, _duration: Fixed, _threshold: Fixed): void;
    /** 控制AI单位停止移动 */
    static ai_command_start_move_high_priority(_duration: Fixed): void;
    /** 根据角色设置模型 */
    static ai_command_stop_move(_character: Character, _include_ugc_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 根据生物设置模型 */
    static change_model_by_character(_creature: Creature, _include_custom_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 根据生物预设设置模型 */
    static change_model_by_creature(_creature_key: CreatureKey, _include_custom_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 获取朝向 */
    static change_model_by_creature_key(): Vector3;
    /** 获取朝向 */
    static get_direction(): Vector3;
    /** 获取朝向 */
    static get_face_dir(): Vector3;
    /** 获取生命体大力击倒阈值 */
    static get_face_direction(): void;
    /** 获取生命体血条宽度缩放 */
    static get_hard_punch_threshold(): Fixed;
    /** 获取生命体血条高度缩放 */
    static get_hpbar_scale_x(): Fixed;
    /** 获取指定生命体当前抓举的生命体 */
    static get_hpbar_scale_y(): LifeEntity;
    /** 获取指定生命体当前抓举的组件 */
    static get_lifted_lifeentity(): Obstacle;
    /** 获取生命体控制玩家 */
    static get_lifted_obstacle(): Role;
    /** 获取生命体击倒阈值 */
    static get_owner(): void;
    /** 获取生命体是否可拖动 */
    static get_punch_threshold(): boolean;
    /** 获取生命体是否可拖动 */
    static is_drag_enable(): boolean;
    /** 生命体是否进入魂蛋模式 */
    static is_draggable(): boolean;
    /** 生命体是否在跳跃中 */
    static is_ghost_mode(): boolean;
    /** 生命体是否在移动中 */
    static is_jumping(): boolean;
    /** 生命体是否在飞扑中 */
    static is_moving(): boolean;
    /** 获取生命体是否可点击 */
    static is_rushing(): boolean;
    /** 获取生命体是否可点击 */
    static is_touch_enable(): boolean;
    /** 命令角色跳跃 */
    static is_touchable(): void;
    /** 发送气泡表情 */
    static jump(_emoji_key: EmojiKey, _show_time: Fixed, _offset: Vector3): void;
    /** 播放面部表情 */
    static play_emoji_with_offset(_emoji_key: EmojiKey, _show_time: Fixed): void;
    /** 播放面部表情 */
    static play_face_emoji(_emoji_key: EmojiKey, _show_time: Fixed): void;
    /** 还原模型变化 */
    static play_face_expression(): void;
    /** 还原模型变化 */
    static recover_model(): void;
    /** 设置寻路阈值 */
    static reset_model(_threshold: Fixed): void;
    /** 设置朝向 */
    static set_ai_move_threshold(_face_dir: Vector3): void;
    /** 设置朝向 */
    static set_direction(_face_dir: Vector3): void;
    /** 设置朝向 */
    static set_face_dir(_face_dir: Vector3): void;
    /** 设置生命体大力击倒阈值 */
    static set_face_direction(_punch_threshold: Fixed): void;
    /** 设置生命体血条缩放 */
    static set_hard_punch_threshold(_hpbar_scale_x: Fixed, _hpbar_scale_y: Fixed): void;
    /** 设置质量条是否显示 */
    static set_hpbar_scale(_visible: boolean): void;
    /** 根据角色设置模型 */
    static set_mass_bar_visible(_character: Character, _include_ugc_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 根据生物设置模型 */
    static set_model_by_character(_creature: Creature, _include_custom_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 根据生物预设设置模型 */
    static set_model_by_creature(_creature_key: CreatureKey, _include_custom_model: boolean?, _inherit_scale: boolean?, _inherit_capsule_size: boolean?): void;
    /** 设置生命体击倒阈值 */
    static set_model_by_creature_key(_punch_threshold: Fixed): void;
    /** 设置搜敌集火目标 */
    static set_punch_threshold(_target: LifeEntity): void;
    /** 设置搜敌优先级值by标签 */
    static set_search_enemy_focus_target(_tag: string, _priority: number): void;
    /** 设置搜敌优先级值by单位实体 */
    static set_search_enemy_priority_value_by_tag(_unit: LifeEntity, _priority: number): void;
    /** 设置搜敌优先级值by预设编号 */
    static set_search_enemy_priority_value_by_unit(_unit_key: CreatureKey, _priority: number): void;
    /** 设置搜敌优先级值by单位类型 */
    static set_search_enemy_priority_value_by_unit_key(_unit_prefab_type: Enums.UnitType, _priority: number): void;
    /** 发送气泡信息 */
    static set_search_enemy_priority_value_by_unit_type(_show_msg: string, _show_time: Fixed, _max_dis: Fixed, _offset: Vector3): void;
    /** 激活AI */
    static show_bubble_msg_with_offset(): void;
    /** 命令生命体移动 */
    static start_ai(_direction: Vector3, _duration: Fixed): void;
    /** 命令生命体移动到坐标点 */
    static start_move_by_direction(_target_pos: Vector3, _duration: Fixed, _threshold: Fixed): void;
    /** 暂停AI */
    static start_move_to_pos_with_threshold(): void;
    /** 交换物品槽位 */
    static stop_ai(_equipment: Equipment, _slot_type: Enums.EquipmentSlotType?, _slot: EquipmentSlot?): void;
    /** 生命体尝试下载具 */
    static swap_equipment_slot(): void;
    /** 获取举起冷却时间 */
    static try_exit_vehicle(): Fixed;
}

declare class LiftComp {
    /** 获取举起冷却时间 */
    static get_lift_cd(): Fixed;
    /** 获取举起剩余冷却时间 */
    static get_lift_cooldown(): Fixed;
    /** 获取举起剩余冷却时间 */
    static get_lift_left_cd(): Fixed;
    /** 是否处于抓举状态 */
    static get_lift_remaining_cooldown(): boolean;
    /** 举起单位 */
    static is_lift_status(_unit: Unit): void;
    /** 设置举起冷却时间 */
    static lift_unit(_cd_time: Fixed): void;
    /** 设置举起冷却时间 */
    static set_lift_cd(_cd_time: Fixed): void;
    /** 设置举起剩余冷却时间 */
    static set_lift_cooldown(_time: Fixed): void;
    /** 设置举起剩余冷却时间 */
    static set_lift_left_cd(_time: Fixed): void;
    /** 获取是否可抓举 */
    static set_lift_remaining_cooldown(): boolean;
}

declare class LiftedComp {
    /** 获取是否可抓举 */
    static is_lifted_enable(): boolean;
    /** 是否处于被抓举 */
    static is_lifted_enabled(): boolean;
    /** 设置自定义投掷力量 */
    static is_lifted_status(_force: Fixed): void;
    /** 设置是否自定义投掷力量 */
    static set_custom_thrown_force(_enable: boolean): void;
    /** 设置是否自定义投掷力量 */
    static set_custom_thrown_force_enabled(_enable: boolean): void;
    /** 设置是否可抓举 */
    static set_is_use_custom_thrown_force(_enable: boolean): void;
    /** 设置是否可抓举 */
    static set_lifted_enable(_enable: boolean): void;
    /** 延迟调用函数（按帧数） */
    static set_lifted_enabled(_interval: number, _callback: Function): void;
}

declare class LuaAPI {
    /** 延迟调用函数（按时间） */
    static call_delay_frame(_interval: Fixed, _callback: Function): void;
    /** 执行所有已添加并行任务 */
    static call_delay_time(): void;
    /** 初始化并行数 */
    static dispatch_flush(_count: number): void;
    /** 添加并行任务 */
    static dispatch_init(_i: number, _name: string, _args: any): number;
    /** 启用开发者模式 */
    static dispatch_queue(): boolean;
    /** 启用错误中断模式 */
    static enable_developer_mode(_enable: boolean): void;
    /** 获取子部件列表（慢） */
    static enable_error_interruption_mode(_obj: Unit): string[];
    /** 获取当前单位 */
    static get_component_list(): Unit;
    /** 获取并行数 */
    static get_current_unit(): number;
    /** 获取全局变量 */
    static get_dispatch_count(_var_name: string): any;
    /** 获得单位的ID */
    static get_global_var(_unit: Unit): number;
    /** 获取变量类型 */
    static get_unit_id(_value: any): string;
    /** 注册全局自定义事件监听 */
    static get_value_type(_event_name: string, _callback: Function): number;
    /** 注册全局触发器 */
    static global_register_custom_event(_event_desc: any[], _callback: Function): number;
    /** 发送全局自定义事件 */
    static global_register_trigger_event(_event_name: string, _data: any): void;
    /** 注销全局自定义事件监听 */
    static global_send_custom_event(_id: number): void;
    /** 注销全局触发器 */
    static global_unregister_custom_event(_id: number): void;
    /** 是否含有指定子部件 */
    static global_unregister_trigger_event(_object: Unit, _name: string): boolean;
    /** 输出日志 */
    static has_component(_content: string): void;
    /** 查询UI单位（慢） */
    static log(_name: string): ENode;
    /** 批量查询UI单位（慢） */
    static query_ui_node(_name_list: string[]): ENode[];
    /** 查询组件单位（慢） */
    static query_ui_nodes(_name: string): Unit;
    /** 批量查询单位（按名称） */
    static query_unit(_name_list: string[]): Unit[];
    /** 批量查询单位（按类型、预设） */
    static query_units(_unit_type: Enums.UnitType, _unit_eid: number): Unit[];
    /** 生成随机数 */
    static query_units_by_type(): number;
    /** 启用死循环检测 */
    static rand(_enable: boolean, _max_instruction_count: number): boolean;
    /** 设置Tick回调 */
    static set_deadloop_check_enabled(_pre_handler: function?, _post_handler: function?): void;
    /** 注册单位创建回调 */
    static set_tick_handler(_unit_type: Enums.UnitType, _unit_eid: number, _callback: Function): void;
    /** 注册单位自定义事件监听 */
    static unit_register_creation_handler(_unit: Unit, _event_name: string, _callback: Function): number;
    /** 注册单位触发器 */
    static unit_register_custom_event(_unit: Unit, _event_desc: any[], _callback: Function): number;
    /** 发送单位自定义事件 */
    static unit_register_trigger_event(_unit: Unit, _event_name: string, _data: any): void;
    /** 注销单位创建回调 */
    static unit_send_custom_event(_unit_type: Enums.UnitType, _unit_eid: number): void;
    /** 注销单位自定义事件监听 */
    static unit_unregister_creation_handler(_unit: Unit, _id: number): void;
    /** 注销单位触发器 */
    static unit_unregister_custom_event(_unit: Unit, _id: number): void;
    /** 增加效果的持续时间 */
    static unit_unregister_trigger_event(_add_time: Fixed): void;
}

declare class Modifier {
    /** 增加效果层数 */
    static add_duration(_stack_count_add: number): void;
    /** 获取效果描述 */
    static add_stack_count(): string;
    /** 获得效果编号 */
    static get_desc(): ModifierKey;
    /** 获取效果的最大层数 */
    static get_key(): string;
    /** 获取效果名称 */
    static get_max_stack_count(): string;
    /** 获取所属技能 */
    static get_name(): Ability;
    /** 获取效果携带角色 */
    static get_owner_ability(): Character;
    /** 获取效果携带生物 */
    static get_owner_character(): Creature;
    /** 获取携带效果的生命体 */
    static get_owner_creature(): LifeEntity;
    /** 获取效果携带者 */
    static get_owner_life_entity(): Unit;
    /** 获取效果释放者 */
    static get_owner_unit(): Unit;
    /** 获取效果剩余持续时间 */
    static get_releaser_unit(): Fixed;
    /** 获取效果剩余持续时间 */
    static get_remain_duration(): Fixed;
    /** 获取效果当前层数 */
    static get_remain_time(): string;
    /** 设置效果剩余时间 */
    static get_stack_count(_remain_duration: Fixed): void;
    /** 设置效果剩余时间 */
    static set_remain_duration(_remain_duration: Fixed): void;
    /** 设置效果层数 */
    static set_remain_time(_stack_count_add: number): void;
    /** 添加效果 */
    static set_stack_count(_modifier_id: ModifierKey): Modifier;
}

declare class ModifierComp {
    /** 添加效果 */
    static add_modifier(_modifier_id: ModifierKey, _params_dict: any): Modifier;
    /** 销毁效果 */
    static add_modifier_by_key(_modifier: Modifier): void;
    /** 销毁效果 */
    static destroy_buff(_modifier: Modifier): void;
    /** 获取单位效果 */
    static destroy_modifier(_modifier_id: ModifierKey): Modifier;
    /** 获取单位所有效果 */
    static get_buff(): Modifier[];
    /** 获取单位效果 */
    static get_buffs(_modifier_id: ModifierKey): Modifier;
    /** 获取单位所有效果 */
    static get_modifier_by_modifier_key(): Modifier[];
    /** 是否拥有指定编号的效果 */
    static get_modifiers(_modifier_key: ModifierKey): boolean;
    /** 移除效果 */
    static has_modifier_by_key(_modifier_id: ModifierKey): void;
    /** 移除效果 */
    static remove_buff(_modifier_id: ModifierKey): void;
    /** 移除效果 */
    static remove_modifier_by_key(_modifier_id: ModifierKey): void;
    /** 是否滚动 */
    static remove_modifier_by_modifier_key(): boolean;
}

declare class MoveStatusComp {
    /** 是否失控 */
    static is_fling_status(): boolean;
    /** 开始锁定面向目标 */
    static is_lost_control_status(_target_unit: Unit, _time: Fixed): void;
    /** 结束锁定面向目标 */
    static start_face_lock_target(): void;
    /** 获取公告板文本字体大小 */
    static stop_face_lock_target(): number;
}

declare class Obstacle {
    /** 获取公告板文本内容 */
    static get_billboard_font_size(): string;
    /** 返回绑定的物品 */
    static get_billboard_text(): Equipment;
    /** 获取牌数(对象只能为麻将/扑克) */
    static get_bound_equipment(): number;
    /** 获取组件是否可拖动 */
    static get_chess_rank(): boolean;
    /** 获取组件是否可拖动 */
    static is_drag_enable(): boolean;
    /** 获取组件是否可点击 */
    static is_draggable(): boolean;
    /** 获取组件是否可点击 */
    static is_touch_enable(): boolean;
    /** 重置组件碰撞限制 */
    static is_touchable(_limit_type: Enums.CollisionLimitType): void;
    /** 设置公告板文本字体大小 */
    static reset_collision_limit(_font_size: number): void;
    /** 设置公告板文本内容 */
    static set_billboard_font_size(_content: string): void;
    /** 设置公告板文本颜色 */
    static set_billboard_text(_color: Color, _gradient_color_1: Color?, _gradient_color_2: Color?, _gradient_color_3: Color?, _gradient_color_4: Color?): void;
    /** 设置组件碰撞次数限制 */
    static set_billboard_text_color(_limit_type: Enums.CollisionLimitType, _value: number): void;
    /** 设置组件碰撞间隔限制 */
    static set_collision_count_limit(_limit_type: Enums.CollisionLimitType, _value: Fixed): void;
    /** 设置组件碰撞次数限制 */
    static set_collision_interval_limit(_limit_type: Enums.CollisionLimitType, _value: number): void;
    /** 设置组件碰撞间隔限制 */
    static set_collision_limit_count(_limit_type: Enums.CollisionLimitType, _value: Fixed): void;
    /** 设置组件是否可拖动 */
    static set_collision_limit_interval(_enabled: boolean): void;
    /** 设置组件是否可拖动 */
    static set_drag_enable(_enabled: boolean): void;
    /** 设置场景排行榜分数 */
    static set_draggable(_role: Role, _score: number): void;
    /** 设置场景排行榜分数 */
    static set_ranklist_score(_role: Role, _score: number): void;
    /** 修改所属玩家 */
    static set_ranklist_score_by_role(_role: Role): void;
}

declare class OwnerComp {
    /** 获取所属玩家 */
    static change_owner(): Role;
    /** 增加成就进度 */
    static get_owner_role(_event_id: Achievement, _add_count: number): void;
}

declare class Role {
    /** 增加成就进度 */
    static add_achieve_count(_event_id: Achievement, _add_count: number): void;
    /** 增加玩家积分 */
    static add_achievement_progress(_add_score: number): void;
    /** 消耗玩家指定数量道具 */
    static add_score(_commodity_id: UgcCommodity, _num: number): void;
    /** 消耗玩家指定数量道具 */
    static consume_commodity(_commodity_id: UgcCommodity, _num: number): void;
    /** 关闭单位菲尼尔效果 */
    static consume_ugc_commodity(_unit: Unit): void;
    /** 关闭单位蒙版 */
    static disable_unit_fresnel(_unit: Unit): void;
    /** 关闭单位描边 */
    static disable_unit_mask(_unit: Unit): void;
    /** 玩家进入观战 */
    static disable_unit_outline(_camp_limit: boolean?, _exit_visible: boolean?): void;
    /** 玩家退出观战 */
    static enter_watch_mode(): void;
    /** 玩家游戏失败 */
    static exit_watch_mode(): void;
    /** 玩家游戏失败并显示失败界面 */
    static game_lose(): void;
    /** 玩家游戏胜利并显示胜利界面 */
    static game_lose_and_show_result_panel(): void;
    /** 获取成就进度 */
    static game_win_and_show_result_panel(_event_id: Achievement): number;
    /** 获取成就进度 */
    static get_achieve_count(_event_id: Achievement): number;
    /** 获取存档值 */
    static get_achievement_progress(_archive_type: Enums.ArchiveType, _key: Archive): any;
    /** 获取玩家相机的朝向(需要开启玩家相机旋转同步) */
    static get_archive_by_type(): Vector3;
    /** 获取玩家相机的朝向(需要开启玩家相机旋转同步) */
    static get_camera_dir(): Vector3;
    /** 获取玩家相机的旋转(需要开启玩家相机旋转同步) */
    static get_camera_direction(): Quaternion;
    /** 获取玩家阵营 */
    static get_camera_rotation(): Camp;
    /** 玩家拥有道具数量 */
    static get_camp(_commodity_id: UgcCommodity): number;
    /** 获取控制单位 */
    static get_commodity_count(): Character;
    /** 获取玩家游戏结果 */
    static get_ctrl_unit(): Enums.GameResult;
    /** 获取玩家头像 */
    static get_game_result(): ImageKey;
    /** 获取玩家昵称 */
    static get_head_icon(): string;
    /** 获取玩家ID */
    static get_name(): RoleID;
    /** 获取玩家积分 */
    static get_roleid(): number;
    /** 玩家拥有道具数量 */
    static get_score(_commodity_id: UgcCommodity): number;
    /** 获取语音音量 */
    static get_ugc_commodity_num(): Fixed;
    /** 玩家是否拥有道具 */
    static get_voice_volume(_commodity_id: UgcCommodity): boolean;
    /** 玩家是否记录过存档 */
    static has_commodity(): boolean;
    /** 玩家是否拥有道具 */
    static has_saved_archive(_commodity_id: UgcCommodity): boolean;
    /** 成就是否完成 */
    static has_ugc_commodity(_event_id: Achievement): boolean;
    /** 成就是否完成 */
    static is_achieve_finish(_event_id: Achievement): boolean;
    /** 是否是乐园会员 */
    static is_achievement_completed(): boolean;
    /** 玩家是否失败 */
    static is_gallery_vip(): boolean;
    /** 玩家是否失败 */
    static is_lose(): boolean;
    /** 玩家是否失败 */
    static is_losed(): boolean;
    /** 玩家是否失败 */
    static is_loss(): boolean;
    /** 是否收藏本地图 */
    static is_lost(): boolean;
    /** 是否点赞本地图 */
    static is_map_favorited(): boolean;
    /** 玩家是否在线 */
    static is_map_liked(): boolean;
    /** 是否是派对手册进阶会员 */
    static is_online(): boolean;
    /** 玩家是否失败 */
    static is_pass_premium_vip(): boolean;
    /** 玩家是否胜利 */
    static is_role_lose(): boolean;
    /** 玩家是否订阅地图作者 */
    static is_role_win(): boolean;
    /** 玩家进入观战 */
    static is_subscribed_map_author(): boolean;
    /** 玩家是否胜利 */
    static is_watch_mode(): boolean;
    /** 玩家是否胜利 */
    static is_win(): boolean;
    /** 设置是否开启玩家相机旋转同步 */
    static is_won(_enabled: boolean): void;
    /** 设置监听陀螺仪信息 */
    static listen_camera_rotation(_enabled: boolean): void;
    /** 发起进入关卡投票 */
    static listen_gyroscope_info(_level_key: LevelKey): void;
    /** 玩家游戏失败 */
    static load_level_by_voting(): void;
    /** 暂停玩家相机运动 */
    static lose(): void;
    /** 玩家播放2D音效 */
    static pause_camera_motor(_event_id: SoundID, _duration: Fixed, _volume: Fixed, _speed: Fixed): SoundID;
    /** 播放广告 */
    static play_2d_sound_with_params(_success_event: string, _fail_event: string, _ad_tag: string?, _success_data: table?, _fail_data: table?): void;
    /** 播放指定剧情动画 */
    static play_advertisement_with_event(_montage_key: MontageKey, _start_time: Fixed, _play_to_end: boolean, _play_time: Fixed): void;
    /** 播放指定剧情动画 */
    static play_montage(_montage_key: MontageKey, _start_time: Fixed, _play_to_end: boolean, _play_time: Fixed): void;
    /** 播放屏幕特效 */
    static play_montage_by_id(_sfx_key: SfxKey, _duration: Fixed, _rate: Fixed): SfxID;
    /** 播放界面动效 */
    static play_screen_sfx(_effect_node: EEffectNode): void;
    /** 播放界面动效 */
    static play_ui_animation_effect(_effect_node: EEffectNode): void;
    /** 重置界面动画 */
    static play_ui_effect(_node: ENode): void;
    /** 重置玩家相机 */
    static reset_animation(_reset_angle: boolean?, _reset_bind: boolean?, _reset_point: boolean?, _reset_prop_pitch: boolean?): void;
    /** 恢复玩家相机运动 */
    static reset_camera(): void;
    /** 发送埋点数据变化 */
    static resume_camera_motor(_track_data_key: string, _change_num: number): void;
    /** 发送埋点数据变化 */
    static send_track_data_change(_track_data_key: string, _change_num: number): void;
    /** 发送UI自定义消息 */
    static send_track_data_log(_event_name: string, _data: any): void;
    /** 设置成就进度 */
    static send_ui_custom_event(_event_id: Achievement, _count: number): void;
    /** 设置成就进度 */
    static set_achieve_count(_event_id: Achievement, _count: number): void;
    /** 设置存档值 */
    static set_achievement_progress(_archive_type: Enums.ArchiveType, _key: Archive, _val: any): void;
    /** 设置存档点坐标 */
    static set_archive_by_type(_position: Vector3, _priority: number, _direction: Vector3): void;
    /** 设置物品格关联生命体 */
    static set_archive_point(_bag_slot: EBagSlot, _life_entity: LifeEntity): void;
    /** 设置物品格关联生命体 */
    static set_bagslot_related_life_entity(_bag_slot: EBagSlot, _life_entity: LifeEntity): void;
    /** 设置玩家商店显示 */
    static set_bagslot_related_lifeentity(_battle_shop_id: BattleShopKey, _visible: boolean): void;
    /** 玩家设置暗角 */
    static set_battle_shop_visible(_enable: boolean, _strength: Fixed, _color: Color): void;
    /** 设置按钮控件的状态 */
    static set_blind_corner(_button: EButton, _enabled: boolean): void;
    /** 设置UI按钮节点文字字号 */
    static set_button_enabled(_key: EButton, _font_size: Fixed): void;
    /** 设置UI按钮节点常态图片 */
    static set_button_font_size(_button: EButton, _image_key: ImageKey): void;
    /** 设置UI按钮节点按下图片 */
    static set_button_normal_image(_button: EButton, _image_key: ImageKey): void;
    /** 设置UI按钮节点文本 */
    static set_button_pressed_image(_button: EButton, _text: string): void;
    /** 设置UI按钮节点文字颜色 */
    static set_button_text(_button: EButton, _text_color: Color): void;
    /** 设置玩家相机的模式 */
    static set_button_text_color(_mode: Enums.CameraBindMode): void;
    /** 设置玩家相机是否可拖动 */
    static set_camera_bind_mode(_draggable: boolean): void;
    /** 设置玩家陀螺仪控制镜头 */
    static set_camera_draggable(_is_control: boolean): void;
    /** 设置玩家相机的绑定坐标 */
    static set_camera_gyroscope_control_enabled(_pos: Vector3): void;
    /** 设置玩家相机的投影类型 */
    static set_camera_lock_position(_projection_type: Enums.CameraProjectionType): void;
    /** 设置玩家相机的属性 */
    static set_camera_projection_type(_property: Enums.CameraPropertyType, _value: Fixed): void;
    /** 设置玩家相机面向指定朝向 */
    static set_camera_property(_target_dir: Vector3, _duration: Fixed): void;
    /** 设置是否开启玩家相机旋转同步 */
    static set_camera_rotation_by_direction(_enabled: boolean): void;
    /** 设置付费道具商店可见性 */
    static set_camera_rotation_sync_enabled(_visible: boolean): void;
    /** 设置玩家陀螺仪控制组件 */
    static set_goods_panel_visible(_is_control: boolean, _unit: Unit): void;
    /** 设置监听陀螺仪信息 */
    static set_gyroscope_control_unit(_enabled: boolean): void;
    /** 设置UI图片颜色 */
    static set_gyroscope_sync_enabled(_image: EImage, _image_color: Color, _transition_time: Fixed): void;
    /** 设置UI图片节点图片 */
    static set_image_color(_image: EImage, _image_key: ImageKey, _reset_size: boolean?): void;
    /** 设置UI图片节点图片 */
    static set_image_texture_by_key_with_auto_resize(_image: EImage, _image_path: string, _reset_size: boolean?): void;
    /** 设置UI图片节点图片 */
    static set_image_texture_with_auto_resize(_image: EImage, _image_key: ImageKey, _reset_size: boolean?): void;
    /** 设置UI输入节点文本 */
    static set_image_texture_with_size(_input_field: EInputField, _text: string): void;
    /** 设置UI文本节点背景颜色 */
    static set_input_field_text(_label: ELabel, _color: Color, _transition_time: Fixed): void;
    /** 设置UI文本节点背景不透明度 */
    static set_label_background_color(_label: ELabel, _opacity: Fixed, _transition_time: Fixed): void;
    /** 设置UI文本节点的字体颜色 */
    static set_label_background_opacity(_label: ELabel, _color: Color, _transition_time: Fixed): void;
    /** 设置UI文本节点的描边是否开启 */
    static set_label_color(_label: ELabel, _enable: boolean): void;
    /** 设置UI文本节点的阴影是否开启 */
    static set_label_enable_outline(_label: ELabel, _enable: boolean): void;
    /** 设置UI文本节点字体 */
    static set_label_enable_shadow(_label: ELabel, _font_key: FontKey): void;
    /** 设置UI文本节点的字体大小 */
    static set_label_font(_label: ELabel, _font_size: number, _transition_time: Fixed): void;
    /** 设置UI文本节点的描边颜色 */
    static set_label_font_size(_label: ELabel, _color: Color): void;
    /** 设置UI文本节点的描边是否开启 */
    static set_label_outline_color(_label: ELabel, _enable: boolean): void;
    /** 设置UI文本节点的描边不透明度 */
    static set_label_outline_enabled(_label: ELabel, _opacity: Fixed): void;
    /** 设置UI文本节点的描边大小 */
    static set_label_outline_opacity(_label: ELabel, _width: Fixed): void;
    /** 设置UI文本节点的阴影颜色 */
    static set_label_outline_width(_label: ELabel, _color: Color): void;
    /** 设置UI文本节点的阴影是否开启 */
    static set_label_shadow_color(_label: ELabel, _enable: boolean): void;
    /** 设置UI文本节点的阴影x偏移 */
    static set_label_shadow_enabled(_label: ELabel, _offset: Fixed): void;
    /** 设置UI文本节点的阴影y偏移 */
    static set_label_shadow_x_offset(_label: ELabel, _offset: Fixed): void;
    /** 设置UI文本节点的文本 */
    static set_label_shadow_y_offset(_label: ELabel, _text: string): void;
    /** 设置是否开启玩家相机旋转同步 */
    static set_label_text(_enabled: boolean): void;
    /** 设置玩家昵称可见性 */
    static set_listen_camera_rotation(_visible: boolean): void;
    /** 设置玩家昵称可见性 */
    static set_name_visible(_visible: boolean): void;
    /** 设置UI节点交互开关 */
    static set_nickname_visible(_node: ENode, _touch_enabled: boolean): void;
    /** 设置UI节点可见性 */
    static set_node_touch_enabled(_node: ENode, _visible: boolean): void;
    /** 设置UI进度条节点进度 */
    static set_node_visible(_progress_bar: EProgressbar, _current: number): void;
    /** 设置UI进度条节点最大进度 */
    static set_progressbar_current(_progress_bar: EProgressbar, _max: number): void;
    /** 设置UI进度条最小进度 */
    static set_progressbar_max(_key: EProgressbar, _min: number): void;
    /** 设置UI进度条节点过渡 */
    static set_progressbar_min(_progress_bar: EProgressbar, _current: number, _transition_time: Fixed): void;
    /** 设置玩家阵营 */
    static set_progressbar_transition(_camp: Camp): void;
    /** 设置玩家控制开启/关闭 */
    static set_role_camp(_enable: boolean): void;
    /** 设置玩家控制开启/关闭 */
    static set_role_ctrl(_enable: boolean): void;
    /** 设置玩家积分 */
    static set_role_ctrl_enabled(_score: number): void;
    /** 设置付费道具商店可见性 */
    static set_score(_visible: boolean): void;
    /** 设置UI节点不透明度 */
    static set_ugc_goods_panel_visible(_node: ENode, _opacity: Fixed): void;
    /** 设置单位菲尼尔效果 */
    static set_ui_opacity(_unit: Unit, _fresnel_scale: Fixed, _color: Color, _intensity: number): void;
    /** 设置单位菲尼尔效果 */
    static set_unit_fresnel(_unit: Unit, _fresnel_scale: Fixed, _color: Color, _intensity: number, _duration: Fixed): void;
    /** 设置单位蒙版 */
    static set_unit_fresnel_gradual(_unit: Unit, _color: Color): void;
    /** 设置单位描边 */
    static set_unit_mask(_unit: Unit, _width: number, _color: Color): void;
    /** 设置单位穿透显示 */
    static set_unit_outline(_unit: Unit, _enabled: boolean): void;
    /** 设置单位穿透显示 */
    static set_unit_see_through(_unit: Unit, _enabled: boolean): void;
    /** 设置单位对玩家可见性 */
    static set_unit_see_through_enabled(_unit: Unit, _is_visible: boolean): void;
    /** 设置是否开启语音音量同步 */
    static set_unit_visible(_enabled: boolean): void;
    /** 设置玩家屏幕震动 */
    static set_voice_volume_sync_enabled(_shake_type: CameraShakeType, _shake_max_amplitude: Fixed, _shake_time: Fixed, _shake_source: Unit, _shake_frequency: Fixed, _shake_time_decay: Fixed, _shake_effect_scope: Fixed, _shake_undamped_scope: Fixed, _shake_distance_decay: Fixed): void;
    /** 设置玩家的背包界面显隐 */
    static shake_camera(_visible: boolean): void;
    /** 玩家显示指定商品购买界面 */
    static show_bag_panel(_raw_goods_id: UgcGoods, _show_time: Fixed): void;
    /** 显示点赞界面 */
    static show_goods_purchase_panel(): void;
    /** 显示点赞界面 */
    static show_like_interact_ui(): void;
    /** 玩家显示飘字信息 */
    static show_like_panel(_content: string, _duration: Fixed): void;
    /** 玩家显示指定商品购买界面 */
    static show_tips(_raw_goods_id: UgcGoods, _show_time: Fixed): void;
    /** 显示玩家决战技选择界面 */
    static show_ugc_good_purchase_panel(_keep_time: number): void;
    /** 跳过剧情动画 */
    static show_ultimate_ability_panel(_has_black_screen: boolean): void;
    /** 发起进入关卡投票 */
    static skip_current_montage(_level_key: LevelKey): void;
    /** 开始手机震动 */
    static start_level_vote(_vibrate_type: number, _vibrate_count: number, _vibrate_interval: Fixed): void;
    /** 对指定单位停止2D声音 */
    static start_vibration(_sound_instance_id: SoundID): void;
    /** 停止玩家相机运动 */
    static stop_2d_sound(): void;
    /** 停止界面动效 */
    static stop_camera_motor(_effect_node: EEffectNode): void;
    /** 停止界面动效 */
    static stop_ui_animation_effect(_effect_node: EEffectNode): void;
    /** UI文本节点解除属性 */
    static stop_ui_effect(_label: ELabel): void;
    /** 为UI进度条节点当前进度解绑属性 */
    static unbind_label_text(_progress_bar: EProgressbar): void;
    /** UI进度条节点最大进度解绑属性 */
    static unbind_progressbar_current(_progress_bar: EProgressbar): void;
    /** 发起进入关卡投票 */
    static unbind_progressbar_max(_level_key: LevelKey): void;
    /** 玩家胜利 */
    static vote_for_switch_level(): void;
    /** 获取滚动冷却时间 */
    static win(): Fixed;
}

declare class RollComp {
    /** 获取滚动剩余冷却时间 */
    static get_roll_cooldown(): Fixed;
    /** 获取滚动剩余冷却时间 */
    static get_roll_left_cd(): Fixed;
    /** 设置滚动冷却时间 */
    static get_roll_remaining_cooldown(_time: Fixed): void;
    /** 设置滚动剩余冷却时间 */
    static set_roll_cooldown(_remaining_time: Fixed): void;
    /** 设置滚动剩余冷却时间 */
    static set_roll_left_cd(_remaining_time: Fixed): void;
    /** 获取飞扑冷却时间 */
    static set_roll_remaining_cooldown(): Fixed;
}

declare class RushComp {
    /** 获取飞扑剩余冷却时间 */
    static get_rush_cooldown(): Fixed;
    /** 获取飞扑剩余冷却时间 */
    static get_rush_left_cd(): Fixed;
    /** 设置飞扑冷却时间 */
    static get_rush_remaining_cooldown(_time: Fixed): void;
    /** 设置飞扑剩余冷却时间 */
    static set_rush_cooldown(_time: Fixed): void;
    /** 设置飞扑剩余冷却时间 */
    static set_rush_left_cd(_time: Fixed): void;
    /** 创建场景界面绑定到单位 */
    static set_rush_remaining_cooldown(_layer_key: E3DLayerKey, _socket_name: Enums.ModelSocket, _offset_pos: Vector3, _duration: Fixed, _bind_event: boolean?, _inherit_visible: boolean?): E3DLayer;
}

declare class SceneUI {
    /** 获取光源亮度 */
    static create_scene_ui_bind_unit(): Fixed;
}

declare class TriggerSpace {
    /** 设置光源亮度 */
    static get_virtual_light_brightness(_brightness: Fixed): void;
    /** 判断计时器是否存在 */
    static set_virtual_light_brightness(_timer: Timer): boolean;
}

declare class TriggerSystem {
    /** 添加向技能槽位添加UGC技能能 */
    static has_timer(_ability_index: AbilitySlot, _ability_id: AbilityKey, _kv_args: table?, _kv_types: table?): Ability;
}

declare class Unit {
    /** 添加圆周运动 */
    static add_ability_to_slot(_vel: Vector3, _time: Fixed, _is_local: boolean?): number;
    /** 添加子单位 */
    static add_angular_motor(_unit: Unit): void;
    /** 添加圆周运动 */
    static add_child(_vel: Vector3, _time: Fixed, _is_local: boolean?): number;
    /** 添加直线运动 */
    static add_circle_motor(_vel: Vector3, _time: Fixed, _is_local: boolean?): number;
    /** 添加环绕运动 */
    static add_linear_motor(_follow_target: Unit, _ang_vel: Vector3, _time: Fixed, _follow_rotate: boolean?): void;
    /** 添加向技能槽位添加UGC技能能 */
    static add_surround_motor(_ability_index: AbilitySlot, _ability_id: AbilityKey, _kv_args: table?, _kv_types: table?): Ability;
    /** 控制AI执行警戒命令 */
    static add_ugc_skill_to_slot(_tagert_pos: Vector3, _target_dir: Vector3, _dalay_time: Fixed, _reject_time: Fixed, _move_mode: Enums.MoveMode): void;
    /** 控制AI执行跟随命令 */
    static ai_command_alert(_target_unit: Character, _follow_dis: Fixed, _tolerate_dis: Fixed, _reject_time: Fixed, _move_mode: Enums.MoveMode): void;
    /** 控制AI执行模仿命令 */
    static ai_command_follow(_target_unit: Character, _delay: Fixed, _disable_actions: Enums.AIBasicCommand[]): void;
    /** 控制AI跳跃 */
    static ai_command_imitate(): void;
    /** 控制AI举起/扔下/投掷 */
    static ai_command_jump(): void;
    /** 控制AI执行巡逻命令 */
    static ai_command_lift(_waypoint: Vector3, _reject_time: Fixed, _round_mode: Enums.PatrolType, _move_mode: Enums.MoveMode): void;
    /** 控制AI拾取物品 */
    static ai_command_nav(_target_equipment: Equipment, _move_mode: Enums.MoveMode, _reject_time: Fixed): void;
    /** 控制AI滚动 */
    static ai_command_pick_up_equipment(): void;
    /** 控制AI前扑 */
    static ai_command_roll(): void;
    /** 控制AI单位移动 */
    static ai_command_rush(_direction: Vector3, _t: Fixed): void;
    /** 控制AI执行高优先级寻路命令 */
    static ai_command_start_move(_target_position: Vector3, _duration: Fixed, _threshold: Fixed): void;
    /** 控制AI单位停止移动 */
    static ai_command_start_move_high_priority(_duration: Fixed): void;
    /** 施加力 */
    static ai_command_stop_move(_force: Vector3): void;
    /** 施加冲击力 */
    static apply_force(_force: Vector3, _max_speed: Fixed, _force_lost_control: boolean?, _lost_ctrl_time: Fixed): void;
    /** 打断技能蓄力 */
    static apply_impact_force(): void;
    /** 打断技能施法 */
    static break_ability_accumulate(): void;
    /** 打断技能蓄力 */
    static break_ability_cast(): void;
    /** 打断技能施法 */
    static break_accumulate_skill(): void;
    /** 控制角色对目标方向释放指定槽位技能 */
    static break_cast_skill(_direction: Vector3, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对目标坐标释放指定槽位技能 */
    static cast_ability_by_ability_slot_and_direction(_position: Vector3, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对目标单位释放指定槽位技能 */
    static cast_ability_by_ability_slot_and_position(_target: LifeEntity, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对指定方向执行释放指定预设技能 */
    static cast_ability_by_ability_slot_and_target(_ability_key: AbilityKey, _duration: Fixed, _direction: Vector3, _ability_slot: AbilitySlot?): void;
    /** 控制角色对指定坐标执行释放预设技能 */
    static cast_ability_by_direction(_ability_key: AbilityKey, _duration: Fixed, _position: Vector3, _ability_slot: AbilitySlot?): void;
    /** 控制角色对指定目标执行释放指定预设技能 */
    static cast_ability_by_position(_ability_key: AbilityKey, _duration: Fixed, _target: LifeEntity, _ability_slot: AbilitySlot?): void;
    /** 改变组件颜色 */
    static cast_ability_by_target(_paint_area: PaintArea, _color: Color): void;
    /** 修改所属玩家 */
    static change_comp_color(_role: Role): void;
    /** 清除单位物品格选中状态 */
    static change_owner(): void;
    /** 停止环绕运动 */
    static clear_selected_equipment_slot(): void;
    /** 销毁技能 */
    static del_surround_motor(_ability: Ability): boolean;
    /** 销毁技能 */
    static destroy_ability(_ability: Ability): boolean;
    /** 关闭重力影响 */
    static destroy_skill(): void;
    /** 禁用单位互动 */
    static disable_gravity(): void;
    /** 禁用运动器 */
    static disable_interact(_index: number): void;
    /** 开启重力影响 */
    static disable_motor(): void;
    /** 激活单位互动 */
    static enable_gravity(): void;
    /** 激活运动器 */
    static enable_interact(_index: number): void;
    /** 控制角色对目标方向释放指定槽位技能 */
    static enable_motor(_direction: Vector3, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对目标坐标释放指定槽位技能 */
    static execute_ability_by_ability_slot_index_and_dir(_position: Vector3, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对目标单位释放指定槽位技能 */
    static execute_ability_by_ability_slot_index_and_pos(_target: LifeEntity, _ability_slot: AbilitySlot, _duration: Fixed): void;
    /** 控制角色对指定方向执行释放指定预设技能 */
    static execute_ability_by_ability_slot_index_and_target(_ability_key: AbilityKey, _duration: Fixed, _direction: Vector3, _ability_slot: AbilitySlot?): void;
    /** 控制角色对指定坐标执行释放预设技能 */
    static execute_ability_by_dir(_ability_key: AbilityKey, _duration: Fixed, _position: Vector3, _ability_slot: AbilitySlot?): void;
    /** 控制角色对指定目标执行释放指定预设技能 */
    static execute_ability_by_pos(_ability_key: AbilityKey, _duration: Fixed, _target: LifeEntity, _ability_slot: AbilitySlot?): void;
    /** 获取单位所有技能 */
    static execute_ability_by_target(): Ability[];
    /** 获取对应槽位技能 */
    static get_abilities(_ability_slot: AbilitySlot): Ability;
    /** 获取对应槽位技能 */
    static get_ability_by_slot(_ability_slot: AbilitySlot): Ability;
    /** 获取单位角速度 */
    static get_ability_in_slot(): Vector3;
    /** 获取单位所属阵营 */
    static get_angular_velocity(): Camp;
    /** 获取单位所属阵营id */
    static get_camp(): CampID;
    /** 根据单位编号获取子组件 */
    static get_camp_id(_name: string): Unit;
    /** 获得所有子触发区域单位 */
    static get_child_by_name(): CustomTriggerSpace[];
    /** 获得所有子物理组件单位 */
    static get_child_customtriggerspaces(): Obstacle[];
    /** 获得所有子单位 */
    static get_child_obstacles(): Unit[];
    /** 获得所有子触发区域单位 */
    static get_children(): CustomTriggerSpace[];
    /** 获得所有子物理组件单位 */
    static get_children_customtriggerspace(): Obstacle[];
    /** 获取触发区域内的随机坐标 */
    static get_children_obstacle(): Vector3;
    /** 获取身上的物品 */
    static get_customtriggerspaces_random_point(_slot_type: Enums.EquipmentSlotType, _slot_index: number): Equipment;
    /** 获取角色/生物持有的物品预设列表 */
    static get_equipment_by_slot(_equipment_key: EquipmentKey, _exclude_equipped: boolean?, _exclude_bag: boolean?): Equipment[];
    /** 获取持有的物品列表 */
    static get_equipment_list(_slot_type: Enums.EquipmentSlotType): Equipment[];
    /** 获取最大可持有的物品数量 */
    static get_equipment_list_by_slot(_slot_type: Enums.EquipmentSlotType): number;
    /** 获取单位编号 */
    static get_equipment_max_num_by_slot(): UnitKey;
    /** 获取举起冷却时间 */
    static get_key(): Fixed;
    /** 获取举起剩余冷却时间 */
    static get_lift_cd(): Fixed;
    /** 获取单位线速度 */
    static get_lift_left_cd(): Vector3;
    /** 获取单位本地坐标系下的方向 */
    static get_linear_velocity(_direction_type: Enums.DirectionType): Vector3;
    /** 获取单位本地坐标系下的方向 */
    static get_local_dir(_direction_type: Enums.DirectionType): Vector3;
    /** 获取单位局部偏移位置 */
    static get_local_direction(_offset: Vector3): Vector3;
    /** 获取单位本地坐标系下的旋转角 */
    static get_local_offset_position(_direction_type: Enums.DirectionType): Quaternion;
    /** 获取单位名称 */
    static get_local_quaternion(): string;
    /** 获得单位旋转 */
    static get_name(): Quaternion;
    /** 获取父单位 */
    static get_orientation(): Unit;
    /** 获取单位坐标 */
    static get_parent(): Vector3;
    /** 获取受力类型 */
    static get_position(): Enums.RigidBodyType;
    /** 获取单位所属玩家 */
    static get_rigid_body_type(): Role;
    /** 获取单位所属玩家ID */
    static get_role(): RoleID;
    /** 获取滚动剩余冷却时间 */
    static get_role_id(): Fixed;
    /** 获取飞扑剩余冷却时间 */
    static get_roll_left_cd(): Fixed;
    /** 获得单位缩放 */
    static get_rush_left_cd(): Vector3;
    /** 获取当前选中的物品 */
    static get_scale(): Equipment;
    /** 获取单位所有技能 */
    static get_selected_equipment(): Ability[];
    /** 获取对应槽位技能 */
    static get_skills(_ability_slot: AbilitySlot): Ability;
    /** 获取单位类型 */
    static get_ugc_skill(): Enums.UnitType;
    /** 关闭气泡信息 */
    static get_unit_type(): void;
    /** 打断技能施法 */
    static hide_bubble_msg(): void;
    /** 是否为角色 */
    static interrupt_ability(): boolean;
    /** 是否为生物 */
    static is_character(): boolean;
    /** 组件是否为受力物体 */
    static is_creature(): boolean;
    /** 是受力物体 */
    static is_dynamic(): boolean;
    /** 单位是否在触发区域内 */
    static is_dynamic_body(_custom_trigger_space: CustomTriggerSpace, _consider_mask: boolean?): boolean;
    /** 单位是否在触发区域内 */
    static is_in_custom_trigger_space(_custom_trigger_space: CustomTriggerSpace, _consider_mask: boolean?): boolean;
    /** 是动力学物体 */
    static is_in_customtriggerspace(): boolean;
    /** 单位模型是否可见 */
    static is_kinematic_body(): boolean;
    /** 单位物理是否生效 */
    static is_model_visible(): boolean;
    /** 单位物理是否生效 */
    static is_physic_active(): boolean;
    /** 单位物理是否生效 */
    static is_physic_enable(): boolean;
    /** 是静态物体 */
    static is_physics_active(): boolean;
    /** 判断单位是否满足作为技能释放目标的条件 */
    static is_static_body(_ability: Ability): boolean;
    /** 单位开始播放3d音效 */
    static is_valid_ability_target(_sound_key: SoundKey, _duration: Fixed, _volume: Fixed): SoundID;
    /** 单位发送表情 */
    static play_3d_sound(_emoji_key: EmojiKey): void;
    /** 发送气泡表情 */
    static play_emoji(_emoji_key: EmojiKey, _show_time: Fixed, _offset: Vector3): void;
    /** 单位开始播放声音 */
    static play_emoji_with_offset(_event_id: SoundKey, _vis_dis: Fixed, _sound_attenuation_curve: string): SoundID;
    /** 移除槽位上的技能 */
    static play_sound_with_dis_and_attenuation(_ability_slot: AbilitySlot): boolean;
    /** 根据技能编号移除技能 */
    static remove_ability(_ability_key: AbilityKey): boolean;
    /** 根据技能编号移除技能 */
    static remove_ability_by_ability_key(_ability_key: AbilityKey): boolean;
    /** 移除槽位上的技能 */
    static remove_ability_by_key(_ability_slot: AbilitySlot): boolean;
    /** 从父节点移除 */
    static remove_ability_in_slot(): void;
    /** 根据技能编号移除技能 */
    static remove_from_parent(_ability_key: AbilityKey): boolean;
    /** 停止环绕运动 */
    static remove_skill_by_skill_key(): void;
    /** 移除槽位上的技能 */
    static remove_surround_motor(_ability_slot: AbilitySlot): boolean;
    /** 重置指定槽位技能CD */
    static remove_ugc_skill_in_slot(_ability_index: AbilitySlot): void;
    /** 重置指定槽位技能CD */
    static reset_ability_cd(_ability_index: AbilitySlot): void;
    /** 替换技能槽位(UGC槽位) */
    static reset_skill_cd(_ability: Ability, _ability_index: AbilitySlot): Ability;
    /** 设置加速运动初速度并重置 */
    static set_ability_to_slot(_index: number, _init_vel: Vector3): void;
    /** 改变单位角速度 */
    static set_acc_motor_init_velocity(_vel: Vector3): void;
    /** 设置举起冷却时间 */
    static set_angular_velocity(_cd_time: Fixed): void;
    /** 设置举起剩余冷却时间 */
    static set_lift_cd(_time: Fixed): void;
    /** 设置直线运动速度 */
    static set_lift_left_cd(_index: number, _vel: Vector3, _is_local: boolean?): void;
    /** 改变单位线速度 */
    static set_linear_motor_velocity(_vel: Vector3): void;
    /** 开关镜面反射 */
    static set_linear_velocity(_enable: boolean): void;
    /** 设置单位物理是否生效 */
    static set_mirror_reflect_enabled(_is_active: boolean): void;
    /** 设置单位模型是否可见 */
    static set_model_physic_visible(_v: boolean): void;
    /** 设置单位旋转 */
    static set_model_visible(_rot: Quaternion): void;
    /** 改变组件颜色 */
    static set_orientation(_paint_area: PaintArea, _color: Color): void;
    /** 改变组件颜色 */
    static set_paint_area_color(_paint_area: PaintArea, _color: Color): void;
    /** 设置单位物理是否生效 */
    static set_paintarea_color(_is_active: boolean): void;
    /** 设置单位物理是否生效 */
    static set_physic_enable(_is_active: boolean): void;
    /** 重置单位坐标 */
    static set_physics_active(_pos: Vector3): void;
    /** 设置滚动剩余冷却时间 */
    static set_position(_remaining_time: Fixed): void;
    /** 设置飞扑冷却时间 */
    static set_roll_left_cd(_time: Fixed): void;
    /** 设置飞扑剩余冷却时间 */
    static set_rush_cd(_time: Fixed): void;
    /** 设置单位选中物品格 */
    static set_rush_left_cd(_slot_type: Enums.EquipmentSlotType, _slot_index: number): void;
    /** 替换技能槽位(UGC槽位) */
    static set_selected_equipment_slot(_ability: Ability, _ability_index: AbilitySlot): Ability;
    /** 设置单位世界空间下的缩放 */
    static set_skill_to_slot(_scale: Vector3): void;
    /** 发送气泡信息 */
    static set_world_scale(_show_msg: string, _show_time: Fixed, _max_dis: Fixed, _offset: Vector3): void;
    /** 激活AI */
    static show_bubble_msg(): void;
    /** 暂停AI */
    static start_ai(): void;
    /** 单位停止播放声音 */
    static stop_ai(_lres_id: SoundID): void;
    /** 使载具往某个方向移动一段时间 */
    static stop_sound(_direction: Vector3, _duration: Fixed): void;
    /** 使载具停止移动 */
    static vehicle_start_move(): void;
    /** 获取单位互动按钮ID */
    static vehicle_stop_move(_interact_index: number, _interact_btn_type: Enums.InteractBtnType): InteractBtnID;
}

declare class UnitInteractVolumeComp {
    /** 设置单位互动按钮图标 */
    static get_interact_id(_interact_id: InteractBtnID, _icon: ImageKey): void;
    /** 设置单位互动按钮文本 */
    static set_interact_btn_icon(_interact_id: InteractBtnID, _text: string): void;
    /** 设置单位互动按钮图标 */
    static set_interact_btn_name(_interact_id: InteractBtnID, _icon: ImageKey): void;
    /** 设置单位互动按钮文本 */
    static set_interact_button_icon(_interact_id: InteractBtnID, _text: string): void;
    /** 设置单位互动按钮文本 */
    static set_interact_button_text(_interact_index: number, _text: string): void;
    /** 设置单位互动是否启用 */
    static set_interact_button_text_by_index(_enable: boolean): void;
    /** 设置单位互动是否启用(索引) */
    static set_interact_enable(_interact_index: number, _enable: boolean): void;
    /** 设置单位互动是否启用 */
    static set_interact_enable_by_index(_enable: boolean): void;
    /** 设置单位互动是否启用(索引) */
    static set_interact_enabled(_interact_index: number, _enable: boolean): void;
    /** 载具复位 */
    static set_interact_enabled_by_index(): void;
}

declare class VehicleComp {
    /** 使载具往某个方向移动一段时间 */
    static reset(_direction: Vector3, _duration: Fixed): void;
    /** 使载具停止移动 */
    static start_move_by_direction(): void;
    /** 增加/减少物品当前堆叠数 */
    static stop_move(_num: number): void;
}

declare class VirtualEquipment {
    /** 增加/减少物品最大堆叠数 */
    static add_equipment_current_stack_num(_num: number): void;
    /** 获取物品能否丢弃 */
    static add_equipment_max_stack_num(): boolean;
    /** 增加/减少物品当前堆叠数 */
    static can_drop(_num: number): void;
    /** 增加/减少物品最大堆叠数 */
    static change_current_stack_size(_num: number): void;
    /** 删除物品 */
    static change_max_stack_size(): void;
    /** 获取物品当前堆叠层数 */
    static destroy_equipment(): number;
    /** 获取物品描述 */
    static get_current_stack_num(): string;
    /** 获取物品的抵押价格 */
    static get_desc(_res_type: string): number;
    /** 获取物品是否自动拾取 */
    static get_economic_value(): boolean;
    /** 获取物品是否自动使用 */
    static get_equipment_auto_pick(): boolean;
    /** 获取物品能否丢弃 */
    static get_equipment_auto_use(): boolean;
    /** 获取物品当前堆叠层数 */
    static get_equipment_can_drop(): number;
    /** 获取物品描述 */
    static get_equipment_current_stack_num(): string;
    /** 获取物品的物品编号 */
    static get_equipment_desc(): EquipmentKey;
    /** 获取物品最大堆叠层数 */
    static get_equipment_key_prefab(): number;
    /** 获取物品名称 */
    static get_equipment_max_stack_num(): string;
    /** 获取持有物品的角色 */
    static get_equipment_name(): Character;
    /** 获取持有物品的生物 */
    static get_equipment_owner_character(): Creature;
    /** 获取物品所在槽位 */
    static get_equipment_owner_creature(): EquipmentSlot;
    /** 获取物品所在槽位 */
    static get_equipment_slot(): EquipmentSlot;
    /** 获取物品所在槽位类型 */
    static get_equipment_slot_index(): Enums.EquipmentSlotType;
    /** 获取物品的物品类型 */
    static get_equipment_slot_type(): Enums.EquipmentType;
    /** 获取物品的物品编号 */
    static get_equipment_type(): EquipmentKey;
    /** 获取物品最大堆叠层数 */
    static get_key(): number;
    /** 获取物品名称 */
    static get_max_stack_num(): string;
    /** 获取持有物品的角色 */
    static get_name(): Character;
    /** 获取持有物品的生物 */
    static get_owner_character(): Creature;
    /** 获取物品位置 */
    static get_owner_creature(): Vector3;
    /** 获取物品所在槽位 */
    static get_position(): EquipmentSlot;
    /** 获取物品所在槽位类型 */
    static get_slot_index(): Enums.EquipmentSlotType;
    /** 物品是否被持有 */
    static get_slot_type(): boolean;
    /** 获取物品是否自动拾取 */
    static has_owner(): boolean;
    /** 获取物品是否自动拾取 */
    static is_auto_pick(): boolean;
    /** 获取物品是否自动使用 */
    static is_auto_picking(): boolean;
    /** 获取物品是否自动使用 */
    static is_auto_use(): boolean;
    /** 设置物品当前堆叠数 */
    static is_auto_using(_num: number): void;
    /** 设置物品的描述 */
    static set_current_stack_num(_desc: string): void;
    /** 设置物品能否丢弃 */
    static set_desc(_droppable: boolean): void;
    /** 设置物品的抵押价格 */
    static set_droppable(_res_type: string, _price: number): void;
    /** 设置物品当前堆叠数 */
    static set_economic_value(_num: number): void;
    /** 设置物品的描述 */
    static set_equipment_current_stack_num(_desc: string): void;
    /** 设置物品的图标 */
    static set_equipment_desc(_icon_key: ImageKey): void;
    /** 设置物品最大堆叠数 */
    static set_equipment_icon(_num: number): void;
    /** 设置物品的名称 */
    static set_equipment_max_stack_num(_name: string): void;
    /** 设置物品的图标 */
    static set_equipment_name(_icon_key: ImageKey): void;
    /** 设置物品最大堆叠数 */
    static set_icon(_num: number): void;
    /** 设置物品的名称 */
    static set_max_stack_num(_name: string): void;
    /** 设置物品能否使用 */
    static set_name(_usable: boolean): void;
    static set_usable(): void;
}
