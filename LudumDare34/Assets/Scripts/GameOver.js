#pragma strict
import UnityEngine.UI;

public var gameover : boolean = false;
public var gameover_panel : GameObject;
public var gameover_text : Text;
public var gameover_restart_text : Text;

public var gamewin : boolean = false;
public var gamewin_panel : GameObject;
public var gamewin_text : Text;
public var gamewin_restart_text : Text;

public var restart_timer : float = 3.0;

public var soundEffect: AudioClip;
public var sound_effect_played : boolean = false;

public var bgm_sound : AudioSource;

function GameOver(str : String) {
	gameover = true;
	gameover_panel.SetActive(true);
	gameover_text.text = str;
}

function WinGame(str : String) {
	gamewin = true;
	gamewin_panel.SetActive(true);
	gamewin_text.text = str;
}

function Update() {
	if(gameover) {
		if(!sound_effect_played) {
			bgm_sound.volume = 0.2;
			GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
			sound_effect_played = true;
		}
		restart_timer -= Time.deltaTime;
		if(restart_timer <= 0) {
			gameover_restart_text.color = Color(1,1,1,1);
			if(Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB")) {
				Application.LoadLevel(Application.loadedLevel);
			}
		}
	}

	if(gamewin) {
		restart_timer -= Time.deltaTime;
		if(restart_timer <= 0) {
			gamewin_restart_text.color = Color(1,1,1,1);
			if(Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB")) {
				Application.LoadLevel(Application.loadedLevel);
			}
		}
	}
}