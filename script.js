function shortcut(s1, s2) {
  // your code here
	if(s1.length===0 || s2.length ===0) console.log("");
	else console.log(s1[0]+""+s2[0])
}


const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
