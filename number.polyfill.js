/*
Usage:
    var foo = 34
    foo.isPositive() returns true

    var bar = -223
    bar.isPositive() returns false
*/

/* First, check if functionality already exists */
if(typeof Number.prototype.isPositive === 'undefined')
{
    /* Extend the Number's type funcionality using standard syntax
       to make sure it will be available across all the browsers */
    Number.prototype.isPositive = function(){ return this.valueOf() > 0 }
}