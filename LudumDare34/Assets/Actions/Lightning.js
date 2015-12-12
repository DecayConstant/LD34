#pragma strict

public class Lightning extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = strength;
        if(target.lightning == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against lightning. You deal '+damage+' damage.');
        }else if(target.lightning == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against lightning. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' Lightning damage.');
        }
    };

    public function Lightning(){
    	strength=50;
    };

};