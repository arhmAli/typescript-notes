<h1>TypeScript Crash course by arham khan &#x2764;</h1>

<h2>Dynamically Typed Language</h2>

<p>It is a dynamically typed language.</p>

<p>We have to explicitly tell the type of data, for example:</p>

<pre>
<code>let firstValue:number=5;</code>
</pre>

<p>We can also give a type to one variable to another, for example:</p>

<pre>
<code>let someVar=10;
let newVar:someVar=123;</code>
</pre>

<p>This will check the type of data stored in <code>someVar</code> and then assign that to <code>newVar</code>.</p>

<h2>ANY Type</h2>

<p>The following example will take any type and convert it into the specified type:</p>

<pre>
<code>let something:any=100;
let anotherOne=something as number;</code>
<em>OR</em>
<code>let anotherOne=&lt;number&gt;something;</code>
</pre>

<h2>Arrays</h2>

<p>We can declare arrays with a specific type:</p>

<pre>
<code>let arr:string[]=["hello","world","string_type"];</code>
<em>OR</em>
<code>let arr:Array&lt;string&gt;=["hello","world","string_type"];</code>
</pre>

<h2>Tuples</h2>

<p>Tuples hold multiple data just like arrays, but they can have different types of data:</p>

<pre>
<code>let tup:[string,string,number]=["typescript","learning",10];</code>
</pre>

<p>We can also make an array of tuples:</p>

<pre>
<code>let arrOfTup:[number,string][]=[[5,"bannaa"],[10,"apples"]];</code>
</pre>

<h2>Functions</h2>

<p>We can declare the inputs and specify the type of outputs needed as a return from the function:</p>

<pre>
<code>function sum(firstNum:number,secNum:number):number{
  return firstNum+secNum;
}</code>
</pre>

<p>If we don't want to return anything from a function, we can use <code>void</code>:</p>

<pre>
<code>function noReturn(firstNum:number,secNum:number):void{
  //this shouldn't return anything
}</code>
</pre>

<h2>ENUM</h2>

<p>This allows us to declare constants with numeric or string values:</p>

<pre>
<code>enum bookCategories{
  history, // by default it is given 0
  numOfBooks, // by default it is given 1
  numOfShelves // by default it is given 2
}</code>
</pre>

<p>We can also specify the numbers in the enum:</p>

<pre>
<code>enum meatStock{
  chicken=100,
  mutton=20,
  beef // NOTICE THAT BEEF DOES NOT HAVE ANY VALUE, SO IT WILL OBTAIN THE NEXT INDEX OF THE PREVIOUSLY DEFINED VALUE, IN THIS CASE 21
}</code>
</pre>

<p>We can also make combinations of strings and numbers in an enum without any problems.</p>

<h2>INTERFACE</h2>

<p>This defines a specific structure for an object:</p>

<pre>
<code>interface videoRequest{
  id:number,
  title:string,
  comments:string,
  likes:number,
  dislikes?:number, // The ? indicates that it can either have dislikes or not
  readonly username:string // This indicates that it can only be assigned when initialized
}</code>
</pre>
