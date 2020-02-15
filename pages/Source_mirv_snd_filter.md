This command allows blocking game sounds from being played, using wildcards.

If you want to block all sounds except specific sounds, use the game's own snd_filter cvar instead (for example snd_filter &quot;player\\vo\\&quot; will block all sounds except those containing that string, which should be radio voice) (Can be combined with mirv_snd_filter.).

Also check out Valve's other commands (found i.e. by [olosd3](https://twitter.com/olosd3)):
```
developer 1
snd_soundmixer_list_mixers
snd_soundmixer_list_mix_layers
sv_cheats 1
snd_setmixer [...]
snd_setmixlayer [...]
```

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# Finding sounds to block

Enter <tt>mirv_snd_filter debug 1</tt> into console to enable printing of all sounds starting to play in console. You can turn the spam off again using Enter <tt>mirv_snd_filter debug 0</tt>.

# Block specific sounds

Enter <tt>mirv_snd_filter block _&lt;mask&gt;_</tt> into console and replace _&lt;mask&gt;_ by a string that you want to match, which can contain the following special character sequences:
* <tt>\\*</tt> is the wildcard that matches any number of characters
* <tt>\\\\</tt> is the \\ character, so if you want to match 1 backslash, you will have to write 2 of them

## Examples

<tt>mirv_snd_filter block &quot;player\\\\vo\\\\\\*&quot;</tt> will block all sounds starting with <tt>player\\vo\\</tt> which should be the radio voice commands.

<tt>mirv_snd_filter block &quot;\\*&quot;</tt> will block all sounds that go through the S_StartSound function.

# List all sounds blocked

Enter <tt>mirv_snd_filter print</tt> into console.

# Remove a specific block

You can obtain the _&lt;index&gt;_ using <tt>mirv_snd_filter print</tt>. Then you can delete it using <tt>mirv_snd_filter remove _&lt;index&gt;_</tt>, of course replace _&lt;index&gt;_ with the index value.

# Clear all blocks

Enter <tt>mirv_snd_filter clear</tt> into console.

# See also

* [[Source:Commands]]