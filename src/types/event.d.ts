// EVENT.d.ts

/**
 * 游戏事件枚举，定义了所有可监听和触发的事件类型
 * 每个事件包含事件主体、注册参数（可选）和回调参数（可选）
 */
declare namespace EVENT {
    /**
     * 子弹命中事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit; target_unit: Unit; dmg: Fixed }
     */
    export const ABILITY_BULLET_HIT: "ABILITY_BULLET_HIT";

    /**
     * 技能切入事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit; switch_out_ability: Ability }
     */
    export const ABILITY_SWITCH_IN: "ABILITY_SWITCH_IN";

    /**
     * 技能切出事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit; switch_in_ability: Ability }
     */
    export const ABILITY_SWITCH_OUT: "ABILITY_SWITCH_OUT";

    /**
     * 技能蓄力阶段开始事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_ACCUMULATE_BEGIN: "ABILITY_ACCUMULATE_BEGIN";

    /**
     * 技能蓄力阶段被打断事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_ACCUMULATE_INTERRUPT: "ABILITY_ACCUMULATE_INTERRUPT";

    /**
     * 技能蓄力阶段结束事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_ACCUMULATE_END: "ABILITY_ACCUMULATE_END";

    /**
     * 技能施法阶段开始事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_CAST_BEGIN: "ABILITY_CAST_BEGIN";

    /**
     * 技能施法阶段被打断事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_CAST_BREAK: "ABILITY_CAST_BREAK";

    /**
     * 技能施法阶段结束事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_CAST_END: "ABILITY_CAST_END";

    /**
     * 技能冷却完成事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_CD_END: "ABILITY_CD_END";

    /**
     * 技能充能完成事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_CHARGE_END: "ABILITY_CHARGE_END";

    /**
     * 技能降级事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability }
     */
    export const ABILITY_DOWNGRADE: "ABILITY_DOWNGRADE";

    /**
     * 失去技能事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_REMOVE: "ABILITY_REMOVE";

    /**
     * 获得技能事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_ADD: "ABILITY_ADD";

    /**
     * 技能升级事件
     * - 事件主体: Ability（技能）
     * - 回调参数: { ability: Ability; unit: Unit }
     */
    export const ABILITY_UPGRADE: "ABILITY_UPGRADE";

    /**
     * 阵营积分变化事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { camp: Camp; old_camp_score: number; new_camp_score: number }
     */
    export const ANY_CAMP_SCORE_UPDATE: "ANY_CAMP_SCORE_UPDATE";

    /**
     * 任意触发区域创建事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { unit: CustomTriggerSpace }
     */
    export const ANY_CUSTOMTRIGGERSPACE_CREATE: "ANY_CUSTOMTRIGGERSPACE_CREATE";

    /**
     * 任意触发区域销毁事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { unit: CustomTriggerSpace }
     */
    export const ANY_CUSTOMTRIGGERSPACE_DESTROY: "ANY_CUSTOMTRIGGERSPACE_DESTROY";

    /**
     * 任意物品进出区域事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _trigger_event_type: Enums.TriggerSpaceEventType; _customtriggerspace_id: CustomTriggerSpaceID }
     * - 回调参数: { event_unit: Equipment; event_unit_id: EquipmentID; trigger_event_type: Enums.TriggerSpaceEventType; trigger_zone_id: CustomTriggerSpaceID; trigger_zone: CustomTriggerSpace }
     */
    export const ANY_EQUIPMENT_TRIGGER_SPACE: "ANY_EQUIPMENT_TRIGGER_SPACE";

    /**
     * 任意生命体进出区域事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _trigger_event_type: Enums.TriggerSpaceEventType; _trigger_zone_id: CustomTriggerSpaceID }
     * - 回调参数: { event_unit: LifeEntity; event_unit_id: UnitID; trigger_event_type: Enums.TriggerSpaceEventType; trigger_zone_id: CustomTriggerSpaceID; trigger_zone: CustomTriggerSpace }
     */
    export const ANY_LIFEENTITY_TRIGGER_SPACE: "ANY_LIFEENTITY_TRIGGER_SPACE";

