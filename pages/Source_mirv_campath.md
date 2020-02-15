This command allows to make campaths easily.

# Demo type specific requirements

## GOTV

None, switch to free camera mode is recommended.

## POV (in-eye) demos

For POV demos you should switch to thirdperson mode and enable <tt>mirv_input camera</tt> mode as described  here:<br />
[[mirv_input - Third person camera|Source:mirv_input#third-person-camera]]

# Add camera points to the path

<tt>mirv_campath add</tt>

Adds the current time and view to the path. If you happen to exactly hit a time already set in the path, then it will be overwritten.

Currently you need to add at least 4 points before you can enable the camera path.

# Enable the current path

<tt>mirv_campath enabled _0|1_</tt>

If you enter 1 the path is enabled (or enter 0 to disable).

Currently you need to add at least 4 points before you can enable the camera path.

# Draw the current path on screen

<tt>mirv_campath draw enabled _**0**|1_</tt>

If you enter <tt>mirv_campath draw enabled 1</tt> the path will be drawn on screen, assuming that your modification is supported.

## Change the visualization of the campath keyframes
<tt>mirv_campath draw keyAxis 0|1</tt> (default 0)

<tt>mirv_campath draw keyCam 0|1</tt> (default 1)

## Supported modifications for mirv_campath draw

* Counter-Strike: Global Offensice
* Modifications similar to the Source SDK 2013, i.e. Counter-Strike: Source

## System requirements

* PixelShader version 2.0 must be supported
* VertexShader version 2.0 must be supported

# Clearing all points in the path

<zz>mirv_campath clear</tt>

# Printing points in the path

<tt>mirv_campath print</tt>

Prints all points in the path (if point has been already passed, id, time, position and rotation) and current time.

# Removing a point

<tt>mirv_campath remove _&lt;id&gt;_</tt>

Removes point with the number _&lt;id&gt;_, which you can get from <tt>mirv_campath print</tt> (See [[Printing points in the path|Source:mirv_campath#Printing points in the path]] below).

# Loading a path

<tt>mirv_campath load _&lt;filename&gt;_</tt>

Loads a campath from file _&lt;filename&gt;_ which has to be in the XML format like saved from <tt>mirv_campath save</tt> (See [[Saving a path|Source:mirv_campath#Saving a path]] above.). For the format have a look at the file and the comments in it from a saved file.

If no file path is specified, the file we be loaded from where the game .exe file is located.

Currently the path needs to be enabled again after loading it:

<tt>mirv_campath enabled 1</tt>

# Saving a path

<tt>mirv_campath save _&lt;filename&gt;_</tt>

Saves a campath to file _&lt;filename&gt;_ in XML format.

If no file path is specified, the file we be saved to where the game .exe file is located.

# Path editing tools

## Setting the path to start at a new time

<tt>mirv_campath edit start</tt>

Offsets the whole current path to start at the current time.

## Scaling the duration of the path

<tt>mirv_campath edit duration _&lt;dValue&gt;_</tt>

Sets a new duration for the path in seconds using the floating point value _&lt;dValue&gt;_. In the unlikely event that due to rescaling several points land on the same time, the value of the last point will be used (no interpolation is done).

## Further editing tools

There are further editing tools available (i.e. edit position / fov / angles of all or selected keyframes or rotate that path).

To get a list and help for those enter <tt>mirv_campath edit</tt> into the console.

# Keyframe selection tools

Keyframes can be selected with <tt>mirv_campath select</tt>

Please enter it without further options in the console to list all available sub-commands and a few handy examples in the console.

When keyframes are selected, then the <tt>mirv_campath clear</tt> and <tt>mirv_campath edit</tt> functions will be only applied to the selected keyframes. If none are selected they are applied to all keyframes. (So after clearing the selected keyframes no keyframes will be selected and thus you probably don't want to clear them again, since that would clear the whole path then).

Selected keyframes / path parts will be shown in inverted colour if <tt>mirv_campath draw</tt> is enabled.

# See also

* [[Source:Commands]]
* [[Source:Order of camera overrides]]
