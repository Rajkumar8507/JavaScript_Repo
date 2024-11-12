function marks(event) {
    event.preventDefault(); 

    
    let s1 = parseInt(document.getElementById("s1").value);
    let s2 = parseInt(document.getElementById("s2").value);
    let s3 = parseInt(document.getElementById("s3").value);
    let s4 = parseInt(document.getElementById("s4").value);
    let s5 = parseInt(document.getElementById("s5").value);
    let s6 = parseInt(document.getElementById("s6").value);

    
    let l1 = document.getElementById("l1").textContent;
    let l2 = document.getElementById("l2").textContent;
    let l3 = document.getElementById("l3").textContent;
    let l4 = document.getElementById("l4").textContent;
    let l5 = document.getElementById("l5").textContent;
    let l6 = document.getElementById("l6").textContent;
    let Total=s1+s2+s3+s4+s5+s6;
    function PF(){
    if(s1>=35&&s2>=35&&s3>=35&&s4>=35&&s5>=35&&s6>=35)
        {
            return `Passed`;
        }
             else{
                return `Failed`;
            }
        }
    let table = `
        <table border="1">
            <thead>
                <tr>
                    <th>SubName</th>
                    <th>Marks Obtained</th>
                    <th>Pass/Fail</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>${l1}</td><td>${s1}</td><td>${s1 >= 35 ? 'Pass' : 'Fail'}</td></tr>
                <tr><td>${l2}</td><td>${s2}</td><td>${s2 >= 35 ? 'Pass' : 'Fail'}</td></tr>
                <tr><td>${l3}</td><td>${s3}</td><td>${s3 >= 35 ? 'Pass' : 'Fail'}</td></tr>
                <tr><td>${l4}</td><td>${s4}</td><td>${s4 >= 35 ? 'Pass' : 'Fail'}</td></tr>
                <tr><td>${l5}</td><td>${s5}</td><td>${s5 >= 35 ? 'Pass' : 'Fail'}</td></tr>
                <tr><td>${l6}</td><td>${s6}</td><td>${s6 >= 35 ? 'Pass' : 'Fail'}</td></tr>
                <tr><td>TOTAL</td><td>${Total}</td><td>'${PF()}'</td></tr>
            </tbody>
        </table>
    `;

    
    document.getElementById("result").innerHTML = table;
}
 