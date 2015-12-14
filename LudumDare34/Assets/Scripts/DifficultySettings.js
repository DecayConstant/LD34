#pragma strict

	
public class DifficultySettings extends MonoBehaviour{

	public static var buffMultiplier:float=.99;
	public static var debuffMultiplier :float = 0.6;

	public static var enemyAttack:int = 150;
	public static var enemyDefense:int = 100;

	public static var heroAttack:int = 100;
	public static var heroDefence:int = 100;

	public static function setEasyMode(){
		Debug.Log('EASY MODE!');
		buffMultiplier = 1.5;
		debuffMultiplier = .6;

		enemyAttack = 150;
		enemyDefense = 100;

		heroAttack = 100;
		heroDefence = 100;
	};

	public static function setHardMode(){
		Debug.Log('HARD MODE!');
		buffMultiplier = 1.5;
		debuffMultiplier = .55;

		enemyAttack = 160;
		enemyDefense = 100;

		heroAttack = 100;
		heroDefence = 100;
	};

	public function DifficultySettings(){
		setEasyMode();
	}
}