    /**
     * 任意组件创建事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { unit: Obstacle }
     */
    export const ANY_OBSTACLE_CREATE: "ANY_OBSTACLE_CREATE";

    /**
     * 任意组件销毁事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { unit: Obstacle }
     */
    export const ANY_OBSTACLE_DESTROY: "ANY_OBSTACLE_DESTROY";

    /**
     * 任意组件被举起事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { lift_unit: Unit; lifted_unit: Obstacle }
     */
    export const ANY_OBSTACLE_LIFTED_BEGAN: "ANY_OBSTACLE_LIFTED_BEGAN";

    /**
     * 任意组件被放下事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { lift_unit: Unit; lifted_unit: Obstacle }
     */
    export const ANY_OBSTACLE_LIFTED_ENDED: "ANY_OBSTACLE_LIFTED_ENDED";

    /**
     * 任意组件进出触发区域事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _trigger_event_type: Enums.TriggerSpaceEventType; _trigger_zone_id: CustomTriggerSpaceID }
     * - 回调参数: { event_unit: Obstacle; event_unit_id: ObstacleID; trigger_event_type: Enums.TriggerSpaceEventType; trigger_zone_id: CustomTriggerSpaceID; trigger_zone: CustomTriggerSpace }
     */
    export const ANY_OBSTACLE_TRIGGER_SPACE: "ANY_OBSTACLE_TRIGGER_SPACE";

    /**
     * 玩家积分变化事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { role: Role; old_role_score: number; new_role_score: number }
     */
    export const ANY_ROLE_SCORE_UPDATE: "ANY_ROLE_SCORE_UPDATE";

    /**
     * 任意逻辑体创建事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { unit: TriggerSpace }
     */
    export const ANY_TRIGGERSPACE_CREATE: "ANY_TRIGGERSPACE_CREATE";

    /**
     * 任意逻辑体销毁事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { unit: TriggerSpace }
     */
    export const ANY_TRIGGERSPACE_DESTROY: "ANY_TRIGGERSPACE_DESTROY";

    /**
     * 自定义事件
     * - 事件主体: Default（多类型）
     * - 注册参数: { _name: string }
     * - 回调参数: 自定义数据（根据发送时的参数而定）
     */
    export const CUSTOM_EVENT: "CUSTOM_EVENT";

    /**
     * 游戏结束事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: 无
     */
    export const GAME_END: "GAME_END";

    /**
     * 游戏初始化事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: 无
     */
    export const GAME_INIT: "GAME_INIT";

    /**
     * 获得效果事件
     * - 事件主体: Modifier（效果）
     * - 回调参数: { from_unit_id: UnitID; modifier: Modifier; unit: Unit }
     */
    export const MODIFIER_OBTAIN: "MODIFIER_OBTAIN";

    /**
     * 覆盖效果事件
     * - 事件主体: Modifier（效果）
     * - 回调参数: { modifier: Modifier; unit: Unit }
     */
    export const MODIFIER_REOBTAIN: "MODIFIER_REOBTAIN";

    /**
     * 效果层数变化事件
     * - 事件主体: Modifier（效果）
     * - 回调参数: { stack_count_change: number; modifier: Modifier; unit: Unit }
     */
    export const MODIFIER_STACK_COUNT_CHANGE: "MODIFIER_STACK_COUNT_CHANGE";

    /**
     * 玩家拍照事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: { role: Role }
     */
    export const ON_PLAYER_TAKE_PHOTO: "ON_PLAYER_TAKE_PHOTO";

    /**
     * 周期性计时器超时事件
     * - 事件主体: Default（多类型）
     * - 注册参数: { _delay: Fixed }
     * - 回调参数: 无
     */
    export const REPEAT_TIMEOUT: "REPEAT_TIMEOUT";

    /**
     * 天空环境变化事件
     * - 事件主体: Global（全局触发器）
     * - 回调参数: 无
     */
    export const ON_SKY_ENV_CHANGE: "ON_SKY_ENV_CHANGE";

