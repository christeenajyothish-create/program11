function addnote(){
    let text=document.getElementById("note").value;
    if(text=="")return alert("enter a note.");
    let note=document.createElement("div");
    note.className="note";
    note.innerHTML=
    "<span>"+text+"</span>"+
    '<button onclick="deletenote(this)">delete</button>'+
    '<button onclick="editnote(this)">edit</button>';
    document.getElementById("notes").appendChild(note);
    document.getElementById("note").value="";
}
function editnote(btn){
    let span=btn.parentElement.querySelector("span");
    let text=prompt("edit note:",span.textContent);
    if(text)span.textContent=text;
}
function deletenote(btn){
    btn.parentElement.remove();
}