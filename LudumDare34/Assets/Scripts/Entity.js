#pragma strict

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
    public var statuses : String[];
    public var reconned : boolean = false;

    public var taunt_count : int = 0;
    public var health_potions : int = 3;


   	public var playerType : int;

    public function takeDamage(damage:int){
    	health -= damage;
    }
}