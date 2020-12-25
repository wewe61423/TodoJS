var submitBtn = document.getElementById('submit-btn');
var result = document.getElementById('result');
submitBtn.addEventListener('click', function(e) {
    var todoInput = document.getElementById('todo-input').value; 
    //var todoInput 此宣告放在 function 外，會無法順利執行
    console.log(todoInput);
    if(todoInput !== ''){
        var todo = document.createElement('LI');
        todo.innerHTML = todoInput + '<button>刪除</button>' ;
        result.appendChild(todo); //把 todo 的值塞進去
        document.getElementById('todo-input').value =''; //每一次送出之後，輸入欄位的地方就會清空
    } else {
        alert('請輸入值～');
    }
});

result.addEventListener('click',function(event){
    console.log(event.target); //點擊的目標-->刪除的 button
    console.log(event.target.parentNode); //目標的位置--> 某<li>項目
    console.log(event.target.parentNode.parentNode); //目標的父層（上一層）-->某<li>的上層：<ul>
    event.target.parentNode.parentNode.removeChild(event.target.parentNode); //從父層刪除指定的子層
});