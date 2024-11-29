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
# 1.0.0 - Initial Release
- Change 'Game Native Resolution' with this plugin.
