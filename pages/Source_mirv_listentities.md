This command is for listing the entities known to the engine when the command is issued.

# Supported Games

Only Counter-Strike: Global Offensive is supported.

# Usage

When entered the command prints a line for each entity known. The first line contains the information about what is printed in each line, currently this mostly is:

<tt>index (distance): className::enitityName</tt>

Where
* <tt>index</tt> is the entity index in the engine, which for example can be used with [[mirv_aim|Source:mirv_aim]]
* <tt>distance</tt> is the distance to the last known camera origin (your in-game view)
* <tt>className</tt> and <tt>entityName</tt> can be useful to determine which type of entity it is.

To find an entity move the camera next to it and check the <tt>distance</tt> entry.

# See also

* [[Source:Commands]]