    /**
     * 指定角色选中物品格事件
     * - 事件主体: Character（角色）
     * - 注册参数: { _slot_type: Enums.EquipmentSlotType; _slot_index: number }
     * - 回调参数: { event_unit: Character }
     */
    export const SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT: "SPEC_CHARACTER_SELECT_EQUIPMENT_SLOT";

    /**
     * 指定生物互动按钮被按下事件
     * - 事件主体: Creature（生物）
     * - 回调参数: { interact_lifeentity: LifeEntity; interact_unit: Creature; interact_id: InteractBtnID }
     */
    export const SPEC_LIFEENTITY_INTERACTED: "SPEC_LIFEENTITY_INTERACTED";

    /**
     * 指定触发区域创建事件
     * - 事件主体: CustomTriggerSpace（触发区域）
     * - 回调参数: { unit: CustomTriggerSpace }
     */
    export const SPEC_CUSTOMTRIGGERSPACE_CREATE: "SPEC_CUSTOMTRIGGERSPACE_CREATE";

    /**
     * 指定触发区域销毁事件
     * - 事件主体: CustomTriggerSpace（触发区域）
     * - 回调参数: 无
     */
    export const SPEC_CUSTOMTRIGGERSPACE_DESTROY: "SPEC_CUSTOMTRIGGERSPACE_DESTROY";

    /**
     * 指定物品进入角色栏位事件
     * - 事件主体: Equipment（物品）
     * - 注册参数: { _slot_type: Enums.EquipmentSlotType }
     * - 回调参数: { equipment: Equipment; slot_type: Enums.EquipmentSlotType; owner: Character }
     */
    export const SPEC_EQUIPMENT_ENTER_CHAR_SLOT: "SPEC_EQUIPMENT_ENTER_CHAR_SLOT";

    /**
     * 指定物品离开角色栏位事件
     * - 事件主体: Equipment（物品）
     * - 注册参数: { _slot_type: Enums.EquipmentSlotType }
     * - 回调参数: { equipment: Equipment; slot_type: Enums.EquipmentSlotType; owner: Character }
     */
    export const SPEC_EQUIPMENT_LEAVE_CHAR_SLOT: "SPEC_EQUIPMENT_LEAVE_CHAR_SLOT";

    /**
     * 指定生命体技能降级事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; ability: Ability }
     */
    export const SPEC_LIFEENTITY_ABILITY_DOWNGRADE: "SPEC_LIFEENTITY_ABILITY_DOWNGRADE";

    /**
     * 指定生命体获得技能事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; ability: Ability }
     */
    export const SPEC_LIFEENTITY_ABILITY_OBTAIN: "SPEC_LIFEENTITY_ABILITY_OBTAIN";

    /**
     * 指定生命体失去技能事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; ability: Ability }
     */
    export const SPEC_LIFEENTITY_ABILITY_REMOVE: "SPEC_LIFEENTITY_ABILITY_REMOVE";

    /**
     * 指定生命体技能升级事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; ability: Ability }
     */
    export const SPEC_LIFEENTITY_ABILITY_UPGRADE: "SPEC_LIFEENTITY_ABILITY_UPGRADE";

    /**
     * 指定生命体发生碰撞开始事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit1: LifeEntity; unit2: Unit }
     */
    export const SPEC_LIFEENTITY_CONTACT_BEGAN: "SPEC_LIFEENTITY_CONTACT_BEGAN";

    /**
     * 指定生命体发生碰撞结束事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit1: LifeEntity; unit2: Unit }
     */
    export const SPEC_LIFEENTITY_CONTACT_ENDED: "SPEC_LIFEENTITY_CONTACT_ENDED";
    // EVENT.d.ts (补充扩展)

    /**
     * 指定生命体被创建事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_CREATE: "SPEC_LIFEENTITY_CREATE";

    /**
     * 指定生命体被销毁事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: 无
     */
    export const SPEC_LIFEENTITY_DESTROY: "SPEC_LIFEENTITY_DESTROY";

