#pragma strict

public class Karate extends Action {

	public function action(actor : Entity, target:Entity){
        var damage : int = strength;

        if(target.karate == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against your karate. You deal '+damage+' damage.');
        }else if(target.karate == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against your karate. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' damage.');
        }
    };

    public function Karate(){
    	strength=50;
    };

};