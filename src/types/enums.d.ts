// enums.d.ts

/**
 * 游戏枚举定义
 */
declare namespace Enums {
    // ====================== 存档类型 ======================
    /**
     * 存档类型
     */
    export enum ArchiveType {
        /** 布尔值 */
        Bool = 'Bool',
        /** 定点数 */
        Fixed = 'Fixed',
        /** 整型 */
        Int = 'Int',
        /** 字符串 */
        Str = 'Str',
        /** 时间戳 */
        Timestamp = 'Timestamp',
    }

    // ====================== 绑定类型 ======================
    /**
     * 绑定类型
     */
    export enum BindType {
        /** BIND_TYPE_DEFAULT */
        BIND_TYPE_DEFAULT = 0,
        /** BIND_TYPE_TRANSLATE */
        BIND_TYPE_TRANSLATE = 1,
        /** BIND_TYPE_ROTATE */
        BIND_TYPE_ROTATE = 2,
        /** BIND_TYPE_TRANSLATE_ROTATE */
        BIND_TYPE_TRANSLATE_ROTATE = 3,
        /** BIND_TYPE_SCALE */
        BIND_TYPE_SCALE = 4,
        /** BIND_TYPE_TRANSLATE_SCALE */
        BIND_TYPE_TRANSLATE_SCALE = 5,
        /** BIND_TYPE_ROTATE_SCALE */
        BIND_TYPE_ROTATE_SCALE = 6,
        /** BIND_TYPE_ALL */
        BIND_TYPE_ALL = 7,
    }

    // ====================== 状态 ======================
    /**
     * Buff状态
     */
    export enum BuffState {
        /** 禁止跳跃 */
        BUFF_FORBID_JUMP = 1,
        /** 禁止飞扑 */
        BUFF_FORBID_RUSH = 2,
        /** 禁止抓举 */
        BUFF_FORBID_LIFT = 4,
        /** 禁止滚动 */
        BUFF_FORBID_ROLL = 8,
        /** 禁止移动 */
        BUFF_FORBID_MOVE = 16,
        /** 无法控制 */
        BUFF_FORBID_CONTROL = 32,
        /** 沉默 */
        BUFF_SILENT = 64,
    }

    // ====================== 相机绑定模式 ======================
    /**
     * 相机绑定模式
     */
    export enum CameraBindMode {
        /** DEFAULT */
        DEFAULT = 0,
        /** BIND */
        BIND = 1,
        /** TRACK */
        TRACK = 2,
    }

    // ====================== 相机属性预设 ======================
    /**
     * 相机属性预设
     */
    export enum CameraPropertyType {
        /** 追踪-俯仰角 */
        TRACK_MODE_PITCH = 0,
        /** 追踪-偏航角 */
        TRACK_MODE_YAW = 1,
        /** 固定-X轴偏移 */
        BIND_MODE_OFFSET_X = 2,
        /** 固定-Y轴偏移 */
        BIND_MODE_OFFSET_Y = 3,
        /** 固定-Z轴偏移 */
        BIND_MODE_OFFSET_Z = 4,
        /** 固定-俯仰角 */
        BIND_MODE_PITCH = 5,
        /** 固定-偏航角 */
        BIND_MODE_YAW = 6,
        /** 相机距离 */
        DIST = 7,
        /** 视场角 */
        FOV = 8,
        /** 最大俯仰角 */
        PITCH_MAX = 9,
        /** 最小俯仰角 */
        PITCH_MIN = 10,
        /** 相机高度 */
        OBSERVER_HEIGHT = 11,
        /** 水平偏移 */
        HORIZONTAL_OFFSET = 12,
        /** 俯仰角 */
        PITCH = 15,
        /** 偏航角 */
        YAW = 16,
        /** X轴偏移 */
        OFFSET_X = 17,
        /** Y轴偏移 */
        OFFSET_Y = 18,
        /** Z轴偏移 */
        OFFSET_Z = 19,
        /** 滚动角 */
        ROLL = 20,
    }

