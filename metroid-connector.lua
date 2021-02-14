local socket = require('socket')

local HOST_ADDRESS = '127.0.0.1'
local HOST_PORT = 3123

local tcp = nil
tcp = socket.tcp()

memory.usememorydomain("OAM")

local powerups = {
  charge = false,
  ice = false,
  wave = false,
  spazer = false,
  plasma = false,
  varia = false,
  gravity = false,
  morph = false,
  bombs = false,
  spring = false,
  screw = false,
  hijump = false,
  space = false,
  speed = false
}

function updateState ( ... )
	-- https://gamefaqs.gamespot.com/snes/588741-super-metroid/faqs/39409
	local morph_addr = 0xB3 -- 2
	local bombs_addr = 0xB0 -- 7
	local spring_addr = 0xC2 -- 6
	local hijump_addr = 0xB6 -- 5
	local varia_addr = 0xB6 -- 0
	local gravity_addr = 0xC0 -- 7
	local speed_addr = 0xB8 -- 2
	local space_addr = 0xC3 -- 2
	local screw_addr = 0xB9 -- 7
	local charge_addr = 0xB2 -- 7
	local ice_addr = 0xB6 -- 2
	local wave_addr = 0xB6 -- 2
	local spazer_addr = 0xB5 -- 2
	local plasma_addr = 0xC1 -- 7

	local kraid_addr = 0x69 -- 0
	local phantoon_addr = 0x6B -- 0
	local draygon_addr = 0x6C -- 0
	local ridley_addr = 0x6A -- 0
	print(memory.readbyte(morph_addr))

	-- print(memory.getmemorydomainlist())

	if memory.readbyte(morph_addr) == 1 then
		powerups.morph = true
	else
		powerups.morph = false
	end
end

event.onframeend(updateState)

local ret, err = tcp:connect(HOST_ADDRESS, HOST_PORT)
if ret == 1 then
  print('Connected!')
  function sendStateToRemote (...)
    local msg = "bizhawk "

    for key, value in pairs(powerups)
    do
      if value == true then
        msg = msg .. key .. " "
      end
    end

    local ret, err = tcp:send(msg)
    if ret == nil then
      -- print('Failed to send:', err)
    else
       -- print('Success to send')
    end
  end
  event.onframeend(sendStateToRemote)
else
  print('Fail: ', err)
  tcp:close()
  tcp = nil
end


