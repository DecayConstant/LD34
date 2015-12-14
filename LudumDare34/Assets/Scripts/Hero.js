#pragma strict

public class Hero extends Entity {


	public function Hero(){

	};


	function Start(){
		health_potions=3;
		playerType = 1;
		Debug.Log("player" + playerType);
	}


};