    // ====================== 阵营关系类型 ======================
    /**
     * 阵营关系类型
     */
    export enum CampRelationType {
        /** 敌方 */
        ENEMY = 1,
        /** 友方 */
        FRIEND = 2,
        /** 中立 */
        NEUTRAL = 4,
    }

    // ====================== 物品槽位类型 ======================
    /**
     * 物品槽位类型
     */
    export enum EquipmentSlotType {
        /** 装配槽位 */
        EQUIPPED = 1,
        /** 背包槽位 */
        BACKPACK = 2,
    }

    // ====================== 物品类型 ======================
    /**
     * 物品类型
     */
    export enum EquipmentType {
        /** 基础物品 */
        BASIC = 0,
        /** 武器物品 */
        WEAPON = 1,
    }

    // ====================== 游戏结局 ======================
    /**
     * 游戏结局
     */
    export enum GameResult {
        /** 失败 */
        LOSE = 0,
        /** 胜利 */
        WIN = 1,
        /** 游戏中 */
        GAMING = 2,
    }

    // ====================== 关节预设编号 ======================
    /**
     * 关节预设编号
     */
    export enum JointAssistantKey {
        /** SPRING */
        SPRING = 3400000,
        /** ROPE */
        ROPE = 3400001,
        /** SLIDER */
        SLIDER = 3400002,
        /** HINGE */
        HINGE = 3400003,
        /** BALL_SOCKET */
        BALL_SOCKET = 3400004,
        /** D6 */
        D6 = 3400005,
        /** FIXED */
        FIXED = 3400006,
    }

