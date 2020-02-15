# Exporting camera motion data

Set your fps with host_framerate.

Start recording as usual.

To start exporting (replace _fps_ with the same value you set for host_framerate):<br />
<tt>mirv_camexport start test.bvh _fps_</tt>

In case no path is specified the .bvh file will be created in the folder where the hl.exe of your game is located.

To stop exporting:<br />
<tt>mirv_camexport stop</tt>

Stop recording.

# See also

* [[mirv_camimport|Source:mirv_camimport]]
* [[Camera Motion Data]]
* [[Source:Commands]]
* [[AfxHookSource]]
