#pragma strict

public class DoubleDown extends Action {
	public var use_count=0;

	public function action(actor : Entity, target:Entity){
		use_count++;
		if(use_count >=2 ){
			Debug.Log('YOU DORK!');
			Debug.Log('YOU LOSE!');
		}else{
			Debug.Log("DON'T EVEN DO THAT AGAIN!!!");
		}
    };

    public function DoubleDown(){
    };

};