#pragma strict
import UnityEngine.UI;

public class Action extends MonoBehaviour{
	public var strength : int;
	public var dialogue_box : Text;

	public function action(actor : Entity, target:Entity){};

	public function Action(){
		strength = 1;
	};
//	 public function action2(){
//	 	Debug.Log(strength+'!');	
//	 };
};

