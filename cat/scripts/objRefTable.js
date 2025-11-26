const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Audio: 0},
	{Keyboard: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {}
}