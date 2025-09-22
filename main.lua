local FrameLoader = require("Utils.FrameLoader")
local CoroutineManager = require("Utils.CoroutineManager")
local PrefabFactory = require("Utils.PrefabFactory")
local MonsterManager = require("MonsterManager")
local HeroManager = require("HeroManager")
local ItemData = require("Data.ItemData")

G = {}
G.gm = require("GM")

LuaAPI.global_register_trigger_event({ EVENT.GAME_INIT }, function()
	for _, role in ipairs(GameAPI.get_all_valid_roles()) do
		local character = role.get_ctrl_unit()
		character.set_reborn_in_place(true, false)
		local sword = GameAPI.create_equipment(ItemData.Sword.prefabID, character.get_position())
		character.swap_equipment_slot(sword, Enums.EquipmentSlotType.EQUIPPED, 1)
		local gun = GameAPI.create_equipment(ItemData.Gun.prefabID, character.get_position())
		character.swap_equipment_slot(gun, Enums.EquipmentSlotType.EQUIPPED, 2)
	end
	G.prefabFactory = PrefabFactory.new()
	G.frameLoader = FrameLoader.new(1, 1)
	G.coroutineManager = CoroutineManager.new()
	G.monsterManager = MonsterManager.new()
	G.heroManager = HeroManager.new()

	G.monsters = {}

	G.tickables = {
		G.frameLoader,
		G.coroutineManager,
	}

	function G.addTickable(obj)
		assert(obj.update)
		table.insert(G.tickables, obj)
	end

	function G.removeTickable(obj)
		for i, v in ipairs(G.tickables) do
			if v == obj then
				table.remove(G.tickables, i)
				break
			end
		end
	end

	local function onPreTick(_)
		for _, v in ipairs(G.tickables) do
			v:update()
		end
	end

	local function onPostTick() end

	LuaAPI.set_tick_handler(onPreTick, onPostTick)

	G.monsterManager:startSpawn()
end)
