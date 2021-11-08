// Select first image in the document and display the value of the src of the image.​
  
    let image=document.body.getElementsByTagName('img')[0].src;
    console.log("result:"+image);

 
// Remove the first paragraph element from the document​

    const p1=document.body.getElementsByTagName('p')[0];
    p1.style.backgroundColor="rgb(225,0,0)";
    p1.remove();
    console.log("resultA:"+p1);
 
// Display the number of times div tag is used in the webpage​

    let division = document.getElementsByTagName("div")[0];
    console.log("result2:"+division);
 
// Select the element having primaryText as ​the id and display the content in it.​
 
    let element=document.getElementById('content');
    console.log("result3:"+element);








