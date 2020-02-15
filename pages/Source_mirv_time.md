Added paused time features / mirv_time, which most HLAE features (e.g. campaths) try to support as good as possible):
mirv_time mode: currently supports curTime (old behavior, pauses when demo is paused) and resumePaused (resumes when paused).

mirv_time pausedTime: Print / set currently used paused time (added to curTime).

Be aware that time travel has side effects: examples are stateful features like mirv_aim and some mirv_calcs.

Pro tip: You can use mirv_cmd add to schedule the pausing un-pausing (and mirv_cmd save / load to save / load it to / from an XML file), one should also combine it with setting mirv_time pausedTime e.g. to 0.

# See also

* [[Source:Commands]]