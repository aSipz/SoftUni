function demons(input) {
    let demonsArray = input.split(/ *, */).filter(a => !a.includes(' '));
    let healthPattern = /[^0-9+\-*/\.]/g;
    let digitPattern = /[+-]?[0-9]+\.?[0-9]*/g;
    let demons = {};
    for (const demon of demonsArray) {
        let health = 0;
        let damage = 0;
        let healthArray = demon.match(healthPattern);
        let damageArray = demon.match(digitPattern);
        if (healthArray) {
            healthArray.forEach(char => {
                health += char.charCodeAt();
            });
        }
        if (damageArray) {
            damageArray.forEach(num => {
                damage += Number(num);
            });
        }
        for (const char of demon) {
            if (char == '*') {
                damage *= 2;
            } else if (char == '/') {
                damage /= 2;
            }
        }
        if (health > 0) {
            demons[demon] = { health, damage }
        }
    }
    let sortedDemons = Object.entries(demons).sort(([keyA], [keyB]) => keyA.localeCompare(keyB) || keyA - keyB);
    for (const [name, stats] of sortedDemons) {
        console.log(`${name} - ${stats.health} health, ${stats.damage.toFixed(2)} damage`);
    }
}
demons('M++3.0--ph-+1+-st+-0**, Azazel');
