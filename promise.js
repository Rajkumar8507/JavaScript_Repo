function createpromise(){
let mypromise=new Promise(function(resolve,reject)
{
    resolve(100);
    
});
return mypromise;
}
createpromise().then(
    function solve(slv)
{
    console.log(slv);
},
    function error(err)
{
   console.log(err)
}
)