    /**
     * 指定生命体被击败事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { die_unit: LifeEntity; dmg_unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_DIE: "SPEC_LIFEENTITY_DIE";

    /**
     * 指定生命体被击败前事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; dmg_unit: Unit }
     */
    export const SPEC_LIFEENTITY_DIE_BEFORE: "SPEC_LIFEENTITY_DIE_BEFORE";

    /**
     * 生命体获得经验事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; exp: Fixed }
     */
    export const SPEC_LIFEENTITY_GAIN_EXP: "SPEC_LIFEENTITY_GAIN_EXP";

    /**
     * 指定生命体获得道具箱事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { life_entity: LifeEntity }
     */
    export const SPEC_LIFEENTITY_GET_ITEMBOX: "SPEC_LIFEENTITY_GET_ITEMBOX";

    /**
     * 指定生命体跳跃事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_JUMP: "SPEC_LIFEENTITY_JUMP";

    /**
     * 生命体升级事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; level: number }
     */
    export const SPEC_LIFEENTITY_LEVEL_UP: "SPEC_LIFEENTITY_LEVEL_UP";

    /**
     * 指定生命体被其他单位举起事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { lift_unit: Unit; lifted_unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_LIFTED_BEGAN: "SPEC_LIFEENTITY_LIFTED_BEGAN";

    /**
     * 指定生命体被其他单位放下事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { lift_unit: Unit; lifted_unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_LIFTED_ENDED: "SPEC_LIFEENTITY_LIFTED_ENDED";

    /**
     * 指定生命体举起其他单位事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { lift_unit: LifeEntity; lifted_unit: Unit }
     */
    export const SPEC_LIFEENTITY_LIFT_BEGAN: "SPEC_LIFEENTITY_LIFT_BEGAN";

    /**
     * 指定生命体放下其他单位事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { lift_unit: LifeEntity; lifted_unit: Unit }
     */
    export const SPEC_LIFEENTITY_LIFT_ENDED: "SPEC_LIFEENTITY_LIFT_ENDED";

    /**
     * 指定生命体移动开始事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_MOVE_BEGAN: "SPEC_LIFEENTITY_MOVE_BEGAN";

    /**
     * 指定生命体移动结束事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_MOVE_ENDED: "SPEC_LIFEENTITY_MOVE_ENDED";

    /**
     * 指定生命体复活事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_REBORN: "SPEC_LIFEENTITY_REBORN";

    /**
     * 指定生命体释放技能事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; ability: Ability }
     */
    export const SPEC_LIFEENTITY_RELEASE_ABILITY: "SPEC_LIFEENTITY_RELEASE_ABILITY";

    /**
     * 指定生命体滚动开始事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_ROLL_BEGIN: "SPEC_LIFEENTITY_ROLL_BEGIN";

    /**
     * 指定生命体滚动结束事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity }
     */
    export const SPEC_LIFEENTITY_ROLL_END: "SPEC_LIFEENTITY_ROLL_END";

    /**
     * 指定生命体前扑事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; dir: Vector3 }
     */
    export const SPEC_LIFEENTITY_RUSH: "SPEC_LIFEENTITY_RUSH";

    /**
     * 指定生命体抓举事件
     * - 事件主体: LifeEntity（生命体）
     * - 回调参数: { unit: LifeEntity; dir: Vector3 }
     */
    export const SPEC_LIFEENTITY_START_LIFT: "SPEC_LIFEENTITY_START_LIFT";

    /**
     * 失去效果事件
     * - 事件主体: Modifier（效果）
     * - 回调参数: { modifier: Modifier; unit: Unit }
     */
    export const MODIFIER_LOSS: "MODIFIER_LOSS";

    /**
     * 指定组件发生碰撞开始事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: { unit1: Obstacle; unit2: Unit; contact_pos: Vector3 }
     */
    export const SPEC_OBSTACLE_CONTACT_BEGAN: "SPEC_OBSTACLE_CONTACT_BEGAN";

