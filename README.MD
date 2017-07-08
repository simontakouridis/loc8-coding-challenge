# Loc8 Coding Challenge

Submission Criteria
Please read the following submission criteria carefully before starting work on the problem.
Keep in mind that the solution is not the only aspect of your code we will be looking for. While we understand that this is a relatively small problem, we expect object-oriented, production quality code that is runnable, testable, extendable and reusable. You do not need to gold-plate your solution, however you should keep in mind potential extensions when designing and developing the solution.

Requirement:

Develop an application to display polygons on map. Example attached.
The app should also have a list control to toggle the visibility of each polygon.


Solution Instructions:

This solution to the Loc8 challenge utlises AngularJS along with ng-map and webpack. The assumptions made are the markers and polygons are static and non-clickable, furthermore the polygon opacities are static. Another assumption made was that the <shape> element as a part of ng-map is non-compatible with ng-repeat, as such a custom directive was implemented in order to re-use this element. To run the program, please unzip the file, npm install using the package.json and then run npm start.
