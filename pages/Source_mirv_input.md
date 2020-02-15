# Subcommands

## <tt>mirv_input camera</tt>

Enables the camera input mode.

* Overrides the game's camera.
* The camera mode input is suspended as long as the console is open.
* Camera mode supersedes <tt>[[mirv_campath|Source:mirv_campath]]</tt> .
* For sensitivity control see <tt>mirv_input cfg</tt> below.

Currently the key / mouse bindings are hard-coded as follows:

* **End input mode**: [ESC]
* **Ignore and pass through next key**: [CTRL]
* **Reset view and speed**: [HOME],[NUMPAD 5]
* **Move forward**: [W],[NUMPAD 8]
* **Move backward**: [S], [NUMPAD 2]
* **Move left**: [A], [NUMPAD 4]
* **Move right**: [D], [NUMPAD 6]
* **Move up**: [R], [NUMPAD 9]
* **Move down**: [F], [NUMPAD 3]
* **Zoom in** (decrease FOV): [PAGE UP], [NUMPAD 7]
* **Zoom out** (increase FOV): [PAGE DOWN], [NUMPAD 1]
* **Roll left**: [Z], [NUMPAD 0]
* **Roll right**: [X], [NUMPAD . (decimal)]
* **Look down**: [DOWN ARROW], move mouse backward
* **Look up**: [UP ARROW], move mouse forward
* **Look left**: [LEFT ARROW], move mouse left
* **Look right**: [RIGHT ARROW], move mouse right
* **Increase overall speed** (double): <tt>+</tt>
* **Decrease overall speed** (half): <tt>-</tt>

* all keys not mentioned go through unmodified

### Third person camera:

For GOTV demos you should switch to free camera view and then execute:<br/>
<tt>mirv_input camera</tt>

For POV demos we recommend to execute the following commands:<br />
<tt>sv_cheats 1</tt><br />
<tt>thirdperson</tt><br />
<tt>mirv_input camera</tt>

## <tt>mirv_input cfg</tt>

Access to input mode configuration.

* **<tt>mirv_input cfg msens</tt>** : Get current mouse sensitivity.
* **<tt>mirv_input cfg msens _&lt;dValue&gt;_</tt>** : Set mouse sensitivity to floating point value _&lt;dValue&gt;_.
* **<tt>mirv_input cfg ksens</tt>** : Get current keyboard sensitivity.
* **<tt>mirv_input cfg ksens _&lt;dValue&gt;_</tt>** : Set keyboard sensitivity to floating point value _&lt;dValue&gt;_.

There are many more fine grained options than those listed above, just enter only <tt>mirv_input cfg</tt> into console in order to list them.

## <tt>mirv_input end</tt>

Ends current input mode(s).

# See also

* [[Source:Commands]]
* [[mirv_campath|Source:mirv_campath]]
* [[Source:Order of camera overrides]]