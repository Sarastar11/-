let pname = prompt("من فضلك ادخل اسم المنتج");
document.getElementById("pname").innerHTML = pname + " :اسم المنتج";

let cost = parseFloat(prompt("من فضلك ادخل تكلفة المنتج"));
document.getElementById("cost").innerHTML = cost + "  :تكلفة المنتج";

let profit = parseFloat(prompt("من فضلك ادخل نسبة الربح المرغوب فيه"));
document.getElementById("profit").innerHTML = profit + "  :قيمةالربح";

//  let taxes = parseFloat(prompt("من فضلك ادخل نسبة الضريبة"));


let price = cost + profit;

let taxes = 0.10 * price;
document.getElementById("taxes").innerHTML = taxes + "  :نسبة الضرايب";

let total = taxes + price;
document.getElementById("total").innerHTML = total + "   :سعر البيع للعميل بعد اضافة الضرائب";

function refresh() {
    window.location.reload();
    
    
}