    // ====================== 模型部位 ======================
    /**
     * 模型部位
     */
    export enum ModelSocket {
        /** 腹部 */
        socket_abdomen = 'socket_abdomen',
        /** 鱼腹 */
        socket_belly = 'socket_belly',
        /** 身体 */
        socket_body = 'socket_body',
        /** 左小腿 */
        socket_calf_l = 'socket_calf_l',
        /** 右小腿 */
        socket_calf_r = 'socket_calf_r',
        /** 胸部 */
        socket_chest = 'socket_chest',
        /** 左钳 */
        socket_claw_l = 'socket_claw_l',
        /** 右钳 */
        socket_claw_r = 'socket_claw_r',
        /** 左眼 */
        socket_eye_l = 'socket_eye_l',
        /** 右眼 */
        socket_eye_r = 'socket_eye_r',
        /** 背后鳍 */
        socket_fin_back = 'socket_fin_back',
        /** 背鳍 */
        socket_fin_dorsal = 'socket_fin_dorsal',
        /** 左鳍 */
        socket_fin_l = 'socket_fin_l',
        /** 左后鳍 */
        socket_fin_lb = 'socket_fin_lb',
        /** 右鳍 */
        socket_fin_r = 'socket_fin_r',
        /** 右后鳍 */
        socket_fin_rb = 'socket_fin_rb',
        /** 尾鳍 */
        socket_fin_tail = 'socket_fin_tail',
        /** 腹鳍 */
        socket_fin_ventral = 'socket_fin_ventral',
        /** 左腹鳍 */
        socket_fin_ventral_l = 'socket_fin_ventral_l',
        /** 右腹鳍 */
        socket_fin_ventral_r = 'socket_fin_ventral_r',
        /** 左脚 */
        socket_foot_l = 'socket_foot_l',
        /** 左后脚 */
        socket_foot_lb = 'socket_foot_lb',
        /** 左前脚 */
        socket_foot_lf = 'socket_foot_lf',
        /** 左中脚 */
        socket_foot_lm = 'socket_foot_lm',
        /** 右脚 */
        socket_foot_r = 'socket_foot_r',
        /** 右后脚 */
        socket_foot_rb = 'socket_foot_rb',
        /** 右前脚 */
        socket_foot_rf = 'socket_foot_rf',
        /** 右中脚 */
        socket_foot_rm = 'socket_foot_rm',
        /** 左臂 */
        socket_forearm_l = 'socket_forearm_l',
        /** 右臂 */
        socket_forearm_r = 'socket_forearm_r',
        /** 左手 */
        socket_hand_l = 'socket_hand_l',
        /** 右手 */
        socket_hand_r = 'socket_hand_r',
        /** 头部 */
        socket_head = 'socket_head',
        /** 左小臂 */
        socket_lowerarm_l = 'socket_lowerarm_l',
        /** 右小臂 */
        socket_lowerarm_r = 'socket_lowerarm_r',
        /** 左后下肢 */
        socket_lowerlimb_lb = 'socket_lowerlimb_lb',
        /** 左前下肢 */
        socket_lowerlimb_lf = 'socket_lowerlimb_lf',
        /** 右后下肢 */
        socket_lowerlimb_rb = 'socket_lowerlimb_rb',
        /** 右前下肢 */
        socket_lowerlimb_rf = 'socket_lowerlimb_rf',
        /** 鱼嘴 */
        socket_mouth = 'socket_mouth',
        /** 底面中心点 */
        socket_origin = 'socket_origin',
        /** 尾巴 */
        socket_tail = 'socket_tail',
        /** 尾巴末端 */
        socket_tail_end = 'socket_tail_end',
        /** 左大腿 */
        socket_thigh_l = 'socket_thigh_l',
        /** 右大腿 */
        socket_thigh_r = 'socket_thigh_r',
        /** 躯干后部 */
        socket_torso_b = 'socket_torso_b',
        /** 躯干前部 */
        socket_torso_f = 'socket_torso_f',
        /** 左大臂 */
        socket_upperarm_l = 'socket_upperarm_l',
        /** 右大臂 */
        socket_upperarm_r = 'socket_upperarm_r',
        /** 左后上肢 */
        socket_upperlimb_lb = 'socket_upperlimb_lb',
        /** 左前上肢 */
        socket_upperlimb_lf = 'socket_upperlimb_lf',
        /** 右后上肢 */
        socket_upperlimb_rb = 'socket_upperlimb_rb',
        /** 右前上肢 */
        socket_upperlimb_rf = 'socket_upperlimb_rf',
        /** 右手武器 */
        socket_weapon_r = 'socket_weapon_r',
    }

    // ====================== AI移动模式 ======================
    /**
     * AI移动模式
     */
    export enum MoveMode {
        /** 直线运动 */
        DIRECT = 0,
        /** 避障运动 */
        PATHFIND = 1,
    }

    // ====================== AI巡逻类型 ======================
    /**
     * AI巡逻类型
     */
    export enum PatrolType {
        /** 单次 */
        ONE_WAY = 0,
        /** 巡逻 */
        BACK_AND_FORTH = 1,
        /** 反复 */
        LOOP = 2,
    }

    // ====================== 物理类型 ======================
    /**
     * 物理类型
     */
    export enum RigidBodyType {
        /** 静态 */
        STATIC = 0,
        /** 运动学 */
        KINEMATIC = 1,
        /** 受外力 */
        DYNAMIC = 2,
    }

    // ====================== 天空盒渐变类型 ======================
    /**
     * 天空盒渐变类型
     */
    export enum SkyBoxGradualType {
        /** 无过渡 */
        NORMAL = 0,
        /** 渐变 */
        GRADUAL_CHANGE = 1,
        /** 故障风格 */
        FAULT_STYLE = 2,
        /** 燃效效果 */
        BURN_STYLE = 3,
    }

    // ====================== 触发区域类型 ======================
    /**
     * 触发区域类型
     */
    export enum TriggerSpaceEventType {
        /** 进入 */
        ENTER = 1,
        /** 离开 */
        LEAVE = 4,
    }

