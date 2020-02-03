
function loadShop()
{
  // Your web app's Firebase configuration

	player_name = Game.GetLocalPlayerInfo().player_name
		$("#shop-title").text = player_name + "'s Customization Shop"



}

function PlayerSelectDevParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "dev", price: 200, player_id: player} )

}

function PlayerSelectBetaTester()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "beta_tester", price: 100000000000000000000000000000000000000000, player_id: player} )
}
function PlayerSelectFlowerParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "flower_trail", price: 400, player_id: player} )
}

function PlayerSelectFallAuraParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "fall_aura", price: 500, player_id: player} )

}

function PlayerSelectGreenSpeedParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "green_speed", price: 400, player_id: player} )

}

function PlayerSelectWaterWalkingParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "water_walking", price: 600, player_id: player} )

}

function PlayerSelectGreenBirdParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "green_bird", price: 1000, player_id: player} )

}

function PlayerSelectPinkBirdParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "pink_bird", price: 1000, player_id: player} )

}

function PlayerSelectRedBirdParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "red_bird", price: 1000, player_id: player} )

}

function LoadCurrency(Data)
{
	
$("#player-currency").text = Data.player_currency + " Gems"
}

var handle = GameEvents.Subscribe( "player_currency_loaded", LoadCurrency );
var handle = GameEvents.Subscribe( "player_particles_loaded", LoadParticles );

function LoadParticles(Data)
{
$.Msg(Data.beta_tester_particle)
	if (Data.beta_tester_particle == "true") {
		$("#beta_particle_owned_text").text = "(Owned)"
	}
		if (Data.flower_trail_particle == "true") {
		$("#flower_trail_particle_owned_text").text = "(Owned)"
	}
		if (Data.fall_aura_particle == "true") {
		$("#fall_aura_particle_owned_text").text = "(Owned)"
	}
		if (Data.green_speed_particle == "true") {
		$("#green_speed_particle_owned_text").text = "(Owned)"
	}
		if (Data.water_walking_particle == "true") {
		$("#water_walking_particle_owned_text").text = "(Owned)"
	}
		if (Data.green_bird_particle == "true") {
		$("#green_bird_particle_owned_text").text = "(Owned)"
	}
		if (Data.pink_bird_particle == "true") {
		$("#pink_bird_particle_owned_text").text = "(Owned)"
	}
		if (Data.red_bird_particle == "true") {
		$("#red_bird_particle_owned_text").text = "(Owned)"
	}
}