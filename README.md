## Exploratory Project

I want to make a game that's kind of like a tank game in a maze. It requires 2 players to play, and the tanks can be controlled by the WASD or arrow keys. To include physics, I want to give 2 abilities that the players can choose from: the first ability makes a wind force that goes outwards from the player's position (this wind will only affect bullets, not maze walls or anything else), and the second ability creates a strong attraction force around the player's bullet. Whenever the ability is used, the tank cannot use it again for 10 seconds. Also, the map will not be randomly generated. The bullets can reflect off the maze walls up to 5 times before having a particle explosion. At the same time, if one of the tanks is hit, whether by an enemy bullet or from their own, the tank will have a particle explosion, and the game will be replaced by a screen that says "Player [number] wins!"

# Code Requirements
**Necessary Classes:**
* Tank: Player controlled tanks, where one is assigned to the WASD keys, and the other to the arrow keys. Should have the firing controls.
* Bullet: Since I'm turning on friendly fire (your own bullets can hit you), this class will only need to detect collisions against the players. It should also have the reactions to being pushed or reflecting off the wall.
* Game: Controls any timers, collisions and collision effects, and the win screen.
  * Particles will be created on collision

**Code examples:**
* Movement must be classified to (WASD to Player 1 and arrow keys to Player 2 only)
* **Abilities**: Wind push and bullet attraction will be using physics code, and a timer will control when the ability can be used for each respective player.
* Bullet movement and interactions:
  * Bullet travels in a straight line
  * Bullet reflects off walls and explodes on 5th collision or on tank hit
  * Bullet does position tracking and can be affected by wind or attraction during movement
* Game win screen
