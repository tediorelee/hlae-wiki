This command supports recording voice audio separately from normal game audio and also blocking specific voice audio.

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# mirv_voice block

This command allows blocking voice audio of specific entities / players.

Please enter `mirv_voice block` into console to get access to the built-in help system for further instructions.

# mirv_voice record

This command allows recording of player voice into separate audio files (one per player / entity using the voice audio).

## mirv_streams

When recording with [[mirv_streams|Source:mirv_streams]] this command is not required, you can simply set `mirv_streams record voices 1` to enable voice recording upon streams being recorded.

## Recording voice audio separately of game audio

Enter this into console to suppress voice audio in normal game audio while still being able to record voice separetly:<br />
`sv_cheats 1; snd_setmixer voip vol 0` (The default vol is 0.7.)

## Naming of audio files

The audio files entity_xxx.wav where xxx is the entity index. The index is equal to the number shown by the `voice_show_mute` console command.

## Further options

Please enter `mirv_voice record` into console to get access to the built-in help system for further instructions.

# See also

[[Source:Commands]]