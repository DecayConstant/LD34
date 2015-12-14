#pragma strict

var kungfuUpArrow : GameObject;
var kungfuDwnArrow : GameObject;
var karateUpArrow : GameObject;
var karateDwnArrow : GameObject;
var fireUpArrow : GameObject;
var fireDwnArrow : GameObject;
var iceUpArrow : GameObject;
var iceDwnArrow : GameObject;
var lightUpArrow : GameObject;
var lightDwnArrow : GameObject;
var earthUpArrow : GameObject;
var earthDwnArrow : GameObject;

var enemyStatPanel : GameObject;
var poisonCounter : Text;



public class Entity extends MonoBehaviour {

	public var entity_name : String = '';
	public var max_health:int= 1000;
    public var health : int = 1000;
    public var attack : int = 100;
    public var defense : int = 100;

    //Stregnths/Weaknesses.  1=strong -1=weak 0=norma;
    public var earth : int = 0;
    public var ice : int = 0;
    public var fire : int = 0;
    public var lightning : int = 0;
    public var karate : int = 0;
    public var kungfu : int = 0;

    //Statuses
    public var poisoned : int = 0;  //value is a count down of the number of turns of poision they have left;
    public var guarded : int = 0;
    public var reconned : boolean = false;

    public var taunt_count : int = 0;
    public var health_potions : int = 3;


   	public var playerType : int;

    public function takeDamage(damage:int){
    	health -= damage;
    };

    function setAllArrows(bool:boolean){
    	kungfuUpArrow.SetActive(bool);
		kungfuDwnArrow.SetActive(bool);
		karateUpArrow.SetActive(bool);
		karateDwnArrow.SetActive(bool);
		fireUpArrow.SetActive(bool);
		fireDwnArrow.SetActive(bool);
		iceUpArrow.SetActive(bool);
		iceDwnArrow.SetActive(bool);
		lightUpArrow.SetActive(bool);
		lightDwnArrow.SetActive(bool);
		earthUpArrow.SetActive(bool);
		earthDwnArrow.SetActive(bool);
    };

    public function UpdateStatus (){
		Debug.Log("UpdateStatus");


		setAllArrows(false);

		//Kung fu stat conditions
		if (kungfu == 1){
			kungfuUpArrow.SetActive(true);
		} else if (kungfu == -1){
			kungfuDwnArrow.SetActive(true);
		}
		//karate stat conditions
		if (karate == 1){
			karateUpArrow.SetActive(true);
		} else if (karate == -1){
			karateDwnArrow.SetActive(true);
		}
		//fire stat conditions
		if (fire == 1){
			fireUpArrow.SetActive(true);
		} else if (fire == -1){
			fireDwnArrow.SetActive(true);
		}
		//ice stat conditions
		if (ice == 1){
			iceUpArrow.SetActive(true);
		} else if (ice == -1){
			iceDwnArrow.SetActive(true);
		}
		if (lightning == 1){
			lightUpArrow.SetActive(true);
		} else if (lightning == -1){
			lightDwnArrow.SetActive(true);
		}
		//earth status conditions
		if (earth == 1){
			earthUpArrow.SetActive(true);
		} else if (earth == -1){
			earthDwnArrow.SetActive(true);
		}

		//displays the poison counter.
		poisonCounter.text = poisoned.ToString();

		//shows the enemy status panel after recon is used.
		if(reconned == true){
			enemyStatPanel.SetActive(true);
		}else {
			//enemyStatPanel.SetActive(false);
		}
	
	};
   
}