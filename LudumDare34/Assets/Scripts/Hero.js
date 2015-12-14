#pragma strict

public class Hero extends Entity {


	public function Hero(){
		health_potions=3;
		playerType = 1;
		Debug.Log("player" + playerType);

	};

	public function Hero(myName:String){
		entity_name=myName;
		health_potions=3;
		playerType = 1;
		Debug.Log("player two" + playerType);

	};


};