    /**
     * 指定组件发生碰撞结束事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: { unit1: Obstacle; unit2: Unit }
     */
    export const SPEC_OBSTACLE_CONTACT_ENDED: "SPEC_OBSTACLE_CONTACT_ENDED";

    /**
     * 指定组件创建事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: { unit: Obstacle }
     */
    export const SPEC_OBSTACLE_CREATE: "SPEC_OBSTACLE_CREATE";

    /**
     * 指定组件销毁事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: 无
     */
    export const SPEC_OBSTACLE_DESTROY: "SPEC_OBSTACLE_DESTROY";

    /**
     * 指定组件互动按钮被按下事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: { interact_lifeentity: LifeEntity; interact_unit: Obstacle; interact_id: InteractBtnID }
     */
    export const SPEC_OBSTACLE_INTERACTED: "SPEC_OBSTACLE_INTERACTED";

    /**
     * 指定组件被举起事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: { lift_unit: Unit; lifted_unit: Obstacle }
     */
    export const SPEC_OBSTACLE_LIFTED_BEGAN: "SPEC_OBSTACLE_LIFTED_BEGAN";

    /**
     * 指定组件被放下事件
     * - 事件主体: Obstacle（组件）
     * - 回调参数: { lift_unit: Unit; lifted_unit: Obstacle }
     */
    export const SPEC_OBSTACLE_LIFTED_ENDED: "SPEC_OBSTACLE_LIFTED_ENDED";

    /**
     * 指定玩家完成自定义成就事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _role: RoleID }
     * - 回调参数: { role: Role; achieve_id: Achievement }
     */
    export const SPEC_ROLE_ACHIEVEMENT_COMPLETE: "SPEC_ROLE_ACHIEVEMENT_COMPLETE";

    /**
     * 指定玩家阵营发生变化事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _role: RoleID }
     * - 回调参数: { role: Role; camp_before_change: Camp; camp_after_change: Camp }
     */
    export const SPEC_ROLE_CAMP_CHANGE: "SPEC_ROLE_CAMP_CHANGE";

    /**
     * 指定玩家离开游戏事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _role: Role }
     * - 回调参数: { role: Role }
     */
    export const SPEC_ROLE_EXIT_GAME: "SPEC_ROLE_EXIT_GAME";

    /**
     * 指定玩家游戏失败事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _role: RoleID }
     * - 回调参数: { role: Role }
     */
    export const SPEC_ROLE_GAME_LOSE: "SPEC_ROLE_GAME_LOSE";

    /**
     * 指定玩家游戏胜利事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _role: RoleID }
     * - 回调参数: { role: Role }
     */
    export const SPEC_ROLE_GAME_WIN: "SPEC_ROLE_GAME_WIN";

    /**
     * 指定玩家成功购买商品事件
     * - 事件主体: Global（全局触发器）
     * - 注册参数: { _role: Role }
     * - 回调参数: { role: Role; goods_id: UgcGoods }
     */
    export const SPEC_ROLE_PURCHASE_GOODS: "SPEC_ROLE_PURCHASE_GOODS";

    /**
     * 指定逻辑体创建事件
     * - 事件主体: TriggerSpace（逻辑体）
     * - 回调参数: { unit: TriggerSpace }
     */
    export const SPEC_TRIGGERSPACE_CREATE: "SPEC_TRIGGERSPACE_CREATE";

    /**
     * 指定逻辑体销毁事件
     * - 事件主体: TriggerSpace（逻辑体）
     * - 回调参数: 无
     */
    export const SPEC_TRIGGERSPACE_DESTROY: "SPEC_TRIGGERSPACE_DESTROY";

    /**
     * 计时器超时事件
     * - 事件主体: Default（多类型）
     * - 注册参数: { _delay: Fixed }
     * - 回调参数: 无
     */
    export const TIMEOUT: "TIMEOUT";

    /**
     * UI自定义事件
     * - 事件主体: Default（多类型）
     * - 注册参数: { _name: string }
     * - 回调参数: { role_id: RoleID; role: Role }
     */
    export const UI_CUSTOM_EVENT: "UI_CUSTOM_EVENT";
}
export default EVENT;