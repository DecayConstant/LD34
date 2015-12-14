#pragma strict


public class Enemy extends Entity {
	//public var taunt_count : int = 0;

	public function Enemy(){
		playerType = 2;

		attack = DifficultySettings.enemyAttack;
		defense = DifficultySettings.enemyDefense;

		Debug.Log("enemy" + playerType);
	};

	public function Enemy(myName:String){
		entity_name=myName;
		playerType = 2;

		attack = DifficultySettings.enemyAttack;
		defense = DifficultySettings.enemyDefense;

		Debug.Log("enemy two" + playerType);

	};	

};