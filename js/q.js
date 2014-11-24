

var quote = new Array(10);

quote[0] = "<FONT face=ARIAL size=6 color=green><B>ONE RANDOM QUOTE</B></FONT>";

quote[1] = "<FONT face=ARIAL size=6 color=green><B>TWO RANDOM QUOTE</B></FONT>";

quote[2] = "<FONT face=ARIAL size=6 color=green><B>THREE RANDOM QUOTE</B></FONT>";

quote[3] = "<FONT face=ARIAL size=6 color=green><B>FOUR RANDOM QUOTE</B></FONT>";

quote[4] = "<FONT face=ARIAL size=6 color=green><B>FIVE RANDOM QUOTE</B></FONT>";

quote[5] = "<FONT face=ARIAL size=6 color=green><B>SIX RANDOM QUOTE</B></FONT>";

quote[6] = "<FONT face=ARIAL size=6 color=green><B>SEVEN RANDOM QUOTE</B></FONT>";

quote[7] = "<FONT face=ARIAL size=6 color=green><B>EIGHT RANDOM QUOTE</B></FONT>";

quote[8] = "<FONT face=ARIAL size=6 color=green><B>NINE RANDOM QUOTE</B></FONT>";

quote[9] = "<FONT face=ARIAL size=6 color=green><B>TEN RANDOM QUOTE</B></FONT>";

now=new Date()

num=(now.getSeconds())%9

document.write(quote[num])