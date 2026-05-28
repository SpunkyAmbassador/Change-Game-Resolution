# 3.0.0
- Updated save logic according to RPM v3
- Support for RPM v2 is dropped
---
# 2.1.0
- Added new command - "Reload Game"
  - This will reload game and will prevent font sizing bugs.
  - Previously player has to exit and relaunch game, this command will prevent that hassle.
- Updated `updateWindowSize()` logic
  - Sometimes game window changes but the graphic size remains same. This update might solve that.
- Updated plugin description.
- Update readme to reflect new changes.
---
# 2.0.0
- Changed the logic to change window resolution
- Removed sleep timer which added a half second delay when starting the game
- "Loading" dialog will now always appear at bottom right instead of middle screen when changing resolution
- Removed extra `RPM.Datas.Systems.updateWindowSize(width, height, fullscreen);` function
- Changed description
---
# 1.4.0

## New
- Manual Autosave - Manually autosave game using Autosave command
---
# 1.3.0

## New
- Option to prevent user from overwriting autosave slot 
---
# 1.2.0

## New
- Autosave when an object teleports
- Autosave when player closes the menu screen
- Both feature should cover⁠

## Updated
- Logic for autosaving in intervals
- Logic for checking if game allows saving or not
- Save slot number is now stored in const variable instead of checking it every time from plugin parameter
---
# 1.1.0

## New
- SaveWhenForbid parameter - Don't autosave when game ("allow/forbid saves" command) doesn't allow saving (Toggleable)
Icon

## Updated 
- Interval is changed to Seconds instead of Miliseconds
- Logic for autosave when the game is in Title Screen
---
# 1.0.0 - Initial Release
- Change 'Game Native Resolution' with this plugin.
