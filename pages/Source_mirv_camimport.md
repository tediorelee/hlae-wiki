# Importing camera motion data

Make sure that the footage you import was recorded or exported with high enough fps (at least as high as the maximum fps you need).

To start importing:<br />
<tt>mirv_camimport start test.bvh</tt><br />
In case no path is specified the .bvh file will be loaded from the folder where the game .exe is located.

To stop importing:<br />
<tt>mirv_camimport stop</tt>

# Notes on path timing

The path uses the current interpolated (demo) time, if you pause the demo, the path will pause too.

Upon <tt>mirv_camimport start ...</tt> the path is set to start at the current time.

You can view the current time using <tt>mirv_camexport timeinfo</tt>.

You can view and change the start time of a path already imported using <tt>mirv_camimport basetime</tt>.

# See also

* [[mirv_camexport|Source:mirv_camexport]]
* [[Camera Motion Data]]
* [[Source:Commands]]
* [[AfxHookSource]]
* [[Source:Order of camera overrides]]