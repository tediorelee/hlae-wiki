<tt>mirv_fov _default|&lt;f&gt;_</tt>

This command allows to set the Field Of View in degrees, where the argument either is a floating point value (_&lt;f&gt;_) between 1.0 and 179.0 degrees or the special value _default_ for restoring the game's default behaviour.

**Also see [[Useful related sub-commands|Source:mirv_fov#useful-related-sub-commands]] below!**

The field of view value will be picked up by the campath features ([[mirv_campath|Source:mirv_campath]]). However for technical reasons it will be ignored by the camera import / export features ([[mirv_camexport|Source:mirv_camexport]] / [[mirv_camimport|Source:mirv_camimport]]).

Except if you want your FOV to be overridden, be sure to set the <tt>mirv_fov default</tt> before replaying a [[mirv_campath|Source:mirv_campath]], since the camera settings are applied and overriden in the following order:

1. mirv_campath
2. mirv_camimport
3. mirv_fov
4. mirv_input camera

# Useful related sub-commands

You usually also want to enter <tt>mirv_fov handleZoom enabled 1</tt> which will make mirv_fov not override the zoomed fov for i.e. AWP in CS:GO.

For other games than CS:GO you might need to adjust the threshold (if their un-zoomed FOV is less than 90 degrees), enter <tt>mirv_fov handleZoom</tt> into console to get further help.

# See also

* [[Source:Commands]]
* [[Source:Order of camera overrides]]