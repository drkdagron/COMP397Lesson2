module objects {
    export class Label extends createjs.Text {
        constructor(labelString: string, labelFont: string, labelColor: string, xPos: number, yPos: number) {
            super(labelString, labelFont, labelColor);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = xPos;
            this.y = yPos;
        }
    }
}