function GetGemsEarned()
{
for (i = 0; i < 10; i++) {
  	var kills = Players.GetKills(i);
  	var assists = Players.GetAssists(i)
  	$("#PlayerGemsEarned").text = kills + (assists/2)
}
}