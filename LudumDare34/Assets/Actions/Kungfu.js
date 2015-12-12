#pragma strict

public class Kungfu extends Action {

	public function action(actor : Entity, target:Entity){
        var damage : int = strength;

        if(target.kungfu == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against your kungfu. You deal '+damage+' damage.');
        }else if(target.kungfu == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against your kungfu. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' damage.');
        }
    };

    public function Kungfu(){
    	strength=50;
    	Debug.Log('WTF: '+strength);
    };

};
