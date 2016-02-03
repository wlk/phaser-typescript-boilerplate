/// <reference path="../lib/phaser.d.ts"/>
class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image("logo", "images/phaser-logo-small.png");
    }

    create() {
        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.3, 0.5);
    }

}

window.onload = () => {

    let game = new SimpleGame();

};
