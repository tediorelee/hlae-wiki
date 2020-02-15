[Explanation needed.]
# Supported Games
Counter-Strike: Global Offensive

# mirv_vpanel
`mirv_vpanel command <panelName> <sModule> <command>` - Execute \<command\> on panel with name \<panelName\> in module \<sModule\> (options are case-sensitive, \<sModule\> can e.g. be BaseUI or ClientDLL).

# Example
`mirv_vpanel command DemoUIPanel BaseUI play`

Possible command values for `DemoUIPanel` in `BaseUI`:
* uireload
* gotostart
* prevframe
* play
* nextframe
* gotoend
* timescale_quarter
* timescale_half
* timescale_one
* timescale_2x
* timescale_4x
* nextround
* previousround
* nextdeath
* prevdeath
* load
* edit
* smooth
* drive
* stop