function openPage(event){
  let get_id = document.getElementById("searchbar").value.toUpperCase();
  let ul = document.getElementById("subMenu1");
  let li = ul.getElementsByTagName('li');
  
  for(var i=0; i<li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      let textValue = a.textContent || a.innerHTML;

      if(get_id === ""){
          li[i].style.display = 'block';
      }
      else if(textValue.toUpperCase().indexOf(get_id) > -1){
          li[i].style.display = 'block';
      }else{
          li[i].style.display = 'none';
      }
  }
}
