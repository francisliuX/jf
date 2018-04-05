// JavaScript Document
// JavaScript Document
function prod_num_add()
{
	var all_num=parseInt(document.getElementById("prod_all_num").value);
	var prod_num=parseInt(document.getElementById("prod_num").value);
	if((prod_num+1)<all_num)
	{
		prod_num++;
		document.getElementById("prod_num").value=prod_num;
	}
	else
	{
		document.getElementById("prod_num").value=all_num;
	}
	
	prod_price_yn();
}
function prod_num_sub()
{
	var prod_num=parseInt(document.getElementById("prod_num").value);
	if((prod_num-1)>0)
	{
		prod_num--;
		document.getElementById("prod_num").value=prod_num;
	}
	else
	{
		document.getElementById("prod_num").value=1;
	}
	prod_price_yn();
}
 function pices(o,pice_old)
 {
       var pice = o.value.replace(/^[0-9]+$/ ,'');
       if(pice.length>0)
       {
		 alert("抱歉！请您输入正确兑换数量！");
         o.value=pice_old;
       }
}
function prod_num_yn()
{
	var all_num=parseInt(document.getElementById("prod_all_num").value);
	var prod_num=parseInt(document.getElementById("prod_num").value);
	if(prod_num>all_num)
	{
		document.getElementById("prod_num").value=all_num;
		alert("抱歉！您的兑换数量超出现有库存量。");
	}
	else if(prod_num<1)
	{
		document.getElementById("prod_num").value=1;
		alert("抱歉！请您输入正确兑换数量！");
	}
	else
	{
		prod_price_yn()
	}
}
