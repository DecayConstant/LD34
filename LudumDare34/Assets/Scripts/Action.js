#pragma strict

public class Action extends MonoBehaviour{
	public var strength : int;

	public function action(actor : Entity, target:Entity){};

	public function Action(){
		strength = 1;
	};
//	 public function action2(){
//	 	Debug.Log(strength+'!');	
//	 };
};

