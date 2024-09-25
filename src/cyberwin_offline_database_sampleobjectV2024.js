/*
未来之窗 client db v1
*/
var CyberWin_MS=function(table , dbname){
    var database_name=dbname;
	var table=table;
	var sql_p="";
	var sql_v="";
	var condition="";

	console.log(dbname);

	this.database_name=dbname;
	this.table=table;

	this.condition="";//2024-7-17 默认值
	  

	this.test=function() {
		console.log("测试"+database);
	}

	this.createTable=function() {
	

	}

this.insert = function () {
		 
}

this.query = function (sql,callback) {
	 	var 未来之窗数据库=this.database_name+"AAAA"+this.table;
}




this.update = function (id, name) {
	 
}
this.del = function (id) {
	 
}

	this.dropTable = function () {
	 
	}


		//
	this.exec=function(sql,callback) {
	 
	}

	//
	this.add = function(cyberobj,callback){
		
		//console.log(cyberobj);
		//JSON.stringify(obj);
		var 未来之窗数据库=this.database_name+"AAAA"+this.table;
		window.localStorage.setItem(`${未来之窗数据库}`, JSON.stringify(cyberobj));
		/*
		//console.log(typeof cyberarray);
		// console.log("add结果："+cyberobj.length);
		sql_p="insert into "+table +"(";
		sql_v="values ( ";
		
		for(var key in cyberobj){
		  //int32View[i] = i*2;
		   console.log(key);
		   console.log(cyberobj[key]);

		   sql_p=sql_p+key+"  ,"

		   sql_v=sql_v+"'"+cyberobj[key]+"',"
		}
		sql_v = sql_v.substring(0,sql_v.length-1);
		sql_p = sql_p.substring(0,sql_p.length-1);
		sql_v=sql_v +")";
		sql_p=sql_p +")";

		var sql=sql_p+sql_v;

		//console.log(sql_p);
		//console.log(sql_v);
		//console.log(sql);

		dataBase.transaction(function (tx) {
		tx.executeSql(sql,[],
		function () { 
			//alert('添加数据成功'); 
			 callback(true);
		},
		function (tx, error) {
			//alert('添加数据失败: ' + error.message);
			 callback(error.message);
		} );
		});
		*/


	}

	 



	this.where = function (cyberobj){
		var where_str="";
		if(typeof(cyberobj)=='string'){
			this.condition=cyberobj;
			return ;
		
		}
		for(var key in cyberobj){
		  //int32View[i] = i*2;
		  

		   sql_p=sql_p+key+"  ,"

		   where_str=where_str+""+key+" = '"+cyberobj[key]+"',";
		}
		this.condition=where_str;

   }

   //
   this.find = function (callback,匹配模式,匹配数量) {
	   console.clear();
  // console.log("未来之窗数据库解码");
   //  console.log(this.condition);
	 var 未来之窗数据库_条件_解码 =  this._parseCondition(this.condition);
	 
	  //console.log(未来之窗数据库_条件_解码);

	  var 未来之窗数据库=this.database_name+"AAAA"+this.table;
	  var 未来之窗数据库数据str =	window.localStorage.getItem(`${未来之窗数据库}`);

	  未来之窗数据库数据 = eval("(" + 未来之窗数据库数据str + ")");

	   //console.log("未来之窗数据库数据");
        //console.log(未来之窗数据库数据);
	  //空值查询
	  console.log("============空值查询=============");
	  console.log(未来之窗数据库_条件_解码);
	  console.log("condition="+this.condition);
	   console.log(未来之窗数据库数据);
	   console.log("匹配模式==>"+匹配模式);
	    console.log("匹配数量==>"+匹配数量);

	  console.log("============空值查询=============");
	  if(未来之窗数据库_条件_解码 ==""){
		  console.log("空值查询");
		  if(typeof callback === "function"){ // 如果传入的参数func是函数
			//2024-7-16 
		      callback("wlzc", 未来之窗符合条件数据);
	       }
		  return 未来之窗数据库数据;

	  }
 
	  
	   //  callback(tx, error);
	    const 未来之窗符合条件数据 = [];
		if(匹配模式 == "and"){
			
			for (const dataone_and of 未来之窗数据库数据) {
				//field, operator, value
				    var 已经匹配数量 = 0;
					for (const cond条件 of 未来之窗数据库_条件_解码) {
						//console.log("未来之窗数据库数据-AND==>"+dataone_and.field+ " operator="+dataone_and.operator+" value="+dataone_and.value);
						console.log("未来之窗数据库数据-AND==>"+cond条件.field+ " operator="+cond条件.operator+" value="+cond条件.value);
						if(dataone_and[cond条件.field]){
						
							var 巡逻数值 =""+dataone_and[cond条件.field];

						   console.log("未来之窗数据库数据=巡逻数值AND=>"+巡逻数值);
						   if(巡逻数值.includes(cond条件.value)==true){
								console.log("存在符合AND=>"+cond条件.field);
								//未来之窗符合条件数据.push(dataone);

								//2024-8-25 直接中断，当找到数据时候
								//break;
								已经匹配数量 = 已经匹配数量 +1;

						   }else{
								console.log("存在不符合AND=>"+cond条件.field+",查找；"+cond条件.value);
						   }

						}else{
							 console.log("不存在这个AND=>"+dataone_and.field);
						}
					}

					console.log("匹配数量要求==>"+匹配数量+" ,已经匹配数量="+已经匹配数量);
					if(匹配数量 == 已经匹配数量){
						未来之窗符合条件数据.push(dataone_and);
					}

			}
			 

		}else{
			for (const dataone of 未来之窗数据库数据) {

				//console.log("dataone=巡逻数值=>");
				//console.log(dataone);

				for (const cond条件 of 未来之窗数据库_条件_解码) {

					//field, operator, value
					console.log("未来之窗数据库数据==>"+cond条件.field+ " operator="+cond条件.operator+" value="+cond条件.value);

					

					

					if(dataone[cond条件.field]){
					
						var 巡逻数值 =""+dataone[cond条件.field];

					   console.log("未来之窗数据库数据=巡逻数值=>"+巡逻数值);
					   if(巡逻数值.includes(cond条件.value)==true){
							console.log("存在符合=>"+cond条件.field);
							未来之窗符合条件数据.push(dataone);

							//2024-8-25 直接中断，当找到数据时候
							break;

					   }else{
							console.log("存在不符合=>"+cond条件.field+",查找；"+cond条件.value);
					   }

					}else{
						 console.log("不存在这个=>"+cond条件.field);
					}


			   }

			}
			//and 条件
     }

		

		
		if(typeof callback === "function"){ // 如果传入的参数func是函数
			//2024-7-16 
		  callback("wlzc", 未来之窗符合条件数据);
	   }

		return 未来之窗符合条件数据;
	 
}

  this.delete = function (callback) {
 
  }


   this._parseCondition = function (whereClause) {

	   whereClause=""+whereClause;

	    if(whereClause == ""){
			//2024-7-17 判定无条件
			return "";
		}
	     
          // 去除前后空格
		  whereClause = whereClause.trim();

		  // 按逻辑运算符分割
		  const conditions = whereClause.split(/\s*(AND|OR)\s*/gi);

		 // console.log("未来之窗数据库解码conditions====");
		//	console.log(conditions);


		  const parsedConditions = [];

		  for (const condition of conditions) {
			// 提取字段名和操作符
			//const match = condition.match(/(\w+)\s*([=<>!]+)\s*(\w+)/);
		  //const match = condition.match(/(\w+)\s*([=<>!|like]+)\s*(\w+)/);
		   //	const match = condition.match(/(\w+)\s*([=<>!|like]+)\s*(\w+)/);
			///^[\w\u4e00-\u9fff]+$/  中文操作
			//const match = condition.match(/(\w+)\s*([=<>!|like]+)\s*([\w\u4e00-\u9fff]+)/);
			//2024-09-35

			/*
			处理 
			var 商品id ="5C0881E7-B95A-4FD6-902D-F19D4C117FEF";
	//"5C0881E7"
			*/
			const match = condition.match(/(\w+)\s*([=<>!|like]+)\s*([\-\w\u4e00-\u9fff]+)/);

		//	console.log("未来之窗数据库解码condition");
			//console.log(condition);

			if (match) {
			  const field = match[1];
			  const operator = match[2];
			  const value = match[3];

			  parsedConditions.push({ field, operator, value });
			}
		  }

		  return parsedConditions;
  }

 

}
