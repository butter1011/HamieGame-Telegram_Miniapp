const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Behaviors.Sin,
		C3.Behaviors.Tween,
		C3.Plugins.Particles,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.Platform,
		C3.Plugins.Spritefont2,
		C3.Plugins.Text,
		C3.Plugins.Arr,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.AJAX,
		C3.Plugins.Json,
		C3.Plugins.Mouse,
		C3.Plugins.TiledBg,
		C3.Plugins.UserMedia,
		C3.Plugins.Json.Acts.SetValue,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.Json.Exps.ToCompactString,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.ScriptsInEvents.EventGameplay_Event3_Act3,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.ScriptsInEvents.EventGameplay_Event10_Act1,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Acts.SetMaxFallSpeed,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.RotateCounterclockwise,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Particles.Acts.SetInitSize,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Arr.Exps.Width,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.ScriptsInEvents.EventMenu_Event3_Act3,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.ScriptsInEvents.EventScore_Event2_Act1,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Json.Acts.Parse,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Json.Exps.Get,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.ScriptsInEvents.Event_leaderboard_Event3_Act4,
		C3.Plugins.Json.Cnds.ForEach,
		C3.ScriptsInEvents.Event_leaderboard_Event8_Act1,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Text.Acts.SetFontFace,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnWheel,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.AJAX.Cnds.OnAnyComplete,
		C3.Behaviors.Tween.Cnds.OnTweensFinished
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{MarginWall: 0},
	{Fade: 0},
	{Sine: 0},
	{BGEffect: 0},
	{ExplosionAdditive: 0},
	{ExplosionScreen: 0},
	{Coin: 0},
	{Tween: 0},
	{Obstacle_blue: 0},
	{Obstacle_pink: 0},
	{Obstacle_red: 0},
	{Pathfinding: 0},
	{Particles: 0},
	{Particles2: 0},
	{Particles23: 0},
	{Particles3: 0},
	{Platform: 0},
	{Player: 0},
	{score: 0},
	{counter: 0},
	{TextScore: 0},
	{Levelscore: 0},
	{Menu: 0},
	{Link_ID: 0},
	{Orig_Width: 0},
	{Orig_Height: 0},
	{Menu_Panel: 0},
	{Particles22: 0},
	{background_1: 0},
	{hamie_log2: 0},
	{Cup: 0},
	{menutitle: 0},
	{Restart: 0},
	{background_3: 0},
	{hamie_log: 0},
	{Home: 0},
	{TextBest: 0},
	{stars: 0},
	{Start: 0},
	{GameOver: 0},
	{current_score: 0},
	{Leaderboard_background: 0},
	{Card: 0},
	{Name: 0},
	{ScoreForAPerson: 0},
	{UsersInfo: 0},
	{UsersRanking: 0},
	{medal_gold: 0},
	{medal_silver: 0},
	{medal_bronze: 0},
	{Quit_button: 0},
	{UsersName: 0},
	{UsersScore: 0},
	{YourRanking: 0},
	{YourName: 0},
	{YourScore: 0},
	{Star: 0},
	{DragDrop: 0},
	{scoreboard: 0},
	{scroll_comp1: 0},
	{Rank_text: 0},
	{Rank_Header: 0},
	{background_2: 0},
	{MarginWall2: 0},
	{ExplosionAdditive2: 0},
	{ExplosionScreen2: 0},
	{Player2: 0},
	{countText: 0},
	{Touch: 0},
	{LocalStorage: 0},
	{Audio: 0},
	{Browser: 0},
	{AJAX: 0},
	{Array: 0},
	{JSON: 0},
	{Mouse: 0},
	{Sprite: 0},
	{Fader: 0},
	{TextTutorial: 0},
	{BGTutoSuccess: 0},
	{Fader1: 0},
	{UserMedia: 0},
	{Sprite6: 0},
	{var_state: 0},
	{var_score: 0},
	{var_best: 0},
	{isLightning: 0},
	{Selectedcolor: 0},
	{passCount: 0},
	{AudioFactor: 0},
	{LevelCount: 0},
	{coinLocationX: 0},
	{coinLocationY: 0},
	{telegramId: 0},
	{firstName: 0},
	{userName: 0},
	{BoardState: 0},
	{phoneNumber: 0},
	{tuturialNumber: 0},
	{soundMenuControlier1: 0},
	{lastName: 0},
	{sc_name: 0},
	{sc_ranking: 0},
	{sc_value: 0},
	{length: 0},
	{yourRank: 0},
	{yourScore: 0},
	{yourName: 0},
	{a1: 0},
	{Iterator: 0},
	{countdown: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	MarginWall: class extends self.ISpriteInstance {},
	BGEffect: class extends self.ISpriteInstance {},
	ExplosionAdditive: class extends self.ISpriteInstance {},
	ExplosionScreen: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Obstacle_blue: class extends self.ISpriteInstance {},
	Obstacle_pink: class extends self.ISpriteInstance {},
	Obstacle_red: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Particles23: class extends self.IParticlesInstance {},
	Particles3: class extends self.IParticlesInstance {},
	Player: class extends self.ISpriteInstance {},
	score: class extends self.ISpriteInstance {},
	counter: class extends self.ISpriteInstance {},
	TextScore: class extends self.ISpriteFontInstance {},
	Levelscore: class extends self.ISpriteFontInstance {},
	Menu_Panel: class extends self.ISpriteInstance {},
	Particles22: class extends self.IParticlesInstance {},
	background_1: class extends self.ISpriteInstance {},
	hamie_log2: class extends self.ISpriteInstance {},
	Cup: class extends self.ISpriteInstance {},
	menutitle: class extends self.ISpriteInstance {},
	Restart: class extends self.ISpriteInstance {},
	background_3: class extends self.ISpriteInstance {},
	hamie_log: class extends self.ISpriteInstance {},
	Home: class extends self.ISpriteInstance {},
	TextBest: class extends self.ITextInstance {},
	stars: class extends self.ISpriteInstance {},
	Start: class extends self.ISpriteInstance {},
	GameOver: class extends self.ISpriteInstance {},
	current_score: class extends self.ITextInstance {},
	Leaderboard_background: class extends self.ISpriteInstance {},
	Card: class extends self.ISpriteInstance {},
	Name: class extends self.ITextInstance {},
	ScoreForAPerson: class extends self.ITextInstance {},
	UsersInfo: class extends self.IArrayInstance {},
	UsersRanking: class extends self.ITextInstance {},
	medal_gold: class extends self.ISpriteInstance {},
	medal_silver: class extends self.ISpriteInstance {},
	medal_bronze: class extends self.ISpriteInstance {},
	Quit_button: class extends self.ISpriteInstance {},
	UsersName: class extends self.ITextInstance {},
	UsersScore: class extends self.ITextInstance {},
	YourRanking: class extends self.ITextInstance {},
	YourName: class extends self.ITextInstance {},
	YourScore: class extends self.ITextInstance {},
	Star: class extends self.ISpriteInstance {},
	scoreboard: class extends self.ISpriteInstance {},
	scroll_comp1: class extends self.ISpriteInstance {},
	Rank_text: class extends self.ITextInstance {},
	Rank_Header: class extends self.ISpriteInstance {},
	background_2: class extends self.ISpriteInstance {},
	MarginWall2: class extends self.ISpriteInstance {},
	ExplosionAdditive2: class extends self.ISpriteInstance {},
	ExplosionScreen2: class extends self.ISpriteInstance {},
	Player2: class extends self.ISpriteInstance {},
	countText: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Array: class extends self.IArrayInstance {},
	JSON: class extends self.IJSONInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Fader: class extends self.ITiledBackgroundInstance {},
	TextTutorial: class extends self.ITextInstance {},
	BGTutoSuccess: class extends self.ISpriteInstance {},
	Fader1: class extends self.ITiledBackgroundInstance {},
	UserMedia: class extends self.IWorldInstance {},
	Sprite6: class extends self.ISpriteInstance {}
}