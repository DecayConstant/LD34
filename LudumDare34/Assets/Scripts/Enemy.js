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

var poisonCounter : Text;


public class Enemy extends Entity {
	//public var taunt_count : int = 0;

	public function Enemy(){
			playerType = 2;
			Debug.Log("enemy" + playerType);
	};

	public function Enemy(myName:String){
		entity_name=myName;
		playerType = 2;
					Debug.Log("enemy two" + playerType);

	};	

	public function UpdateStatus (){
		
		//Kung fu stat conditions
	if(reconned == true){
		if (kungfu == 1){
			kungfuUpArrow.SetActive(true);
		} else if (kungfu == 0){
			kungfuUpArrow.SetActive(false);
			kungfuDwnArrow.SetActive(false);
		}	else if (kungfu == -1){
			kungfuDwnArrow.SetActive(true);
		}
		//karate stat conditions
		if (karate == 1){
			karateUpArrow.SetActive(true);
		} else if (karate == 0){
			karateUpArrow.SetActive(false);
			karateDwnArrow.SetActive(false);
		}	else if (karate == -1){
			karateDwnArrow.SetActive(true);
		}
		//fire stat conditions
		if (fire == 1){
			fireUpArrow.SetActive(true);
		} else if (fire == 0){
			fireUpArrow.SetActive(false);
			fireDwnArrow.SetActive(false);
		}	else if (fire == -1){
			fireDwnArrow.SetActive(true);
		}
		//ice stat conditions
		if (ice == 1){
			iceUpArrow.SetActive(true);
		} else if (ice == 0){
			iceUpArrow.SetActive(false);
			iceDwnArrow.SetActive(false);
		}	else if (ice == -1){
			iceDwnArrow.SetActive(true);
		}
		if (lightning == 1){
			lightUpArrow.SetActive(true);
		} else if (lightning == 0){
			lightUpArrow.SetActive(false);
			lightDwnArrow.SetActive(false);
		}	else if (lightning == -1){
			lightDwnArrow.SetActive(true);
		}
		//earth status conditions
			if (earth == 1){
			earthUpArrow.SetActive(true);
		} else if (earth == 0){
			earthUpArrow.SetActive(false);
			earthDwnArrow.SetActive(false);
		}	else if (earth == -1){
			earthDwnArrow.SetActive(true);
		}

		//displays the poison counter.
		poisonCounter.text = poisoned.ToString();

		}
	}

};