const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Behaviors.Sin,
		C3.Plugins.Particles,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.Platform,
		C3.Plugins.Spritefont2,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Behaviors.Tween,
		C3.Behaviors.Flash,
		C3.Plugins.TiledBg,
		C3.Plugins.Arr,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.AJAX,
		C3.Plugins.Json,
		C3.Plugins.Mouse,
		C3.Plugins.UserMedia,
		C3.Plugins.Button,
		C3.Behaviors.Rotate,
		C3.Plugins.HTMLElement,
		C3.Plugins.Json.Acts.SetValue,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.Json.Exps.ToCompactString,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.ScriptsInEvents.EventGameplay_Event3_Act3,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Platform.Acts.SetGravity,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Spritefont2.Acts.Destroy,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Behaviors.Platform.Acts.SetMaxFallSpeed,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.RotateCounterclockwise,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.ScriptsInEvents.EventGameplay_Event22_Act1,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex,
		C3.Plugins.Sprite.Exps.ColorValue,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.ScriptsInEvents.EventMenu_Event3_Act3,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.ScriptsInEvents.EventScore_Event2_Act1,
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
		C3.ScriptsInEvents.Event_leaderboard_Event3_Act5,
		C3.ScriptsInEvents.Event_leaderboard_Event5_Act2,
		C3.Plugins.Json.Cnds.ForEach,
		C3.ScriptsInEvents.Event_leaderboard_Event8_Act1,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Text.Acts.SetFontFace,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnWheel,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Touch.Exps.X,
		C3.ScriptsInEvents.Event_tuturial_Event1_Act1,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.Tween.Cnds.OnTweensFinished
	];
};
self.C3_JsPropNameTable = [
	{Fade: 0},
	{Sine: 0},
	{BGEffect: 0},
	{Coin: 0},
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
	{countText: 0},
	{stars: 0},
	{Anchor: 0},
	{background_bottom1: 0},
	{background_bottom2: 0},
	{background_left: 0},
	{background_right: 0},
	{background_top1: 0},
	{background_top2: 0},
	{bottom_1: 0},
	{Tween: 0},
	{Flash: 0},
	{bottom_2: 0},
	{bottom_3: 0},
	{bottom_4: 0},
	{bottom_5: 0},
	{effects_bottom_1: 0},
	{effects_bottom_2: 0},
	{effects_bottom_3: 0},
	{effects_bottom_4: 0},
	{effects_bottom_5: 0},
	{effects_top1: 0},
	{effects_top2: 0},
	{effects_top3: 0},
	{effects_top4: 0},
	{effects_top5: 0},
	{top_1: 0},
	{top_2: 0},
	{top_3: 0},
	{top_4: 0},
	{top_5: 0},
	{Cscore_count: 0},
	{Menu: 0},
	{Link_ID: 0},
	{Orig_Width: 0},
	{Orig_Height: 0},
	{Menu_Panel: 0},
	{Particles22: 0},
	{Cup: 0},
	{Sine2: 0},
	{menutitle: 0},
	{background_tuturial: 0},
	{howtoplay_hamie: 0},
	{howtoplay_modal: 0},
	{howtoplay_text: 0},
	{firststart: 0},
	{Fader: 0},
	{howtoplay_back: 0},
	{Restart: 0},
	{hamie_log: 0},
	{Home: 0},
	{TextBest: 0},
	{Start: 0},
	{GameOver: 0},
	{current_score: 0},
	{text_score: 0},
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
	{TopBestScoreName: 0},
	{TopBestScore: 0},
	{Star: 0},
	{DragDrop: 0},
	{scoreboard: 0},
	{Rank_text: 0},
	{Rank_Header: 0},
	{leardboard_playbutton: 0},
	{leaderboard_b1: 0},
	{leaderboard_b2: 0},
	{TextScore2: 0},
	{numGo: 0},
	{num1: 0},
	{num2: 0},
	{num3: 0},
	{score_board: 0},
	{Touch: 0},
	{LocalStorage: 0},
	{Audio: 0},
	{Browser: 0},
	{AJAX: 0},
	{Array: 0},
	{JSON: 0},
	{Mouse: 0},
	{TextTutorial: 0},
	{UserMedia: 0},
	{Button: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{scrollBoard: 0},
	{scrollBar: 0},
	{SpriteFont: 0},
	{Rotate: 0},
	{Sprite4: 0},
	{HTMLElement: 0},
	{var_state: 0},
	{music_controller1: 0},
	{game_start: 0},
	{var_score: 0},
	{var_best: 0},
	{isLightning: 0},
	{Selectedcolor: 0},
	{passCount: 0},
	{AudioFactor: 0},
	{LevelCount: 0},
	{coinLocationX: 0},
	{coinLocationY: 0},
	{gamespeedcontroller: 0},
	{start_countdown: 0},
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
	{topBestName: 0},
	{a1: 0},
	{scrollBar_percent: 0},
	{topBestScore: 0},
	{loading: 0},
	{Iterator: 0}
];

self.InstanceType = {
	BGEffect: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Particles23: class extends self.IParticlesInstance {},
	Particles3: class extends self.IParticlesInstance {},
	Player: class extends self.ISpriteInstance {},
	score: class extends self.ISpriteInstance {},
	counter: class extends self.ISpriteInstance {},
	TextScore: class extends self.ISpriteFontInstance {},
	Levelscore: class extends self.ISpriteFontInstance {},
	countText: class extends self.ITextInstance {},
	stars: class extends self.ISpriteInstance {},
	background_bottom1: class extends self.ISpriteInstance {},
	background_bottom2: class extends self.ISpriteInstance {},
	background_left: class extends self.ISpriteInstance {},
	background_right: class extends self.ISpriteInstance {},
	background_top1: class extends self.ISpriteInstance {},
	background_top2: class extends self.ISpriteInstance {},
	bottom_1: class extends self.ISpriteInstance {},
	bottom_2: class extends self.ISpriteInstance {},
	bottom_3: class extends self.ISpriteInstance {},
	bottom_4: class extends self.ISpriteInstance {},
	bottom_5: class extends self.ISpriteInstance {},
	effects_bottom_1: class extends self.ISpriteInstance {},
	effects_bottom_2: class extends self.ISpriteInstance {},
	effects_bottom_3: class extends self.ISpriteInstance {},
	effects_bottom_4: class extends self.ISpriteInstance {},
	effects_bottom_5: class extends self.ISpriteInstance {},
	effects_top1: class extends self.ISpriteInstance {},
	effects_top2: class extends self.ISpriteInstance {},
	effects_top3: class extends self.ISpriteInstance {},
	effects_top4: class extends self.ISpriteInstance {},
	effects_top5: class extends self.ISpriteInstance {},
	top_1: class extends self.ISpriteInstance {},
	top_2: class extends self.ISpriteInstance {},
	top_3: class extends self.ISpriteInstance {},
	top_4: class extends self.ISpriteInstance {},
	top_5: class extends self.ISpriteInstance {},
	Cscore_count: class extends self.ITextInstance {},
	Menu_Panel: class extends self.ISpriteInstance {},
	Particles22: class extends self.IParticlesInstance {},
	Cup: class extends self.ISpriteInstance {},
	menutitle: class extends self.ISpriteInstance {},
	background_tuturial: class extends self.ISpriteInstance {},
	howtoplay_hamie: class extends self.ISpriteInstance {},
	howtoplay_modal: class extends self.ISpriteInstance {},
	howtoplay_text: class extends self.ISpriteInstance {},
	firststart: class extends self.ISpriteInstance {},
	Fader: class extends self.ITiledBackgroundInstance {},
	howtoplay_back: class extends self.ISpriteInstance {},
	Restart: class extends self.ISpriteInstance {},
	hamie_log: class extends self.ISpriteInstance {},
	Home: class extends self.ISpriteInstance {},
	TextBest: class extends self.ITextInstance {},
	Start: class extends self.ISpriteInstance {},
	GameOver: class extends self.ISpriteInstance {},
	current_score: class extends self.ITextInstance {},
	text_score: class extends self.ISpriteInstance {},
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
	TopBestScoreName: class extends self.ITextInstance {},
	TopBestScore: class extends self.ITextInstance {},
	Star: class extends self.ISpriteInstance {},
	scoreboard: class extends self.ISpriteInstance {},
	Rank_text: class extends self.ITextInstance {},
	Rank_Header: class extends self.ISpriteInstance {},
	leardboard_playbutton: class extends self.ISpriteInstance {},
	leaderboard_b1: class extends self.ISpriteInstance {},
	leaderboard_b2: class extends self.ISpriteInstance {},
	TextScore2: class extends self.ISpriteFontInstance {},
	numGo: class extends self.ISpriteFontInstance {},
	num1: class extends self.ISpriteFontInstance {},
	num2: class extends self.ISpriteFontInstance {},
	num3: class extends self.ISpriteFontInstance {},
	score_board: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Array: class extends self.IArrayInstance {},
	JSON: class extends self.IJSONInstance {},
	Mouse: class extends self.IInstance {},
	TextTutorial: class extends self.ITextInstance {},
	UserMedia: class extends self.IWorldInstance {},
	Button: class extends self.IButtonInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	scrollBoard: class extends self.ISpriteInstance {},
	scrollBar: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	HTMLElement: class extends self.IHTMLElementInstance {}
}