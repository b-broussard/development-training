/**
 * This 7 kyu kata is a fun and simple conditional puzzle which had 
 * a whopping 115 test cases, some of which appear to be random.
 * The kata can be viewed here: shorturl.at/tCDEF
 */

function zombie_shootout(zombies, range, ammo) {
  let zombiesShot = ammo / range * 0.5
  let remainingZombies = zombies - range * 2 
  
  if (ammo < zombies - zombiesShot && range * 2 > ammo) {
    return "You shot " + ammo + " zombies before being eaten: ran out of ammo."
  } else if (remainingZombies > 0) {
    return "You shot " + (range * 2) + " zombies before being eaten: overwhelmed."
  } else {
    return "You shot all " + zombies + " zombies."
  }
}