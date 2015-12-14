#pragma strict


public class Enemy extends Entity {
	//public var taunt_count : int = 0;

	public function Enemy(){
		playerType = 2;
		attack=150;
		Debug.Log("enemy" + playerType);
	};

	public function Enemy(myName:String){
		entity_name=myName;
		playerType = 2;
		Debug.Log("enemy two" + playerType);

	};	

};