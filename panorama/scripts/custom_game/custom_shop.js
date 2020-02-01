
function loadShop()
{
  // Your web app's Firebase configuration

	player_name = Game.GetLocalPlayerInfo().player_name
		$("#shop-title").text = player_name + "'s Customization Shop"



}

function PlayerSelectDevParticle()
{
	player = Game.GetLocalPlayerInfo().player_id
$.Msg("Player selected dev particle in shop!")
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "dev", price: 200, player_id: player} )

}

function PlayerSelectBetaTester()
{
	player = Game.GetLocalPlayerInfo().player_id
$.Msg("Player selected beta tester particle in shop!")
GameEvents.SendCustomGameEventToServer( "player_purchase_custom_item", {item: "beta_tester", price: 100000000000000000000000000000000000000000, player_id: player} )
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
}