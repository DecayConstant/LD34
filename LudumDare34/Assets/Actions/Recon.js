#pragma strict

public class Recon extends Action {

	public function action(actor : Entity, target:Entity){

         if(target.kungfu == -1){
         	Debug.Log(target.entity_name+" is weak against kungfu.");
         }else if(target.kungfu == 1){
         	Debug.Log(target.entity_name+" is strong against kungfu.");
         }

         if(target.karate == -1){
         	Debug.Log(target.entity_name+" is weak against karate.");
         }else if(target.karate == 1){
         	Debug.Log(target.entity_name+" is strong against karate.");
         }

         if(target.ice == -1){
         	Debug.Log(target.entity_name+" is weak against ice.");
         }else if(target.ice == 1){
         	Debug.Log(target.entity_name+" is strong against ice.");
         }

         if(target.fire == -1){
         	Debug.Log(target.entity_name+" is weak against fire.");
         }else if(target.fire == 1){
         	Debug.Log(target.entity_name+" is strong against fire.");
         }

         if(target.earth == -1){
         	Debug.Log(target.entity_name+" is weak against earth.");
         }else if(target.karate == 1){
         	Debug.Log(target.entity_name+" is strong against earth.");
         }

         if(target.lightning == -1){
         	Debug.Log(target.entity_name+" is weak against lightning.");
         } else if(target.lightning == 1){
         	Debug.Log(target.entity_name+" is strong against lightning.");
         }

         target.reconned = true;
    };

    public function Recon(){
    };

};