// JavaScript source code
function RironCsharp(event) {

    //各要素を取得
    let area = document.getElementById("area");
    let input = area.querySelector("input[name=input]");
    let pass = area.querySelector("input[name=pass]");

    //user name とpassを認証
    if (input.value == "nfwdekitaka" && pass.value == "nfw4103") {
        //location.href = "D:/10_VisulalStudio/14_HTML/06_Mokuji/CSharpGrammerMokuji/CSharpGrammerMokuji/HTMLPage_CSharpGrammerMokuji.html";
        location.href = "HTMLPage_Command.html";
    }
}