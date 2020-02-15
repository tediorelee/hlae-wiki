This command allows to access fixes to the game that are not covered by other commands.

# mirv_fix blockObserverTarget

For CS:GO only, fixes unwanted player switching (spec lag/spin) i.e. upon bomb plant (blocks C_BasePlayer::RecvProxy_ObserverTarget). 

Syntax: <tt>mirv_fix blockObserverTarget _**0**|1_</tt>
* **0**: default, don't block
* **1**: enable block

# mirv_fix oldDuckFix

For CS:GO only, can fix player stuck in duck for old demos.

Syntax: <tt>mirv_fix oldDuckFix _**0**|1_</tt>
* **0**: default, don't block (no fix)
* **1**: enable block (fix), might need round restart

# mirv_fix physicsMaxFps

For CS:GO only, allows to raise / set the FPS limit for physics (i.e. rag dolls, so they don't freeze upon high host_framerate). 

Syntax: <tt>mirv_fix physicsMaxFps _\<fValue\>_</tt>
* **_\<fValue\>_**: Floating point or integer value to set as new limit (CS:GO's default is 9999 at the moment).

# mirv_fix playerAnimState

See [[Smoother Demos|Source:Smoother Demos]]

# See also

* [[Source:Commands]]
* [[Source:mirv_snd_timescale]]