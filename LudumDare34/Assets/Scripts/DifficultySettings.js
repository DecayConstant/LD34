#pragma strict

	
public class DifficultySettings extends MonoBehaviour{

	public static var buffMultiplier : float = 1.5;
	public static var debuffMultiplier : float = 0.6;

	public static var enemyAttack:int = 140; 
	public static var enemyDefense:int = 100;

	public static var heroAttack:int = 100;
	public static var heroDefense:int = 100;

	public static function setEasyMode(){
		Debug.Log('EASY MODE!');
		buffMultiplier = 1.5;
		debuffMultiplier = .61;

		enemyAttack = 140;
		enemyDefense = 100;

		heroAttack = 100;
		heroDefense = 100;
	};

	public static function setHardMode(){
		Debug.Log('HARD MODE!');
		buffMultiplier = 1.5;
		debuffMultiplier = .55;

		enemyAttack = 160;
		enemyDefense = 100;

		heroAttack = 100;
		heroDefense = 100;
	};

	public function DifficultySettings(){
		setEasyMode();
	}
}