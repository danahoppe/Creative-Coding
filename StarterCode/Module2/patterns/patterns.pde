//Welcome to Creative Coding!
//Change numbers to figure out what the variables do.

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

//Declare color variables
color colo1;
color colo2;
color colo3;
color colo4;
color colo5;
//Create a list to hold the colors
ArrayList<Integer> colors = new ArrayList<Integer>();

//This function runs when the program first starts
void setup() {
	size(1200, 1400);
  colorMode(HSB,360,100,100,100);
  background(360,360,360);

	
	//Set the value to each color variable
	colo1 = color(102,102,255);
	colo2 = color(214,56,38);
	colo3 = color(0,102,102);
	colo4 = color(13,128,156);
	colo5 = color(21,42,59);
	
	//Store the colors in the list
	colors.add(colo1);
  colors.add(colo2);
  colors.add(colo3);
  colors.add(colo4);
  colors.add(colo5);
}

void draw() {
	
	//Ensures the function only runs one time
	noLoop();
	
	//Controls the amount of individual tiles 
	int incr = 200;
	
	//Double for-loop covers coordinates of entire canvas
	for(int i = 0; i < 800; i += incr){
		for(int j = 0; j < 800; j += incr){
			
			//Randomizes the list of colors
			Collections.shuffle(colors);
			//no outline for shapes
			noStroke();
			
			//picks the first color from the list
			fill(colors.get(0));
			//creates a square at given spot
			rect(i,j, incr, incr);
			//picks the second color from the list
			fill(colors.get(1));
			
			
			switch(round(random(1, 2))) {						 
					case 1: triangle(i, j, i + incr, j, i + incr, j + incr); break;
					case 2: triangle(i + incr, j + incr, i + incr, j, i, j + incr); break;
			}
		}
	}
}
