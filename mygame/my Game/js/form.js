class Form { 

    constructor(){
     this.button = createButton("cop");  
     this.button2 = createButton("rober");
     this.title = createElement('h2');
     this.greeting = createElement('h1');
    }

    hide(){
      this.button.hide();
      this.button2.hide();
      this.title.hide();
      this.greeting.hide();
    }

    display(){
      player=new Player();
      
      this.title.html("cop and rober");
      this.title.position(displayWidth/2-30,0)

      this.button.position(displayWidth/2-40,displayHeight/2);
      this.button2.position(displayWidth/2+40,displayHeight/2);

        this.button.mousePressed(()=>{
        this.title.hide();
        this.button.hide();
        this.button2.hide();
        this.greeting.html("hello there cop");
        this.greeting.position(displayWidth/2-100,displayHeight/2-100);
        playerCount++;
        player.updateCount(playerCount);
        })
        
        this.button2.mousePressed(()=>{
          this.title.hide();
          this.button.hide();
          this.button2.hide();
          this.greeting.html("hello there rober");
          this.greeting.position(displayWidth/2-100,displayHeight/2-100);
          playerCount++;
          player.updateCount(playerCount);
          })
      
      
    }

}