    // ====================== 单位类型 ======================
    /**
     * 单位类型
     */
    export enum UnitType {
        /** 生物 */
        CREATURE = 4,
        /** 触发区域 */
        CUSTOMTRIGGERSPACE = 8,
        /** 角色 */
        CHARACTER = 128,
        /** 组件 */
        OBSTACLE = 256,
        /** 逻辑体 */
        TRIGGERSPACE = 512,
        /** 装饰物 */
        DECORATION = 1024,
        /** 物品 */
        EQUIPMENT = 32768,
    }

    // ====================== 值类型 ======================
    /**
     * 值类型
     */
    export enum ValueType {
        /** 技能 */
        Ability = 'Ability',
        /** 技能槽位(内部) */
        AbilityIndex = 'AbilityIndex',
        /** 技能编号 */
        AbilityKey = 'AbilityKey',
        /** 技能槽位 */
        AbilitySlot = 'AbilitySlot',
        /** 自定义成就 */
        Achievement = 'Achievement',
        /** Actor */
        Actor = 'Actor',
        /** 动画编号 */
        AnimKey = 'AnimKey',
        /** 自定义存档 */
        Archive = 'Archive',
        /** 存档类型 */
        ArchiveType = 'ArchiveType',
        /** 绑定类型 */
        BindType = 'BindType',
        /** 布尔值 */
        Bool = 'Bool',
        /** 状态 */
        BuffState = 'BuffState',
        /** 相机绑定模式 */
        CameraBindMode = 'CameraBindMode',
        /** 相机属性预设 */
        CameraPropertyType = 'CameraPropertyType',
        /** 阵营 */
        Camp = 'Camp',
        /** 阵营ID */
        CampID = 'CampID',
        /** 阵营关系类型 */
        CampRelationType = 'CampRelationType',
        /** 角色 */
        Character = 'Character',
        /** 角色ID */
        CharacterID = 'CharacterID',
        /** 角色编号 */
        CharacterKey = 'CharacterKey',
        /** 颜色 */
        Color = 'Color',
        /** 多维表 */
        ConfigTable = 'ConfigTable',
        /** 生物 */
        Creature = 'Creature',
        /** 生物ID */
        CreatureID = 'CreatureID',
        /** 生物编号 */
        CreatureKey = 'CreatureKey',
        /** 触发区域 */
        CustomTriggerSpace = 'CustomTriggerSpace',
        /** 触发区域ID */
        CustomTriggerSpaceID = 'CustomTriggerSpaceID',
        /** 触发区域编号 */
        CustomTriggerSpaceKey = 'CustomTriggerSpaceKey',
        /** 装饰物 */
        Decoration = 'Decoration',
        /** 装饰物编号 */
        DecorationKey = 'DecorationKey',
        /** UI按钮节点 */
        EButton = 'EButton',
        /** UI画布节点 */
        ECanvas = 'ECanvas',
        /** UI图片节点 */
        EImage = 'EImage',
        /** UI输入节点 */
        EInputField = 'EInputField',
        /** UI文本节点 */
        ELabel = 'ELabel',
        /** UI节点 */
        ENode = 'ENode',
        /** UI进度条节点 */
        EProgressbar = 'EProgressbar',
        /** 气泡表情编号 */
        EmojiKey = 'EmojiKey',
        /** 物品 */
        Equipment = 'Equipment',
        /** 物品ID */
        EquipmentID = 'EquipmentID',
        /** 物品编号 */
        EquipmentKey = 'EquipmentKey',
        /** 物品槽位 */
        EquipmentSlot = 'EquipmentSlot',
        /** 物品槽位类型 */
        EquipmentSlotType = 'EquipmentSlotType',
        /** 物品类型 */
        EquipmentType = 'EquipmentType',
        /** 面部表情编号 */
        FaceExpressionKey = 'FaceExpressionKey',
        /** 时装编号 */
        FashionKey = 'FashionKey',
        /** 定点数 */
        Fixed = 'Fixed',
        /** 游戏结局 */
        GameResult = 'GameResult',
        /** 整型 */
        Int = 'Int',
        /** 交互按钮编号 */
        InteractBtnID = 'InteractBtnID',
        /** 关节 */
        JointAssistant = 'JointAssistant',
        /** 关节预设编号 */
        JointAssistantKey = 'JointAssistantKey',
        /** 关节类型 */
        JointAssistantType = 'JointAssistantType',
        /** 生命体 */
        LifeEntity = 'LifeEntity',
        /** 生命体编号 */
        LifeEntityKey = 'LifeEntityKey',
        /** 技能列表 */
        ListAbility = 'ListAbility',
        /** 技能槽位(内部)列表 */
        ListAbilityIndex = 'ListAbilityIndex',
        /** 技能编号列表 */
        ListAbilityKey = 'ListAbilityKey',
        /** 技能槽位列表 */
        ListAbilitySlot = 'ListAbilitySlot',
        /** 自定义成就列表 */
        ListAchievement = 'ListAchievement',
        /** Actor列表 */
        ListActor = 'ListActor',
        /** 动画编号列表 */
        ListAnimKey = 'ListAnimKey',
        /** 自定义存档列表 */
        ListArchive = 'ListArchive',
        /** 存档类型列表 */
        ListArchiveType = 'ListArchiveType',
        /** 绑定类型列表 */
        ListBindType = 'ListBindType',
        /** 布尔值列表 */
        ListBool = 'ListBool',
        /** 状态列表 */
        ListBuffState = 'ListBuffState',
        /** 相机绑定模式列表 */
        ListCameraBindMode = 'ListCameraBindMode',
        /** 相机属性预设列表 */
        ListCameraPropertyType = 'ListCameraPropertyType',
        /** 阵营列表 */
        ListCamp = 'ListCamp',
        /** 阵营ID列表 */
        ListCampID = 'ListCampID',
        /** 阵营关系类型列表 */
        ListCampRelationType = 'ListCampRelationType',
        /** 角色列表 */
        ListCharacter = 'ListCharacter',
        /** 角色ID列表 */
        ListCharacterID = 'ListCharacterID',
        /** 角色编号列表 */
        ListCharacterKey = 'ListCharacterKey',
        /** 颜色列表 */
        ListColor = 'ListColor',
        /** 多维表列表 */
        ListConfigTable = 'ListConfigTable',
        /** 生物列表 */
        ListCreature = 'ListCreature',
        /** 生物ID列表 */
        ListCreatureID = 'ListCreatureID',
        /** 生物编号列表 */
        ListCreatureKey = 'ListCreatureKey',
        /** 触发区域列表 */
        ListCustomTriggerSpace = 'ListCustomTriggerSpace',
        /** 触发区域ID列表 */
        ListCustomTriggerSpaceID = 'ListCustomTriggerSpaceID',
        /** 触发区域编号列表 */
        ListCustomTriggerSpaceKey = 'ListCustomTriggerSpaceKey',
        /** 装饰物列表 */
        ListDecoration = 'ListDecoration',
        /** 装饰物编号列表 */
        ListDecorationKey = 'ListDecorationKey',
        /** UI按钮节点列表 */
        ListEButton = 'ListEButton',
        /** UI画布节点列表 */
        ListECanvas = 'ListECanvas',
        /** UI图片节点列表 */
        ListEImage = 'ListEImage',
        /** UI输入节点列表 */
        ListEInputField = 'ListEInputField',
        /** UI文本节点列表 */
        ListELabel = 'ListELabel',
        /** UI节点列表 */
        ListENode = 'ListENode',
        /** UI进度条节点列表 */
        ListEProgressbar = 'ListEProgressbar',
        /** 气泡表情编号列表 */
        ListEmojiKey = 'ListEmojiKey',
        /** 物品列表 */
        ListEquipment = 'ListEquipment',
        /** 物品ID列表 */
        ListEquipmentID = 'ListEquipmentID',
        /** 物品编号列表 */
        ListEquipmentKey = 'ListEquipmentKey',
        /** 物品槽位列表 */
        ListEquipmentSlot = 'ListEquipmentSlot',
        /** 物品槽位类型列表 */
        ListEquipmentSlotType = 'ListEquipmentSlotType',
        /** 物品类型列表 */
        ListEquipmentType = 'ListEquipmentType',
        /** 面部表情编号列表 */
        ListFaceExpressionKey = 'ListFaceExpressionKey',
        /** 时装编号列表 */
        ListFashionKey = 'ListFashionKey',
        /** 定点数列表 */
        ListFixed = 'ListFixed',
        /** 游戏结局列表 */
        ListGameResult = 'ListGameResult',
        /** 整型列表 */
        ListInt = 'ListInt',
        /** 交互按钮编号列表 */
        ListInteractBtnID = 'ListInteractBtnID',
        /** 关节列表 */
        ListJointAssistant = 'ListJointAssistant',
        /** 关节预设编号列表 */
        ListJointAssistantKey = 'ListJointAssistantKey',
        /** 关节类型列表 */
        ListJointAssistantType = 'ListJointAssistantType',
        /** 生命体列表 */
        ListLifeEntity = 'ListLifeEntity',
        /** 生命体编号列表 */
        ListLifeEntityKey = 'ListLifeEntityKey',
        /** 部位列表 */
        ListModelSocket = 'ListModelSocket',
        /** 效果列表 */
        ListModifier = 'ListModifier',
        /** 效果编号列表 */
        ListModifierKey = 'ListModifierKey',
        /** AI移动模式列表 */
        ListMoveMode = 'ListMoveMode',
        /** 组件列表 */
        ListObstacle = 'ListObstacle',
        /** 组件ID列表 */
        ListObstacleID = 'ListObstacleID',
        /** 组件编号列表 */
        ListObstacleKey = 'ListObstacleKey',
        /** 路径ID列表 */
        ListPathID = 'ListPathID',
        /** 路点ID列表 */
        ListPathPointID = 'ListPathPointID',
        /** AI巡逻类型列表 */
        ListPatrolType = 'ListPatrolType',
        /** 四元数列表 */
        ListQuaternion = 'ListQuaternion',
        /** 物理类型列表 */
        ListRigidBodyType = 'ListRigidBodyType',
        /** 玩家列表 */
        ListRole = 'ListRole',
        /** 玩家ID列表 */
        ListRoleID = 'ListRoleID',
        /** 特效ID列表 */
        ListSfxID = 'ListSfxID',
        /** 特效编号列表 */
        ListSfxKey = 'ListSfxKey',
        /** 天空盒背景列表 */
        ListSkyBoxBackground = 'ListSkyBoxBackground',
        /** 天空盒渐变类型列表 */
        ListSkyBoxGradualType = 'ListSkyBoxGradualType',
        /** 音效ID列表 */
        ListSoundID = 'ListSoundID',
        /** 音效编号列表 */
        ListSoundKey = 'ListSoundKey',
        /** 字符串列表 */
        ListStr = 'ListStr',
        /** 计时器列表 */
        ListTimer = 'ListTimer',
        /** 时间戳列表 */
        ListTimestamp = 'ListTimestamp',
        /** 触发器列表 */
        ListTrigger = 'ListTrigger',
        /** 逻辑体列表 */
        ListTriggerSpace = 'ListTriggerSpace',
        /** 触发区域类型列表 */
        ListTriggerSpaceEventType = 'ListTriggerSpaceEventType',
        /** 逻辑体ID列表 */
        ListTriggerSpaceID = 'ListTriggerSpaceID',
        /** 逻辑体编号列表 */
        ListTriggerSpaceKey = 'ListTriggerSpaceKey',
        /** 道具列表 */
        ListUgcCommodity = 'ListUgcCommodity',
        /** 商品列表 */
        ListUgcGoods = 'ListUgcGoods',
        /** 单位列表 */
        ListUnit = 'ListUnit',
        /** 物理组件组列表 */
        ListUnitGroup = 'ListUnitGroup',
        /** 组件组编号列表 */
        ListUnitGroupKey = 'ListUnitGroupKey',
        /** 单位ID列表 */
        ListUnitID = 'ListUnitID',
        /** 单位编号列表 */
        ListUnitKey = 'ListUnitKey',
        /** 单位类型列表 */
        ListUnitType = 'ListUnitType',
        /** 值类型列表 */
        ListValueType = 'ListValueType',
        /** 向量列表 */
        ListVector3 = 'ListVector3',
        /** 风场形状列表 */
        ListWindFieldShapeType = 'ListWindFieldShapeType',
        /** 部位 */
        ModelSocket = 'ModelSocket',
        /** 效果 */
        Modifier = 'Modifier',
        /** 效果编号 */
        ModifierKey = 'ModifierKey',
        /** AI移动模式 */
        MoveMode = 'MoveMode',
        /** 组件 */
        Obstacle = 'Obstacle',
        /** 组件ID */
        ObstacleID = 'ObstacleID',
        /** 组件编号 */
        ObstacleKey = 'ObstacleKey',
        /** 路径ID */
        PathID = 'PathID',
        /** 路点ID */
        PathPointID = 'PathPointID',
        /** AI巡逻类型 */
        PatrolType = 'PatrolType',
        /** 四元数 */
        Quaternion = 'Quaternion',
        /** 物理类型 */
        RigidBodyType = 'RigidBodyType',
        /** 玩家 */
        Role = 'Role',
        /** 玩家ID */
        RoleID = 'RoleID',
        /** 特效ID */
        SfxID = 'SfxID',
        /** 特效编号 */
        SfxKey = 'SfxKey',
        /** 天空盒背景 */
        SkyBoxBackground = 'SkyBoxBackground',
        /** 天空盒渐变类型 */
        SkyBoxGradualType = 'SkyBoxGradualType',
        /** 音效ID */
        SoundID = 'SoundID',
        /** 音效编号 */
        SoundKey = 'SoundKey',
        /** 字符串 */
        Str = 'Str',
        /** 计时器 */
        Timer = 'Timer',
        /** 时间戳 */
        Timestamp = 'Timestamp',
        /** 触发器 */
        Trigger = 'Trigger',
        /** 逻辑体 */
        TriggerSpace = 'TriggerSpace',
        /** 触发区域类型 */
        TriggerSpaceEventType = 'TriggerSpaceEventType',
        /** 逻辑体ID */
        TriggerSpaceID = 'TriggerSpaceID',
        /** 逻辑体编号 */
        TriggerSpaceKey = 'TriggerSpaceKey',
        /** 道具 */
        UgcCommodity = 'UgcCommodity',
        /** 商品 */
        UgcGoods = 'UgcGoods',
        /** 单位 */
        Unit = 'Unit',
        /** 物理组件组 */
        UnitGroup = 'UnitGroup',
        /** 组件组编号 */
        UnitGroupKey = 'UnitGroupKey',
        /** 单位ID */
        UnitID = 'UnitID',
        /** 单位编号 */
        UnitKey = 'UnitKey',
        /** 单位类型 */
        UnitType = 'UnitType',
        /** 值类型 */
        ValueType = 'ValueType',
        /** 向量 */
        Vector3 = 'Vector3',
        /** 风场形状 */
        WindFieldShapeType = 'WindFieldShapeType',
    }

    // ====================== 风场形状 ======================
    /**
     * 风场形状
     */
    export enum WindFieldShapeType {
        /** 锥形 */
        CONICAL = 0,
        /** 扇形 */
        SECTOR = 1,
        /** 波浪形 */
        WAVE = 2,
    }
}

// 全局导出
export default Enums;