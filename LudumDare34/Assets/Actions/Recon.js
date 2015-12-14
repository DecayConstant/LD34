#pragma strict

public class Recon extends Action {


	public function action(actor : Entity, target:Entity){

    	prepareAnimation(target);

    	var battleMessage : String;

 		if(target.kungfu == -1){
			battleMessage = target.entity_name+" is weak against kungfu.\n";
		}else if(target.kungfu == 1){
			battleMessage = target.entity_name+" is strong against kungfu.\n";
		}

		if(target.karate == -1){
		 	battleMessage = target.entity_name+" is weak against karate.\n";
		}else if(target.karate == 1){
			battleMessage = target.entity_name+" is strong against karate.\n";
		}

		if(target.ice == -1){
		 	battleMessage = target.entity_name+" is weak against ice.\n";
		}else if(target.ice == 1){
		 	battleMessage = target.entity_name+" is strong against ice.\n";
		}

		if(target.fire == -1){
		 	battleMessage = target.entity_name+" is weak against fire.\n";
		}else if(target.fire == 1){
		 	battleMessage = target.entity_name+" is strong against fire.\n";
		}

		if(target.earth == -1){
		 	battleMessage = target.entity_name+" is weak against earth.\n";
		}else if(target.karate == 1){
		 	battleMessage = target.entity_name+" is strong against earth.\n";
		}

		if(target.lightning == -1){
		 	battleMessage = target.entity_name+" is weak against lightning.\n";
		} else if(target.lightning == 1){
		 	battleMessage = target.entity_name+" is strong against lightning.\n";
		}

        target.reconned = true;
        dialogue_box.text = colorizeBattletext(actor, battleMessage)+dialogue_box.text;
        StartCoroutine(waitAwhile());
    };

    public function Recon(){
    	action_name= "Reconnaissance";
    };

};