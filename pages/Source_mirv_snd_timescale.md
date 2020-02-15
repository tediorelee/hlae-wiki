This command allows controlling the sound timescale independently of host_timescale.

This is useful in example used in the [[Smoother Demos|Source:Smoother Demos]] guide.

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# mirv_snd_timescale

## mirv_snd_timescale _&lt;fValue&gt;_

Forces the sound system to use the floating point value _&lt;fValue&gt;_ as time scale.

Example:<br />
<tt>mirv_snd_timescale 1.0</tt>

# mirv_snd_timescale default

Makes the sound system to use the default behaviour again (so it will depend on host_timescale again):

Example:<br />
<tt>mirv_snd_timescale default</tt>

# See also

* [[Source:Commands]]
* [[Smoother Demos|Source:Smoother Demos]]