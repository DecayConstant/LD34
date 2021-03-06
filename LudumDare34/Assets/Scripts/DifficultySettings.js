﻿#pragma strict

	
public class DifficultySettings extends MonoBehaviour{

	public static var game_difficulty : int = 1;

	public static var battle_length : float = 15.0;

	public static var buffMultiplier : float = 1.5;
	public static var debuffMultiplier : float = 0.6;

	public static var enemyAttack:int = 100; 
	public static var enemyDefense:int = 100;

	public static var heroAttack:int = 100;
	public static var heroDefense:int = 100;

	public static function setEasyMode(){
		Debug.Log('EASY MODE!');
		game_difficulty = 1;
		battle_length = 15.0;

		buffMultiplier = 1.5;
		debuffMultiplier = .60;

		enemyAttack = 100;
		enemyDefense = 100;

		heroAttack = 100;
		heroDefense = 100;
	};

	public static function setHardMode(){
		Debug.Log('HARD MODE!');
		game_difficulty = 2;
		battle_length = 15.0;;

		buffMultiplier = 1.5;
		debuffMultiplier = .55;

		enemyAttack = 140;
		enemyDefense = 100;

		heroAttack = 100;
		heroDefense = 100;
	};

	public function DifficultySettings(){
		setEasyMode();
	}
}