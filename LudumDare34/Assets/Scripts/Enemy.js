#pragma strict


public class Enemy extends Entity {

	public function Enemy(){
		
	};

	function Start(){
		playerType = 2;

		attack = DifficultySettings.enemyAttack;
		defense = DifficultySettings.enemyDefense; 

		Debug.Log("enemy " + playerType+"  "+DifficultySettings.enemyAttack);
	}

};