class Input{

    constructor() {
      this.SpeedIn = createInput("Speed Number");
      this.WeightIn = createInput("Weight Number");
      this.Next = createButton('Next');
    }
    hide(){
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      this.SpeedIn.position(50,50);
      this.WeightIn.position(50,150);
      this.Next.position(50,250);
  
      this.Next.mousePressed(()=>{
        speed = this.SpeedIn.value();
        weight = this.WeightIn.value();   
        Vel=speed - weight     
      });

    }
  }