class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.title2 = createElement('h3');

       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(140, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'beige');
        this.title.style('background', 'crimson');
        this.input.position(310,260);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(315,290);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'crimson');
        this.button.style('color', 'white');
        this.reset.position(815-100, 15);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'crimson');
        this.reset.style('color', 'white');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(250,180);
            this.greeting.style('color', 'crimson');
            this.greeting.style('background', 'white');
            this.greeting.style('font-size', '60px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            this.title2.style('background', 'crimson');
            this.title2.style('color', 'white');
            this.title2.html("Also refresh the page or press Ctrl + R");
            this.title2.style('font-size', '30px');
            this.title2.position(200,150);


        });

    }
}